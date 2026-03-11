<template>
  <div class="snark-pipeline-diagram">
    <svg width="100%" viewBox="0 0 740 200">

      <!-- ── Input: VADCOP Final ── -->
      <g class="step input-step">
        <rect class="box input" x="4" y="60" width="86" height="50" rx="4" ry="4"/>
        <text class="label input-text" x="47" y="82">VADCOP Final</text>
        <text class="sublabel input-sub" x="47" y="96">Goldilocks STARK</text>
      </g>
      <text class="annotation" x="47" y="124">+verkey</text>

      <!-- Arrow: input → stage 1 -->
      <line class="arrow" x1="90" y1="85" x2="112" y2="85" marker-end="url(#sp-a)"/>

      <!-- ── Stage 1: RecursiveF ── -->
      <g class="step stage-step">
        <rect class="box stage" x="114" y="30" width="138" height="110" rx="5" ry="5"/>
        <text class="stage-title" x="183" y="50">Stage 1: RecursiveF</text>
        <text class="stage-content" x="183" y="66">Circom circuit</text>
        <text class="stage-content" x="183" y="78">verifies Goldilocks STARK</text>
        <text class="stage-content" x="183" y="90">using BN128 arithmetic</text>
        <line class="separator" x1="126" y1="98" x2="240" y2="98"/>
        <text class="field-transition" x="183" y="112">FIELD TRANSITION</text>
        <text class="stage-content" x="183" y="126">Goldilocks → BN128</text>
      </g>

      <!-- Arrow: stage 1 → stage 2 -->
      <line class="arrow" x1="252" y1="85" x2="274" y2="85" marker-end="url(#sp-a)"/>

      <!-- ── Stage 2: Witness ── -->
      <g class="step stage-step">
        <rect class="box stage" x="276" y="40" width="134" height="90" rx="5" ry="5"/>
        <text class="stage-title" x="343" y="60">Stage 2: Witness</text>
        <text class="code-text" x="343" y="78">Circom circuit (final.dylib)</text>
        <text class="stage-content" x="343" y="92">verifies BN128 STARK</text>
        <text class="stage-content" x="343" y="106">produces witness vector</text>
      </g>

      <!-- Arrow: stage 2 → stage 3 -->
      <line class="arrow" x1="410" y1="85" x2="432" y2="85" marker-end="url(#sp-a)"/>

      <!-- ── Stage 3: SNARK ── -->
      <g class="step stage-step">
        <rect class="box stage" x="434" y="40" width="138" height="90" rx="5" ry="5"/>
        <text class="stage-title" x="503" y="60">Stage 3: SNARK</text>
        <text class="stage-content" x="503" y="78">PLONK / Fflonk prover</text>
        <text class="code-text" x="503" y="92">from final.zkey</text>
        <text class="code-text" x="503" y="106">gen_final_snark_proof_c()</text>
      </g>

      <!-- Arrow: stage 3 → output (green) -->
      <line class="arrow green-arrow" x1="572" y1="85" x2="594" y2="85" marker-end="url(#sp-a-green)"/>

      <!-- ── Output: PLONK proof ── -->
      <g class="step output-step">
        <rect class="box output" x="596" y="48" width="138" height="74" rx="4" ry="4"/>
        <text class="label output-text" x="665" y="72">PLONK proof</text>
        <text class="sublabel output-sub" x="665" y="88">24 x uint256 = 768 bytes</text>
        <text class="sublabel output-sub" x="665" y="102">on-chain verifiable</text>
      </g>

      <defs>
        <marker id="sp-a" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-arrow"/>
        </marker>
        <marker id="sp-a-green" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-green"/>
        </marker>
      </defs>
    </svg>
  </div>
</template>

<style scoped>
.snark-pipeline-diagram {
  --box-input-fill: #1a1f28;
  --box-input-stroke: #3a5577;
  --box-stage-fill: #1e2230;
  --box-stage-stroke: #3a5577;
  --box-output-fill: #142814;
  --box-output-stroke: #4a8;
  --text-input: #99bbdd;
  --text-stage-title: #99bbdd;
  --text-stage-content: #8899aa;
  --text-field-transition: #cc8844;
  --text-code: #5a8a5a;
  --text-output: #8d8;
  --text-output-sub: #5a8a5a;
  --text-annotation: #5a8a5a;
  --separator-color: #3a5577;
  --arrow-color: #556;
  --arrow-green: #4a8;
  --marker-color: #556;
  --marker-green: #4a8;
  --hover-input-stroke: #77aadd;
  --hover-input-shadow: rgba(85,136,187,0.3);
  --hover-stage-stroke: #77aadd;
  --hover-stage-shadow: rgba(85,136,187,0.3);
  --hover-output-stroke: #6c6;
  --hover-output-shadow: rgba(68,170,136,0.4);

  max-width: 600px;
  margin: 1.5rem auto;
}
.snark-pipeline-diagram svg { overflow: visible; }

