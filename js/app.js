/**
 * SpeakUp — Main Application Logic
 * Progress tracking, audio recording, TTS shadow reading, speech recognition
 */

// ─── State ───
let currentDay = 1;
let mediaRecorder = null;
let audioChunks = [];
let recordings = {}; // day -> blob URL
let isRecording = false;
let ttsAudio = null;
let isTTSPlaying = false;

// ─── Init ───
document.addEventListener('DOMContentLoaded', () => {
  loadProgress();
  detectToday();
  renderDayPills();
  renderDay(currentDay);
  setupTabs();
  setupNavigation();
  setupActions();
  updateProgressBar();
});

// ─── Detect which day we're on ───
function detectToday() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const start = new Date(START_DATE);
  start.setHours(0, 0, 0, 0);
  const diff = Math.floor((today - start) / (1000 * 60 * 60 * 24)) + 1;
  if (diff >= 1 && diff <= 18) {
    currentDay = diff;
  } else if (diff > 18) {
    currentDay = 18;
  } else {
    currentDay = 1;
  }
}

// ─── Progress Management (localStorage) ───
function loadProgress() {
  try {
    const saved = localStorage.getItem('speakup_progress');
    if (saved) {
      const data = JSON.parse(saved);
      recordings = {}; // blob URLs don't persist
      return data;
    }
  } catch (e) {}
  return {};
}

function saveProgress(dayNum, done) {
  const progress = loadProgress();
  progress[dayNum] = { done, timestamp: new Date().toISOString() };
  localStorage.setItem('speakup_progress', JSON.stringify(progress));
}

function isDayDone(dayNum) {
  const progress = loadProgress();
  return progress[dayNum]?.done || false;
}

function getCompletedCount() {
  const progress = loadProgress();
  return Object.values(progress).filter(p => p.done).length;
}

// ─── Day Pills ───
function renderDayPills() {
  const container = document.getElementById('dayPills');
  container.innerHTML = '';
  for (let i = 1; i <= 18; i++) {
    const pill = document.createElement('button');
    pill.className = 'day-pill';
    pill.textContent = i;
    if (i === currentDay) pill.classList.add('active');
    if (isDayDone(i)) pill.classList.add('done');
    pill.addEventListener('click', () => {
      currentDay = i;
      renderDayPills();
      renderDay(i);
    });
    container.appendChild(pill);
  }
  // Scroll active pill into view
  setTimeout(() => {
    const active = container.querySelector('.active');
    if (active) active.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, 50);
}

// ─── Navigation ───
function setupNavigation() {
  document.getElementById('prevDay').addEventListener('click', () => {
    if (currentDay > 1) {
      currentDay--;
      renderDayPills();
      renderDay(currentDay);
    }
  });
  document.getElementById('nextDay').addEventListener('click', () => {
    if (currentDay < 18) {
      currentDay++;
      renderDayPills();
      renderDay(currentDay);
    }
  });

  // Swipe support
  let touchStartX = 0;
  const content = document.getElementById('content');
  content.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  content.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 60) {
      if (diff > 0 && currentDay < 18) { currentDay++; }
      else if (diff < 0 && currentDay > 1) { currentDay--; }
      else return;
      renderDayPills();
      renderDay(currentDay);
    }
  }, { passive: true });
}

// ─── Tabs ───
function setupTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(`tab-${tab.dataset.tab}`).classList.add('active');
    });
  });
}

