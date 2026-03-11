<template>
  <div class="dp-diagram">
    <svg width="100%" viewBox="0 0 660 220">

      <!-- Client (left) -->
      <g class="step">
        <rect class="box host" x="10" y="70" width="120" height="50" rx="4" ry="4"/>
        <text class="label host-text" x="70" y="92">Client</text>
        <text class="note" x="70" y="108">prove request</text>
      </g>

      <!-- Arrow: request → coordinator -->
      <line class="arrow" x1="130" y1="85" x2="178" y2="85" marker-end="url(#dp-a)"/>
      <text class="arrow-label" x="154" y="78">request</text>

      <!-- Coordinator (center) -->
      <g class="step coord-step">
        <rect class="box coord" x="180" y="50" width="160" height="90" rx="5" ry="5"/>
        <text class="label coord-text" x="260" y="72">Coordinator</text>
        <text class="note coord-note" x="260" y="90">orchestrates work</text>
        <text class="note coord-note" x="260" y="104">selects workers</text>
        <text class="note coord-note" x="260" y="118">aggregates results</text>
      </g>

      <!-- Arrow: coordinator → client (return) -->
      <line class="arrow green-arrow" x1="178" y1="105" x2="130" y2="105" marker-end="url(#dp-a-green)"/>
      <text class="arrow-label green-label" x="154" y="118">final proof</text>

      <!-- Fan out to workers -->
      <line class="arrow" x1="340" y1="72" x2="428" y2="32" marker-end="url(#dp-a)"/>
      <line class="arrow" x1="340" y1="95" x2="428" y2="95" marker-end="url(#dp-a)"/>
      <line class="arrow" x1="340" y1="118" x2="428" y2="158" marker-end="url(#dp-a)"/>

      <!-- Return arrows from workers -->
      <line class="arrow green-arrow" x1="428" y1="42" x2="340" y2="78" marker-end="url(#dp-a-green)"/>
      <line class="arrow green-arrow" x1="428" y1="105" x2="340" y2="100" marker-end="url(#dp-a-green)"/>
      <line class="arrow green-arrow" x1="428" y1="168" x2="340" y2="125" marker-end="url(#dp-a-green)"/>

      <!-- Workers cluster -->
      <rect class="cluster" x="420" y="6" width="230" height="190" rx="5" ry="5"/>
      <text class="cluster-label" x="535" y="22">Workers</text>

      <!-- Worker 1 -->
      <g class="step">
        <rect class="box worker" x="430" y="28" width="120" height="36" rx="4" ry="4"/>
        <text class="label worker-text" x="490" y="50">Worker 1</text>
      </g>

      <!-- Worker 2 -->
      <g class="step">
        <rect class="box worker" x="430" y="78" width="120" height="36" rx="4" ry="4"/>
        <text class="label worker-text" x="490" y="100">Worker 2</text>
      </g>

      <!-- Worker N -->
      <g class="step">
        <rect class="box worker" x="430" y="148" width="120" height="36" rx="4" ry="4"/>
        <text class="label worker-text" x="490" y="170">Worker N</text>
      </g>

      <!-- Dots between 2 and N -->
      <text class="dots" x="490" y="136">...</text>

      <!-- Labels on arrows -->
      <text class="arrow-label" x="390" y="42">segments</text>
      <text class="arrow-label green-label" x="390" y="152">partial proofs</text>

      <defs>
        <marker id="dp-a" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-arrow"/>
        </marker>
        <marker id="dp-a-green" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-green"/>
        </marker>
      </defs>
    </svg>
  </div>
</template>

<style scoped>
.dp-diagram {
  --box-host-fill: #1a1f28;
  --box-host-stroke: #3a5577;
  --box-coord-fill: #1a1a1e;
  --box-coord-stroke: #555;
  --box-worker-fill: #1a1f28;
  --box-worker-stroke: #3a5577;
  --cluster-fill: #0d1a0d;
  --cluster-stroke: #4a8;
  --text-host: #99bbdd;
  --text-coord: #bbb;
  --text-worker: #99bbdd;
  --text-cluster: #4a8;
  --text-note: #556;
  --text-coord-note: #777;
  --text-arrow-label: #556;
  --text-green-label: #3a6a4a;
  --text-dots: #667;
  --arrow-color: #556;
  --green-arrow-color: #3a6a4a;
  --marker-color: #556;
  --marker-green-color: #4a8;
  --hover-host-stroke: #77aadd;
  --hover-host-shadow: rgba(85,136,187,0.3);
  --hover-coord-stroke: #888;
  --hover-coord-shadow: rgba(100,100,100,0.25);
  --hover-worker-stroke: #77aadd;
  --hover-worker-shadow: rgba(85,136,187,0.3);
  max-width: 600px;
  margin: 1.5rem auto;
}
.dp-diagram svg { overflow: visible; }

