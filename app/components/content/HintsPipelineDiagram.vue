<template>
  <div class="hp-diagram">
    <svg width="100%" viewBox="0 0 660 100">

      <!-- Guest program -->
      <g class="step guest-step">
        <rect class="box guest" x="10" y="20" width="140" height="50" rx="4" ry="4"/>
        <text class="label guest-text" x="80" y="40">Guest program</text>
        <text class="note guest-note" x="80" y="56">emits hint requests</text>
      </g>

      <!-- Arrow -->
      <line class="arrow" x1="150" y1="45" x2="188" y2="45" marker-end="url(#hp-a)"/>

      <!-- ZiskStream -->
      <g class="step">
        <rect class="box process" x="190" y="25" width="120" height="40" rx="4" ry="4"/>
        <text class="label process-text" x="250" y="49">ZiskStream</text>
      </g>

      <!-- Arrow -->
      <line class="arrow" x1="310" y1="45" x2="348" y2="45" marker-end="url(#hp-a)"/>

      <!-- HintsProcessor -->
      <g class="step">
        <rect class="box process" x="350" y="20" width="140" height="50" rx="4" ry="4"/>
        <text class="label process-text" x="420" y="40">HintsProcessor</text>
        <text class="note" x="420" y="56">parallel engine</text>
      </g>

      <!-- Arrow -->
      <line class="arrow green-arrow" x1="490" y1="45" x2="528" y2="45" marker-end="url(#hp-a-green)"/>

      <!-- StreamSink -->
      <g class="step result-step">
        <rect class="box result" x="530" y="20" width="120" height="50" rx="4" ry="4"/>
        <text class="label result-text" x="590" y="40">StreamSink</text>
        <text class="note result-note" x="590" y="56">output to prover</text>
      </g>

      <defs>
        <marker id="hp-a" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-arrow"/>
        </marker>
        <marker id="hp-a-green" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-arrow-green"/>
        </marker>
      </defs>
    </svg>
  </div>
</template>

<style scoped>
.hp-diagram {
  --box-guest-fill: #142814;
  --box-guest-stroke: #4a8;
  --box-process-fill: #1a1f28;
  --box-process-stroke: #3a5577;
  --box-result-fill: #142814;
  --box-result-stroke: #4a8;
  --text-guest: #8d8;
  --text-process: #99bbdd;
  --text-result: #8d8;
  --text-note: #556;
  --text-guest-note: #3a6a4a;
  --text-result-note: #3a6a4a;
  --arrow-color: #556;
  --green-arrow-color: #3a6a4a;
  --hover-guest-stroke: #6c6;
  --hover-guest-shadow: rgba(68,170,136,0.3);
  --hover-process-stroke: #77aadd;
  --hover-process-shadow: rgba(85,136,187,0.3);
  --hover-result-stroke: #6c6;
  --hover-result-shadow: rgba(68,170,136,0.3);

  max-width: 580px;
  margin: 1.5rem auto;
}
.hp-diagram svg { overflow: visible; }

.box { stroke-width: 1.5px; transition: stroke 0.2s ease, filter 0.2s ease; }
.guest { fill: var(--box-guest-fill); stroke: var(--box-guest-stroke); }
.process { fill: var(--box-process-fill); stroke: var(--box-process-stroke); }
.result { fill: var(--box-result-fill); stroke: var(--box-result-stroke); }

.step { cursor: pointer; }
.guest-step:hover .guest { stroke: var(--hover-guest-stroke); filter: drop-shadow(0 0 5px var(--hover-guest-shadow)); }
.step:hover .process { stroke: var(--hover-process-stroke); filter: drop-shadow(0 0 5px var(--hover-process-shadow)); }
.result-step:hover .result { stroke: var(--hover-result-stroke); filter: drop-shadow(0 0 5px var(--hover-result-shadow)); }

.label {
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 12px;
  font-weight: 600;
  text-anchor: middle;
}
.guest-text { fill: var(--text-guest); color: var(--text-guest); -webkit-text-fill-color: var(--text-guest); }
.process-text { fill: var(--text-process); color: var(--text-process); -webkit-text-fill-color: var(--text-process); }
.result-text { fill: var(--text-result); color: var(--text-result); -webkit-text-fill-color: var(--text-result); }

.note {
  fill: var(--text-note);
  color: var(--text-note);
  -webkit-text-fill-color: var(--text-note);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  text-anchor: middle;
  font-style: italic;
}
.guest-note { fill: var(--text-guest-note); color: var(--text-guest-note); -webkit-text-fill-color: var(--text-guest-note); }
.result-note { fill: var(--text-result-note); color: var(--text-result-note); -webkit-text-fill-color: var(--text-result-note); }

.arrow { stroke: var(--arrow-color); stroke-width: 1.5px; fill: none; }
.green-arrow { stroke: var(--green-arrow-color); }

.marker-arrow { fill: var(--arrow-color); }
.marker-arrow-green { fill: var(--green-arrow-color); }
</style>

<style>
html:not(.dark) .hp-diagram {
  --box-guest-fill: #f7fcf7;
  --box-guest-stroke: #2a7a4a;
  --box-process-fill: #f7f9fc;
  --box-process-stroke: #4477aa;
  --box-result-fill: #f7fcf7;
  --box-result-stroke: #2a7a4a;
  --text-guest: #111;
  --text-process: #111;
  --text-result: #111;
  --text-note: #555;
  --text-guest-note: #555;
  --text-result-note: #555;
  --arrow-color: #999;
  --green-arrow-color: #2a7a4a;
  --hover-guest-stroke: #2a7a4a;
  --hover-guest-shadow: rgba(0,0,0,0.1);
  --hover-process-stroke: #3366aa;
  --hover-process-shadow: rgba(0,0,0,0.1);
  --hover-result-stroke: #2a7a4a;
  --hover-result-shadow: rgba(0,0,0,0.1);
}
</style>
