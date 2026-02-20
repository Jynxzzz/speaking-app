/**
 * SpeakUp — 18-day speaking practice curriculum data
 * Prosody annotations + plain scripts + drills + phrases + tips
 */

const CAE_DATE = new Date(2026, 2, 9); // March 9, 2026
const START_DATE = new Date(2026, 1, 19); // Feb 19, 2026

// ─── Prosody-annotated scripts (for visual display + TTS) ───

const PROSODY = {
  "30s_intro": {
    annotated: `Hi, // I'm XINGNAN. ↘
I'm finishing my PhD // at CONCORDIA University // in Montreal. ↘ ///

My research is about // AUTONOMOUS DRIVING ↘ —
I build AI models // that PREDICT where vehicles will go ↗
and help self-driving cars // UNDERSTAND their surroundings. ↘ ///

During the FIRST THREE YEARS of my PhD, ↗
I also worked with ERICSSON // through a Mitacs fellowship, ↗
where I built // SIMULATION environments // for testing traffic SAFETY. ↘ ///

I'm looking for opportunities // in SIMULATION, ↗ AI, ↗
or AUTONOMOUS SYSTEMS. ↘`,
    plain: `Hi, I'm Xingnan. I'm finishing my PhD at Concordia University in Montreal. My research is about autonomous driving — I build AI models that predict where vehicles will go and help self-driving cars understand their surroundings. During the first three years of my PhD, I also worked with Ericsson through a Mitacs fellowship, where I built simulation environments for testing traffic safety. I'm looking for opportunities in simulation, AI, or autonomous systems.`,
    notes: [
      `"AUTONOMOUS DRIVING" 这两个词要重重地说，这是你的领域`,
      `"PREDICT" 和 "UNDERSTAND" 是两个动词，要稍微强调`,
      `"ERICSSON" 是大公司名，说清楚`,
      `最后三个方向 "SIMULATION, AI, AUTONOMOUS SYSTEMS" 前两个升调（还没说完），最后一个降调（结束了）`,
    ],
  },

  "60s_intro": {
    annotated: `Hi, // I'm XINGNAN. ↘
I'm a PhD candidate // at CONCORDIA University, ↗
working towards // finishing my degree this year. ↘ ///

My research focuses on // making autonomous driving // SAFER // and SMARTER. ↘ ///

I work on TWO main problems. ↘ ///

FIRST, ↗ // trajectory prediction ↘ —
TEACHING AI // to predict // where vehicles, ↗ cyclists, ↗
and pedestrians // will MOVE // in the next FEW seconds. ↘ ///

SECOND, ↗ // sensor fusion ↘ —
COMBINING cameras and LiDAR // to detect objects //
even when they're PARTIALLY hidden. ↘ ///

During the first three years of my PhD, ↗
I also worked // at ERICSSON's AI lab in Montreal //
through a MITACS Accelerate fellowship. ↘
There I built a CO-SIMULATION system //
that CONNECTS // traffic simulation //
with 3D sensor simulation ↘ — ///
basically // a DIGITAL TWIN // of urban intersections //
for SAFETY testing. ↘ ///

I have ONE published paper ↗
and FOUR more // in preparation. ↘
I'm EXCITED about roles // where I can apply //
simulation and AI // to REAL-WORLD systems. ↘`,
    plain: `Hi, I'm Xingnan. I'm a PhD candidate at Concordia University, working towards finishing my degree this year. My research focuses on making autonomous driving safer and smarter.\n\nI work on two main problems. First, trajectory prediction — teaching AI to predict where vehicles, cyclists, and pedestrians will move in the next few seconds. Second, sensor fusion — combining cameras and LiDAR to detect objects even when they're partially hidden.\n\nDuring the first three years of my PhD, I also worked at Ericsson's AI lab in Montreal through a Mitacs Accelerate fellowship. There I built a co-simulation system that connects traffic simulation with 3D sensor simulation — basically a digital twin of urban intersections for safety testing.\n\nI have one published paper and four more in preparation. I'm excited about roles where I can apply simulation and AI to real-world systems.`,
    notes: [
      `"TWO main problems" — "TWO" 要重读，预告结构`,
      `"FIRST" 和 "SECOND" 要特别清楚，帮对方跟上你的结构`,
      `"DIGITAL TWIN" 是buzzword，说慢一点`,
      `最后一句 "REAL-WORLD systems" 要有力，这是你的核心追求`,
    ],
  },

  "2min_intro": {
    annotated: `I'm XINGNAN ZHOU, ↘ //
a PhD candidate // at CONCORDIA University. ↘
I'm working on finishing up my degree ↘ — //
hopefully this year. ↘ ///

I'm in the CIVIL ENGINEERING department, ↗
but my work is really // at the INTERSECTION //
of AI // and transportation. ↘
I've been at Concordia // since twenty-nineteen, ↗
so about SEVEN YEARS in Montreal now. ↘ ///

During the FIRST THREE YEARS of my PhD, ↗ //
from twenty-nineteen to twenty-twenty-two, ↗ //
I also worked at // ERICSSON's GAIA AI Hub //
through a MITACS Accelerate fellowship. ↘ ///

My MAIN project there ↗ //
was building // a CARLA-VISSIM co-simulation framework ↘ — ///
essentially // CONNECTING a driving simulator //
WITH a traffic simulator ↗ //
to create a DIGITAL TWIN // of real intersections. ↘ ///

We used it // to test SAFETY scenarios //
that would be DANGEROUS ↗ // or IMPOSSIBLE ↗ //
to test in real life. ↘ ///

After the Ericsson fellowship ended // in twenty-twenty-two, ↗ //
I focused FULLY // on my own research. ↘ ///

The CORE of it // is trajectory prediction ↘ — ///
building DEEP LEARNING models //
that can FORECAST // where vehicles will go ↗ //
based on their HISTORY ↗ //
and the ROAD STRUCTURE around them. ↘ ///

I use GRAPH NEURAL NETWORKS ↗ //
and TRANSFORMERS for this, ↘ //
and I've tested my models // on almost //
NINETY THOUSAND // real-world driving scenarios //
from the WAYMO dataset. ↘ ///

My best model // improved prediction accuracy //
by TWENTY-SEVEN PERCENT // compared to baselines. ↘ ///

I ALSO work on // sensor fusion ↘ — ///
combining LiDAR 3D detection //
with camera-based detection ↗ //
to handle situations // where objects //
are PARTIALLY blocked. ↘ ///

And I built a tool // called WAYGRAPH ↗ //
that can match driving scenarios //
to REAL MAP intersections // WITHOUT GPS, ↘ //
using topology fingerprints. ↘
That one achieved // NINETY PERCENT accuracy. ↘ ///

What I'm LOOKING FOR now ↗ //
is a role where I can APPLY ↗ //
this combination // of simulation, ↗ // perception, ↗ //
and AI ↗ //
to build systems // that work in the REAL WORLD. ↘ ///

I'm ESPECIALLY interested in //
digital twins, ↗ // autonomous systems, ↗ //
and simulation platforms. ↘`,
    plain: `I'm Xingnan Zhou, a PhD candidate at Concordia University. I'm working on finishing up my degree — hopefully this year. I'm in the Civil Engineering department, but my work is really at the intersection of AI and transportation. I've been at Concordia since 2019, so about seven years in Montreal now.\n\nDuring the first three years of my PhD, from 2019 to 2022, I also worked at Ericsson's GAIA AI Hub through a Mitacs Accelerate fellowship. My main project there was building a CARLA-VISSIM co-simulation framework — essentially connecting a driving simulator with a traffic simulator to create a digital twin of real intersections. We used it to test safety scenarios that would be dangerous or impossible to test in real life.\n\nAfter the Ericsson fellowship ended in 2022, I focused fully on my own research. The core of it is trajectory prediction — building deep learning models that can forecast where vehicles will go based on their history and the road structure around them. I use graph neural networks and Transformers for this, and I've tested my models on almost ninety thousand real-world driving scenarios from the Waymo dataset. My best model improved prediction accuracy by twenty-seven percent compared to baselines.\n\nI also work on sensor fusion — combining LiDAR 3D detection with camera-based detection to handle situations where objects are partially blocked. And I built a tool called WayGraph that can match driving scenarios to real map intersections without GPS, using topology fingerprints. That one achieved ninety percent accuracy.\n\nWhat I'm looking for now is a role where I can apply this combination of simulation, perception, and AI to build systems that work in the real world. I'm especially interested in digital twins, autonomous systems, and simulation platforms.`,
    notes: [
      `数字练到脱口而出：NINETY THOUSAND, TWENTY-SEVEN PERCENT, NINETY PERCENT`,
      `"DANGEROUS or IMPOSSIBLE" — 递进，声音一个比一个重`,
      `每个大段落之间 /// 要真的停一秒，别赶`,
      `最后的列举 "digital twins, autonomous systems, simulation platforms" 前面升调，最后降调`,
    ],
  },

  "cae_intro": {
    annotated: `Hi everyone, ↘ // I'm XINGNAN. ↘ ///

I'm a PhD candidate // at CONCORDIA University, ↗ //
in the FINAL STAGE of my degree. ↘ ///

My research is in // AUTONOMOUS DRIVING ↘ — //
trajectory prediction ↗ // and sensor fusion. ↘ ///

I ALSO have experience //
building DIGITAL TWIN environments ↗ //
through a co-simulation project // at ERICSSON. ↘ ///

I'm EXCITED to explore //
how digital twin technologies // apply //
ACROSS different domains, ↗ //
from ocean ↗ // to space. ↘ ///

LOOKING FORWARD // to working with you all. ↘`,
    plain: `Hi everyone, I'm Xingnan. I'm a PhD candidate at Concordia University, in the final stage of my degree. My research is in autonomous driving — trajectory prediction and sensor fusion. I also have experience building digital twin environments through a co-simulation project at Ericsson. I'm excited to explore how digital twin technologies apply across different domains, from ocean to space. Looking forward to working with you all.`,
    notes: [
      `开场 "Hi everyone" 要有能量，不要轻声`,
      `"from ocean to space" — CAE项目主题，说得有画面感`,
      `"LOOKING FORWARD" 要真诚，不是敷衍`,
    ],
  },

  "ericsson_pitch": {
    annotated: `At ERICSSON, ↗ //
I built a system // that CONNECTS // TWO simulators ↘ — ///

CARLA, ↗ // which is a 3D driving simulator //
with REALISTIC sensors, ↘ ///

and VISSIM, ↗ // which simulates //
REALISTIC traffic patterns. ↘ ///

By COMBINING them, ↗ //
we created a DIGITAL TWIN //
of REAL intersections ↘ ///

where you can test SAFETY scenarios //
with realistic traffic ↗ //
AND realistic sensor data ↗ //
at the SAME TIME. ↘ ///

We also DEPLOYED DRONES //
to capture REAL trajectory data //
at Montreal intersections. ↘`,
    plain: `At Ericsson, I built a system that connects two simulators — CARLA, which is a 3D driving simulator with realistic sensors, and VISSIM, which simulates realistic traffic patterns. By combining them, we created a digital twin of real intersections where you can test safety scenarios with realistic traffic and realistic sensor data at the same time. We also deployed drones to capture real trajectory data at Montreal intersections.`,
    notes: [
      `"TWO simulators" — 数字重读`,
      `CARLA 和 VISSIM 两个名字说清楚，对方可能不认识`,
      `"DIGITAL TWIN" 慢说，这是关键概念`,
    ],
  },

  "lane_graph_pitch": {
    annotated: `This is PROBABLY // my BEST result. ↘ ///

I built a module // that TEACHES prediction models ↗ //
to UNDERSTAND // road structure ↘ — ///
lane boundaries, ↗ // connections, ↗ // traffic rules. ↘ ///

It uses GRAPH NEURAL NETWORKS //
to ENCODE the lane topology ↗ //
and CROSS-ATTENTION // to INJECT that information //
into ANY prediction model. ↘ ///

On almost NINETY THOUSAND //
Waymo intersection scenarios, ↗ //
it improved prediction accuracy //
by about TWENTY-SEVEN PERCENT ↗ //
and reduced miss rate //
by about FORTY-THREE PERCENT. ↘ ///

The KEY insight is ↗ //
that it works // on BOTH LSTM ↗ //
AND Transformer architectures ↘ — //
it's ARCHITECTURE-AGNOSTIC. ↘`,
    plain: `This is probably my best result. I built a module that teaches prediction models to understand road structure — lane boundaries, connections, traffic rules. It uses graph neural networks to encode the lane topology and cross-attention to inject that information into any prediction model. On almost ninety thousand Waymo intersection scenarios, it improved prediction accuracy by about twenty-seven percent and reduced miss rate by about forty-three percent. The key insight is that it works on both LSTM and Transformer architectures — it's architecture-agnostic.`,
    notes: [
      `"PROBABLY my BEST result" — 自信但不傲慢`,
      `三个数字要响：NINETY THOUSAND, TWENTY-SEVEN, FORTY-THREE`,
      `"ARCHITECTURE-AGNOSTIC" 这个词很长，一个音节一个音节说`,
    ],
  },

  "attention_pitch": {
    annotated: `I built a VISUALIZATION tool ↗ //
to understand // how Transformer models //
"PAY ATTENTION" // in trajectory prediction. ↘ ///

The SURPRISING finding ↗ //
was that the model //
gives cyclists // SEVENTY-THREE PERCENT //
LESS attention // than vehicles. ↘ ///

That's a SAFETY problem ↘ — ///
the model is ESSENTIALLY // IGNORING //
vulnerable road users. ↘ ///

I ALSO did // counterfactual analysis, ↗ //
REMOVING agents from scenes //
to see how predictions CHANGE, ↘ //
which helps us understand //
what the model // ACTUALLY relies on. ↘`,
    plain: `I built a visualization tool to understand how Transformer models "pay attention" in trajectory prediction. The surprising finding was that the model gives cyclists seventy-three percent less attention than vehicles. That's a safety problem — the model is essentially ignoring vulnerable road users. I also did counterfactual analysis, removing agents from scenes to see how predictions change, which helps us understand what the model actually relies on.`,
    notes: [
      `"SEVENTY-THREE PERCENT LESS" — 停一下再说，让对方感受冲击`,
      `"That's a SAFETY problem" — 严肃语气，声音稍微降`,
      `"IGNORING" — 这个词要说得重，核心发现`,
    ],
  },

  "strength": {
    annotated: `I'm good at // CONNECTING IDEAS //
across DIFFERENT fields. ↘ ///

My research spans // simulation, ↗ // deep learning, ↗ //
computer vision, ↗ // and transportation ↘ — //
and I've had to TEACH MYSELF //
most of these skills. ↘ ///

When I face a NEW problem, ↗ //
I can QUICKLY survey // the existing solutions, ↗ //
UNDERSTAND the trade-offs, ↗ //
and FIND an approach that works. ↘ ///

For example, ↗ //
my lane graph conditioning paper //
COMBINED // graph neural networks // from ONE field ↗ //
with cross-attention // from ANOTHER ↗ //
to solve // a trajectory prediction problem. ↘`,
    plain: `I'm good at connecting ideas across different fields. My research spans simulation, deep learning, computer vision, and transportation — and I've had to teach myself most of these skills. When I face a new problem, I can quickly survey the existing solutions, understand the trade-offs, and find an approach that works. For example, my lane graph conditioning paper combined graph neural networks from one field with cross-attention from another to solve a trajectory prediction problem.`,
    notes: [
      `"CONNECTING IDEAS" — 这是你的核心优势，说重`,
      `四个领域列举：前三个升调，最后一个降调`,
      `"TEACH MYSELF" — 自学能力是加分项，强调`,
    ],
  },

  "weakness": {
    annotated: `I tend to be QUIET // in group settings, ↗ //
ESPECIALLY // when I'm not sure //
my idea is FULLY formed. ↘ ///

I'm WORKING ON // speaking up EARLIER, ↗ //
even if my thought // ISN'T perfect yet. ↘ ///

I've REALIZED ↗ //
that sharing an INCOMPLETE idea ↗ //
often MOVES the discussion forward //
MORE // than staying SILENT. ↘`,
    plain: `I tend to be quiet in group settings, especially when I'm not sure my idea is fully formed. I'm working on speaking up earlier, even if my thought isn't perfect yet. I've realized that sharing an incomplete idea often moves the discussion forward more than staying silent.`,
    notes: [
      `语气要诚恳但不自卑 — 这是self-awareness不是道歉`,
      `"WORKING ON" — 强调你在积极改善`,
      `最后一句是关键："MOVES the discussion forward MORE than staying SILENT" — 说得有力`,
    ],
  },

  "challenging_project": {
    annotated: `The CARLA-VISSIM co-simulation project //
at ERICSSON ↗ //
was the MOST challenging. ↘ ///

I had to CONNECT // TWO completely different simulators ↘ — ///

CARLA, ↗ // which simulates //
3D environments and sensors, ↗ //
and VISSIM, ↗ // which simulates //
traffic flow. ↘ ///

They WEREN'T designed // to work together, ↗ //
so I had to BUILD the bridge // from SCRATCH ↘ — ///

synchronizing TIME STEPS, ↗ //
coordinate SYSTEMS, ↗ //
vehicle STATES. ↘ ///

The HARDEST part ↗ //
was making the simulated traffic // behave REALISTICALLY ↗ //
while maintaining // sensor ACCURACY. ↘ ///

It took MONTHS of debugging, ↗ //
but the RESULT ↗ //
was a working digital twin //
that the team USED // for safety evaluation. ↘`,
    plain: `The CARLA-VISSIM co-simulation project at Ericsson was the most challenging. I had to connect two completely different simulators — CARLA, which simulates 3D environments and sensors, and VISSIM, which simulates traffic flow. They weren't designed to work together, so I had to build the bridge from scratch — synchronizing time steps, coordinate systems, vehicle states. The hardest part was making the simulated traffic behave realistically while maintaining sensor accuracy. It took months of debugging, but the result was a working digital twin that the team used for safety evaluation.`,
    notes: [
      `"from SCRATCH" 连读，一气呵成`,
      `三个同步项 "TIME STEPS, SYSTEMS, STATES" 有节奏感`,
      `结尾 "MONTHS of debugging" 到 "team USED" — 从困难到成功的转折`,
    ],
  },

  "comm_report": {
    annotated: `So THIS week ↗ //
I focused on // [topic]. ↘ ///
I reviewed // [number] papers ↗ //
and found // [key finding]. ↘ ///
The MAIN takeaway is // [one sentence]. ↘ ///
I can share the DETAILS // in the document. ↘`,
    plain: `So this week I focused on [topic]. I reviewed [number] papers and found [key finding]. The main takeaway is [one sentence]. I can share the details in the document.`,
    notes: [
      `"So THIS week" — "THIS" 轻轻强调，表示时间范围`,
      `"MAIN takeaway" — 帮对方抓重点`,
    ],
  },

  "comm_disagree": {
    annotated: `That's INTERESTING. ↘ //
I've seen // a SLIGHTLY different perspective //
in the literature. ↘ ///
Some researchers argue that // [alternative]. ↘
It MIGHT be worth // considering BOTH sides. ↘`,
    plain: `That's interesting. I've seen a slightly different perspective in the literature. Some researchers argue that [alternative]. It might be worth considering both sides.`,
    notes: [
      `"That's INTERESTING" 先肯定对方`,
      `"SLIGHTLY different" — slightly 轻声说，不要太aggressive`,
      `"BOTH sides" — 表示开放态度`,
    ],
  },

  "comm_stuck": {
    annotated: `Let me THINK // about how to say this... ↘
[停2秒] ///
I KNOW // what I want to say ↗ //
but I'm STRUGGLING with the words. ↘ //
BASICALLY, ↗ // [simple version]. ↘`,
    plain: `Let me think about how to say this... I know what I want to say but I'm struggling with the words. Basically, [simple version].`,
    notes: [
      `"Let me THINK" 后面真的停2秒 — 这不是冷场，是正常的`,
      `"BASICALLY" 后面用最简单的词说你的意思`,
    ],
  },

  "rules": {
    annotated: `通用语调规则:

1. 陈述句结尾 = 降调 ↘
   I work on autonomous driving. ↘

2. 列举中间项 = 升调 ↗，最后一项 = 降调 ↘
   simulation, ↗ AI, ↗ and robotics. ↘

3. "First/Second" = 升调 ↗（还没完）
   FIRST, ↗ trajectory prediction.

4. "but/however" 前面 = 停顿 + 升调
   I'm not an expert, ↗ // BUT ↗ in my field...

5. 数字 = 永远重读
   NINETY THOUSAND / TWENTY-SEVEN PERCENT

6. 专有名词 = 清楚说出每个音节
   CON-COR-DIA / E-RICS-SON / WAY-MO

7. "Yeah" "OK" "Thanks" = 饱满地说
   YEAH, that makes sense. ↘ (不是 "yeh...")`,
    plain: `General intonation rules for natural English speaking.`,
    notes: [
      `这7条规则背下来，所有英语都适用`,
      `最常犯的：陈述句结尾升调（听起来不确定）、所有词一样重（听起来像念经）`,
    ],
  },
};

