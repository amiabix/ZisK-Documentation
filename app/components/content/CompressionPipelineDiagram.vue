<template>
  <div class="cp-diagram">
    <svg width="100%" viewBox="0 0 600 200">

      <!-- Input: VADCOP Final -->
      <g class="step input-step">
        <rect class="box input" x="10" y="48" width="110" height="52" rx="4" ry="4"/>
        <text class="label input-text" x="65" y="70">VADCOP Final</text>
        <text class="sub input-sub" x="65" y="86">Goldilocks STARK</text>
      </g>

      <line class="arrow" x1="120" y1="74" x2="148" y2="74" marker-end="url(#cp-a)"/>

      <!-- Processing region (dashed) -->
      <rect class="region" x="150" y="8" width="280" height="152" rx="8" ry="8"/>
      <text class="region-title" x="290" y="26">setup_vadcop_final_compressed</text>

      <!-- Step 1 -->
      <g class="step internal-step">
        <rect class="box internal" x="168" y="34" width="244" height="30" rx="3" ry="3"/>
        <text class="label internal-text" x="290" y="54">Verify VADCOP Final proof</text>
      </g>

      <line class="arrow" x1="290" y1="64" x2="290" y2="74" marker-end="url(#cp-a)"/>

      <!-- Step 2 -->
      <g class="step internal-step">
        <rect class="box internal" x="200" y="76" width="180" height="30" rx="3" ry="3"/>
        <text class="label internal-text" x="290" y="96">Generate witness</text>
      </g>

      <line class="arrow" x1="290" y1="106" x2="290" y2="116" marker-end="url(#cp-a)"/>

      <!-- Step 3 -->
      <g class="step internal-step">
        <rect class="box internal" x="178" y="118" width="224" height="30" rx="3" ry="3"/>
        <text class="label internal-text" x="290" y="138">STARK prover (smaller params)</text>
      </g>

      <!-- Arrow: region → output -->
      <line class="arrow green-arrow" x1="430" y1="74" x2="458" y2="74" marker-end="url(#cp-a-green)"/>

      <!-- Output -->
      <g class="step output-step">
        <rect class="box output" x="460" y="42" width="130" height="64" rx="4" ry="4"/>
        <text class="label output-text" x="525" y="66">Compressed proof</text>
        <text class="sub output-sub" x="525" y="82">Goldilocks FRI</text>
        <text class="sub output-sub" x="525" y="94">smaller size</text>
      </g>

      <!-- Annotation -->
      <text class="annotation" x="290" y="180">The verifier circuit has fewer constraints than the original</text>
      <text class="annotation" x="290" y="194">execution trace, so smaller STARK params can be used</text>

      <defs>
        <marker id="cp-a" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-arrow"/>
        </marker>
        <marker id="cp-a-green" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-green"/>
        </marker>
      </defs>
    </svg>
  </div>
</template>

<style scoped>
.cp-diagram {
  --input-fill: #1a1f28;
  --input-stroke: #3a5577;
  --input-text: #99bbdd;
  --input-sub: #667788;
  --region-fill: #0d1117;
  --region-stroke: #3a5577;
  --region-title-color: #99bbdd;
  --internal-fill: #1e2230;
  --internal-stroke: #3a5577;
  --internal-text: #8899aa;
  --output-fill: #142814;
  --output-stroke: #4a8;
  --output-text: #8d8;
  --output-sub: #5a8a5a;
  --arrow-color: #556;
  --arrow-green: #4a8;
  --annotation-color: #556;
  --hover-input-stroke: #77aadd;
  --hover-internal-stroke: #77aadd;
  --hover-output-stroke: #6c6;
  --hover-shadow-blue: rgba(85,136,187,0.3);
  --hover-shadow-green: rgba(68,170,136,0.4);

  max-width: 600px;
  margin: 1.5rem auto;
}
.cp-diagram svg { overflow: visible; }

.box { stroke-width: 1.5px; transition: stroke 0.2s ease, filter 0.2s ease; }
.input { fill: var(--input-fill); stroke: var(--input-stroke); }
.region {
  fill: var(--region-fill);
  stroke: var(--region-stroke);
  stroke-width: 1px;
  stroke-dasharray: 6, 4;
}
.internal { fill: var(--internal-fill); stroke: var(--internal-stroke); stroke-width: 1px; }
.output { fill: var(--output-fill); stroke: var(--output-stroke); }

.step { cursor: pointer; }
.input-step:hover .input { stroke: var(--hover-input-stroke); filter: drop-shadow(0 0 5px var(--hover-shadow-blue)); }
.internal-step:hover .internal { stroke: var(--hover-internal-stroke); filter: drop-shadow(0 0 5px var(--hover-shadow-blue)); }
.output-step:hover .output { stroke: var(--hover-output-stroke); filter: drop-shadow(0 0 8px var(--hover-shadow-green)); }

.label {
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 12px;
  font-weight: 600;
  text-anchor: middle;
}
.input-text { fill: var(--input-text); color: var(--input-text); -webkit-text-fill-color: var(--input-text); }
.internal-text { fill: var(--internal-text); color: var(--internal-text); -webkit-text-fill-color: var(--internal-text); }
.output-text { fill: var(--output-text); color: var(--output-text); -webkit-text-fill-color: var(--output-text); }

.sub {
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 10px;
  text-anchor: middle;
}
.input-sub { fill: var(--input-sub); color: var(--input-sub); -webkit-text-fill-color: var(--input-sub); }
.output-sub { fill: var(--output-sub); color: var(--output-sub); -webkit-text-fill-color: var(--output-sub); }

.region-title {
  fill: var(--region-title-color);
  color: var(--region-title-color);
  -webkit-text-fill-color: var(--region-title-color);
  font-family: 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 10px;
  font-weight: 600;
  text-anchor: middle;
}

.annotation {
  fill: var(--annotation-color);
  color: var(--annotation-color);
  -webkit-text-fill-color: var(--annotation-color);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 10px;
  font-style: italic;
  text-anchor: middle;
}

.arrow { stroke: var(--arrow-color); stroke-width: 1.5px; fill: none; }
.green-arrow { stroke: var(--arrow-green); }

.marker-arrow { fill: var(--arrow-color); }
.marker-green { fill: var(--arrow-green); }
</style>

<style>
html:not(.dark) .cp-diagram {
  --input-fill: #f7f9fc;
  --input-stroke: #4477aa;
  --input-text: #111;
  --input-sub: #444;
  --region-fill: #f0f4f8;
  --region-stroke: #4477aa;
  --region-title-color: #111;
  --internal-fill: #f7f9fc;
  --internal-stroke: #4477aa;
  --internal-text: #111;
  --output-fill: #f7fcf7;
  --output-stroke: #2a7a4a;
  --output-text: #111;
  --output-sub: #444;
  --arrow-color: #999;
  --arrow-green: #2a7a4a;
  --annotation-color: #444;
  --hover-input-stroke: #2255aa;
  --hover-internal-stroke: #2255aa;
  --hover-output-stroke: #1a6a3a;
  --hover-shadow-blue: rgba(0,0,0,0.1);
  --hover-shadow-green: rgba(0,0,0,0.1);
}
</style>
