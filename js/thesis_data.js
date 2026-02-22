/**
 * SpeakUp — PhD Defense & Interview Prep Data
 * Extends the base curriculum with defense Q&A and interview practice
 * Source: ~/projects/Thesis_Defence/
 */

// ─── Chapter 3: Turn-Aware LSTM Q&A ───

PROSODY["ch3_qa"] = {
  annotated: `--- CHAPTER THREE: TURN-AWARE LSTM --- ///

[Q1: What problem does this chapter solve?] ///

EXISTING trajectory prediction models //
perform POORLY at intersections ↘
because they don't UNDERSTAND //
whether a vehicle is going STRAIGHT, ↗
turning LEFT, ↗ // or turning RIGHT. ↘ ///

The prediction error INCREASES significantly //
during TURNING maneuvers ↘
because the model treats ALL trajectories //
the SAME way. ↘ ///

[Q2: What is your method?] ///

I compute the CUMULATIVE HEADING CHANGE //
over the observed trajectory. ↘
If the vehicle's heading has changed //
more than a THRESHOLD ↗ —
say FIFTEEN degrees ↗ —
I classify it as a LEFT TURN //
or RIGHT TURN. ↘ ///

This is encoded as a ONE-HOT vector ↗
and CONCATENATED // with the trajectory features //
before feeding into the LSTM encoder. ↘
It's SIMPLE, ↗ // but it gives the model //
EXPLICIT information //
about the MANEUVER type. ↘ ///

[Q3: Why LSTM and not Transformer?] ///

Actually, ↗ // I TESTED both. ↘
I included a TINY TRANSFORMER // as a baseline. ↘ ///
The KEY point of this chapter ↗
is NOT about which architecture is best ↘ —
it's about whether adding TURN AWARENESS //
as an INDUCTIVE BIAS //
improves prediction. ↘ ///

And the answer is YES, ↗ //
for BOTH LSTM ↗ //
and the small Transformer. ↘
The next chapter, ↗ CHAPTER FOUR, ↗
extends this idea //
to a MUCH larger scale. ↘ ///

[Q4: Small dataset — can this generalize?] ///

That's a FAIR question. ↘ ///
The SINGLE intersection ↗
was a DELIBERATE choice //
for CONTROLLED validation ↘ —
to ISOLATE the effect of turn encoding //
WITHOUT confounding variables. ↘ ///

The GENERALIZATION question ↗
is EXACTLY what Chapter FOUR addresses: ↘
I took the CORE idea //
of encoding road structure ↗
and tested it on almost //
NINETY THOUSAND //
Waymo intersection scenarios. ↘ ///

So Chapters THREE ↗ and FOUR ↗
are designed as a PROGRESSIVE pair ↘ —
PROOF OF CONCEPT ↗ //
followed by LARGE-SCALE validation. ↘ ///

[Q5: What are the limitations?] ///

THREE main limitations. ↘ ///
FIRST, ↗ // the turn classification //
uses a FIXED heading threshold, ↘
which may not generalize //
to ALL intersection geometries. ↘ ///

SECOND, ↗ // the dataset is from //
a SINGLE intersection ↘ —
though as I mentioned, ↗
Chapter FOUR addresses this at SCALE. ↘ ///

THIRD, ↗ // the model doesn't use //
ANY map information ↘ —
it relies PURELY on trajectory history. ↘
That gap MOTIVATED Chapter FOUR, ↗
where I add LANE GRAPH conditioning. ↘ ///

[Q6: How does this connect to the rest?] ///

Chapter THREE is the STARTING POINT //
of my prediction research. ↘
It showed that encoding MANEUVER INTENT ↗ —
specifically TURNS ↗ —
IMPROVES prediction accuracy. ↘ ///

But it only encodes WHAT //
the vehicle is doing, ↗
NOT WHERE it's going //
relative to the road. ↘ ///

Chapter FOUR addresses that //
by adding LANE GRAPH conditioning, ↘
which gives the model //
EXPLICIT knowledge // of lane topology. ↘ ///

[Q7: What is FDE?] ///

FDE stands for FINAL DISPLACEMENT ERROR ↘ —
it's the EUCLIDEAN DISTANCE //
between the predicted FINAL position ↗
and the GROUND TRUTH final position. ↘ ///

It's the STANDARD metric //
in trajectory prediction ↘
because it captures //
how far off your prediction is //
at the END of the prediction horizon. ↘ ///

I also report ADE ↗ —
AVERAGE Displacement Error ↗ —
which averages the error //
over ALL time steps. ↘
Both are widely used //
in the WAYMO ↗ and ARGOVERSE benchmarks. ↘ ///

--- Transition to Ch4 --- ///

While TURN encoding //
improved prediction for turning maneuvers, ↗
the model STILL doesn't understand //
the ROAD STRUCTURE ↘ —
lane boundaries, ↗ connections, ↗ traffic rules. ↘ ///

What if we could give the model //
EXPLICIT knowledge // of the lane topology? ↘
That's what I explore in CHAPTER FOUR, ↗
where I develop a LANE GRAPH CONDITIONING module //
that works with ANY prediction architecture. ↘`,

  plain: `--- Chapter 3: Turn-Aware LSTM ---

Q1: What problem does this chapter solve?
Existing trajectory prediction models perform poorly at intersections because they don't understand whether a vehicle is going straight, turning left, or turning right. The prediction error increases significantly during turning maneuvers because the model treats all trajectories the same way.

Q2: What is your method? How does the turn encoding work?
I compute the cumulative heading change over the observed trajectory. If the vehicle's heading has changed more than a threshold — say 15 degrees — I classify it as a left turn or right turn. This is encoded as a one-hot vector and concatenated with the trajectory features before feeding into the LSTM encoder. It's simple, but it gives the model explicit information about the maneuver type.

Q3: Why LSTM and not Transformer?
Actually, I tested both. I included a Tiny Transformer as a baseline. The key point of this chapter is not about which architecture is best — it's about whether adding turn awareness as an inductive bias improves prediction. And the answer is yes, for both LSTM and the small Transformer. The next chapter, Chapter 4, extends this idea to a much larger scale.

Q4: Your dataset is very small — just one intersection. Can this generalize?
That's a fair question. The single intersection was a deliberate choice for controlled validation — to isolate the effect of turn encoding without confounding variables. The generalization question is exactly what Chapter 4 addresses: I took the core idea of encoding road structure and tested it on almost ninety thousand Waymo intersection scenarios. So Chapters 3 and 4 are designed as a progressive pair — proof of concept followed by large-scale validation.

Q5: What are the limitations of this work?
Three main limitations. First, the turn classification uses a fixed heading threshold, which may not generalize to all intersection geometries. Second, the dataset is from a single intersection — though as I mentioned, Chapter 4 addresses this at scale. Third, the model doesn't use any map information — it relies purely on trajectory history. That gap motivated Chapter 4, where I add lane graph conditioning.

Q6: How does this connect to the rest of your thesis?
Chapter 3 is the starting point of my prediction research. It showed that encoding maneuver intent — specifically turns — improves prediction accuracy. But it only encodes WHAT the vehicle is doing, not WHERE it's going relative to the road. Chapter 4 addresses that by adding lane graph conditioning, which gives the model explicit knowledge of lane topology.

Q7: What is FDE and why is it the right metric?
FDE stands for Final Displacement Error — it's the Euclidean distance between the predicted final position and the ground truth final position. It's the standard metric in trajectory prediction because it captures how far off your prediction is at the end of the prediction horizon. I also report ADE — Average Displacement Error — which averages the error over all time steps. Both are widely used in the Waymo and Argoverse benchmarks.

Transition to Ch4:
While turn encoding improved prediction for turning maneuvers, the model still doesn't understand the road structure — lane boundaries, connections, traffic rules. What if we could give the model explicit knowledge of the lane topology? That's what I explore in Chapter 4, where I develop a lane graph conditioning module that works with any prediction architecture.`,

  notes: [
    `这是论文起点——说的时候要有"这是一切的开始"的感觉`,
    `Q4 (小数据集) 是高频问题！必须练到流利，自信地引出Ch4`,
    `数字：15度阈值、15-20% FDE改善、0.30m vs 0.35m at 3s`,
    `过渡到Ch4的段落很重要——练习自然衔接`,
  ],
};

// ─── Chapter 4: Lane Graph Conditioning Q&A ───

