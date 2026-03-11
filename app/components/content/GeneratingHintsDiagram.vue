<template>
  <div class="gh-diagram">
    <svg width="100%" viewBox="0 0 700 200">

      <!-- Guest (native build) -->
      <g class="step guest-step">
        <rect class="box guest" x="10" y="40" width="140" height="70" rx="4" ry="4"/>
        <text class="label guest-text" x="80" y="60">Guest (native)</text>
        <text class="code guest-code" x="80" y="76">hint_sha256(...)</text>
        <text class="note guest-note" x="80" y="92">emits hint requests</text>
        <text class="note guest-note" x="80" y="104">--cfg zisk_hints</text>
      </g>

      <!-- Arrow -->
      <line class="arrow" x1="150" y1="75" x2="188" y2="75" marker-end="url(#ghd-a)"/>
      <text class="arrow-label" x="169" y="67">FFI calls</text>

      <!-- init/close + output -->
      <g class="step">
        <rect class="box process" x="190" y="35" width="140" height="80" rx="4" ry="4"/>
        <text class="label process-text" x="260" y="55">Hints Stream</text>
        <text class="code process-code" x="260" y="71">init_hints_file()</text>
        <text class="code process-code" x="260" y="83">init_hints_socket()</text>
        <text class="note" x="260" y="99">file or Unix socket</text>
        <text class="code process-code" x="260" y="111">close_hints()</text>
      </g>

      <!-- Arrow -->
      <line class="arrow" x1="330" y1="75" x2="368" y2="75" marker-end="url(#ghd-a)"/>

      <!-- HintsProcessor -->
      <g class="step">
        <rect class="box process" x="370" y="40" width="140" height="70" rx="4" ry="4"/>
        <text class="label process-text" x="440" y="60">HintsProcessor</text>
        <text class="note" x="440" y="76">executes zisklib</text>
        <text class="note" x="440" y="88">produces precompile</text>
        <text class="note" x="440" y="100">results in parallel</text>
      </g>

      <!-- Arrow -->
      <line class="arrow green-arrow" x1="510" y1="75" x2="548" y2="75" marker-end="url(#ghd-a-green)"/>

      <!-- ZisK VM execution -->
      <g class="step vm-step">
        <rect class="box result" x="550" y="40" width="140" height="70" rx="4" ry="4"/>
        <text class="label result-text" x="620" y="60">ZisK VM</text>
        <text class="note result-note" x="620" y="76">consumes hints</text>
        <text class="note result-note" x="620" y="88">verifies in circuit</text>
        <text class="note result-note" x="620" y="100">same order required</text>
      </g>

      <!-- Determinism warning -->
      <rect class="det-box" x="140" y="138" width="420" height="36" rx="4" ry="4"/>
      <text class="det-label" x="350" y="154">DETERMINISTIC EXECUTION REQUIRED</text>
      <text class="det-note" x="350" y="168">native hint order must match ZisK VM consumption order</text>

      <!-- Dashed lines from guest and VM to determinism box -->
      <line class="det-line" x1="80" y1="110" x2="200" y2="138"/>
      <line class="det-line" x1="620" y1="110" x2="500" y2="138"/>

      <defs>
        <marker id="ghd-a" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-arrow"/>
        </marker>
        <marker id="ghd-a-green" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-green"/>
        </marker>
      </defs>
    </svg>
  </div>
</template>

<style scoped>
.gh-diagram {
  --box-guest-fill: #142814;
  --box-guest-stroke: #4a8;
  --box-process-fill: #1a1f28;
  --box-process-stroke: #3a5577;
  --box-result-fill: #142814;
  --box-result-stroke: #4a8;
  --det-box-fill: #1a1a1e;
  --det-box-stroke: #885555;
  --det-line-color: #553333;
  --text-guest: #8d8;
  --text-process: #99bbdd;
  --text-result: #8d8;
  --text-guest-code: #5a8a5a;
  --text-process-code: #5577aa;
  --text-note: #556;
  --text-guest-note: #3a6a4a;
  --text-result-note: #3a6a4a;
  --text-arrow-label: #556;
  --text-det-label: #aa7766;
  --text-det-note: #776655;
  --arrow-color: #556;
  --green-arrow-color: #3a6a4a;
  --marker-color: #556;
  --marker-green-color: #4a8;
  --hover-guest-stroke: #6c6;
  --hover-guest-shadow: rgba(68,170,136,0.3);
  --hover-process-stroke: #77aadd;
  --hover-process-shadow: rgba(85,136,187,0.3);
  --hover-result-stroke: #6c6;
  --hover-result-shadow: rgba(68,170,136,0.3);
  max-width: 600px;
  margin: 1.5rem auto;
}
.gh-diagram svg { overflow: visible; }