// ─── 18-Day Curriculum ───

const CURRICULUM = [
  {
    day: 1,
    title: "Day 1 — 30秒自我介绍 (上)",
    prosodyKey: "30s_intro",
    instructions: [
      "打开语音标注版，找到 30秒自我介绍",
      "大声朗读 5遍（不是默读！）",
      "合上文件，凭记忆说一遍，用手机录音",
      "回听录音，注意：语速、停顿、关键词是否都说到了",
      "再不看稿说一遍，录音保存",
    ],
    goal: "能不看稿、流利地说出30秒版本",
  },
  {
    day: 2,
    title: "Day 2 — 30秒自我介绍 (巩固)",
    prosodyKey: "30s_intro",
    instructions: [
      "不看稿直接说一遍，录音",
      "对比昨天的录音 — 有没有更流利？",
      "试着站着说、走着说、不同场景说",
      "找一个镜子，对着镜子说，练习眼神",
    ],
    goal: "30秒版脱口而出，不需要想",
  },
  {
    day: 3,
    title: "Day 3 — 60秒自我介绍",
    prosodyKey: "60s_intro",
    instructions: [
      "先不看稿说一遍30秒版（热身）",
      "打开 60秒版，朗读3遍",
      "注意比30秒版多了什么：两个研究方向 + Ericsson细节",
      "合上稿，尝试说出来（允许看稿提示）",
      "录音保存",
    ],
    goal: "能基本说完60秒版，允许卡顿",
  },
  {
    day: 4,
    title: "Day 4 — 60秒自我介绍 (巩固)",
    prosodyKey: "60s_intro",
    instructions: [
      "不看稿说60秒版，录音",
      "听录音，标记卡顿的地方",
      "针对卡顿的句子单独练5遍",
      "完整再说一遍",
    ],
    goal: "60秒版流利完成",
  },
  {
    day: 5,
    title: "Day 5 — 2分钟面试版 (上)",
    prosodyKey: "2min_intro",
    instructions: [
      "30秒热身（不看稿）",
      "打开 2分钟版，分段朗读：",
      "  - 第1段：基本信息 + 在Montreal七年",
      "  - 第2段：Ericsson经历 (2019-2022)",
      "  - 第3段：2022年之后的独立研究",
      "  - 第4段：sensor fusion + WayGraph",
      "  - 第5段：求职方向",
      "每段单独练2遍",
      "试着串起来说一遍（可以看稿）",
    ],
    goal: "熟悉2分钟版的结构和关键词",
  },
  {
    day: 6,
    title: "Day 6 — 2分钟面试版 (中)",
    prosodyKey: "2min_intro",
    instructions: [
      "不看稿说2分钟版，录音",
      "哪段最不流利？单独练那段10遍",
      "完整再来一遍",
      "数字要脱口而出：almost ninety thousand, twenty-seven percent, three years, ninety percent",
    ],
    goal: "基本能完成2分钟版，关键数字不卡",
  },
  {
    day: 7,
    title: "Day 7 — 复习日 + 变体练习",
    prosodyKey: "rules",
    instructions: [
      "依次说：30秒版 → 60秒版 → 2分钟版（录音）",
      "练习简短回答变体：'What do you do?' / 'What do you study?' / 'Where are you from?'",
      "模拟场景：假装有人问你 'What do you do?'，直接回答",
      "回听本周第一天的录音，对比今天的 — 你会听到进步",
    ],
    goal: "Week 1 完成! 你现在应该能自信地做自我介绍了",
  },
  {
    day: 8,
    title: "Day 8 — Ericsson/CARLA-VISSIM 项目介绍",
    prosodyKey: "ericsson_pitch",
    instructions: [
      "30秒自我介绍热身（不看稿）",
      "打开 Ericsson pitch",
      "这是你跟CAE最相关的经历 — 重点练！",
      "朗读3遍，然后不看稿说",
      "也练 'What's a digital twin?' 的回答",
    ],
    goal: "能清楚解释你在Ericsson做了什么",
  },
  {
    day: 9,
    title: "Day 9 — Lane Graph Conditioning (最强结果)",
    prosodyKey: "lane_graph_pitch",
    instructions: [
      "热身：Ericsson pitch 不看稿",
      "打开 Lane Graph Conditioning pitch",
      "这是你最亮眼的数据 (+27% / +43%) — 练到数字脱口而出",
      "也练 'What's a miss rate?' 的回答",
      "录音",
    ],
    goal: "能用简单英语解释你最好的研究成果",
  },
  {
    day: 10,
    title: "Day 10 — Attention Visualization (最有故事性)",
    prosodyKey: "attention_pitch",
    instructions: [
      "热身：随机挑一个之前练过的pitch",
      "打开 Attention Visualization pitch",
      "这个项目最适合讲故事：发现了一个安全隐患",
      "练 'cyclists receive 73% less attention' 这个hook",
      "也练 'So what do we do about it?' 的回答",
    ],
    goal: "能把研究发现讲成一个有趣的故事",
  },
  {
    day: 11,
    title: "Day 11 — CAE 开场自我介绍",
    prosodyKey: "cae_intro",
    instructions: [
      "打开 CAE 开场自我介绍",
      "这是3月9号第一天要说的话",
      "朗读5遍 → 不看稿3遍 → 录音",
      "也练 'Why Did You Join This Challenge?' 的回答",
    ],
    goal: "CAE开场介绍练到烂熟",
  },
  {
    day: 12,
    title: "Day 12 — 会议发言 + 提问",
    prosodyKey: "comm_report",
    instructions: [
      "CAE开场intro热身（不看稿）",
      "练习汇报模板，填入你自己的内容",
      "练习提问句：Could you elaborate? / I have a question about the scope...",
      "练习表达观点：From what I've seen... / I noticed that...",
      "这些是你在4周里天天要用的 — 背到自动反应",
    ],
    goal: "会议里能开口问问题、表达观点",
  },
  {
    day: 13,
    title: "Day 13 — Networking + 问全职机会",
    prosodyKey: "comm_disagree",
    instructions: [
      "练习 Networking 部分的3个问法",
      "练习 End-of-Challenge Wrap-Up",
      "模拟：假装challenge结束了，跟hiring manager聊",
      "练习 Keeping a Conversation Going 的句子",
    ],
    goal: "能自然地把话题引到全职机会",
  },
  {
    day: 14,
    title: "Day 14 — 复习日：所有 Research Pitches",
    prosodyKey: "rules",
    instructions: [
      "依次说完所有6个research pitch（不看稿，录音）",
      "哪个最不流利？单独练10遍",
      "随机切换：假装有人突然问 'What's your research about?' — 你选哪个说？",
      "练习根据对方背景选不同的pitch",
    ],
    goal: "Week 2 完成! 你现在有6个随时能用的research pitch了",
  },
  {
    day: 15,
    title: "Day 15 — 面试问题：优势和劣势",
    prosodyKey: "strength",
    instructions: [
      "打开面试 Q&A",
      "练习 'Greatest Strength' 的回答",
      "练习 'Greatest Weakness' 的回答",
      "weakness的回答特别重要 — 诚实、有self-awareness、在改进",
      "录音，确保语气自然不像背书",
    ],
    goal: "面试最常见的两个问题准备好",
  },
  {
    day: 16,
    title: "Day 16 — 面试问题：项目经历 + 5年规划",
    prosodyKey: "challenging_project",
    instructions: [
      "练习 'Challenging Project' (CARLA-VISSIM故事)",
      "练习 'Where do you see yourself in 5 years?'",
      "练习 'Why leaving academia?'",
      "这3个问题串起来讲一个连贯的story",
    ],
    goal: "能自然地讲述你的职业故事",
  },
  {
    day: 17,
    title: "Day 17 — Small Talk + 虚拟会议用语",
    prosodyKey: "comm_stuck",
    instructions: [
      "过一遍 Small Talk 全部内容",
      "重点练 Virtual Meeting 场景 — 这是CAE最常用的",
      "练 Handling Awkward Moments — 紧急时刻的救命句子",
      "重点练：英语卡住时怎么说、说错了怎么纠正",
    ],
    goal: "虚拟会议的所有场景+尴尬时刻都有准备",
  },
  {
    day: 18,
    title: "Day 18 — 总复习：完整模拟一场CAE周会!",
    prosodyKey: "cae_intro",
    instructions: [
      "明天就是3月9号CAE orientation了！",
      "今天的任务：完整模拟一场会议（从头到尾）",
      "1. 打招呼: Hey everyone, how's it going?",
      "2. 闲聊: Have you done any CAE challenges before?",
      "3. 自我介绍: CAE开场版（不看稿）",
      "4. 汇报进度: 用汇报模板，假装report你的review",
      "5. 回答问题: Why did you join? / What can you contribute?",
      "6. 提出建议: I had an idea — what if we...",
      "7. 确认任务: Just to confirm, my action item is...",
      "8. 结尾: Thanks everyone. Talk to you next time.",
      "全程录音，回听一遍",
    ],
    goal: "你已经准备了18天。你准备好了。明天不需要完美，只需要开口。",
  },
];