PROSODY["ch4_qa"] = {
  annotated: `--- CHAPTER FOUR: LANE GRAPH CONDITIONING --- ///
--- 这是你最强的结果！数字要背到脱口而出 --- ///

[Q1: What problem does this chapter solve?] ///

Vehicles FOLLOW lanes ↘ —
they don't move in FREE SPACE. ↘
But most prediction models //
only look at PAST trajectories //
without understanding //
the ROAD LAYOUT. ↘ ///

This chapter adds LANE STRUCTURE //
as an EXPLICIT input. ↘
The key contribution is that //
the lane conditioning module is //
ARCHITECTURE-AGNOSTIC ↘ —
you can plug it into ANY prediction backbone, ↗
whether it's an LSTM ↗ //
or a TRANSFORMER, ↗
and it CONSISTENTLY improves performance. ↘ ///

[Q2: How does the Waterflow algorithm work?] ///

WATERFLOW is my lane graph extraction method. ↘
Think of it like WATER //
FLOWING along lanes. ↘ ///

Starting from observed lane segments //
near the vehicle, ↗
we TRACE connectivity //
following the lane directions ↘ —
like water flowing DOWNSTREAM. ↘ ///

This gives us a LOCAL subgraph //
of the lane network //
around EACH vehicle, ↘
capturing boundaries, ↗ connections, ↗
and traffic directions. ↘ ///

It's EFFICIENT ↗ //
because we only extract //
the RELEVANT local context, ↗
NOT the entire map. ↘ ///

[Q3: How does the GNN + cross-attention work?] ///

TWO steps. ↘ ///

FIRST, ↗ // a GRAPH NEURAL NETWORK //
encodes the lane topology ↘ —
each lane segment becomes a NODE, ↗
and connections become EDGES. ↘
The GNN PROPAGATES information //
along the graph ↗
so each node UNDERSTANDS //
its neighborhood. ↘ ///

SECOND, ↗ // CROSS-ATTENTION //
lets the trajectory encoder //
ATTEND to the lane features. ↘
The trajectory tokens //
QUERY the lane graph tokens, ↘
so the model LEARNS //
which lanes are RELEVANT //
for each vehicle's FUTURE motion. ↘ ///

This is the KEY ↘ —
the prediction model //
can now SEE the road. ↘ ///

[Q4: What does architecture-agnostic mean?] ///

It means the lane conditioning module //
works REGARDLESS //
of the prediction backbone. ↘ ///

I tested it with BOTH //
LSTM ↗ // and TRANSFORMER architectures, ↘
and BOTH showed //
SIGNIFICANT improvements. ↘ ///

This matters because //
it's not just an improvement //
for ONE specific model ↘ —
it's a GENERAL-PURPOSE module //
that ANY team can adopt. ↘
You don't need to REDESIGN //
your prediction pipeline. ↘
Just PLUG IN the lane module. ↘ ///

[Q5: Walk me through the key numbers.] ///

On EIGHTY-NINE THOUSAND //
Waymo intersection scenarios, ↘
the lane conditioning module improved: ↘ ///

ADE at THREE seconds //
by NINE POINT THREE percent, ↘ ///

minimum ADE at EIGHT seconds //
by TWENTY-SIX POINT SEVEN percent, ↘ ///

minimum FDE at EIGHT seconds //
by THIRTY-TWO POINT SIX percent, ↘ ///

and REDUCED the miss rate //
by FORTY-TWO POINT SEVEN percent. ↘ ///

The improvements are CONSISTENT //
across BOTH LSTM ↗ //
and TRANSFORMER backbones. ↘ ///

The MISS RATE reduction //
is particularly important //
for SAFETY ↘ —
it means the model's BEST prediction //
is much more likely //
to be NEAR the true trajectory. ↘ ///

[Q6: How does this compare to LaneGCN, VectorNet?] ///

Great question. ↘ ///
Methods like LANEGCN ↗ //
and VECTORNET ↗ //
ALSO use lane information, ↘
but they're integrated END-TO-END ↘ —
the lane encoding //
is INSEPARABLE //
from the rest of the architecture. ↘ ///

My approach is DIFFERENT: ↘
the lane conditioning module //
is a STANDALONE component ↗
that can be attached //
to ANY existing prediction model. ↘ ///

This makes it EASIER to adopt ↗
and also allows FAIR comparison //
of what lane information ADDS //
versus the BASE architecture. ↘ ///

[Q7: What are the limitations?] ///

TWO main limitations. ↘ ///
FIRST, ↗ // the method relies on //
HD MAP availability ↘ —
the lane graph comes from //
Waymo's precomputed map data. ↘
In REAL-WORLD deployment, ↗
HD maps may be OUTDATED //
or UNAVAILABLE. ↘ ///

SECOND, ↗ // the current evaluation //
is on INTERSECTION scenarios only. ↘
HIGHWAY ↗ // or UNSTRUCTURED environments ↗
would need DIFFERENT //
lane representations. ↘ ///

These limitations MOTIVATED Chapter FIVE, ↗
where I explore connecting //
prediction scenarios //
to REAL-WORLD road networks. ↘ ///

[Q8: Why Waymo and not Argoverse or nuScenes?] ///

WAYMO Open Motion Dataset //
is one of the LARGEST //
and most DIVERSE //
trajectory prediction benchmarks, ↘
with over A HUNDRED THOUSAND scenarios //
from REAL-WORLD driving //
in SAN FRANCISCO ↗ and PHOENIX. ↘ ///

It provides HIGH-QUALITY HD map data //
with LANE-LEVEL annotations, ↗
which is ESSENTIAL //
for my lane graph approach. ↘ ///

I chose it SPECIFICALLY //
because of the SCALE ↘ —
EIGHTY-NINE THOUSAND //
intersection scenarios //
give STATISTICALLY ROBUST results. ↘`,

  plain: `--- Chapter 4: Lane Graph Conditioning ---

Q1: What problem does this chapter solve?
Vehicles follow lanes — they don't move in free space. But most prediction models only look at past trajectories without understanding the road layout. This chapter adds lane structure as an explicit input. The key contribution is that the lane conditioning module is architecture-agnostic — you can plug it into any prediction backbone, whether it's an LSTM or a Transformer, and it consistently improves performance.

Q2: How does the Waterflow algorithm work?
Waterflow is my lane graph extraction method. Think of it like water flowing along lanes. Starting from observed lane segments near the vehicle, we trace connectivity following the lane directions — like water flowing downstream. This gives us a local subgraph of the lane network around each vehicle, capturing boundaries, connections, and traffic directions. It's efficient because we only extract the relevant local context, not the entire map.

Q3: How does the GNN + cross-attention module work?
Two steps. First, a Graph Neural Network encodes the lane topology — each lane segment becomes a node, and connections become edges. The GNN propagates information along the graph so each node understands its neighborhood. Second, cross-attention lets the trajectory encoder attend to the lane features. The trajectory tokens query the lane graph tokens, so the model learns which lanes are relevant for each vehicle's future motion. This is the key — the prediction model can now 'see' the road.

Q4: What does "architecture-agnostic" mean and why does it matter?
It means the lane conditioning module works regardless of the prediction backbone. I tested it with both LSTM and Transformer architectures, and both showed significant improvements. This matters because it's not just an improvement for one specific model — it's a general-purpose module that any team can adopt. You don't need to redesign your prediction pipeline. Just plug in the lane module.

Q5: Walk me through the key numbers.
On eighty-nine thousand Waymo intersection scenarios, the lane conditioning module improved: ADE at three seconds by nine point three percent, minimum ADE at eight seconds by twenty-six point seven percent, minimum FDE at eight seconds by thirty-two point six percent, and reduced the miss rate by forty-two point seven percent. The improvements are consistent across both LSTM and Transformer backbones. The miss rate reduction is particularly important for safety — it means the model's best prediction is much more likely to be near the true trajectory.

Q6: How does this compare to LaneGCN, VectorNet, and other lane-aware methods?
Methods like LaneGCN and VectorNet also use lane information, but they're integrated end-to-end — the lane encoding is inseparable from the rest of the architecture. My approach is different: the lane conditioning module is a standalone component that can be attached to any existing prediction model. This makes it easier to adopt and also allows fair comparison of what lane information adds versus the base architecture.

Q7: What are the limitations?
Two main limitations. First, the method relies on HD map availability — the lane graph comes from Waymo's precomputed map data. In real-world deployment, HD maps may be outdated or unavailable. Second, the current evaluation is on intersection scenarios only. Highway or unstructured environments would need different lane representations. These limitations motivated Chapter 5, where I explore connecting prediction scenarios to real-world road networks.

Q8: Why Waymo and not Argoverse or nuScenes?
Waymo Open Motion Dataset is one of the largest and most diverse trajectory prediction benchmarks, with over a hundred thousand scenarios from real-world driving in San Francisco and Phoenix. It provides high-quality HD map data with lane-level annotations, which is essential for my lane graph approach. I chose it specifically because of the scale — eighty-nine thousand intersection scenarios give statistically robust results.`,

  notes: [
    `这是你最强的结果！每个数字都要脱口而出`,
    `关键数字练习：EIGHTY-NINE THOUSAND, TWENTY-SIX POINT SEVEN, FORTY-TWO POINT SEVEN`,
    `"ARCHITECTURE-AGNOSTIC" 这个词很长，一个音节一个音节说：AR-CHI-TEC-TURE AG-NOS-TIC`,
    `Q5的数字回答是最重要的——练到能自然说出所有百分比`,
  ],
};

// ─── Chapter 5: WayGraph GPS-Free Localization Q&A ───

PROSODY["ch5_qa"] = {
  annotated: `--- CHAPTER FIVE: WAYGRAPH GPS-FREE LOCALIZATION --- ///

[Q1: What problem does this chapter solve?] ///

The WAYMO Open Motion Dataset //
ANONYMIZES GPS coordinates //
to protect privacy. ↘ ///

This means we KNOW //
a vehicle turned left //
at an intersection, ↗
but we don't know WHICH intersection //
in the REAL WORLD. ↘ ///

This BLOCKS any analysis //
that requires GEOGRAPHIC context ↘ —
like understanding how //
ROAD NETWORK topology //
affects prediction difficulty, ↗
or identifying DANGEROUS intersections //
at the CITY level. ↘ ///

WAYGRAPH solves this //
by MATCHING scenarios //
to real intersections //
WITHOUT GPS. ↘ ///

[Q2: How does the 48D star pattern descriptor work?] ///

Imagine STANDING //
at the CENTER of an intersection ↗
and looking at ALL the roads //
RADIATING outward ↘ —
like a STAR. ↘ ///

I characterize EACH arm //
by its ANGLE, ↗ WIDTH, ↗
number of LANES, ↗
and CONNECTIVITY pattern. ↘ ///

This creates a FORTY-EIGHT DIMENSIONAL //
fingerprint // for EACH intersection. ↘ ///

Then I do the SAME //
for OPENSTREETMAP intersections. ↘
Matching becomes //
a WEIGHTED EUCLIDEAN DISTANCE problem ↘ —
find the OSM intersection //
whose fingerprint is CLOSEST //
to the Waymo scenario's fingerprint. ↘ ///

[Q3: What does 90% top-1 accuracy mean?] ///

It means that for NINETY PERCENT //
of the test scenarios, ↗
my method CORRECTLY identifies //
the EXACT real-world intersection //
on the FIRST try ↘ —
WITHOUT any GPS information. ↘ ///

The baseline approach //
only achieved about //
ZERO POINT FOUR percent. ↘
So my method is //
TWO HUNDRED AND TWENTY-FIVE TIMES //
more accurate // than the baseline. ↘ ///

[Q4: Why is this useful?] ///

THREE things. ↘ ///

FIRST, ↗ // NETWORK-LEVEL safety analysis ↘ —
we can now MAP prediction failures //
to SPECIFIC intersections ↗
and identify which ROAD DESIGNS //
are most DANGEROUS. ↘ ///

SECOND, ↗ // DATA ENRICHMENT ↘ —
once we know the LOCATION, ↗
we can add REAL-WORLD context //
like speed limits, ↗ traffic volume, ↗
and land use. ↘ ///

THIRD, ↗ // TRANSFERABILITY studies ↘ —
we can compare how models PERFORM //
across DIFFERENT cities ↗
and intersection types, ↘
which is IMPOSSIBLE //
with anonymous data. ↘ ///

[Q5: Is this a tool or a research contribution?] ///

BOTH. ↘ ///
The TOOL aspect is practical ↘ —
it unlocks GEOGRAPHIC analysis //
for ANY anonymized dataset. ↘ ///

But the RESEARCH contribution //
is the FORTY-EIGHT DIMENSIONAL //
star pattern descriptor itself. ↘ ///

It's a NOVEL topological representation //
that captures intersection geometry //
at a level SUFFICIENT //
for UNAMBIGUOUS matching. ↘ ///

The NINETY PERCENT accuracy //
demonstrates that //
INTERSECTION TOPOLOGY ALONE ↘ —
without GPS, ↗ //
without satellite imagery ↗ —
is RICH ENOUGH for localization. ↘ ///

[Q6: What are the failure cases?] ///

The main failure mode is //
TOPOLOGICALLY IDENTICAL intersections ↘ —
two intersections //
with the SAME number of arms, ↗
same LANE counts, ↗
and SIMILAR angles. ↘ ///

In a DENSE urban grid //
like parts of SAN FRANCISCO, ↗
many intersections //
look the SAME //
from a topological perspective. ↘ ///

The method handles this //
by using BFS //
to consider MULTI-HOP //
neighborhood patterns, ↘
but some AMBIGUITY remains. ↘
PHOENIX has lower accuracy //
because it has more //
REGULAR grid patterns. ↘ ///

[Q7: How does this connect to Chapters 3 and 4?] ///

Chapters THREE ↗ and FOUR ↗
work at the SCENARIO level ↘ —
predicting INDIVIDUAL trajectories //
at INDIVIDUAL intersections. ↘ ///

But they CAN'T answer questions like: ↗
Which TYPES of intersections //
produce the WORST predictions? ↘
Or: ↗ Are certain ROAD DESIGNS //
more DANGEROUS? ↘ ///

Chapter FIVE BRIDGES the gap //
from SCENARIO-level ↗ //
to NETWORK-level ↘
by localizing EACH scenario //
on the REAL road network. ↘`,

  plain: `--- Chapter 5: WayGraph GPS-Free Localization ---

Q1: What problem does this chapter solve?
The Waymo Open Motion Dataset anonymizes GPS coordinates to protect privacy. This means we know a vehicle turned left at an intersection, but we don't know WHICH intersection in the real world. This blocks any analysis that requires geographic context — like understanding how road network topology affects prediction difficulty, or identifying dangerous intersections at the city level. WayGraph solves this by matching scenarios to real intersections without GPS.

Q2: How does the 48D star pattern descriptor work?
Imagine standing at the center of an intersection and looking at all the roads radiating outward — like a star. I characterize each arm by its angle, width, number of lanes, and connectivity pattern. This creates a 48-dimensional fingerprint for each intersection. Then I do the same for OpenStreetMap intersections. Matching becomes a weighted Euclidean distance problem — find the OSM intersection whose fingerprint is closest to the Waymo scenario's fingerprint.

Q3: What does 90% top-1 accuracy mean?
It means that for ninety percent of the test scenarios, my method correctly identifies the exact real-world intersection on the first try — without any GPS information. The baseline approach only achieved about zero point four percent. So my method is two hundred and twenty-five times more accurate than the baseline.

Q4: Why is this useful? What can you do with localized scenarios?
Three things. First, network-level safety analysis — we can now map prediction failures to specific intersections and identify which road designs are most dangerous. Second, data enrichment — once we know the location, we can add real-world context like speed limits, traffic volume, and land use. Third, transferability studies — we can compare how models perform across different cities and intersection types, which is impossible with anonymous data.

Q5: Is this a tool or a research contribution?
Both. The tool aspect is practical — it unlocks geographic analysis for any anonymized dataset. But the research contribution is the 48-dimensional star pattern descriptor itself. It's a novel topological representation that captures intersection geometry at a level sufficient for unambiguous matching. The ninety percent accuracy demonstrates that intersection topology alone — without GPS, without satellite imagery — is rich enough for localization.

Q6: What are the failure cases?
The main failure mode is topologically identical intersections — two intersections with the same number of arms, same lane counts, and similar angles. In a dense urban grid like parts of San Francisco, many intersections look the same from a topological perspective. The method handles this by using BFS to consider multi-hop neighborhood patterns, but some ambiguity remains. Phoenix has lower accuracy because it has more regular grid patterns.

Q7: How does this connect to Chapters 3 and 4?
Chapters 3 and 4 work at the scenario level — predicting individual trajectories at individual intersections. But they can't answer questions like: 'Which types of intersections produce the worst predictions?' or 'Are certain road designs more dangerous?' Chapter 5 bridges the gap from scenario-level to network-level by localizing each scenario on the real road network.`,

  notes: [
    `数字练到脱口而出：NINETY PERCENT, 48D, 225x, 56K scenarios`,
    `Q5 (tool vs research) committee很可能会问！练到流利`,
    `"star pattern descriptor" 是核心概念——用手势比划星形帮助表达`,
    `San Francisco vs Phoenix的对比能展示你对结果的深入理解`,
  ],
};

