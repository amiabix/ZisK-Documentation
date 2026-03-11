<template>
  <div class="snark-diagram">
    <svg width="100%" viewBox="0 0 600 260">

      <!-- Input: VADCOP Final -->
      <g class="step input-step">
        <rect class="box input" x="10" y="24" width="108" height="60" rx="4" ry="4"/>
        <text class="label input-text" x="64" y="48">VADCOP Final</text>
        <text class="sub input-sub" x="64" y="64">Goldilocks STARK</text>
        <text class="note" x="64" y="78">+verkey</text>
      </g>

      <line class="arrow" x1="118" y1="54" x2="148" y2="54" marker-end="url(#snk-a)"/>

      <!-- Stage 1: RecursiveF (prominent region) -->
      <rect class="stage1-region" x="150" y="4" width="290" height="132" rx="6" ry="6"/>
      <text class="stage-title" x="295" y="22">Stage 1: RecursiveF</text>

      <g class="step stage1-step">
        <rect class="box stage1-inner" x="168" y="30" width="254" height="38" rx="3" ry="3"/>
        <text class="detail" x="295" y="46">Verification circuit verifies</text>
        <text class="detail" x="295" y="60">Goldilocks STARK using BN128 arithmetic</text>
      </g>

      <line class="stage1-sep" x1="168" y1="76" x2="422" y2="76"/>

      <text class="field-label" x="295" y="96">FIELD TRANSITION</text>
      <text class="field-detail" x="295" y="114">Goldilocks (64-bit) → BN128 (254-bit)</text>

      <!-- Arrow: Stage 1 → Stage 2 (vertical from center) -->
      <line class="arrow stage1-arrow" x1="295" y1="136" x2="295" y2="168" marker-end="url(#snk-a)"/>
      <text class="intermediate-label" x="340" y="155">BN128 STARK</text>

      <!-- Stage 2: Witness generation -->
      <g class="step stage-step">
        <rect class="box stage" x="180" y="170" width="140" height="56" rx="4" ry="4"/>
        <text class="label stage-text" x="250" y="190">Stage 2: Witness</text>
        <text class="code-detail" x="250" y="206">final.dylib</text>
        <text class="sub stage-sub" x="250" y="218">produces witness vector</text>
      </g>

      <line class="arrow" x1="320" y1="198" x2="338" y2="198" marker-end="url(#snk-a)"/>

      <!-- Stage 3: SNARK proof -->
      <g class="step stage-step">
        <rect class="box stage" x="340" y="170" width="120" height="56" rx="4" ry="4"/>
        <text class="label stage-text" x="400" y="190">Stage 3: SNARK</text>
        <text class="sub stage-sub" x="400" y="206">PLONK / Fflonk prover</text>
        <text class="code-detail" x="400" y="218">final.zkey</text>
      </g>

      <line class="arrow green-arrow" x1="460" y1="198" x2="478" y2="198" marker-end="url(#snk-a-green)"/>

      <!-- Output: PLONK proof -->
      <g class="step output-step">
        <rect class="box output" x="480" y="164" width="112" height="68" rx="4" ry="4"/>
        <text class="label output-text" x="536" y="190">PLONK proof</text>
        <text class="sub output-sub" x="536" y="206">24 × uint256</text>
        <text class="output-note" x="536" y="220">on-chain verifiable</text>
      </g>

      <defs>
        <marker id="snk-a" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-arrow"/>
        </marker>
        <marker id="snk-a-green" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-green"/>
        </marker>
      </defs>
    </svg>
  </div>
</template>

<style scoped>
.snark-diagram {
  --input-fill: #1a1f28;
  --input-stroke: #3a5577;
  --stage1-region-fill: #0d1117;
  --stage1-region-stroke: #3a5577;
  --stage1-inner-fill: #1e2230;
  --stage1-inner-stroke: #3a5577;
  --stage-fill: #1e2230;
  --stage-stroke: #3a5577;
  --output-fill: #142814;
  --output-stroke: #4a8;
  --text-input: #99bbdd;
  --text-input-sub: #667788;
  --text-note: #5a8a5a;
  --text-stage-title: #99bbdd;
  --text-stage: #99bbdd;
  --text-stage-sub: #667788;
  --text-detail: #8899aa;
  --text-code: #5a8a5a;
  --text-field-label: #cc8844;
  --text-field-detail: #aa7733;
  --text-intermediate: #667788;
  --text-output: #8d8;
  --text-output-sub: #5a8a5a;
  --text-output-note: #5a8a5a;
  --sep-color: #3a5577;
  --arrow-color: #556;
  --arrow-green: #4a8;
  --stage1-arrow-color: #3a5577;
  --hover-input-stroke: #77aadd;
  --hover-stage1-stroke: #77aadd;
  --hover-stage-stroke: #77aadd;
  --hover-output-stroke: #6c6;
  --hover-shadow-blue: rgba(85,136,187,0.3);
  --hover-shadow-green: rgba(68,170,136,0.4);

  max-width: 600px;
  margin: 1.5rem auto;
}
.snark-diagram svg { overflow: visible; }