// ─── Render Day Content ───
function renderDay(dayNum) {
  const day = CURRICULUM[dayNum - 1];
  if (!day) return;

  // Title
  document.getElementById('dayTitle').textContent = day.title;

  // Countdown
  const today = new Date();
  const daysLeft = Math.ceil((CAE_DATE - today) / (1000 * 60 * 60 * 24));
  document.getElementById('countdown').textContent =
    daysLeft > 0 ? `CAE 倒计时 ${daysLeft}天` : 'CAE 已开始!';

  // Prosody tab
  const prosodyData = PROSODY[day.prosodyKey];
  if (prosodyData) {
    document.getElementById('prosodyText').innerHTML = renderProsodyHTML(prosodyData.annotated);
    const notesEl = document.getElementById('practiceNotes');
    if (prosodyData.notes && prosodyData.notes.length) {
      notesEl.innerHTML = '<strong>练习要点:</strong><ul>' +
        prosodyData.notes.map(n => `<li>${n}</li>`).join('') + '</ul>';
      notesEl.style.display = 'block';
    } else {
      notesEl.style.display = 'none';
    }
  }

  // Plain text tab
  if (prosodyData) {
    document.getElementById('plainText').innerHTML =
      `<div class="quote">${prosodyData.plain.replace(/\n/g, '<br>')}</div>`;
  }

  // Drill tab
  const drill = DAILY_DRILLS[dayNum - 1];
  const phrase = DAILY_PHRASES[dayNum - 1];
  if (drill) {
    document.getElementById('drillCard').innerHTML = `
      <div class="drill-name">${drill.name}</div>
      <div class="drill-scenario">${drill.scenario}</div>
      <div class="drill-exercise">${drill.exercise}</div>
    `;
  }
  if (phrase) {
    document.getElementById('dailyPhrase').innerHTML = `
      <div class="phrase-label">今日一句 (说5遍)</div>
      <div class="phrase-text">"${phrase}"</div>
    `;
  }

  // Instructions tab
  const instEl = document.getElementById('instructionsText');
  instEl.innerHTML = '<ol>' +
    day.instructions.map(i => `<li>${i}</li>`).join('') +
    '</ol>' +
    `<div class="goal">🎯 目标: ${day.goal}</div>`;

  // Tip banner
  const tip = DAILY_TIPS[dayNum - 1];
  if (tip) {
    document.getElementById('tipBanner').textContent = tip;
    document.getElementById('tipBanner').style.display = 'block';
  }

  // Done button state
  const doneBtn = document.getElementById('doneBtn');
  if (isDayDone(dayNum)) {
    doneBtn.classList.add('completed');
    doneBtn.querySelector('.btn-label').textContent = '已完成';
  } else {
    doneBtn.classList.remove('completed');
    doneBtn.querySelector('.btn-label').textContent = '完成';
  }

  // Play button - check if recording exists
  const playBtn = document.getElementById('playBtn');
  playBtn.disabled = !recordings[dayNum];

  // Update progress bar
  updateProgressBar();

  // Check for pre-generated audio
  updateTTSButton(dayNum);
}

