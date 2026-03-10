<template>
  <div class="hd-diagram">
    <svg width="100%" viewBox="0 0 700 280">

      <!-- Guest program (top) -->
      <g class="step guest-step">
        <rect class="box guest" x="260" y="8" width="180" height="44" rx="4" ry="4"/>
        <text class="label guest-text" x="350" y="26">Guest program</text>
        <text class="note guest-note" x="350" y="42">emits hint requests</text>
      </g>

      <line class="arrow" x1="350" y1="52" x2="350" y2="68" marker-end="url(#hd-a)"/>

      <!-- ZiskStream -->
      <g class="step">
        <rect class="box process" x="280" y="70" width="140" height="34" rx="4" ry="4"/>
        <text class="label process-text" x="350" y="91">ZiskStream</text>
      </g>

      <line class="arrow" x1="350" y1="104" x2="350" y2="120" marker-end="url(#hd-a)"/>

      <!-- Coordinator cluster -->
      <rect class="cluster" x="210" y="114" width="280" height="54" rx="5" ry="5"/>
      <text class="cluster-label" x="222" y="128">COORDINATOR</text>

      <!-- Hints Relay -->
      <g class="step">
        <rect class="box relay" x="240" y="124" width="220" height="36" rx="4" ry="4"/>
        <text class="label relay-text" x="350" y="140">Hints Relay</text>
        <text class="note relay-note" x="350" y="154">validates, broadcasts to workers</text>
      </g>

      <!-- Fan out to workers -->
      <line class="arrow" x1="290" y1="160" x2="110" y2="194" marker-end="url(#hd-a)"/>
      <line class="arrow" x1="350" y1="160" x2="350" y2="194" marker-end="url(#hd-a)"/>
      <line class="arrow" x1="410" y1="160" x2="590" y2="194" marker-end="url(#hd-a)"/>

      <!-- Worker 1 -->
      <g class="step">
        <rect class="box worker" x="20" y="196" width="180" height="70" rx="4" ry="4"/>
        <text class="label worker-text" x="110" y="216">Worker 1</text>
        <text class="worker-sub" x="110" y="232">HintsProcessor</text>
        <text class="worker-sub" x="110" y="246">StreamSink</text>
        <text class="note" x="110" y="260">reorder + process</text>
      </g>

      <!-- Worker 2 -->
      <g class="step">
        <rect class="box worker" x="260" y="196" width="180" height="70" rx="4" ry="4"/>
        <text class="label worker-text" x="350" y="216">Worker 2</text>
        <text class="worker-sub" x="350" y="232">HintsProcessor</text>
        <text class="worker-sub" x="350" y="246">StreamSink</text>
        <text class="note" x="350" y="260">reorder + process</text>
      </g>

      <!-- Worker N -->
      <g class="step">
        <rect class="box worker" x="500" y="196" width="180" height="70" rx="4" ry="4"/>
        <text class="label worker-text" x="590" y="216">Worker N</text>
        <text class="worker-sub" x="590" y="232">HintsProcessor</text>
        <text class="worker-sub" x="590" y="246">StreamSink</text>
        <text class="note" x="590" y="260">reorder + process</text>
      </g>

      <defs>
        <marker id="hd-a" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-arrow"/>
        </marker>
      </defs>
    </svg>
  </div>
</template>

<style scoped>
.hd-diagram {
  --box-guest-fill: #142814;
  --box-guest-stroke: #4a8;
  --box-process-fill: #1a1f28;
  --box-process-stroke: #3a5577;
  --box-relay-fill: #1a1a1e;
  --box-relay-stroke: #555;
  --box-worker-fill: #1a1f28;
  --box-worker-stroke: #3a5577;
  --cluster-fill: #0d1a0d;
  --cluster-stroke: #4a8;
  --text-guest: #8d8;
  --text-process: #99bbdd;
  --text-relay: #bbb;
  --text-worker: #99bbdd;
  --text-cluster: #3a6a4a;
  --text-worker-sub: #5577aa;
  --text-note: #556;
  --text-guest-note: #3a6a4a;
  --text-relay-note: #777;
  --arrow-color: #556;
  --marker-color: #556;
  --hover-guest-stroke: #6c6;
  --hover-guest-shadow: rgba(68,170,136,0.3);
  --hover-process-stroke: #77aadd;
  --hover-process-shadow: rgba(85,136,187,0.3);
  --hover-relay-stroke: #888;
  --hover-worker-stroke: #77aadd;
  --hover-worker-shadow: rgba(85,136,187,0.3);
  max-width: 740px;
  margin: 1.5rem auto;
}
.hd-diagram svg { overflow: visible; }