.box { stroke-width: 1.5px; transition: stroke 0.2s ease, filter 0.2s ease; }
.input { fill: var(--input-fill); stroke: var(--input-stroke); }
.stage1-region {
  fill: var(--stage1-region-fill);
  stroke: var(--stage1-region-stroke);
  stroke-width: 1px;
  stroke-dasharray: 6, 4;
}
.stage1-inner { fill: var(--stage1-inner-fill); stroke: var(--stage1-inner-stroke); stroke-width: 1px; }
.stage { fill: var(--stage-fill); stroke: var(--stage-stroke); }
.output { fill: var(--output-fill); stroke: var(--output-stroke); }

.step { cursor: pointer; }
.input-step:hover .input { stroke: var(--hover-input-stroke); filter: drop-shadow(0 0 5px var(--hover-shadow-blue)); }
.stage1-step:hover .stage1-inner { stroke: var(--hover-stage1-stroke); filter: drop-shadow(0 0 5px var(--hover-shadow-blue)); }
.stage-step:hover .stage { stroke: var(--hover-stage-stroke); filter: drop-shadow(0 0 5px var(--hover-shadow-blue)); }
.output-step:hover .output { stroke: var(--hover-output-stroke); filter: drop-shadow(0 0 8px var(--hover-shadow-green)); }

.label {
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 13px;
  font-weight: 600;
  text-anchor: middle;
}
.input-text { fill: var(--text-input); color: var(--text-input); -webkit-text-fill-color: var(--text-input); }
.stage-text { fill: var(--text-stage); color: var(--text-stage); -webkit-text-fill-color: var(--text-stage); }
.output-text { fill: var(--text-output); color: var(--text-output); -webkit-text-fill-color: var(--text-output); }

.sub {
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 10px;
  text-anchor: middle;
}
.input-sub { fill: var(--text-input-sub); color: var(--text-input-sub); -webkit-text-fill-color: var(--text-input-sub); }
.stage-sub { fill: var(--text-stage-sub); color: var(--text-stage-sub); -webkit-text-fill-color: var(--text-stage-sub); }
.output-sub { fill: var(--text-output-sub); color: var(--text-output-sub); -webkit-text-fill-color: var(--text-output-sub); }

.note {
  fill: var(--text-note);
  color: var(--text-note);
  -webkit-text-fill-color: var(--text-note);
  font-family: 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 9px;
  font-style: italic;
  text-anchor: middle;
}

.stage-title {
  fill: var(--text-stage-title);
  color: var(--text-stage-title);
  -webkit-text-fill-color: var(--text-stage-title);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-anchor: middle;
}

.detail {
  fill: var(--text-detail);
  color: var(--text-detail);
  -webkit-text-fill-color: var(--text-detail);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 11px;
  text-anchor: middle;
}

.code-detail {
  fill: var(--text-code);
  color: var(--text-code);
  -webkit-text-fill-color: var(--text-code);
  font-family: 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 10px;
  text-anchor: middle;
}

.stage1-sep {
  stroke: var(--sep-color);
  stroke-width: 0.5px;
  opacity: 0.5;
}

.field-label {
  fill: var(--text-field-label);
  color: var(--text-field-label);
  -webkit-text-fill-color: var(--text-field-label);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 11px;
  font-weight: 700;
  text-anchor: middle;
  letter-spacing: 1px;
}

.field-detail {
  fill: var(--text-field-detail);
  color: var(--text-field-detail);
  -webkit-text-fill-color: var(--text-field-detail);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 11px;
  text-anchor: middle;
}

.intermediate-label {
  fill: var(--text-intermediate);
  color: var(--text-intermediate);
  -webkit-text-fill-color: var(--text-intermediate);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 10px;
  font-style: italic;
  text-anchor: middle;
}

.output-note {
  fill: var(--text-output-note);
  color: var(--text-output-note);
  -webkit-text-fill-color: var(--text-output-note);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  font-style: italic;
  text-anchor: middle;
}

.arrow { stroke: var(--arrow-color); stroke-width: 1.5px; fill: none; }
.stage1-arrow { stroke: var(--stage1-arrow-color); }
.green-arrow { stroke: var(--arrow-green); }

.marker-arrow { fill: var(--arrow-color); }
.marker-green { fill: var(--arrow-green); }
</style>

<style>
html:not(.dark) .snark-diagram {
  --input-fill: #f7f9fc;
  --input-stroke: #4477aa;
  --stage1-region-fill: #f0f4f8;
  --stage1-region-stroke: #4477aa;
  --stage1-inner-fill: #f7f9fc;
  --stage1-inner-stroke: #4477aa;
  --stage-fill: #f7f9fc;
  --stage-stroke: #4477aa;
  --output-fill: #f7fcf7;
  --output-stroke: #2a7a4a;
  --text-input: #111;
  --text-input-sub: #444;
  --text-note: #333;
  --text-stage-title: #111;
  --text-stage: #111;
  --text-stage-sub: #444;
  --text-detail: #333;
  --text-code: #333;
  --text-field-label: #b86600;
  --text-field-detail: #996600;
  --text-intermediate: #666;
  --text-output: #111;
  --text-output-sub: #333;
  --text-output-note: #555;
  --sep-color: #4477aa;
  --arrow-color: #999;
  --arrow-green: #2a7a4a;
  --stage1-arrow-color: #4477aa;
  --hover-input-stroke: #2255aa;
  --hover-stage1-stroke: #2255aa;
  --hover-stage-stroke: #2255aa;
  --hover-output-stroke: #1a6a3a;
  --hover-shadow-blue: rgba(0,0,0,0.1);
  --hover-shadow-green: rgba(0,0,0,0.1);
}
</style>
