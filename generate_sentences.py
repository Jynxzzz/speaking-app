#!/usr/bin/env python3
"""
Generate per-sentence TTS audio for sentence-by-sentence shadow reading mode.
Uses the same Edge TTS Emma voice as the full scripts.
"""

import asyncio
import re
import edge_tts
from pathlib import Path

VOICE = "en-US-EmmaNeural"
OUTPUT_DIR = Path(__file__).parent / "audio" / "sentences"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

# Import the full scripts from generate_audio.py
from generate_audio import SCRIPTS


def split_sentences(text):
    """Split text into sentences, keeping natural groupings."""
    # Split on sentence-ending punctuation followed by space
    raw = re.split(r'(?<=[.!?])\s+', text)
    # Merge very short fragments with previous sentence
    sentences = []
    for s in raw:
        s = s.strip()
        if not s:
            continue
        if sentences and len(s.split()) < 4:
            sentences[-1] += ' ' + s
        else:
            sentences.append(s)
    return sentences


async def generate_all():
    total = 0
    for key, text in SCRIPTS.items():
        sentences = split_sentences(text)
        print(f"\n{key}: {len(sentences)} sentences")

        for i, sentence in enumerate(sentences):
            output_file = OUTPUT_DIR / f"{key}_{i}.mp3"
            print(f"  [{i}] {sentence[:60]}... ", end="", flush=True)

            communicate = edge_tts.Communicate(sentence, VOICE, rate="-5%")
            await communicate.save(str(output_file))

            size_kb = output_file.stat().st_size / 1024
            print(f"OK ({size_kb:.0f} KB)")
            total += 1

    # Generate a manifest JSON for the JS to know how many sentences per key
    manifest = {}
    for key, text in SCRIPTS.items():
        sentences = split_sentences(text)
        manifest[key] = {
            "count": len(sentences),
            "sentences": sentences,
        }

    import json
    manifest_file = OUTPUT_DIR / "manifest.json"
    with open(manifest_file, "w") as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)

    print(f"\nDone! {total} sentence audio files generated.")
    print(f"Manifest: {manifest_file}")


if __name__ == "__main__":
    asyncio.run(generate_all())