// ─── Prosody HTML Renderer ───
function renderProsodyHTML(text) {
  const lines = text.split('\n');
  return lines.map(line => {
    if (!line.trim()) return '<div class="prosody-line">&nbsp;</div>';

    let html = escapeHTML(line);

    // Replace CAPS words with stress spans (but not single letters like "I")
    html = html.replace(/\b([A-Z]{2,}(?:[-'][A-Z]+)*)\b/g,
      '<span class="stress">$1</span>');

    // Replace /// with long pause
    html = html.replace(/\/\/\//g, '<span class="pause-long">···</span>');

    // Replace // with short pause
    html = html.replace(/\/\//g, '<span class="pause-short">·</span>');

    // Replace ↘ with tone down
    html = html.replace(/↘/g, '<span class="tone-down">↘</span>');

    // Replace ↗ with tone up
    html = html.replace(/↗/g, '<span class="tone-up">↗</span>');

    return `<div class="prosody-line">${html}</div>`;
  }).join('');
}

function escapeHTML(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ─── Progress Bar ───
function updateProgressBar() {
  const completed = getCompletedCount();
  const pct = Math.round((completed / 18) * 100);
  document.getElementById('progressFill').style.width = `${pct}%`;
  document.getElementById('progressLabel').textContent = `${completed}/18 天完成 (${pct}%)`;
}

// ─── Actions: Record, Play, Done ───
function setupActions() {
  // Record button
  document.getElementById('recordBtn').addEventListener('click', toggleRecording);

  // Play button
  document.getElementById('playBtn').addEventListener('click', playRecording);

  // Done button
  document.getElementById('doneBtn').addEventListener('click', () => {
    const done = !isDayDone(currentDay);
    saveProgress(currentDay, done);
    renderDayPills();
    renderDay(currentDay);
  });
}

async function toggleRecording() {
  const btn = document.getElementById('recordBtn');

  if (isRecording) {
    // Stop recording
    mediaRecorder.stop();
    isRecording = false;
    btn.classList.remove('recording');
    btn.querySelector('.btn-icon').textContent = '\u26AB'; // ⚫
    btn.querySelector('.btn-label').textContent = '录音';
    return;
  }

  // Stop TTS if playing (avoid echo interference)
  if (isTTSPlaying) {
    stopTTS();
  }

  // Start recording
  try {
    // Disable echo cancellation & AGC to prevent TTS volume fluctuation
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: false,
        noiseSuppression: false,
        autoGainControl: false,
      }
    });

    // Detect supported audio format (iOS Safari doesn't support webm)
    let mimeType = '';
    if (typeof MediaRecorder.isTypeSupported === 'function') {
      if (MediaRecorder.isTypeSupported('audio/webm;codecs=opus')) {
        mimeType = 'audio/webm;codecs=opus';
      } else if (MediaRecorder.isTypeSupported('audio/webm')) {
        mimeType = 'audio/webm';
      } else if (MediaRecorder.isTypeSupported('audio/mp4')) {
        mimeType = 'audio/mp4';
      } else if (MediaRecorder.isTypeSupported('audio/aac')) {
        mimeType = 'audio/aac';
      }
    }

    const recorderOptions = mimeType ? { mimeType } : {};
    mediaRecorder = new MediaRecorder(stream, recorderOptions);
    audioChunks = [];

    mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) audioChunks.push(e.data);
    };

    mediaRecorder.onstop = () => {
      // Use the actual MIME type from the recorder
      const actualType = mediaRecorder.mimeType || mimeType || 'audio/mp4';
      const blob = new Blob(audioChunks, { type: actualType });
      const url = URL.createObjectURL(blob);
      recordings[currentDay] = url;
      document.getElementById('playBtn').disabled = false;

      // Save recording to IndexedDB for persistence
      saveRecordingToDB(currentDay, blob);

      // Stop all tracks
      stream.getTracks().forEach(t => t.stop());

      // Try speech recognition for comparison
      if (audioChunks.length > 0) {
        runSpeechComparison();
      }
    };

    mediaRecorder.start();
    isRecording = true;
    btn.classList.add('recording');
    btn.querySelector('.btn-icon').textContent = '\u23F9'; // ⏹
    btn.querySelector('.btn-label').textContent = '停止';

  } catch (err) {
    alert('无法访问麦克风。请在浏览器设置中允许麦克风权限。');
  }
}

function playRecording() {
  const url = recordings[currentDay];
  if (!url) return;

  const playBtn = document.getElementById('playBtn');

  // Stop any currently playing recording
  if (window._currentPlayback) {
    window._currentPlayback.pause();
    window._currentPlayback = null;
    playBtn.querySelector('.btn-label').textContent = '回放';
    playBtn.classList.remove('playing-rec');
    return;
  }

  const audio = new Audio();
  audio.src = url;

  audio.onplay = () => {
    playBtn.querySelector('.btn-label').textContent = '停止';
    playBtn.classList.add('playing-rec');
    window._currentPlayback = audio;
  };

  audio.onended = () => {
    playBtn.querySelector('.btn-label').textContent = '回放';
    playBtn.classList.remove('playing-rec');
    window._currentPlayback = null;
  };

  audio.onerror = (e) => {
    console.error('Playback error:', e);
    playBtn.querySelector('.btn-label').textContent = '回放';
    playBtn.classList.remove('playing-rec');
    window._currentPlayback = null;
    // Try alternative approach for iOS
    tryAlternativePlayback(url);
  };

  audio.play().catch(err => {
    console.error('Play failed:', err);
    tryAlternativePlayback(url);
  });
}

function tryAlternativePlayback(url) {
  // iOS Safari sometimes needs the audio element in the DOM
  let audioEl = document.getElementById('hiddenAudio');
  if (!audioEl) {
    audioEl = document.createElement('audio');
    audioEl.id = 'hiddenAudio';
    audioEl.setAttribute('playsinline', '');
    audioEl.setAttribute('controls', '');
    audioEl.style.cssText = 'position:fixed;bottom:80px;left:16px;right:16px;z-index:999;';
    document.body.appendChild(audioEl);
  }
  audioEl.src = url;
  audioEl.style.display = 'block';
  audioEl.play().catch(() => {
    // Show native controls as last resort
    audioEl.style.display = 'block';
  });

  audioEl.onended = () => {
    audioEl.style.display = 'none';
  };
}

// ─── IndexedDB for Recording Persistence ───
function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open('speakup_recordings', 1);
    req.onupgradeneeded = (e) => {
      e.target.result.createObjectStore('recordings');
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function saveRecordingToDB(dayNum, blob) {
  try {
    const db = await openDB();
    const tx = db.transaction('recordings', 'readwrite');
    tx.objectStore('recordings').put(blob, `day_${dayNum}`);
  } catch (e) {
    console.warn('Failed to save recording:', e);
  }
}

async function loadRecordingFromDB(dayNum) {
  try {
    const db = await openDB();
    const tx = db.transaction('recordings', 'readonly');
    return new Promise((resolve, reject) => {
      const req = tx.objectStore('recordings').get(`day_${dayNum}`);
      req.onsuccess = () => {
        if (req.result) {
          const url = URL.createObjectURL(req.result);
          recordings[dayNum] = url;
          resolve(url);
        } else {
          resolve(null);
        }
      };
      req.onerror = () => reject(req.error);
    });
  } catch (e) {
    return null;
  }
}

// Load all saved recordings on init
(async function loadAllRecordings() {
  for (let i = 1; i <= 18; i++) {
    await loadRecordingFromDB(i);
  }
  // Re-render to update play button state
  if (document.getElementById('playBtn')) {
    document.getElementById('playBtn').disabled = !recordings[currentDay];
  }
})();

// ─── TTS Shadow Reading ───
// Uses pre-generated audio files if available, falls back to browser TTS
function updateTTSButton(dayNum) {
  // We'll add a TTS button dynamically in the prosody tab
  let ttsContainer = document.getElementById('ttsControls');
  if (!ttsContainer) {
    ttsContainer = document.createElement('div');
    ttsContainer.id = 'ttsControls';
    ttsContainer.className = 'tts-controls';
    const prosodyTab = document.getElementById('tab-prosody');
    prosodyTab.insertBefore(ttsContainer, prosodyTab.firstChild);
  }

  const day = CURRICULUM[dayNum - 1];
  const prosodyData = PROSODY[day.prosodyKey];
  if (!prosodyData) {
    ttsContainer.innerHTML = '';
    return;
  }

  ttsContainer.innerHTML = `
    <div class="tts-bar">
      <button class="tts-btn" id="ttsPlayBtn" title="影子跟读 - 整段播放">
        <span class="tts-icon">🔊</span>
        <span>影子跟读</span>
      </button>
      <button class="tts-btn tts-btn-secondary" id="ttsSentenceBtn" title="逐句模式 - 播一句停一句">
        <span class="tts-icon">📖</span>
        <span>逐句</span>
      </button>
      <div class="tts-speed">
        <button class="speed-btn ${getTTSRate() === 0.7 ? 'active' : ''}" data-rate="0.7">慢</button>
        <button class="speed-btn ${getTTSRate() === 0.85 ? 'active' : ''}" data-rate="0.85">中</button>
        <button class="speed-btn ${getTTSRate() === 1.0 ? 'active' : ''}" data-rate="1.0">快</button>
      </div>
    </div>
  `;

  // TTS play button (full playback)
  document.getElementById('ttsPlayBtn').addEventListener('click', () => {
    toggleTTS(prosodyData.plain);
  });

  // Sentence-by-sentence mode
  document.getElementById('ttsSentenceBtn').addEventListener('click', () => {
    toggleSentenceTTS(prosodyData.plain);
  });

  // Speed buttons
  ttsContainer.querySelectorAll('.speed-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const rate = parseFloat(btn.dataset.rate);
      setTTSRate(rate);
      ttsContainer.querySelectorAll('.speed-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      // If already playing, restart with new speed
      if (isTTSPlaying) {
        stopTTS();
        setTimeout(() => toggleTTS(prosodyData.plain), 100);
      }
    });
  });
}