// ─── Chapter 6: Spatial Attention Visualization Q&A ───

PROSODY["ch6_qa"] = {
  annotated: `--- CHAPTER SIX: ATTENTION VISUALIZATION --- ///
--- 最有故事性的一章 --- ///

[Q1: What problem does this chapter solve?] ///

TRANSFORMER-based prediction models //
are BLACK BOXES. ↘ ///

They achieve good AVERAGE performance, ↗
but when they FAIL ↘ —
ESPECIALLY for vulnerable road users //
like CYCLISTS ↗ and PEDESTRIANS ↗ —
we don't understand WHY. ↘ ///

This chapter develops //
a SPATIAL ATTENTION //
VISUALIZATION framework //
that lets us LITERALLY see //
what the model is PAYING ATTENTION to, ↗
and more importantly, ↗
what it's IGNORING. ↘ ///

[Q2: What is tunnel vision?] ///

TUNNEL VISION is a failure mode //
I DISCOVERED ↗ //
by comparing attention patterns //
between SUCCESSFUL ↗ //
and FAILED predictions. ↘ ///

When the model FAILS, ↗
its attention is more CONCENTRATED ↘ —
LOWER entropy, ↘
meaning it focuses TOO NARROWLY //
on a FEW agents //
while IGNORING others. ↘ ///

SUCCESSFUL predictions //
have HIGHER entropy ↘ —
the model distributes attention //
more BROADLY. ↘ ///

The specific numbers: ↗
failed predictions have //
attention entropy of FIVE POINT SEVEN TWO ↗
versus FIVE POINT NINE FOUR //
for successful ones. ↘ ///

It's like the model develops //
TUNNEL VISION //
when it's about to make a MISTAKE. ↘ ///

[Q3: Tell me about the VRU attention gap.] ///

This is perhaps //
the most CONCERNING finding. ↘ ///

Vulnerable road users ↘ —
CYCLISTS ↗ and PEDESTRIANS ↗ —
receive about SIXTY PERCENT //
LESS attention // than vehicles. ↘ ///

For CYCLISTS specifically, ↗
the miss rate is //
EIGHTY-EIGHT POINT ONE percent, ↘
meaning the model's best prediction //
MISSES the true trajectory //
almost NINE TIMES out of TEN. ↘ ///

This is a SAFETY problem ↘ —
because THESE are exactly //
the road users //
MOST AT RISK // in real traffic. ↘ ///

The model is ESSENTIALLY learning //
that VEHICLES matter MORE, ↘
which reflects a DATASET BIAS ↘ —
there are FAR more vehicle trajectories //
than cyclist trajectories // in Waymo. ↘ ///

[Q4: What is counterfactual analysis?] ///

COUNTERFACTUAL analysis means //
I SYSTEMATICALLY REMOVE agents //
from the scene ↗
and OBSERVE how predictions change. ↘ ///

If removing AGENT X //
causes the prediction for AGENT Y //
to change DRAMATICALLY, ↗
it means the model //
RELIES HEAVILY on X //
for predicting Y. ↘ ///

This revealed that //
the model's predictions for VEHICLES //
are ROBUST ↘ —
removing nearby agents //
has MINIMAL effect. ↘ ///

But for CYCLISTS, ↗
removing even ONE nearby vehicle //
can cause the prediction //
to shift SIGNIFICANTLY. ↘
This CONFIRMS the attention imbalance. ↘ ///

[Q5: Does this actually help improve models?] ///

That's an IMPORTANT distinction. ↘ ///

The visualization framework //
is a DIAGNOSTIC tool, ↗
NOT a direct model improvement. ↘
It identifies WHERE ↗ //
and WHY // models fail. ↘ ///

The contributions are: ↗
FIRST, ↗ // a REUSABLE methodology framework //
for attention analysis //
in ANY Transformer predictor. ↘ ///

SECOND, ↗ // the DISCOVERY //
of the tunnel vision failure mode. ↘ ///

THIRD, ↗ // QUANTIFICATION //
of the VRU safety gap. ↘ ///

These findings INFORM //
future model design ↘ —
for example, ↗
attention REGULARIZATION, ↗
VRU-specific loss WEIGHTING, ↗
or BALANCED sampling strategies. ↘ ///

[Q6: Why MTR-Lite and not the full MTR?] ///

MTR-LITE has //
EIGHT POINT FOUR EIGHT MILLION parameters ↘ —
it's a SMALLER version //
that's computationally FEASIBLE //
for the attention analysis pipeline. ↘ ///

Full MTR is MUCH larger ↗
and the attention extraction //
would be PROHIBITIVELY expensive //
across the entire dataset. ↘ ///

The important point is that //
MTR-LITE uses the SAME //
Transformer architecture ↘ —
FOUR encoder layers ↗ //
and FOUR decoder layers ↗ —
so the attention patterns //
are REPRESENTATIVE. ↘ ///

[Q7: How does this connect to Chapter 7?] ///

The attention analysis in Chapter SIX //
REVEALS that prediction quality //
depends HEAVILY //
on the quality of INPUT DETECTIONS. ↘ ///

If a CYCLIST is poorly detected ↗
or MISSED entirely //
at the PERCEPTION stage, ↗
the prediction model //
NEVER even gets a chance //
to attend to it. ↘ ///

This MOTIVATED Chapter SEVEN, ↗
where I work on //
improving UPSTREAM perception quality //
through DUAL-CAMERA LIDAR FUSION ↘ —
reducing FALSE POSITIVES ↗
and improving detection //
of partially OCCLUDED objects. ↘`,

  plain: `--- Chapter 6: Spatial Attention Visualization ---

Q1: What problem does this chapter solve?
Transformer-based prediction models are black boxes. They achieve good average performance, but when they fail — especially for vulnerable road users like cyclists and pedestrians — we don't understand why. This chapter develops a spatial attention visualization framework that lets us literally see what the model is paying attention to, and more importantly, what it's ignoring.

Q2: What is "tunnel vision" and how did you discover it?
Tunnel vision is a failure mode I discovered by comparing attention patterns between successful and failed predictions. When the model fails, its attention is more concentrated — lower entropy, meaning it focuses too narrowly on a few agents while ignoring others. Successful predictions have higher entropy — the model distributes attention more broadly. The specific numbers: failed predictions have attention entropy of five point seven two versus five point nine four for successful ones. It's like the model develops tunnel vision when it's about to make a mistake.

Q3: Tell me about the VRU attention gap.
This is perhaps the most concerning finding. Vulnerable road users — cyclists and pedestrians — receive about sixty percent less attention than vehicles. For cyclists specifically, the miss rate is eighty-eight point one percent, meaning the model's best prediction misses the true trajectory almost nine times out of ten. This is a safety problem because these are exactly the road users most at risk in real traffic. The model is essentially learning that vehicles matter more, which reflects a dataset bias — there are far more vehicle trajectories than cyclist trajectories in Waymo.

Q4: What is counterfactual analysis and what did it reveal?
Counterfactual analysis means I systematically remove agents from the scene and observe how predictions change. If removing agent X causes the prediction for agent Y to change dramatically, it means the model relies heavily on X for predicting Y. This revealed that the model's predictions for vehicles are robust — removing nearby agents has minimal effect. But for cyclists, removing even one nearby vehicle can cause the prediction to shift significantly. This confirms the attention imbalance.

Q5: Does this visualization actually help improve models?
That's an important distinction. The visualization framework is a diagnostic tool, not a direct model improvement. It identifies WHERE and WHY models fail. The contributions are: first, a reusable methodology framework for attention analysis in any Transformer predictor; second, the discovery of the tunnel vision failure mode; third, quantification of the VRU safety gap. These findings inform future model design — for example, attention regularization, VRU-specific loss weighting, or balanced sampling strategies.

Q6: Why MTR-Lite and not the full MTR model?
MTR-Lite has eight point four eight million parameters — it's a smaller version that's computationally feasible for the attention analysis pipeline. Full MTR is much larger and the attention extraction would be prohibitively expensive across the entire dataset. The important point is that MTR-Lite uses the same Transformer architecture — four encoder layers and four decoder layers — so the attention patterns are representative.

Q7: How does this connect to Chapter 7?
The attention analysis in Chapter 6 reveals that prediction quality depends heavily on the quality of input detections. If a cyclist is poorly detected or missed entirely at the perception stage, the prediction model never even gets a chance to attend to it. This motivated Chapter 7, where I work on improving upstream perception quality through dual-camera LiDAR fusion — reducing false positives and improving detection of partially occluded objects.`,

  notes: [
    `最有故事性！用"tunnel vision"和VRU gap讲一个安全故事`,
    `"SIXTY PERCENT less attention" + "EIGHTY-EIGHT POINT ONE percent miss rate" 是最震撼的数字`,
    `Q3的VRU gap回答最适合讲故事——练到能自然说出来，带感情`,
    `entropy数字 5.72 vs 5.94 不需要每次都说，但要知道`,
  ],
};

// ─── Chapter 7: Dual-Camera LiDAR Fusion Q&A ───