// ─── Daily Communication Drills ───

const DAILY_DRILLS = [
  { name: "汇报进度", scenario: "假装在CAE会议上汇报你这周的literature review进展", exercise: '用汇报模板，填入一个你熟悉的topic（比如autonomous driving的digital twin），大声说出来，录音' },
  { name: "表达不同意见", scenario: "别人说了一个观点，你有不同看法，怎么礼貌地说", exercise: '练: "I see where you\'re coming from, but from what I\'ve read, it seems like [your point]. What do you think?" 替换成你自己的研究内容说3遍' },
  { name: "会议前闲聊", scenario: "会议还没正式开始，3个人在等其他人进来", exercise: '练: "How\'s your day going?" → "Oh nice, yeah same here" → "Have you done any CAE challenges before?" 录音' },
  { name: "承认不知道", scenario: "会议上有人提到你不懂的领域（比如航空仿真）", exercise: '练: "That\'s outside my expertise, but it sounds important. I\'ll read up on it and come back with what I find." 说5遍到流利' },
  { name: "请求帮助", scenario: "你在做literature review时卡住了，需要问队友", exercise: '练: "I\'m a bit stuck on [topic]. Has anyone dealt with something similar?" 说3遍' },
  { name: "展示/分享屏幕", scenario: "你要在会议上分享你找到的文献综述结果", exercise: '练完整流程: "Let me share my screen." → "OK so here\'s what I found." → "Any questions?"' },
  { name: "夸别人+主动帮忙", scenario: "队友做了一个不错的总结", exercise: '练: "That was a really clear explanation." + "I might have some relevant papers — want me to share them?"' },
  { name: "没太多进展怎么说", scenario: "这周你读了很多但没有具体成果", exercise: '练: "Honestly, I didn\'t make as much progress as I hoped. I plan to focus on [subtopic] next week."' },
  { name: "被问不会的问题", scenario: "有人突然问你一个你没准备的技术问题", exercise: '练: "That\'s a great question. I don\'t know off the top of my head, but I\'ll look into it." 说5遍' },
  { name: "接话+延续对话", scenario: "有人分享了一个观点，对话快冷场了", exercise: '练: "Oh interesting" / "Yeah, I\'ve seen something similar" / "How does that work?" / "Can you tell me more?"' },
  { name: "远程确认任务", scenario: "会议结束了，你要确认自己的action item", exercise: '练: "Just to confirm — my action item is [task], and I\'ll have it ready by [date]."' },
  { name: "提出建议", scenario: "你有一个想法想跟团队分享", exercise: '练: "I had an idea — what if we [suggestion]? It might help us [benefit]."' },
  { name: "对方说太快听不懂", scenario: "远程会议里有人语速飞快", exercise: '练: "Sorry, could you slow down a bit?" 和 "I want to make sure I\'m on the same page"' },
  { name: "说错了怎么纠正", scenario: "你说了一个技术细节说错了", exercise: '练: "Actually, let me correct myself. What I meant to say was..." 编一个场景练' },
  { name: "英语卡住了", scenario: "脑子里有想法但英语表达不出来", exercise: '练: "Let me think about how to say this..." [停2秒] "Basically, [simple version]."' },
  { name: "总结发言", scenario: "你要在会议最后做一个简短的总结", exercise: '练: "So to summarize — the key takeaway is [one sentence]. I\'ll add the details to the shared document."' },
  { name: "非正式感谢", scenario: "队友帮了你，你要感谢", exercise: '练: "Thanks for explaining that. It really helped me understand the context."' },
  { name: "完整模拟：一场CAE周会", scenario: "今天模拟一整场会议", exercise: '从头到尾练: 打招呼 → 闲聊 → 汇报 → 回答问题 → 提建议 → 确认任务 → 结尾' },
];