function getTTSRate() {
  return parseFloat(localStorage.getItem('speakup_tts_rate') || '0.85');
}

function setTTSRate(rate) {
  localStorage.setItem('speakup_tts_rate', String(rate));
}

function toggleTTS(text) {
  if (isTTSPlaying) {
    stopTTS();
    return;
  }

  // Try pre-generated audio first
  const day = CURRICULUM[currentDay - 1];
  const audioPath = `./audio/${day.prosodyKey}.mp3`;

  // Check if audio file exists by trying to fetch it
  const audio = new Audio(audioPath);
  audio.playbackRate = getTTSRate();

  audio.addEventListener('canplaythrough', () => {
    // Pre-generated audio exists, use it
    ttsAudio = audio;
    isTTSPlaying = true;
    updateTTSButtonState(true);
    audio.play();
  }, { once: true });

  audio.addEventListener('error', () => {
    // No pre-generated audio, fall back to browser TTS
    playBrowserTTS(text);
  }, { once: true });

  audio.addEventListener('ended', () => {
    isTTSPlaying = false;
    updateTTSButtonState(false);
  });

  // Set a timeout - if audio doesn't load in 1 second, use browser TTS
  setTimeout(() => {
    if (!isTTSPlaying) {
      playBrowserTTS(text);
    }
  }, 1000);
}