PROSODY["ch7_qa"] = {
  annotated: `--- CHAPTER SEVEN: DUAL-CAMERA LIDAR FUSION --- ///

[Q1: What problem does this chapter solve?] ///

SINGLE-SENSOR 3D detection //
has FUNDAMENTAL limitations. ↘ ///

LIDAR is accurate in 3D ↗
but produces FALSE POSITIVES, ↗
especially for DISTANT //
or SMALL objects. ↘ ///

CAMERAS provide rich VISUAL context ↗
but LACK depth. ↘ ///

This chapter FUSES LiDAR //
with TWO cameras ↘ —
a FORWARD-FACING camera ↗
and a DRONE-VIEW camera ↗ —
to CROSS-VALIDATE detections //
and REDUCE false positives. ↘ ///

The key finding is that //
SYMMETRIC fusion ↘ —
treating BOTH camera views EQUALLY ↘ —
OUTPERFORMS asymmetric approaches. ↘ ///

[Q2: What is symmetric late fusion?] ///

LATE FUSION means //
each sensor has its OWN //
detection pipeline ↘ —
POINTPILLAR processes LiDAR, ↗
YOLOV8 processes each camera ↗ —
and the detections are FUSED //
at the OUTPUT level. ↘ ///

SYMMETRIC means //
BOTH camera views //
are treated with EQUAL weight //
in the fusion. ↘ ///

The SYMMETRIC approach //
consistently performs BETTER ↘
because each viewpoint provides //
COMPLEMENTARY information ↘ —
the FORWARD camera //
sees the scene //
from the DRIVER'S perspective ↗
while the DRONE camera //
provides a TOP-DOWN overview. ↘ ///

[Q3: Why CARLA simulation and not real data?] ///

THREE reasons. ↘ ///

FIRST, ↗ // getting PERFECTLY synchronized //
dual-camera plus LiDAR data //
from REAL vehicles //
is extremely EXPENSIVE //
and DIFFICULT. ↘ ///

SECOND, ↗ // CARLA gives us //
PERFECT ground truth labels ↘ —
we know EXACTLY //
where every object is, ↘
which is ESSENTIAL //
for rigorous evaluation. ↘ ///

THIRD, ↗ // simulation lets us //
SYSTEMATICALLY control variables ↘
like WEATHER, ↗ //
TRAFFIC DENSITY, ↗ //
and OCCLUSION levels. ↘ ///

The STATISTICAL significance ↘ —
P equals ZERO POINT ZERO ZERO ONE //
across TEN random seeds ↘ —
gives CONFIDENCE in the findings. ↘ ///

REAL-WORLD validation //
is clearly important //
FUTURE WORK, ↗
but the CONTROLLED simulation results //
establish the CONCEPT. ↘ ///

[Q4: Isn't a drone camera impractical?] ///

That's a VALID concern. ↘ ///

The DRONE camera in this study //
represents an ELEVATED viewpoint ↘ —
it could be implemented //
in REAL deployment ↗
as a ROOFTOP camera, ↗
an INFRASTRUCTURE-mounted camera, ↗
or even V2X communication //
from TRAFFIC cameras. ↘ ///

The KEY insight //
is NOT about drones specifically ↘ —
it's that a SECOND viewpoint //
from a DIFFERENT angle //
SIGNIFICANTLY reduces //
false positives. ↘ ///

[Q5: Walk me through the numbers.] ///

Starting from the LIDAR-ONLY baseline: ↘
precision was //
SIXTY-SIX POINT ONE percent ↗
with mAP of //
TWENTY POINT EIGHT ONE. ↘ ///

After SYMMETRIC dual-camera fusion: ↘
precision INCREASED //
to SIXTY-NINE POINT TWO percent ↗
and mAP increased //
by ZERO POINT NINE TWO //
percentage points ↘ —
a FOUR POINT FOUR PERCENT //
relative improvement. ↘ ///

MOST importantly, ↗
FALSE POSITIVES //
dropped by THIRTEEN percent. ↘ ///

ALL results are consistent //
across TEN random seeds ↗
with a P-VALUE //
of ZERO POINT ZERO ZERO ONE. ↘ ///

[Q6: PointPillar is old — why not newer detectors?] ///

POINTPILLAR was chosen //
DELIBERATELY //
as a LIGHTWEIGHT baseline //
that's WELL-UNDERSTOOD. ↘ ///

The goal of this chapter //
is NOT to push //
STATE-OF-THE-ART //
in 3D detection ↘ —
it's to DEMONSTRATE //
that multi-view symmetric fusion //
CONSISTENTLY reduces //
false positives. ↘ ///

The fusion framework //
is DETECTOR-AGNOSTIC ↘ —
you could swap in CENTERPOINT, ↗
SECOND, ↗ // or any OTHER detector. ↘ ///

Using POINTPILLAR //
makes the contribution CLEARER: ↘
the improvement comes //
from the FUSION strategy, ↗
NOT from a better base detector. ↘ ///

[Q7: What are the limitations?] ///

THREE limitations. ↘ ///

FIRST, ↗ // ALL data is simulated ↘ —
CARLA's sensor models //
may NOT perfectly replicate //
real-world NOISE and artifacts. ↘ ///

SECOND, ↗ // the evaluation is //
on a SINGLE CARLA town //
with LIMITED diversity. ↘ ///

THIRD, ↗ // LATE FUSION //
is computationally MORE expensive //
than single-sensor detection ↘
because you run //
THREE detection pipelines //
in PARALLEL. ↘ ///

That said, ↗ //
the computational overhead //
is MANAGEABLE for modern AV hardware, ↗
and the SAFETY benefit //
of reduced false positives //
JUSTIFIES the cost. ↘ ///

[Q8: How does this close the loop?] ///

Chapter SEVEN //
CLOSES the full loop //
of my thesis. ↘ ///

Chapters THREE ↗ and FOUR ↗ //
improved PREDICTION accuracy. ↘ ///

Chapter FIVE //
CONNECTED predictions //
to real ROAD NETWORKS. ↘ ///

Chapter SIX //
REVEALED that prediction quality //
depends on PERCEPTION quality ↘ —
specifically, ↗ //
the VRU attention gap //
is PARTLY caused //
by poor UPSTREAM detections. ↘ ///

Chapter SEVEN //
ADDRESSES this //
by improving the PERCEPTION stage itself. ↘ ///

Together, ↗ //
the FIVE chapters //
cover the full pipeline //
from PERCEPTION ↗ //
to PREDICTION ↗ //
to INTERPRETABILITY, ↘
unified by the goal //
of improving SAFETY //
in MIXED-TRAFFIC environments. ↘`,

  plain: `--- Chapter 7: Dual-Camera LiDAR Fusion ---

Q1: What problem does this chapter solve?
Single-sensor 3D detection has fundamental limitations. LiDAR is accurate in 3D but produces false positives, especially for distant or small objects. Cameras provide rich visual context but lack depth. This chapter fuses LiDAR with TWO cameras — a forward-facing camera and a drone-view camera — to cross-validate detections and reduce false positives. The key finding is that symmetric fusion — treating both camera views equally — outperforms asymmetric approaches.

Q2: What is "symmetric late fusion"?
Late fusion means each sensor has its own detection pipeline — PointPillar processes LiDAR, YOLOv8 processes each camera — and the detections are fused at the output level. Symmetric means both camera views are treated with equal weight in the fusion. The symmetric approach consistently performs better because each viewpoint provides complementary information — the forward camera sees the scene from the driver's perspective while the drone camera provides a top-down overview.

Q3: Why CARLA simulation and not real data?
Three reasons. First, getting perfectly synchronized dual-camera plus LiDAR data from real vehicles is extremely expensive and difficult. Second, CARLA gives us perfect ground truth labels — we know exactly where every object is, which is essential for rigorous evaluation. Third, simulation lets us systematically control variables like weather, traffic density, and occlusion levels. The statistical significance — p equals zero point zero zero one across ten random seeds — gives confidence in the findings. Real-world validation is clearly important future work, but the controlled simulation results establish the concept.

Q4: Isn't a drone camera impractical for real vehicles?
That's a valid concern. The drone camera in this study represents an elevated viewpoint — it could be implemented in real deployment as a rooftop camera, an infrastructure-mounted camera, or even V2X communication from traffic cameras. The key insight is not about drones specifically — it's that a second viewpoint from a different angle significantly reduces false positives.

Q5: Walk me through the numbers.
Starting from the LiDAR-only baseline: precision was sixty-six point one percent with mAP of twenty point eight one. After symmetric dual-camera fusion: precision increased to sixty-nine point two percent and mAP increased by zero point nine two percentage points — a four point four percent relative improvement. Most importantly, false positives dropped by thirteen percent. All results are consistent across ten random seeds with a p-value of zero point zero zero one.

Q6: PointPillar is old — why not use newer detectors?
PointPillar was chosen deliberately as a lightweight baseline that's well-understood. The goal of this chapter is not to push state-of-the-art in 3D detection — it's to demonstrate that multi-view symmetric fusion consistently reduces false positives. The fusion framework is detector-agnostic — you could swap in CenterPoint, SECOND, or any other detector. Using PointPillar makes the contribution clearer: the improvement comes from the fusion strategy, not from a better base detector.

Q7: What are the limitations?
Three limitations. First, all data is simulated — CARLA's sensor models may not perfectly replicate real-world noise and artifacts. Second, the evaluation is on a single CARLA town with limited diversity. Third, late fusion is computationally more expensive than single-sensor detection because you run three detection pipelines in parallel. That said, the computational overhead is manageable for modern AV hardware, and the safety benefit of reduced false positives justifies the cost.

Q8: How does this close the loop with the rest of the thesis?
Chapter 7 closes the full loop of my thesis. Chapters 3 and 4 improved prediction accuracy. Chapter 5 connected predictions to real road networks. Chapter 6 revealed that prediction quality depends on perception quality — specifically, the VRU attention gap is partly caused by poor upstream detections. Chapter 7 addresses this by improving the perception stage itself. Together, the five chapters cover the full pipeline from perception to prediction to interpretability, unified by the goal of improving safety in mixed-traffic environments.`,

  notes: [
    `Q3 (为什么用仿真) committee必问！准备好"三个原因"的回答`,
    `Q4 (无人机不实际) 也很可能被问——重点是"elevated viewpoint"不是无人机本身`,
    `数字：precision 66.1%→69.2%, FP -13%, p=0.001, 10 seeds`,
    `Q8 闭环回答是整个论文的总结——练到3分钟内流利说完`,
  ],
};

// ─── Cross-Chapter & High-Level Defense Q&A ───