// ─── Daily Phrases ───

const DAILY_PHRASES = [
  "I'd like to add something to what [name] just said.",
  "Could you elaborate on that?",
  "From what I've read, it seems like...",
  "That's a good point. I hadn't considered that.",
  "I'm not sure I follow. Could you explain what you mean by...?",
  "Based on my review, the key trend is...",
  "I found something interesting that might be relevant.",
  "Sorry, go ahead — I didn't mean to interrupt.",
  "That aligns with what I've been seeing in the literature.",
  "I don't have a strong opinion on this, but one thing I noticed is...",
  "Let me pull up my notes on that... OK, so what I found was...",
  "Before we wrap up, I just want to confirm — my action item is [task], right?",
  "I'll have that ready by [date]. Is that timeline OK?",
  "Thanks everyone. Talk to you next time.",
  "Quick question — is there a preferred format for the deliverable?",
  "I spent some time on [topic] and I think the most important thing is...",
  "Does anyone have experience with [topic]? I'd love to hear your perspective.",
  "I can take that on. I'll update the doc when I'm done.",
];

// ─── Daily Prosody Tips ───

const DAILY_TIPS = [
  "重音: 关键词（名字、术语、数字）声音大一点、慢一点。其余词轻声快速带过。",
  "停顿: 每说完一个完整意思就停0.5秒。停顿不是冷场，是给对方消化的时间。",
  "降调: 陈述句结尾声音往下走 ↘。中国人习惯往上走，英文里这样听起来不确定。",
  "列举: 中间项升调 ↗（还没完），最后一项降调 ↘（结束了）。",
  "数字永远重读: NINETY THOUSAND, TWENTY-SEVEN PERCENT — 这是你的成果！",
  "Yeah/OK/Thanks 不要敷衍: 用饱满的声音说。不是 'yeh' 而是 'YEAH, that makes sense.'",
  "复习: 重音 + 停顿 + 降调。这三个做好，语气就不飘了。",
  "专有名词慢说: CON-COR-DIA, E-RICS-SON, WAY-MO — 每个音节都清楚。",
  "结构词要响: FIRST, ↗ ... SECOND, ↗ ... 帮对方跟上你的思路。",
  "'but' 前停一下: I'm not an expert, ↗ // BUT... 停顿+升调制造转折。",
  "'I think' 不要太轻: 说重一点: 'I THINK the main trend is...'",
  "语速不均匀才自然: 重要的词慢，连接词快。不是匀速念经。",
  "录音回听: 问自己 — 像在跟人说话还是在念稿？像念稿就加重音加停顿。",
  "短语连读: 'from scratch' 不是 from / scratch，而是 fromSCRATCH。",
  "被问问题先停一秒: 停顿+\"That's a good question...\" 显得thoughtful。",
  "段落切换停1秒: 让对方知道你要说下一个点了。",
  "最后一句要有力: 结尾不要越说越轻。最后一句稍微响一点。",
  "总复习: 重音+停顿+降调+录音。你准备好了。",
];