function playBrowserTTS(text) {
  if (!('speechSynthesis' in window)) {
    alert('你的浏览器不支持语音合成。请使用 Chrome 或 Safari。');
    return;
  }

  // Cancel any existing speech
  speechSynthesis.cancel();

  // Split text into sentences for better TTS handling
  const sentences = text.split(/(?<=[.!?])\s+/).filter(s => s.trim());

  let currentSentence = 0;
  isTTSPlaying = true;
  updateTTSButtonState(true);

  function speakNext() {
    if (currentSentence >= sentences.length || !isTTSPlaying) {
      isTTSPlaying = false;
      updateTTSButtonState(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(sentences[currentSentence]);
    utterance.rate = getTTSRate();
    utterance.pitch = 1.0;
    utterance.lang = 'en-US';

    // Try to find a good English voice
    const voices = speechSynthesis.getVoices();
    const preferred = voices.find(v =>
      v.name.includes('Samantha') || // macOS/iOS
      v.name.includes('Karen') ||
      v.name.includes('Google US English') ||
      (v.lang === 'en-US' && v.name.includes('Female'))
    ) || voices.find(v => v.lang.startsWith('en-'));

    if (preferred) utterance.voice = preferred;

    utterance.onend = () => {
      currentSentence++;
      speakNext();
    };

    utterance.onerror = () => {
      currentSentence++;
      speakNext();
    };

    speechSynthesis.speak(utterance);
  }

  // Ensure voices are loaded
  if (speechSynthesis.getVoices().length === 0) {
    speechSynthesis.addEventListener('voiceschanged', speakNext, { once: true });
  } else {
    speakNext();
  }
}

function stopTTS() {
  isTTSPlaying = false;
  if (ttsAudio) {
    ttsAudio.pause();
    ttsAudio.currentTime = 0;
    ttsAudio = null;
  }
  if ('speechSynthesis' in window) {
    speechSynthesis.cancel();
  }
  updateTTSButtonState(false);
}

function updateTTSButtonState(playing) {
  const btn = document.getElementById('ttsPlayBtn');
  if (!btn) return;
  if (playing) {
    btn.innerHTML = '<span class="tts-icon">⏹</span><span>停止</span>';
    btn.classList.add('playing');
  } else {
    btn.innerHTML = '<span class="tts-icon">🔊</span><span>影子跟读</span>';
    btn.classList.remove('playing');
  }
}

// ─── Sentence-by-Sentence TTS ───
// Plays one sentence, waits for user to tap "next", then plays the next
let sentenceMode = { active: false, sentences: [], index: 0 };

function toggleSentenceTTS(text) {
  if (sentenceMode.active) {
    sentenceMode.active = false;
    stopTTS();
    removeSentenceUI();
    return;
  }

  const sentences = text.split(/(?<=[.!?])\s+/).filter(s => s.trim());
  if (!sentences.length) return;

  sentenceMode = { active: true, sentences, index: 0 };
  showSentenceUI();
  playSentence(0);
}

function showSentenceUI() {
  let ui = document.getElementById('sentenceUI');
  if (!ui) {
    ui = document.createElement('div');
    ui.id = 'sentenceUI';
    ui.className = 'sentence-ui';
    const prosodyTab = document.getElementById('tab-prosody');
    const prosodyText = document.getElementById('prosodyText');
    prosodyTab.insertBefore(ui, prosodyText);
  }
  updateSentenceUI();
}

function updateSentenceUI() {
  const ui = document.getElementById('sentenceUI');
  if (!ui || !sentenceMode.active) return;

  const { sentences, index } = sentenceMode;
  const progress = `${index + 1}/${sentences.length}`;

  ui.innerHTML = `
    <div class="sentence-current">${sentences[index]}</div>
    <div class="sentence-controls">
      <span class="sentence-progress">${progress}</span>
      <button class="sentence-replay" id="sentenceReplay">🔄 再听一遍</button>
      <button class="sentence-next" id="sentenceNext">${index < sentences.length - 1 ? '下一句 ➜' : '✅ 完成'}</button>
    </div>
    <div class="sentence-hint">先听，然后自己说一遍，再点下一句</div>
  `;

  document.getElementById('sentenceReplay').addEventListener('click', () => {
    playSentence(sentenceMode.index);
  });

  document.getElementById('sentenceNext').addEventListener('click', () => {
    if (sentenceMode.index < sentences.length - 1) {
      sentenceMode.index++;
      updateSentenceUI();
      playSentence(sentenceMode.index);
    } else {
      sentenceMode.active = false;
      removeSentenceUI();
    }
  });
}

function playSentence(index) {
  const sentence = sentenceMode.sentences[index];
  if (!sentence) return;

  // Use browser TTS for individual sentences (more responsive than loading audio)
  if ('speechSynthesis' in window) {
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(sentence);
    utterance.rate = getTTSRate();
    utterance.lang = 'en-US';

    const voices = speechSynthesis.getVoices();
    const preferred = voices.find(v =>
      v.name.includes('Samantha') ||
      v.name.includes('Karen') ||
      v.name.includes('Google US English') ||
      (v.lang === 'en-US' && v.name.includes('Female'))
    ) || voices.find(v => v.lang.startsWith('en-'));
    if (preferred) utterance.voice = preferred;

    speechSynthesis.speak(utterance);
  }
}

function removeSentenceUI() {
  const ui = document.getElementById('sentenceUI');
  if (ui) ui.remove();
  stopTTS();
}

// ─── Speech Recognition for Pronunciation Comparison ───
function runSpeechComparison() {
  if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
    return; // Speech recognition not available
  }

  const day = CURRICULUM[currentDay - 1];
  const prosodyData = PROSODY[day.prosodyKey];
  if (!prosodyData) return;

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.continuous = true;
  recognition.interimResults = false;

  // Use the recorded audio blob
  // Note: SpeechRecognition works with microphone, not blobs
  // For offline comparison, we'll do text matching when user records
  // This is triggered after recording stops, showing a simple comparison

  // For now, show a comparison hint in the UI
  showComparisonHint(prosodyData.plain);
}

function showComparisonHint(expectedText) {
  // Add a subtle hint to record and compare
  let hint = document.getElementById('comparisonHint');
  if (!hint) {
    hint = document.createElement('div');
    hint.id = 'comparisonHint';
    hint.className = 'comparison-hint';
    document.getElementById('tab-prosody').appendChild(hint);
  }
  hint.innerHTML = `
    <div class="hint-title">📝 录音已保存</div>
    <div class="hint-text">回放你的录音，对照原文标注版检查：重音是否到位、停顿是否自然、语调是否正确。</div>
    <button class="hint-btn" onclick="startLiveComparison()">🎤 实时对比模式</button>
  `;
  hint.style.display = 'block';
}

// ─── Live Speech Comparison ───
// Records user speech and transcribes in real-time, comparing with expected text
window.startLiveComparison = function() {
  if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
    alert('你的浏览器不支持语音识别。请使用 Chrome。Safari 暂不支持。');
    return;
  }

  const day = CURRICULUM[currentDay - 1];
  const prosodyData = PROSODY[day.prosodyKey];
  if (!prosodyData) return;

  const expected = prosodyData.plain.toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .split(/\s+/)
    .filter(w => w.length > 0);

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.continuous = true;
  recognition.interimResults = true;

  let transcript = '';
  let isListening = true;

  // Show comparison UI
  let compUI = document.getElementById('liveComparison');
  if (!compUI) {
    compUI = document.createElement('div');
    compUI.id = 'liveComparison';
    compUI.className = 'live-comparison';
    document.getElementById('tab-prosody').appendChild(compUI);
  }

  compUI.innerHTML = `
    <div class="comp-header">
      <span class="comp-status recording">🔴 正在听你说...</span>
      <button class="comp-stop" id="stopComparison">停止</button>
    </div>
    <div class="comp-transcript" id="compTranscript">开始说吧...</div>
    <div class="comp-result" id="compResult"></div>
  `;
  compUI.style.display = 'block';

  document.getElementById('stopComparison').addEventListener('click', () => {
    isListening = false;
    recognition.stop();
  });

  recognition.onresult = (event) => {
    let interim = '';
    let final = '';
    for (let i = event.resultIndex; i < event.results.length; i++) {
      if (event.results[i].isFinal) {
        final += event.results[i][0].transcript;
      } else {
        interim += event.results[i][0].transcript;
      }
    }
    if (final) transcript += ' ' + final;
    document.getElementById('compTranscript').innerHTML =
      `<span class="final">${transcript}</span><span class="interim">${interim}</span>`;
  };

  recognition.onend = () => {
    if (isListening) {
      recognition.start(); // Keep listening
      return;
    }

    // Compare
    const spoken = transcript.toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .split(/\s+/)
      .filter(w => w.length > 0);

    const result = compareWords(expected, spoken);
    showComparisonResult(result, expected, spoken);
  };

  recognition.onerror = (e) => {
    if (e.error !== 'no-speech') {
      console.warn('Speech recognition error:', e.error);
    }
  };

  recognition.start();
};