PROSODY["cross_chapter_qa"] = {
  annotated: `--- CROSS-CHAPTER: HIGH-LEVEL DEFENSE Q&A --- ///
--- Committee 最爱问的大问题 --- ///

[Q1: What is the unified contribution of your thesis?] ///

My thesis presents FIVE studies //
that address KEY challenges //
across the autonomous driving stack. ↘ ///

The unifying theme is //
MULTI-SCALE DEEP LEARNING //
for SAFER autonomous driving //
in MIXED-TRAFFIC environments. ↘ ///

MULTI-SCALE refers to //
BOTH spatial scales ↘ —
from INDIVIDUAL trajectory prediction ↗ //
to NETWORK-LEVEL analysis ↘ —
AND to pipeline scales ↘ —
from PERCEPTION ↗ //
to PREDICTION ↗ //
to INTERPRETABILITY. ↘ ///

Each chapter FILLS a gap //
left by the PREVIOUS one, ↗
forming a COHERENT research arc ↗
rather than FIVE independent papers. ↘ ///

[Q2: How do the five chapters connect?] ///

They form a CLEAR //
research PROGRESSION. ↘ ///

Chapter THREE showed that //
encoding TURN INTENT //
improves prediction ↘ —
but the model had //
NO road structure knowledge. ↘ ///

Chapter FOUR addressed that //
with LANE GRAPH conditioning //
on NINETY THOUSAND //
Waymo scenarios ↘ —
but Waymo's GPS is ANONYMIZED. ↘ ///

Chapter FIVE solved //
the LOCALIZATION problem //
with NINETY PERCENT accuracy ↘ —
but the prediction model itself //
remained a BLACK BOX. ↘ ///

Chapter SIX OPENED the black box //
through ATTENTION VISUALIZATION ↗
and discovered //
the TUNNEL VISION problem ↗ //
and VRU ATTENTION GAP ↘ —
revealing that PREDICTION quality //
depends on PERCEPTION quality. ↘ ///

Chapter SEVEN CLOSED the loop //
by improving UPSTREAM perception //
through SENSOR FUSION. ↘ ///

EACH chapter was motivated //
by a GAP // left by the previous one. ↘ ///

[Q3: What would you do differently?] ///

TWO things. ↘ ///

FIRST, ↗ // I would start //
with an END-TO-END system //
from the BEGINNING ↗
rather than developing //
each component SEPARATELY. ↘ ///

The MODULAR approach //
was necessary for a thesis ↘ —
each chapter needs to be //
a SELF-CONTAINED contribution ↘ —
but in practice, ↗
JOINTLY training //
perception and prediction //
could achieve BETTER results. ↘ ///

SECOND, ↗ // I would invest more //
in REAL-WORLD data collection //
EARLIER. ↘ ///

Chapter SEVEN uses simulation, ↗
which is VALID //
for concept validation, ↗
but REAL-WORLD experiments //
would strengthen the conclusions //
SIGNIFICANTLY. ↘ ///

[Q4: What is the practical impact?] ///

THREE levels of practical impact. ↘ ///

At the MODEL level, ↗
the lane conditioning module //
from Chapter FOUR //
is a PLUG-AND-PLAY component //
that ANY team can adopt //
to improve their prediction pipeline. ↘ ///

At the DIAGNOSTIC level, ↗
the attention visualization framework //
from Chapter SIX //
provides a REUSABLE tool //
for identifying SAFETY blind spots //
in ANY Transformer-based system. ↘ ///

At the SYSTEM level, ↗
the thesis demonstrates //
that addressing //
prediction accuracy, ↗ //
road context, ↗ //
model transparency, ↗ //
and perception quality ↗ //
TOGETHER ↘ —
not in ISOLATION ↘ —
is ESSENTIAL for safe //
autonomous driving. ↘ ///

[Q5: How does your work compare to industry?] ///

INDUSTRY systems //
like WAYMO'S MultiPath++ ↗
or TESLA'S Autopilot ↗
operate at a DIFFERENT scale //
with proprietary data and compute. ↘ ///

My contributions are //
at the RESEARCH METHODOLOGY level ↘ —
for example, ↗
the ARCHITECTURE-AGNOSTIC //
lane conditioning idea //
could be incorporated //
into ANY production system. ↘ ///

The VRU ATTENTION GAP finding //
is relevant to //
ANY deployed system. ↘ ///

I don't claim to COMPETE //
with industry //
in SYSTEM performance ↘ —
my contribution is in //
UNDERSTANDING and METHODOLOGY //
that industry can ADOPT. ↘ ///

[Q6: Why MDPI Sustainability for four papers?] ///

MDPI Sustainability //
has a STRONG track record //
in TRANSPORTATION //
and SMART MOBILITY research. ↘ ///

The journal's scope //
ALIGNS well //
with the SAFETY //
and SUSTAINABILITY aspects //
of autonomous driving. ↘ ///

The choice was made //
in consultation with //
my SUPERVISOR. ↘
All four papers present //
COMPLETE, ↗ RIGOROUS studies ↗
with comprehensive experiments ↗
and statistical VALIDATION. ↘ ///

[Q7: What are the overall limitations?] ///

THREE overarching limitations. ↘ ///

FIRST, ↗ // the perception //
and prediction components //
are NOT jointly trained ↘ —
they're studied as SEPARATE modules, ↗
which may miss //
END-TO-END optimization opportunities. ↘ ///

SECOND, ↗ // Chapter SEVEN //
relies ENTIRELY on simulated data, ↗
which limits claims //
about REAL-WORLD generalization. ↘ ///

THIRD, ↗ // the attention visualization //
in Chapter SIX //
is CORRELATIONAL, ↗
NOT causal ↘ —
we OBSERVE that failed predictions //
have LOWER entropy, ↗
but we HAVEN'T proven //
that higher entropy //
CAUSES better predictions. ↘ ///

These limitations //
are HONESTLY discussed //
in Chapter EIGHT ↗
and they define CLEAR directions //
for FUTURE work. ↘ ///

[Q8: What is your future work plan?] ///

FIVE concrete directions. ↘ ///

FIRST, ↗ // END-TO-END integration //
of perception and prediction //
with DIFFERENTIABLE rendering. ↘ ///

SECOND, ↗ // ATTENTION REGULARIZATION //
guided by the TUNNEL VISION findings ↘ —
FORCING models //
to distribute attention //
more EVENLY to VRUs. ↘ ///

THIRD, ↗ // REAL-WORLD validation //
of the fusion approach //
on a PHYSICAL sensor setup. ↘ ///

FOURTH, ↗ // extending WAYGRAPH //
to OTHER anonymized datasets //
beyond Waymo. ↘ ///

FIFTH, ↗ // developing //
ACTIVE LEARNING strategies //
that specifically TARGET //
underrepresented scenarios //
like CYCLIST interactions. ↘ ///

These are NOT vague ideas ↘ —
EACH one DIRECTLY addresses //
a limitation identified //
in the thesis. ↘ ///

--- Emergency Phrases --- ///

That's a GREAT question. ↘
Let me THINK about that //
for a moment... ↘ ///

I HAVEN'T investigated //
that specific aspect, ↗
but BASED on my understanding... ↘ ///

You raise a VALID point. ↘
I ACKNOWLEDGE that limitation //
in Chapter EIGHT. ↘ ///

I AGREE that's a limitation. ↘
If I were to ADDRESS it, ↗
I would... ↘`,

  plain: `--- Cross-Chapter: High-Level Defense Q&A ---

Q1: What is the unified contribution of your thesis?
My thesis presents five studies that address key challenges across the autonomous driving stack. The unifying theme is multi-scale deep learning for safer autonomous driving in mixed-traffic environments. 'Multi-scale' refers to both spatial scales — from individual trajectory prediction to network-level analysis — and to pipeline scales — from perception to prediction to interpretability. Each chapter fills a gap left by the previous one, forming a coherent research arc rather than five independent papers.

Q2: How do the five chapters connect? Is this a coherent thesis or five separate papers?
They form a clear research progression. Chapter 3 showed that encoding turn intent improves prediction — but the model had no road structure knowledge. Chapter 4 addressed that with lane graph conditioning on ninety thousand Waymo scenarios — but Waymo's GPS is anonymized. Chapter 5 solved the localization problem with ninety percent accuracy — but the prediction model itself remained a black box. Chapter 6 opened the black box through attention visualization and discovered the tunnel vision problem and VRU attention gap — revealing that prediction quality depends on perception quality. Chapter 7 closed the loop by improving upstream perception through sensor fusion. Each chapter was motivated by a gap left by the previous one.

Q3: What would you do differently if you started over?
Two things. First, I would start with an end-to-end system from the beginning rather than developing each component separately. The modular approach was necessary for a thesis — each chapter needs to be a self-contained contribution — but in practice, jointly training perception and prediction could achieve better results. Second, I would invest more in real-world data collection earlier. Chapter 7 uses simulation, which is valid for concept validation, but real-world experiments would strengthen the conclusions significantly.

Q4: What is the practical impact of your research?
Three levels of practical impact. At the model level, the lane conditioning module from Chapter 4 is a plug-and-play component that any team can adopt to improve their prediction pipeline. At the diagnostic level, the attention visualization framework from Chapter 6 provides a reusable tool for identifying safety blind spots in any Transformer-based system. At the system level, the thesis demonstrates that addressing prediction accuracy, road context, model transparency, and perception quality together — not in isolation — is essential for safe autonomous driving.

Q5: How does your work compare to industry systems like Waymo's or Tesla's?
Industry systems like Waymo's MultiPath++ or Tesla's Autopilot operate at a different scale with proprietary data and compute. My contributions are at the research methodology level — for example, the architecture-agnostic lane conditioning idea could be incorporated into any production system. The VRU attention gap finding is relevant to any deployed system. I don't claim to compete with industry in system performance — my contribution is in understanding and methodology that industry can adopt.

Q6: Why MDPI Sustainability for four papers?
MDPI Sustainability has a strong track record in transportation and smart mobility research. The journal's scope aligns well with the safety and sustainability aspects of autonomous driving. The choice was made in consultation with my supervisor. All four papers present complete, rigorous studies with comprehensive experiments and statistical validation.

Q7: What are the overall limitations of your thesis?
Three overarching limitations. First, the perception and prediction components are not jointly trained — they're studied as separate modules, which may miss end-to-end optimization opportunities. Second, Chapter 7 relies entirely on simulated data, which limits claims about real-world generalization. Third, the attention visualization in Chapter 6 is correlational, not causal — we observe that failed predictions have lower entropy, but we haven't proven that higher entropy causes better predictions. These limitations are honestly discussed in Chapter 8 and they define clear directions for future work.

Q8: What is your future work plan?
Five concrete directions. First, end-to-end integration of perception and prediction with differentiable rendering. Second, attention regularization guided by the tunnel vision findings — forcing models to distribute attention more evenly to VRUs. Third, real-world validation of the fusion approach on a physical sensor setup. Fourth, extending WayGraph to other anonymized datasets beyond Waymo. Fifth, developing active learning strategies that specifically target underrepresented scenarios like cyclist interactions. These are not vague ideas — each one directly addresses a limitation identified in the thesis.

Emergency Phrases:
- "That's a great question. Let me think about that for a moment..."
- "I haven't investigated that specific aspect, but based on my understanding..."
- "You raise a valid point. I acknowledge that limitation in Chapter 8..."
- "I agree that's a limitation. If I were to address it, I would..."`,

  notes: [
    `Q2 是最重要的回答！必须练到3分钟内流利说完——五章连接的narrative`,
    `Q1 的 "multi-scale" 主题要说得有力——空间尺度+pipeline尺度`,
    `Emergency phrases 背到自动反应——被问到不会的问题时的救命句`,
    `Q3 "what would you do differently" 要诚实但不自贬——展示反思能力`,
  ],
};

// ─── Waabi Technical: Perception & Prediction ───

PROSODY["waabi_tech_perception"] = {
  annotated: `--- WAABI TECHNICAL: PERCEPTION & PREDICTION --- ///

[Explain PointPillars. Why is it popular?] ///

POINTPILLARS converts //
raw LIDAR points //
into a PSEUDO-IMAGE ↘
by creating VERTICAL PILLARS //
in a 2D grid. ↘ ///

Each pillar AGGREGATES //
point features //
using a simplified POINTNET. ↘ ///

The pseudo-image //
is then processed //
by a standard 2D CNN backbone. ↘ ///

It's popular because it's FAST ↘ —
it avoids expensive //
3D convolutions ↗ —
and achieves COMPETITIVE accuracy. ↘
I USED it in my thesis Chapter SEVEN //
as the LiDAR detection backbone. ↘ ///

[What is BEV and why is it important?] ///

BEV is a TOP-DOWN representation //
of the driving scene. ↘ ///

It's important because it provides //
a UNIFIED coordinate space ↗
where LIDAR, ↗ CAMERA, ↗
and MAP information //
can be NATURALLY fused. ↘ ///

In BEV space, ↗
object sizes are CONSISTENT //
regardless of distance ↘ —
UNLIKE perspective images ↗
where far objects appear SMALL. ↘ ///

Most modern AV perception systems, ↗
including BEVFUSION ↗ //
and BEVFORMER, ↗ //
work in BEV space. ↘ ///

[Early fusion, late fusion, deep fusion?] ///

EARLY fusion combines //
raw sensor data //
BEFORE any processing ↘ —
like CONCATENATING //
LiDAR points //
with camera RGB values. ↘ ///

LATE fusion runs //
INDEPENDENT detection pipelines //
per sensor ↗
and fuses the OUTPUT detections ↘ —
this is what I used //
in CHAPTER SEVEN. ↘ ///

DEEP fusion INJECTS features //
from one modality into another //
at INTERMEDIATE network layers. ↘ ///

Each has trade-offs: ↗
early fusion is SIMPLE but noisy, ↗
late fusion is MODULAR //
but misses cross-modal interactions, ↗
deep fusion is POWERFUL //
but COMPLEX to train. ↘ ///

[What is the trajectory prediction problem?] ///

Given the OBSERVED positions //
of an agent //
over the past T time steps, ↗
PREDICT where it will be //
for the NEXT T-prime time steps. ↘ ///

Modern methods ALSO use //
MAP context, ↗
SOCIAL interactions //
between agents, ↗
and TRAFFIC signals. ↘ ///

The challenge is MULTI-MODALITY ↘ —
a vehicle at an intersection //
could go STRAIGHT, ↗
turn LEFT, ↗ //
or turn RIGHT. ↘ ///

Good models predict //
MULTIPLE plausible futures ↗
and assign PROBABILITIES to each. ↘ ///

[Explain ADE, FDE, minADE, minFDE, miss rate.] ///

ADE ↗ — AVERAGE Displacement Error ↗ —
mean L2 distance //
over ALL predicted time steps. ↘ ///

FDE ↗ — FINAL Displacement Error ↗ —
L2 distance //
at the LAST predicted step. ↘ ///

For MULTI-MODAL predictions, ↗
minADE ↗ and minFDE ↗
take the MINIMUM over K //
predicted trajectories ↘ —
measuring whether //
AT LEAST ONE prediction //
is good. ↘ ///

MISS RATE is the percentage //
of scenarios ↗
where the best prediction's FDE //
exceeds a THRESHOLD ↘ —
typically TWO meters. ↘ ///

Miss rate is ARGUABLY //
the most SAFETY-RELEVANT metric. ↘ ///

[How do GNNs help in trajectory prediction?] ///

GNNs model RELATIONAL STRUCTURE ↘ —
in my case, ↗ LANE connectivity. ↘ ///

Each lane segment is a NODE, ↗
connections are EDGES. ↘
MESSAGE PASSING //
lets each node //
AGGREGATE information //
from its neighbors, ↘
building a representation //
of the local ROAD TOPOLOGY. ↘ ///

I used this in CHAPTER FOUR //
to encode lane graphs, ↗
then CROSS-ATTENTION //
injects this structural information //
into the prediction model. ↘ ///

GNNs are ALSO used //
for SOCIAL INTERACTION modeling ↘ —
treating AGENTS as nodes ↗
and their spatial relationships //
as EDGES. ↘ ///

[What is the attention mechanism?] ///

Attention computes //
a WEIGHTED SUM of value vectors, ↗
where weights are determined //
by the COMPATIBILITY //
between QUERY ↗ //
and KEY vectors. ↘ ///

In trajectory prediction, ↗
it allows the model //
to DYNAMICALLY focus //
on the most RELEVANT agents ↗
and MAP elements //
for EACH prediction. ↘ ///

SELF-ATTENTION captures //
agent-to-agent interactions. ↘ ///

CROSS-ATTENTION ↘ —
which I use in Chapter FOUR ↘ —
lets the trajectory encoder //
ATTEND to lane graph features. ↘ ///

In CHAPTER SIX, ↗
I ANALYZED these attention patterns ↗
and found that models //
UNDER-ATTEND //
to vulnerable road users. ↘`,

  plain: `--- Waabi Technical: Perception & Prediction ---

Explain PointPillars. Why is it popular?
PointPillars converts raw LiDAR points into a pseudo-image by creating vertical pillars in a 2D grid. Each pillar aggregates point features using a simplified PointNet. The pseudo-image is then processed by a standard 2D CNN backbone. It's popular because it's fast — it avoids expensive 3D convolutions — and achieves competitive accuracy. I used it in my thesis Chapter 7 as the LiDAR detection backbone.

What is BEV (Bird's Eye View) and why is it important for AV?
BEV is a top-down representation of the driving scene. It's important because it provides a unified coordinate space where LiDAR, camera, and map information can be naturally fused. In BEV space, object sizes are consistent regardless of distance — unlike perspective images where far objects appear small. Most modern AV perception systems, including BEVFusion and BEVFormer, work in BEV space.

What is the difference between early fusion, late fusion, and deep fusion?
Early fusion combines raw sensor data before any processing — like concatenating LiDAR points with camera RGB values. Late fusion runs independent detection pipelines per sensor and fuses the output detections — this is what I used in Chapter 7. Deep fusion injects features from one modality into another at intermediate network layers. Each has trade-offs: early fusion is simple but noisy, late fusion is modular but misses cross-modal interactions, deep fusion is powerful but complex to train.

What is the trajectory prediction problem?
Given the observed positions of an agent over the past T time steps, predict where it will be for the next T-prime time steps. Modern methods also use map context, social interactions between agents, and traffic signals. The challenge is multi-modality — a vehicle at an intersection could go straight, turn left, or turn right. Good models predict multiple plausible futures and assign probabilities to each.

Explain ADE, FDE, minADE, minFDE, and miss rate.
ADE — Average Displacement Error — mean L2 distance over all predicted time steps. FDE — Final Displacement Error — L2 distance at the last predicted step. For multi-modal predictions, minADE and minFDE take the minimum over K predicted trajectories — measuring whether at least one prediction is good. Miss rate is the percentage of scenarios where the best prediction's FDE exceeds a threshold — typically 2 meters. Miss rate is arguably the most safety-relevant metric.

How do GNNs help in trajectory prediction?
GNNs model relational structure — in my case, lane connectivity. Each lane segment is a node, connections are edges. Message passing lets each node aggregate information from its neighbors, building a representation of the local road topology. I used this in Chapter 4 to encode lane graphs, then cross-attention injects this structural information into the prediction model. GNNs are also used for social interaction modeling — treating agents as nodes and their spatial relationships as edges.

What is the attention mechanism and why does it matter for prediction?
Attention computes a weighted sum of value vectors, where weights are determined by the compatibility between query and key vectors. In trajectory prediction, it allows the model to dynamically focus on the most relevant agents and map elements for each prediction. Self-attention captures agent-to-agent interactions. Cross-attention — which I use in Chapter 4 — lets the trajectory encoder attend to lane graph features. In Chapter 6, I analyzed these attention patterns and found that models under-attend to vulnerable road users.`,

  notes: [
    `每个回答都要自然连接到你的thesis——展示深度理解`,
    `PointPillars/BEV/Fusion types 是AV面试必考基础`,
    `说metric时要confident——ADE/FDE/miss rate你都用过`,
    `Attention的回答最后连接到Ch6发现——很加分`,
  ],
};