.box { stroke-width: 1.5px; transition: stroke 0.2s ease, filter 0.2s ease; }
.guest { fill: var(--box-guest-fill); stroke: var(--box-guest-stroke); }
.process { fill: var(--box-process-fill); stroke: var(--box-process-stroke); }
.relay { fill: var(--box-relay-fill); stroke: var(--box-relay-stroke); }
.worker { fill: var(--box-worker-fill); stroke: var(--box-worker-stroke); }

.step { cursor: pointer; }
.guest-step:hover .guest { stroke: var(--hover-guest-stroke); filter: drop-shadow(0 0 5px var(--hover-guest-shadow)); }
.step:hover .process { stroke: var(--hover-process-stroke); filter: drop-shadow(0 0 5px var(--hover-process-shadow)); }
.step:hover .relay { stroke: var(--hover-relay-stroke); }
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
  letter-spacing: 1.5px;
}

.label {
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 12px;
  font-weight: 600;
  text-anchor: middle;
}
.guest-text { fill: var(--text-guest); color: var(--text-guest); -webkit-text-fill-color: var(--text-guest); }
.process-text { fill: var(--text-process); color: var(--text-process); -webkit-text-fill-color: var(--text-process); }
.relay-text { fill: var(--text-relay); color: var(--text-relay); -webkit-text-fill-color: var(--text-relay); }
.worker-text { fill: var(--text-worker); color: var(--text-worker); -webkit-text-fill-color: var(--text-worker); }

.worker-sub {
  fill: var(--text-worker-sub);
  color: var(--text-worker-sub);
  -webkit-text-fill-color: var(--text-worker-sub);
  font-family: 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 9px;
  text-anchor: middle;
}

.note {
  fill: var(--text-note);
  color: var(--text-note);
  -webkit-text-fill-color: var(--text-note);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  text-anchor: middle;
  font-style: italic;
}
.guest-note {
  fill: var(--text-guest-note);
  color: var(--text-guest-note);
  -webkit-text-fill-color: var(--text-guest-note);
}
.relay-note {
  fill: var(--text-relay-note);
  color: var(--text-relay-note);
  -webkit-text-fill-color: var(--text-relay-note);
}

.arrow { stroke: var(--arrow-color); stroke-width: 1.5px; fill: none; }

.marker-arrow { fill: var(--marker-color); }
</style>

<style>
html:not(.dark) .hd-diagram {
  --box-guest-fill: #f7fcf7;
  --box-guest-stroke: #2a7a4a;
  --box-process-fill: #f7f9fc;
  --box-process-stroke: #4477aa;
  --box-relay-fill: #f5f5f7;
  --box-relay-stroke: #aaa;
  --box-worker-fill: #f7f9fc;
  --box-worker-stroke: #4477aa;
  --cluster-fill: #f7fcf7;
  --cluster-stroke: #2a7a4a;
  --text-guest: #111;
  --text-process: #111;
  --text-relay: #111;
  --text-worker: #111;
  --text-cluster: #2a7a4a;
  --text-worker-sub: #111;
  --text-note: #555;
  --text-guest-note: #2a7a4a;
  --text-relay-note: #444;
  --arrow-color: #999;
  --marker-color: #999;
  --hover-guest-stroke: #2a7a4a;
  --hover-guest-shadow: rgba(0,0,0,0.1);
  --hover-process-stroke: #3366aa;
  --hover-process-shadow: rgba(0,0,0,0.1);
  --hover-relay-stroke: #888;
  --hover-worker-stroke: #3366aa;
  --hover-worker-shadow: rgba(0,0,0,0.1);
}
</style>