function compareWords(expected, spoken) {
  const matched = [];
  const missed = [];
  const extra = [];

  const spokenSet = new Set(spoken);
  const expectedSet = new Set(expected);

  expected.forEach(word => {
    if (spokenSet.has(word)) {
      matched.push(word);
    } else {
      missed.push(word);
    }
  });

  spoken.forEach(word => {
    if (!expectedSet.has(word)) {
      extra.push(word);
    }
  });

  const accuracy = expected.length > 0
    ? Math.round((matched.length / expected.length) * 100)
    : 0;

  return { matched, missed, extra, accuracy };
}

function showComparisonResult(result, expected, spoken) {
  const el = document.getElementById('compResult');
  if (!el) return;

  const statusEl = document.querySelector('.comp-status');
  if (statusEl) {
    statusEl.className = 'comp-status done';
    statusEl.textContent = '✅ 对比完成';
  }

  let html = `<div class="accuracy">准确率: <strong>${result.accuracy}%</strong></div>`;

  if (result.missed.length > 0) {
    // Only show important missed words (skip common small words)
    const importantMissed = result.missed.filter(w => w.length > 3);
    if (importantMissed.length > 0) {
      html += `<div class="missed-words">
        <span class="label">可能漏掉的关键词:</span>
        ${importantMissed.slice(0, 10).map(w => `<span class="missed-word">${w}</span>`).join(' ')}
      </div>`;
    }
  }

  if (result.accuracy >= 80) {
    html += '<div class="comp-msg good">说得很好！继续练习语调和停顿。</div>';
  } else if (result.accuracy >= 50) {
    html += '<div class="comp-msg ok">不错的开始。多练几遍关键词会更流利。</div>';
  } else {
    html += '<div class="comp-msg needs-work">别灰心，先看着标注版说一遍，再尝试脱稿。</div>';
  }

  el.innerHTML = html;
}