// ─── Waabi Technical: ML Fundamentals & System Design ───

PROSODY["waabi_tech_ml"] = {
  annotated: `--- WAABI TECHNICAL: ML & SYSTEM DESIGN --- ///

[L1 vs L2 loss?] ///

L1 loss ↘ — MEAN ABSOLUTE error ↘ —
is ROBUST to outliers //
because it doesn't SQUARE the error. ↘ ///

L2 loss ↘ — MEAN SQUARED error ↘ —
PENALIZES large errors //
more HEAVILY. ↘ ///

In trajectory prediction, ↗
we often use SMOOTH L1 ↗ //
also called HUBER loss, ↗
which behaves like L2 //
for SMALL errors ↗
and L1 for LARGE ones. ↘ ///

I use L2-based metrics //
for EVALUATION ↘ —
ADE and FDE ↘ —
because they're the STANDARD benchmarks. ↘ ///

[Explain the Transformer architecture.] ///

TRANSFORMER uses SELF-ATTENTION //
to process sequential data //
WITHOUT recurrence. ↘ ///

Input TOKENS are projected //
into QUERIES, ↗ KEYS, ↗ //
and VALUES. ↘ ///

Attention weights are computed //
as SOFTMAX //
of Q times K-transpose ↗
divided by SQUARE ROOT of D. ↘ ///

The output is //
a WEIGHTED SUM of values. ↘ ///

MULTI-HEAD attention //
runs this in PARALLEL //
with DIFFERENT projections. ↘ ///

Add POSITIONAL encoding ↗
since attention is //
PERMUTATION-INVARIANT. ↘ ///

LAYER NORM ↗ //
and FEEDFORWARD layers ↗
complete each block. ↘ ///

I used Transformers //
in Chapters FOUR ↗ and SIX. ↘ ///

[Overfitting — how do you prevent it?] ///

OVERFITTING is when the model //
MEMORIZES training data ↗
instead of learning //
GENERALIZABLE patterns ↘ —
HIGH training accuracy ↗
but POOR validation performance. ↘ ///

Prevention strategies: ↗
DROPOUT, ↗ //
WEIGHT DECAY ↗ //
which is L2 regularization, ↗
DATA AUGMENTATION, ↗ //
EARLY STOPPING, ↗ //
REDUCING model capacity, ↗ //
and using LARGER //
more DIVERSE datasets. ↘ ///

In my work, ↗
I used DROPOUT //
and EARLY STOPPING consistently, ↗
and the WAYMO dataset's scale ↘ —
NINETY THOUSAND scenarios ↘ —
helps NATURALLY. ↘ ///

[Design a real-time trajectory prediction system.] ///

PIPELINE: ↘ ///

STEP ONE: ↗ //
Perception outputs //
TRACKED objects //
with position, ↗ velocity, ↗ heading. ↘ ///

STEP TWO: ↗ //
MAP module provides //
local LANE GRAPH //
around each agent. ↘ ///

STEP THREE: ↗ //
FEATURE ENCODING ↘ —
trajectory history //
through LSTM or Transformer encoder, ↗
lane graph through GNN. ↘ ///

STEP FOUR: ↗ //
CROSS-ATTENTION //
fuses trajectory and map features. ↘ ///

STEP FIVE: ↗ //
MULTI-MODAL decoder //
generates K trajectory hypotheses //
with confidence scores. ↘ ///

STEP SIX: ↗ //
POST-PROCESSING ↘ —
NMS on trajectory space, ↗
temporal smoothing. ↘ ///

Latency budget: ↗
perception FIFTY milliseconds, ↗
prediction TWENTY milliseconds, ↗
total under ONE HUNDRED milliseconds //
for real-time at TEN hertz. ↘ ///

KEY trade-off: ↗
model COMPLEXITY //
versus LATENCY. ↘ ///

[How would you handle the long-tail of rare events?] ///

FOUR strategies. ↘ ///

FIRST, ↗ // OVERSAMPLING ↘ —
replicate RARE scenarios //
during training. ↘ ///

SECOND, ↗ // FOCAL LOSS ↘ —
DOWN-WEIGHT easy examples, ↗
FOCUS on hard ones. ↘ ///

THIRD, ↗ // SIMULATION AUGMENTATION ↘ —
use tools like CARLA //
to GENERATE synthetic rare events. ↘ ///

FOURTH, ↗ // RETRIEVAL-BASED methods ↘ —
at inference, ↗
FIND similar rare scenarios //
from a DATABASE. ↘ ///

The VRU ATTENTION GAP //
I discovered in Chapter SIX //
is EXACTLY a long-tail problem ↘ —
cyclists are UNDERREPRESENTED //
in Waymo. ↘`,

  plain: `--- Waabi Technical: ML Fundamentals & System Design ---

What is the difference between L1 and L2 loss?
L1 loss — mean absolute error — is robust to outliers because it doesn't square the error. L2 loss — mean squared error — penalizes large errors more heavily. In trajectory prediction, we often use smooth L1 (Huber) loss, which behaves like L2 for small errors and L1 for large ones. I use L2-based metrics for evaluation — ADE and FDE — because they're the standard benchmarks.

Explain the Transformer architecture.
Transformer uses self-attention to process sequential data without recurrence. Input tokens are projected into queries, keys, and values. Attention weights are computed as softmax of Q*K-transpose divided by sqrt(d). The output is a weighted sum of values. Multi-head attention runs this in parallel with different projections. Add positional encoding since attention is permutation-invariant. Layer norm and feedforward layers complete each block. I used Transformers in Chapters 4 and 6.

What is overfitting and how do you prevent it?
Overfitting is when the model memorizes training data instead of learning generalizable patterns — high training accuracy but poor validation performance. Prevention strategies: dropout, weight decay (L2 regularization), data augmentation, early stopping, reducing model capacity, and using larger/more diverse datasets. In my work, I used dropout and early stopping consistently, and the Waymo dataset's scale — ninety thousand scenarios — helps naturally.

Design a real-time trajectory prediction system.
Pipeline: (1) Perception outputs tracked objects with position, velocity, heading. (2) Map module provides local lane graph around each agent. (3) Feature encoding: trajectory history through LSTM or Transformer encoder, lane graph through GNN. (4) Cross-attention fuses trajectory and map features. (5) Multi-modal decoder generates K trajectory hypotheses with confidence scores. (6) Post-processing: NMS on trajectory space, temporal smoothing. Latency budget: perception ~50ms, prediction ~20ms, total under 100ms for real-time at 10Hz. Key trade-off: model complexity vs. latency.

How would you handle the long-tail of rare events?
Four strategies. First, oversampling — replicate rare scenarios during training. Second, focal loss — down-weight easy examples, focus on hard ones. Third, simulation augmentation — use tools like CARLA to generate synthetic rare events. Fourth, retrieval-based methods — at inference, find similar rare scenarios from a database. The VRU attention gap I discovered in Chapter 6 is exactly a long-tail problem — cyclists are underrepresented in Waymo.`,

  notes: [
    `System design回答要有结构——一步一步说pipeline`,
    `L1/L2/Transformer是基础必考——说得要自信`,
    `每个回答都连接到你的thesis研究——不是纯背书`,
    `Latency budget: 50ms + 20ms < 100ms @ 10Hz — 背下来`,
  ],
};

// ─── Waabi Behavioral Interview ───