.box { stroke-width: 1.5px; transition: stroke 0.2s ease, filter 0.2s ease; }
.guest { fill: var(--box-guest-fill); stroke: var(--box-guest-stroke); }
.process { fill: var(--box-process-fill); stroke: var(--box-process-stroke); }
.result { fill: var(--box-result-fill); stroke: var(--box-result-stroke); }

.step { cursor: pointer; }
.guest-step:hover .guest { stroke: var(--hover-guest-stroke); filter: drop-shadow(0 0 5px var(--hover-guest-shadow)); }
.step:hover .process { stroke: var(--hover-process-stroke); filter: drop-shadow(0 0 5px var(--hover-process-shadow)); }
.vm-step:hover .result { stroke: var(--hover-result-stroke); filter: drop-shadow(0 0 5px var(--hover-result-shadow)); }

.label {
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 12px;
  font-weight: 600;
  text-anchor: middle;
}
.guest-text { fill: var(--text-guest); color: var(--text-guest); -webkit-text-fill-color: var(--text-guest); }
.process-text { fill: var(--text-process); color: var(--text-process); -webkit-text-fill-color: var(--text-process); }
.result-text { fill: var(--text-result); color: var(--text-result); -webkit-text-fill-color: var(--text-result); }

.code {
  font-family: 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 9px;
  text-anchor: middle;
}
.guest-code {
  fill: var(--text-guest-code);
  color: var(--text-guest-code);
  -webkit-text-fill-color: var(--text-guest-code);
}
.process-code {
  fill: var(--text-process-code);
  color: var(--text-process-code);
  -webkit-text-fill-color: var(--text-process-code);
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
.result-note {
  fill: var(--text-result-note);
  color: var(--text-result-note);
  -webkit-text-fill-color: var(--text-result-note);
}

.arrow-label {
  fill: var(--text-arrow-label);
  color: var(--text-arrow-label);
  -webkit-text-fill-color: var(--text-arrow-label);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  text-anchor: middle;
}

.det-box {
  fill: var(--det-box-fill);
  stroke: var(--det-box-stroke);
  stroke-width: 1.5px;
  stroke-dasharray: 6, 3;
}
.det-label {
  fill: var(--text-det-label);
  color: var(--text-det-label);
  -webkit-text-fill-color: var(--text-det-label);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  font-weight: 600;
  text-anchor: middle;
  letter-spacing: 1px;
}
.det-note {
  fill: var(--text-det-note);
  color: var(--text-det-note);
  -webkit-text-fill-color: var(--text-det-note);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  text-anchor: middle;
  font-style: italic;
}
.det-line { stroke: var(--det-line-color); stroke-width: 1px; stroke-dasharray: 4, 3; fill: none; }

.arrow { stroke: var(--arrow-color); stroke-width: 1.5px; fill: none; }
.green-arrow { stroke: var(--green-arrow-color); }

.marker-arrow { fill: var(--marker-color); }
.marker-green { fill: var(--marker-green-color); }
</style>

<style>
html:not(.dark) .gh-diagram {
  --box-guest-fill: #f7fcf7;
  --box-guest-stroke: #2a7a4a;
  --box-process-fill: #f7f9fc;
  --box-process-stroke: #4477aa;
  --box-result-fill: #f7fcf7;
  --box-result-stroke: #2a7a4a;
  --det-box-fill: #faf5f5;
  --det-box-stroke: #cc8866;
  --det-line-color: #cc9988;
  --text-guest: #111;
  --text-process: #111;
  --text-result: #111;
  --text-guest-code: #111;
  --text-process-code: #111;
  --text-note: #555;
  --text-guest-note: #2a7a4a;
  --text-result-note: #2a7a4a;
  --text-arrow-label: #555;
  --text-det-label: #995544;
  --text-det-note: #997766;
  --arrow-color: #999;
  --green-arrow-color: #2a7a4a;
  --marker-color: #999;
  --marker-green-color: #2a7a4a;
  --hover-guest-stroke: #2a7a4a;
  --hover-guest-shadow: rgba(0,0,0,0.1);
  --hover-process-stroke: #3366aa;
  --hover-process-shadow: rgba(0,0,0,0.1);
  --hover-result-stroke: #2a7a4a;
  --hover-result-shadow: rgba(0,0,0,0.1);
}
</style>