.box { stroke-width: 1.5px; transition: stroke 0.2s ease, filter 0.2s ease; }
.host { fill: var(--box-host-fill); stroke: var(--box-host-stroke); }
.coord { fill: var(--box-coord-fill); stroke: var(--box-coord-stroke); }
.worker { fill: var(--box-worker-fill); stroke: var(--box-worker-stroke); }

.step { cursor: pointer; }
.step:hover .host { stroke: var(--hover-host-stroke); filter: drop-shadow(0 0 5px var(--hover-host-shadow)); }
.coord-step:hover .coord { stroke: var(--hover-coord-stroke); filter: drop-shadow(0 0 5px var(--hover-coord-shadow)); }
.step:hover .worker { stroke: var(--hover-worker-stroke); filter: drop-shadow(0 0 5px var(--hover-worker-shadow)); }

.cluster {
  fill: var(--cluster-fill);
  stroke: var(--cluster-stroke);
  stroke-width: 1.5px;
  stroke-dasharray: 6, 3;
}
.cluster-label {
  fill: var(--text-cluster);
  color: var(--text-cluster);
  -webkit-text-fill-color: var(--text-cluster);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  font-weight: 700;
  text-anchor: middle;
  letter-spacing: 1px;
}

.label {
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 12px;
  font-weight: 600;
  text-anchor: middle;
}
.host-text { fill: var(--text-host); color: var(--text-host); -webkit-text-fill-color: var(--text-host); }
.coord-text { fill: var(--text-coord); color: var(--text-coord); -webkit-text-fill-color: var(--text-coord); }
.worker-text { fill: var(--text-worker); color: var(--text-worker); -webkit-text-fill-color: var(--text-worker); }

.note {
  fill: var(--text-note);
  color: var(--text-note);
  -webkit-text-fill-color: var(--text-note);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  text-anchor: middle;
  font-style: italic;
}
.coord-note {
  fill: var(--text-coord-note);
  color: var(--text-coord-note);
  -webkit-text-fill-color: var(--text-coord-note);
}

.arrow-label {
  fill: var(--text-arrow-label);
  color: var(--text-arrow-label);
  -webkit-text-fill-color: var(--text-arrow-label);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  text-anchor: middle;
}
.green-label {
  fill: var(--text-green-label);
  color: var(--text-green-label);
  -webkit-text-fill-color: var(--text-green-label);
}

.dots {
  fill: var(--text-dots);
  color: var(--text-dots);
  -webkit-text-fill-color: var(--text-dots);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 16px;
  text-anchor: middle;
}

.arrow { stroke: var(--arrow-color); stroke-width: 1.5px; fill: none; }
.green-arrow { stroke: var(--green-arrow-color); }

.marker-arrow { fill: var(--marker-color); }
.marker-green { fill: var(--marker-green-color); }
</style>

<style>
html:not(.dark) .dp-diagram {
  --box-host-fill: #f7f9fc;
  --box-host-stroke: #4477aa;
  --box-coord-fill: #f5f5f7;
  --box-coord-stroke: #aaa;
  --box-worker-fill: #f7f9fc;
  --box-worker-stroke: #4477aa;
  --cluster-fill: #f7fcf7;
  --cluster-stroke: #2a7a4a;
  --text-host: #111;
  --text-coord: #111;
  --text-worker: #111;
  --text-cluster: #2a7a4a;
  --text-note: #555;
  --text-coord-note: #444;
  --text-arrow-label: #555;
  --text-green-label: #2a7a4a;
  --text-dots: #555;
  --arrow-color: #999;
  --green-arrow-color: #2a7a4a;
  --marker-color: #999;
  --marker-green-color: #2a7a4a;
  --hover-host-stroke: #3366aa;
  --hover-host-shadow: rgba(0,0,0,0.1);
  --hover-coord-stroke: #888;
  --hover-coord-shadow: rgba(0,0,0,0.08);
  --hover-worker-stroke: #3366aa;
  --hover-worker-shadow: rgba(0,0,0,0.1);
}
</style>