PROSODY["waabi_behavioral"] = {
  annotated: `--- WAABI BEHAVIORAL INTERVIEW --- ///

[Tell me about yourself.] ///

I'm XINGNAN ZHOU, ↘
a PhD candidate // at CONCORDIA University. ↘ ///

My research focuses on //
making autonomous driving SAFER //
through DEEP LEARNING ↘ —
specifically TRAJECTORY PREDICTION ↗
and PERCEPTION. ↘ ///

During my first THREE years, ↗
I also worked at ERICSSON'S AI lab //
through a MITACS fellowship, ↗
building a CARLA-VISSIM //
co-simulation framework //
for SAFETY testing. ↘ ///

My thesis has FIVE studies: ↗
TURN-AWARE trajectory prediction, ↗
LANE GRAPH conditioning //
that improved accuracy //
by TWENTY-SEVEN percent //
on NINETY THOUSAND Waymo scenarios, ↗
GPS-FREE scenario localization, ↗
ATTENTION VISUALIZATION //
that revealed safety blind spots //
for vulnerable road users, ↗
and MULTI-SENSOR fusion. ↘ ///

I'm looking for a role //
where I can APPLY //
this combination //
of SIMULATION, ↗ PERCEPTION, ↗
and PREDICTION ↗
to REAL-WORLD autonomous systems. ↘ ///

[Why Waabi?] ///

THREE reasons. ↘ ///

FIRST, ↗ // Waabi's AI-FIRST approach //
aligns with my BELIEF //
that simulation and learned models //
are the PATH to scalable autonomy ↘ —
I built SIMULATION systems //
at Ericsson ↗
and studied prediction models //
throughout my PhD. ↘ ///

SECOND, ↗ // WAABI WORLD'S //
closed-loop simulation //
is EXACTLY the kind of system //
I want to CONTRIBUTE to ↘ —
my experience with //
CARLA-VISSIM co-simulation //
is DIRECTLY relevant. ↘ ///

THIRD, ↗ // I admire //
the team's RESEARCH CULTURE ↘ —
PUBLISHING while building //
PRODUCTION systems. ↘
I want to be in an environment //
where research DEPTH ↗
and engineering IMPACT ↗ //
COEXIST. ↘ ///

[Greatest strength?] ///

CONNECTING IDEAS //
across DIFFERENT fields. ↘ ///

My research spans //
SIMULATION, ↗ DEEP LEARNING, ↗
COMPUTER VISION, ↗
and TRANSPORTATION ↘ —
and I've had to TEACH MYSELF //
most of these skills. ↘ ///

When I face a NEW problem, ↗
I can QUICKLY survey //
the existing solutions, ↗
UNDERSTAND the trade-offs, ↗
and FIND an approach that works. ↘ ///

For example, ↗
my LANE GRAPH paper //
COMBINED graph neural networks //
from ONE field ↗
with cross-attention //
from ANOTHER ↗
to solve a trajectory prediction problem. ↘ ///

[Greatest weakness?] ///

I tend to be QUIET //
in group settings, ↗
ESPECIALLY when I'm not sure //
my idea is FULLY formed. ↘ ///

I'm WORKING ON //
speaking up EARLIER, ↗
even if my thought //
ISN'T perfect yet. ↘ ///

I've REALIZED ↗
that sharing an INCOMPLETE idea ↗
often MOVES the discussion forward //
MORE // than staying SILENT. ↘ ///

[Tell me about a challenging project.] ///

The CARLA-VISSIM //
co-simulation project //
at ERICSSON. ↘ ///

I had to CONNECT //
TWO completely different simulators ↘ —
CARLA for 3D sensor simulation ↗
and VISSIM for traffic flow. ↘ ///

They WEREN'T designed //
to work together, ↗
so I built the bridge //
from SCRATCH ↘ —
synchronizing TIME STEPS, ↗
COORDINATE systems, ↗
vehicle STATES. ↘ ///

The HARDEST part ↗
was making simulated traffic //
behave REALISTICALLY ↗
while maintaining //
sensor ACCURACY. ↘ ///

It took MONTHS of debugging, ↗
but the RESULT ↗
was a working DIGITAL TWIN //
that the team USED //
for safety evaluation. ↘ ///

[Tell me about a failure or setback.] ///

Early in my prediction research, ↗
I spent THREE MONTHS //
implementing a complex //
GRAPH ATTENTION network //
for trajectory prediction, ↗
expecting a BIG improvement. ↘ ///

The results were BARELY better //
than a simple LSTM baseline. ↘ ///

The LESSON was that //
architectural COMPLEXITY //
doesn't automatically translate //
to better PERFORMANCE ↘ —
the INDUCTIVE BIAS //
matters MORE. ↘ ///

That FAILURE led me //
to the LANE GRAPH conditioning //
approach in Chapter FOUR, ↗
where I focused on //
giving the model //
the RIGHT information ↗
rather than //
a more COMPLEX architecture. ↘ ///

That module improved accuracy //
by TWENTY-SEVEN percent. ↘ ///

[Where do you see yourself in 5 years?] ///

In FIVE years, ↗
I want to be //
a SENIOR ML engineer //
or RESEARCH SCIENTIST ↗
working on PERCEPTION //
or PREDICTION systems //
for autonomous vehicles. ↘ ///

I want to have CONTRIBUTED //
to a system that's deployed //
on REAL ROADS, ↗
not just in PAPERS. ↘ ///

I'd also like to MENTOR //
junior engineers, ↗
sharing what I've learned //
about BRIDGING //
research and production. ↘ ///

[Why leaving academia?] ///

I'm NOT leaving research ↘ —
I'm changing //
the DEPLOYMENT context. ↘ ///

In ACADEMIA, ↗
the feedback loop is SLOW: ↘
you PUBLISH a paper, ↗
and MAYBE someone //
uses your idea // in TWO years. ↘ ///

In INDUSTRY, ↗
especially at a company //
like WAABI, ↗
I can see my models //
running on REAL vehicles. ↘ ///

The research problems //
are JUST AS DEEP ↘ —
ARGUABLY deeper ↗
because you have //
REAL-WORLD constraints. ↘ ///

I want to solve problems //
that MATTER // on REAL roads. ↘ ///

[How do you handle disagreements?] ///

I start by UNDERSTANDING //
their PERSPECTIVE ↘ —
there's usually a VALID reason //
behind a different approach. ↘ ///

In my ERICSSON project, ↗
the TRAFFIC engineering team ↗
and the SIMULATION team ↗
had different PRIORITIES //
for the co-simulation framework. ↘ ///

I organized a JOINT DEMO ↗
where BOTH teams could see //
how their requirements //
were ADDRESSED. ↘ ///

When there's a genuine //
TECHNICAL disagreement, ↗
I prefer to //
LET THE DATA DECIDE ↘ —
run an EXPERIMENT, ↗
compare METRICS, ↗
and let the results SPEAK. ↘ ///

[Questions for Waabi?] ///

How does the //
PERCEPTION-PREDICTION interface //
work at Waabi ↘ —
are they JOINTLY trained //
or MODULAR? ↘ ///

What role does WAABI WORLD //
simulation play //
in VALIDATING prediction models? ↘ ///

How do you handle //
the LONG-TAIL of rare events //
in your training pipeline? ↘ ///

What's the BIGGEST //
technical challenge //
the prediction team //
is facing RIGHT NOW? ↘`,

  plain: `--- Waabi Behavioral Interview ---

Q1: Tell me about yourself.
I'm Xingnan Zhou, a PhD candidate at Concordia University. My research focuses on making autonomous driving safer through deep learning — specifically trajectory prediction and perception. During my first three years, I also worked at Ericsson's AI lab through a Mitacs fellowship, building a CARLA-VISSIM co-simulation framework for safety testing. My thesis has five studies: turn-aware trajectory prediction, lane graph conditioning that improved accuracy by twenty-seven percent on ninety thousand Waymo scenarios, GPS-free scenario localization, attention visualization that revealed safety blind spots for vulnerable road users, and multi-sensor fusion. I'm looking for a role where I can apply this combination of simulation, perception, and prediction to real-world autonomous systems.

Q2: Why Waabi?
Three reasons. First, Waabi's AI-first approach aligns with my belief that simulation and learned models are the path to scalable autonomy — I built simulation systems at Ericsson and studied prediction models throughout my PhD. Second, Waabi World's closed-loop simulation is exactly the kind of system I want to contribute to — my experience with CARLA-VISSIM co-simulation is directly relevant. Third, I admire the team's research culture — publishing while building production systems. I want to be in an environment where research depth and engineering impact coexist.

Q3: What is your greatest strength?
Connecting ideas across different fields. My research spans simulation, deep learning, computer vision, and transportation — and I've had to teach myself most of these skills. When I face a new problem, I can quickly survey the existing solutions, understand the trade-offs, and find an approach that works. For example, my lane graph conditioning paper combined graph neural networks from one field with cross-attention from another to solve a trajectory prediction problem.

Q4: What is your greatest weakness?
I tend to be quiet in group settings, especially when I'm not sure my idea is fully formed. I'm working on speaking up earlier, even if my thought isn't perfect yet. I've realized that sharing an incomplete idea often moves the discussion forward more than staying silent.

Q5: Tell me about a challenging project.
The CARLA-VISSIM co-simulation project at Ericsson. I had to connect two completely different simulators — CARLA for 3D sensor simulation and VISSIM for traffic flow. They weren't designed to work together, so I built the bridge from scratch — synchronizing time steps, coordinate systems, vehicle states. The hardest part was making the simulated traffic behave realistically while maintaining sensor accuracy. It took months of debugging, but the result was a working digital twin that the team used for safety evaluation.

Q6: Tell me about a time you failed or a setback.
Early in my prediction research, I spent three months implementing a complex graph attention network for trajectory prediction, expecting a big improvement. The results were barely better than a simple LSTM baseline. The lesson was that architectural complexity doesn't automatically translate to better performance — the inductive bias matters more. That failure led me to the lane graph conditioning approach in Chapter 4, where I focused on giving the model the RIGHT information rather than a more complex architecture. That module improved accuracy by twenty-seven percent.

Q7: Where do you see yourself in 5 years?
In five years, I want to be a senior ML engineer or research scientist working on perception or prediction systems for autonomous vehicles. I want to have contributed to a system that's deployed on real roads, not just in papers. I'd also like to mentor junior engineers, sharing what I've learned about bridging research and production.

Q8: Why are you leaving academia?
I'm not leaving research — I'm changing the deployment context. In academia, the feedback loop is slow: you publish a paper, and maybe someone uses your idea in two years. In industry, especially at a company like Waabi, I can see my models running on real vehicles. The research problems are just as deep — arguably deeper because you have real-world constraints. I want to solve problems that matter on real roads.

Q9: How do you handle disagreements with teammates?
I start by understanding their perspective — there's usually a valid reason behind a different approach. In my Ericsson project, the traffic engineering team and the simulation team had different priorities for the co-simulation framework. I organized a joint demo where both teams could see how their requirements were addressed. When there's a genuine technical disagreement, I prefer to let the data decide — run an experiment, compare metrics, and let the results speak.

Q10: Do you have questions for us?
1. How does the perception-prediction interface work at Waabi — are they jointly trained or modular?
2. What role does Waabi World simulation play in validating prediction models?
3. How do you handle the long-tail of rare events in your training pipeline?
4. What's the biggest technical challenge the prediction team is facing right now?`,

  notes: [
    `"Tell me about yourself" 练到2分钟内流利完成`,
    `每个behavioral回答用STAR: Situation→Task→Action→Result`,
    `Failure story (GAT→lane graph) 展示成长——很重要`,
    `Questions for Waabi 展示你做了研究——不要忘记准备`,
  ],
};

// ─── LeetCode Speaking Practice ───

PROSODY["leetcode_speaking"] = {
  annotated: `--- LEETCODE: CODING INTERVIEW SPEAKING --- ///

--- Starting a Problem --- ///

Let me MAKE SURE //
I understand the problem CORRECTLY. ↘ ///

Can I CLARIFY ↘ —
the input is... ↗
and the expected output is...? ↘ ///

My FIRST thought //
is a BRUTE FORCE approach //
that would be O of N SQUARED. ↘ ///

--- Explaining Your Approach --- ///

The KEY INSIGHT is... ↘ ///

I'll use a HASH MAP //
to reduce the time complexity //
from O of N SQUARED ↗ //
to O of N. ↘ ///

This is ESSENTIALLY //
a GRAPH TRAVERSAL problem. ↘ ///

--- When Stuck --- ///

Let me THINK //
about EDGE CASES. ↘ ///

What if I approach this //
from the OTHER direction? ↘ ///

Can I SIMPLIFY the problem first //
by considering a SMALLER case? ↘ ///

--- After Coding --- ///

Let me TRACE through this //
with the example. ↘ ///

The TIME complexity is //
O of N LOG N ↘
because of the SORTING step. ↘ ///

ONE edge case to handle //
is when the INPUT is empty. ↘ ///

--- AV-Relevant Problem Types --- ///

GRAPH problems ↘ —
like NUMBER OF ISLANDS ↗
and COURSE SCHEDULE ↗ —
map to SCENE SEGMENTATION ↗
and DEPENDENCY resolution //
in AV systems. ↘ ///

SLIDING WINDOW ↗ //
maps to TRAJECTORY windowing ↗
and REAL-TIME peak detection. ↘ ///

DYNAMIC PROGRAMMING ↗ //
maps to PATH counting ↗
and TRAJECTORY matching. ↘ ///

BFS and DIJKSTRA ↗ //
map directly to //
ROAD NETWORK shortest paths ↗
and PATH PLANNING. ↘ ///

--- Explaining with Confidence --- ///

I've seen a SIMILAR pattern //
in my RESEARCH ↘ —
for example, ↗
the WATERFLOW algorithm //
I developed //
is essentially a BFS //
on a LANE GRAPH. ↘ ///

This problem REMINDS me //
of how we handle //
CONNECTED COMPONENTS //
in SCENE GRAPHS //
for autonomous driving. ↘`,

  plain: `--- LeetCode: Coding Interview Speaking ---

Starting a Problem:
- "Let me make sure I understand the problem correctly..."
- "Can I clarify — the input is... and the expected output is...?"
- "My first thought is a brute force approach that would be O(n squared)..."

Explaining Your Approach:
- "The key insight is..."
- "I'll use a hash map to reduce the time complexity from O(n squared) to O(n)..."
- "This is essentially a graph traversal problem..."

When Stuck:
- "Let me think about edge cases..."
- "What if I approach this from the other direction..."
- "Can I simplify the problem first by considering a smaller case?"

After Coding:
- "Let me trace through this with the example..."
- "The time complexity is O(n log n) because of the sorting step..."
- "One edge case to handle is when the input is empty..."

AV-Relevant Problem Types:
- Graph problems (Number of Islands, Course Schedule) → scene segmentation, dependency resolution
- Sliding Window → trajectory windowing, real-time peak detection
- Dynamic Programming → path counting, trajectory matching
- BFS / Dijkstra → road network shortest paths, path planning

Explaining with Confidence:
- "I've seen a similar pattern in my research — for example, the Waterflow algorithm I developed is essentially a BFS on a lane graph."
- "This problem reminds me of how we handle connected components in scene graphs for autonomous driving."`,

  notes: [
    `面试时大声说出你的思路比直接写代码更重要`,
    `每道题先说brute force O(n^2)，再优化——展示思考过程`,
    `连接到AV研究：Waterflow=BFS, lane graph=graph traversal`,
    `卡住了不要沉默——说 "Let me think about edge cases..."`,
  ],
};