// ─── Add dynamic styles for TTS and comparison ───
const dynamicStyles = document.createElement('style');
dynamicStyles.textContent = `
  .tts-controls {
    margin-bottom: 12px;
  }
  .tts-bar {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: var(--surface);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
  }
  .tts-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 14px;
    border: none;
    background: var(--primary);
    color: white;
    border-radius: 8px;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s;
  }
  .tts-btn-secondary {
    background: #7c3aed;
  }
  .tts-btn:active { transform: scale(0.97); }
  .tts-btn.playing { background: var(--danger); }
  .playing-rec { color: var(--success) !important; }

  .sentence-ui {
    background: linear-gradient(135deg, #ede9fe, #dbeafe);
    border-radius: var(--radius);
    padding: 16px;
    margin-bottom: 12px;
    box-shadow: var(--shadow);
  }
  .sentence-current {
    font-size: 1.05rem;
    font-weight: 600;
    line-height: 1.6;
    margin-bottom: 12px;
    color: var(--text);
  }
  .sentence-controls {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .sentence-progress {
    font-size: 0.75rem;
    color: var(--text-secondary);
    font-weight: 600;
  }
  .sentence-replay, .sentence-next {
    padding: 6px 12px;
    border: none;
    border-radius: 6px;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
  }
  .sentence-replay {
    background: var(--bg);
    color: var(--text-secondary);
  }
  .sentence-next {
    background: var(--primary);
    color: white;
    margin-left: auto;
  }
  .sentence-hint {
    font-size: 0.75rem;
    color: var(--text-secondary);
    margin-top: 8px;
    font-style: italic;
  }
  .tts-icon { font-size: 1rem; }
  .tts-speed {
    display: flex;
    gap: 4px;
    margin-left: auto;
  }
  .speed-btn {
    padding: 4px 10px;
    border: 1px solid var(--border);
    background: var(--bg);
    border-radius: 6px;
    font-size: 0.75rem;
    cursor: pointer;
    color: var(--text-secondary);
    transition: all 0.2s;
  }
  .speed-btn.active {
    background: var(--primary-light);
    border-color: var(--primary);
    color: var(--primary);
    font-weight: 600;
  }

  .comparison-hint {
    display: none;
    margin-top: 12px;
    padding: 12px;
    background: var(--success-light);
    border-radius: var(--radius);
    border-left: 4px solid var(--success);
  }
  .hint-title { font-weight: 700; margin-bottom: 4px; }
  .hint-text { font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 8px; }
  .hint-btn {
    padding: 6px 14px;
    border: none;
    background: var(--primary);
    color: white;
    border-radius: 8px;
    font-size: 0.85rem;
    cursor: pointer;
  }

  .live-comparison {
    display: none;
    margin-top: 12px;
    padding: 12px;
    background: var(--surface);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
  }
  .comp-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  .comp-status { font-size: 0.85rem; font-weight: 600; }
  .comp-status.recording { color: var(--danger); }
  .comp-status.done { color: var(--success); }
  .comp-stop {
    padding: 4px 12px;
    border: 1px solid var(--danger);
    background: var(--danger-light);
    color: var(--danger);
    border-radius: 6px;
    font-size: 0.8rem;
    cursor: pointer;
  }
  .comp-transcript {
    padding: 12px;
    background: var(--bg);
    border-radius: 8px;
    min-height: 60px;
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: 8px;
  }
  .comp-transcript .interim { color: var(--text-secondary); }
  .accuracy {
    font-size: 1.1rem;
    margin-bottom: 8px;
  }
  .accuracy strong {
    color: var(--primary);
  }
  .missed-words {
    margin-bottom: 8px;
  }
  .missed-words .label {
    font-size: 0.8rem;
    color: var(--text-secondary);
    display: block;
    margin-bottom: 4px;
  }
  .missed-word {
    display: inline-block;
    padding: 2px 8px;
    background: var(--danger-light);
    color: var(--danger);
    border-radius: 4px;
    font-size: 0.8rem;
    margin: 2px;
  }
  .comp-msg {
    padding: 8px 12px;
    border-radius: 8px;
    font-size: 0.85rem;
    font-weight: 500;
  }
  .comp-msg.good { background: var(--success-light); color: #065f46; }
  .comp-msg.ok { background: var(--accent-light); color: #92400e; }
  .comp-msg.needs-work { background: var(--primary-light); color: var(--primary); }
`;
document.head.appendChild(dynamicStyles);