.box { stroke-width: 1.5px; transition: stroke 0.2s ease, filter 0.2s ease; }
.input { fill: var(--box-input-fill); stroke: var(--box-input-stroke); }
.stage { fill: var(--box-stage-fill); stroke: var(--box-stage-stroke); }
.output { fill: var(--box-output-fill); stroke: var(--box-output-stroke); }

.step { cursor: pointer; }
.input-step:hover .input { stroke: var(--hover-input-stroke); filter: drop-shadow(0 0 5px var(--hover-input-shadow)); }
.stage-step:hover .stage { stroke: var(--hover-stage-stroke); filter: drop-shadow(0 0 5px var(--hover-stage-shadow)); }
.output-step:hover .output { stroke: var(--hover-output-stroke); filter: drop-shadow(0 0 8px var(--hover-output-shadow)); }

.label {
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 11px;
  font-weight: 600;
  text-anchor: middle;
}
.input-text {
  fill: var(--text-input);
  color: var(--text-input);
  -webkit-text-fill-color: var(--text-input);
}
.output-text {
  fill: var(--text-output);
  color: var(--text-output);
  -webkit-text-fill-color: var(--text-output);
}

.sublabel {
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 8px;
  text-anchor: middle;
}
.input-sub {
  fill: var(--text-annotation);
  color: var(--text-annotation);
  -webkit-text-fill-color: var(--text-annotation);
}
.output-sub {
  fill: var(--text-output-sub);
  color: var(--text-output-sub);
  -webkit-text-fill-color: var(--text-output-sub);
}

.annotation {
  fill: var(--text-annotation);
  color: var(--text-annotation);
  -webkit-text-fill-color: var(--text-annotation);
  font-family: 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 8px;
  text-anchor: middle;
  font-style: italic;
}

.stage-title {
  fill: var(--text-stage-title);
  color: var(--text-stage-title);
  -webkit-text-fill-color: var(--text-stage-title);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 10px;
  font-weight: 700;
  text-anchor: middle;
}

.stage-content {
  fill: var(--text-stage-content);
  color: var(--text-stage-content);
  -webkit-text-fill-color: var(--text-stage-content);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 8px;
  text-anchor: middle;
}

.field-transition {
  fill: var(--text-field-transition);
  color: var(--text-field-transition);
  -webkit-text-fill-color: var(--text-field-transition);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  font-weight: 700;
  text-anchor: middle;
}

.code-text {
  fill: var(--text-code);
  color: var(--text-code);
  -webkit-text-fill-color: var(--text-code);
  font-family: 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 8px;
  text-anchor: middle;
}

.separator {
  stroke: var(--separator-color);
  stroke-width: 0.5px;
  opacity: 0.6;
}

.arrow {
  stroke: var(--arrow-color);
  stroke-width: 1.5px;
  fill: none;
}
.green-arrow {
  stroke: var(--arrow-green);
}

.marker-arrow { fill: var(--marker-color); }
.marker-green { fill: var(--marker-green); }
</style>

<style>
/* ── Light mode ── */
html:not(.dark) .snark-pipeline-diagram {
  --box-input-fill: #f7f9fc;
  --box-input-stroke: #4477aa;
  --box-stage-fill: #f7f9fc;
  --box-stage-stroke: #4477aa;
  --box-output-fill: #f7fcf7;
  --box-output-stroke: #2a7a4a;
  --text-input: #111;
  --text-stage-title: #111;
  --text-stage-content: #333;
  --text-field-transition: #b86600;
  --text-code: #111;
  --text-output: #111;
  --text-output-sub: #111;
  --text-annotation: #111;
  --separator-color: #4477aa;
  --arrow-color: #999;
  --arrow-green: #2a7a4a;
  --marker-color: #999;
  --marker-green: #2a7a4a;
  --hover-input-stroke: #2255aa;
  --hover-input-shadow: rgba(0,0,0,0.1);
  --hover-stage-stroke: #2255aa;
  --hover-stage-shadow: rgba(0,0,0,0.1);
  --hover-output-stroke: #1a6a3a;
  --hover-output-shadow: rgba(0,0,0,0.1);
}
</style>