// ─── Extend CURRICULUM with new days ───

CURRICULUM.push(
  // Day 19
  {
    day: 19,
    title: "Day 19 — Ch3: Turn-Aware LSTM 答辩Q&A",
    prosodyKey: "ch3_qa",
    instructions: [
      "打开标注版，通读Ch3全部7个Q&A",
      "重点练Q1(问题定义)和Q2(方法)——最基础的两个",
      "Q4(小数据集泛化)是高频问题——练到流利！",
      "练习过渡到Ch4的段落——自然衔接很重要",
      "录音：选3个Q&A不看稿回答",
    ],
    goal: "能流利回答Ch3的核心问题，自然过渡到Ch4",
  },
  // Day 20
  {
    day: 20,
    title: "Day 20 — Ch4: Lane Graph 答辩Q&A (最强结果!)",
    prosodyKey: "ch4_qa",
    instructions: [
      "这是你最强的结果——每个数字都要脱口而出！",
      "重点练Q5(数字)：89K, +9.3%, +26.7%, +32.6%, -42.7%",
      "Q2(Waterflow)用比喻解释——'like water flowing downstream'",
      "Q4(architecture-agnostic)练到清楚说出这个长词",
      "录音：完整回答Q5不看稿",
    ],
    goal: "所有关键数字脱口而出，Waterflow比喻说得生动",
  },
  // Day 21
  {
    day: 21,
    title: "Day 21 — Ch5: WayGraph GPS-Free 答辩Q&A",
    prosodyKey: "ch5_qa",
    instructions: [
      "重点练Q2(48D star pattern)——用手势比划星形",
      "Q3的数字：90% accuracy, 0.4% baseline, 225x improvement",
      "Q5(tool vs research)是committee最可能问的——练到流利",
      "练习从Ch4到Ch5的过渡：'Waymo anonymizes GPS...'",
      "录音：Q2和Q3不看稿",
    ],
    goal: "能用简单英语解释48D fingerprint概念",
  },
  // Day 22
  {
    day: 22,
    title: "Day 22 — Ch6: Attention Visualization 答辩Q&A",
    prosodyKey: "ch6_qa",
    instructions: [
      "这章最有故事性——练习讲故事的语气！",
      "Q2(tunnel vision)：entropy 5.72 vs 5.94",
      "Q3(VRU gap)：60% less attention, 88.1% miss rate",
      "Q3是最震撼的发现——用严肃但不夸张的语气",
      "录音：把Q2和Q3当故事讲出来",
    ],
    goal: "能把tunnel vision和VRU gap讲成一个引人入胜的安全故事",
  },
  // Day 23
  {
    day: 23,
    title: "Day 23 — Ch7: LiDAR Fusion 答辩Q&A",
    prosodyKey: "ch7_qa",
    instructions: [
      "Q3(为什么用仿真)是必问题——三个原因练到流利",
      "Q4(无人机不实际)的回答关键：'elevated viewpoint'",
      "Q5数字：66.1%→69.2%, FP -13%, p=0.001",
      "Q8(闭环)是整个论文总结——非常重要！",
      "录音：Q3和Q8不看稿",
    ],
    goal: "能自信地辩护仿真选择，清楚说出论文闭环",
  },
  // Day 24
  {
    day: 24,
    title: "Day 24 — Cross-Chapter 高级答辩Q&A",
    prosodyKey: "cross_chapter_qa",
    instructions: [
      "Q2(五章连接)是最重要的回答——练到3分钟内流利说完！",
      "Q1(unified contribution)：'multi-scale deep learning'主题",
      "Q3(做法不同)要诚实但不自贬",
      "Q8(future work)五个方向要能快速列出",
      "背熟Emergency Phrases——被问到不会的问题时救命",
      "录音：完整回答Q2（计时3分钟）",
    ],
    goal: "能流利讲述五章连接的完整narrative",
  },
  // Day 25
  {
    day: 25,
    title: "Day 25 — Waabi技术面试: 感知 & 预测",
    prosodyKey: "waabi_tech_perception",
    instructions: [
      "PointPillars/BEV/Fusion types 是AV面试必考基础",
      "每个回答都要自然连接到你的thesis",
      "练习trajectory prediction问题定义——说得要清楚",
      "ADE/FDE/minADE/minFDE/miss rate 区别要清楚",
      "GNN和Attention的回答连接到Ch4和Ch6",
      "录音：随机选3个问题不看稿回答",
    ],
    goal: "技术基础问题能confident地回答，连接到自己研究",
  },
  // Day 26
  {
    day: 26,
    title: "Day 26 — Waabi技术面试: ML基础 & System Design",
    prosodyKey: "waabi_tech_ml",
    instructions: [
      "L1/L2 loss, Transformer, Overfitting是基础必考",
      "System Design回答要有结构——pipeline一步一步说",
      "延迟预算：50ms感知 + 20ms预测 < 100ms @ 10Hz",
      "Long-tail问题连接到Ch6的VRU发现",
      "录音：System Design完整回答",
    ],
    goal: "能结构化地回答system design，ML基础扎实",
  },
  // Day 27
  {
    day: 27,
    title: "Day 27 — Waabi Behavioral 面试",
    prosodyKey: "waabi_behavioral",
    instructions: [
      "'Tell me about yourself' 练到2分钟内流利",
      "'Why Waabi' 三个原因要自然",
      "Failure story (GAT→lane graph) 展示成长",
      "'Why leaving academia' 说 'changing deployment context'",
      "Questions for Waabi 展示你做了研究",
      "录音：完整behavioral mock interview（连续回答5个问题）",
    ],
    goal: "behavioral面试所有问题都能自然回答，不像背书",
  },
  // Day 28
  {
    day: 28,
    title: "Day 28 — LeetCode Speaking + 总复习",
    prosodyKey: "leetcode_speaking",
    instructions: [
      "练习coding interview的英语表达模板",
      "重点：思路说出来比写代码更重要",
      "练习连接到AV：Waterflow=BFS, lane graph=graph traversal",
      "卡住时的救命句：'Let me think about edge cases...'",
      "总复习：从Day 19开始，每章挑一个Q&A快速回答",
      "录音：模拟完整技术面试（5分钟）",
    ],
    goal: "coding interview能边写边说，总复习所有答辩+面试材料",
  }
);

// ─── Extend DAILY_DRILLS ───

DAILY_DRILLS.push(
  { name: "Ch3 快速问答", scenario: "面试官问：'What does your first paper do?'", exercise: '30秒内回答Ch3核心贡献：turn encoding → one-hot → LSTM → 15-20% FDE改善。录音3遍' },
  { name: "Ch4 数字速射", scenario: "面试官说：'Walk me through your best result.'", exercise: '练习快速说出：89K scenarios, +9.3% ADE, +26.7% minADE, +32.6% minFDE, -42.7% miss rate。5遍' },
  { name: "Ch5 电梯演讲", scenario: "有人问：'What is WayGraph?'", exercise: '用30秒解释：anonymized GPS → 48D star pattern → 90% accuracy → 225x baseline。录音' },
  { name: "Ch6 讲故事", scenario: "会议上分享一个有趣的研究发现", exercise: '把tunnel vision + VRU 60% attention gap讲成一个2分钟的安全故事。用严肃但引人入胜的语气' },
  { name: "Ch7 辩护仿真", scenario: "有人质疑：'But this is all simulation!'", exercise: '练习三个原因的回答：cost, perfect ground truth, controlled variables + p=0.001。3遍' },
  { name: "论文narrative速通", scenario: "Committee问：'How do these five chapters connect?'", exercise: '3分钟内流利说完五章连接：Ch3→Ch4→Ch5→Ch6→Ch7，每章一个gap→下一章填补。计时！' },
  { name: "技术概念解释", scenario: "面试官问基础ML问题", exercise: '随机练习：PointPillars, BEV, Attention, GNN, L1 vs L2 — 每个45秒内用简单英语解释' },
  { name: "ML系统设计", scenario: "面试官说：'Design a real-time prediction system.'", exercise: '练pipeline: perception→map→encoding→cross-attention→decoder→post-processing。说latency budget' },
  { name: "Behavioral故事串", scenario: "连续behavioral面试", exercise: '不停顿地连续回答：About yourself → Why Waabi → Strength → Weakness → Challenging project。录音' },
  { name: "LeetCode说思路", scenario: "面试中写代码", exercise: '拿一道题（如Two Sum），一边说思路一边写：brute force → hash map → explain complexity。录音' }
);

// ─── Extend DAILY_PHRASES ───

DAILY_PHRASES.push(
  "The key insight of this chapter is that explicit maneuver encoding acts as an effective inductive bias.",
  "On eighty-nine thousand Waymo scenarios, we achieved a twenty-seven percent improvement.",
  "This is a novel topological representation that achieves ninety percent accuracy without GPS.",
  "The model develops tunnel vision — focusing too narrowly before making mistakes.",
  "The statistical significance — p equals zero point zero zero one — gives confidence in the findings.",
  "Each chapter fills a gap left by the previous one, forming a coherent research arc.",
  "PointPillars converts raw LiDAR points into a pseudo-image by creating vertical pillars.",
  "The latency budget is under one hundred milliseconds for real-time at ten hertz.",
  "I'm not leaving research — I'm changing the deployment context.",
  "The key insight is... I'll use a hash map to reduce time complexity from O(n squared) to O(n)."
);

// ─── Extend DAILY_TIPS ───

DAILY_TIPS.push(
  "答辩技巧: 被问到不知道的问题先说 'That's a great question. Let me think...' 争取思考时间",
  "数字要自信: EIGHTY-NINE THOUSAND, TWENTY-SEVEN PERCENT — 这些数字就是你的成果，说得响亮",
  "三段论回答: 'Three main [points/reasons/limitations].' 然后 FIRST, SECOND, THIRD — 结构清晰",
  "过渡很重要: 每章之间用 'This motivated...' / 'This gap led to...' 自然衔接",
  "被challenge时: 先说 'You raise a valid point.' 再解释你的reasoning — 不要defensive",
  "讲故事: tunnel vision和VRU gap最适合讲故事——用严肃但不夸张的语气，让数字说话",
  "System Design: 一步一步说pipeline，每步说完停一下。不要一口气说完",
  "Behavioral: 用STAR格式(Situation→Task→Action→Result)，每个故事控制在2分钟内",
  "面试反问: 准备好4-5个问Waabi的问题 — 展示你做了research",
  "总原则: coding interview边写边说，思路比代码更重要。沉默是最大的扣分项"
);
