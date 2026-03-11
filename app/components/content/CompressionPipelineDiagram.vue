<template>
  <div class="cp-diagram">
    <svg width="100%" viewBox="0 0 660 200">

      <!-- Input box: VADCOP Final proof -->
      <g class="step input-step">
        <rect class="box input" x="10" y="50" width="110" height="44" rx="4" ry="4"/>
        <text class="label input-text" x="65" y="70">VADCOP Final proof</text>
        <text class="sublabel input-sub" x="65" y="84">Goldilocks STARK</text>
      </g>

      <!-- Arrow: input → processing region -->
      <line class="arrow" x1="120" y1="72" x2="152" y2="72" marker-end="url(#cp-a)"/>

      <!-- Processing region (dashed outer rect) -->
      <rect class="region" x="155" y="10" width="310" height="140" rx="8" ry="8"/>

      <!-- Region title -->
      <text class="region-title" x="310" y="28">setup_vadcop_final_compressed</text>

      <!-- Internal step 1: Circom verifier circuit -->
      <g class="step internal-step">
        <rect class="box internal" x="175" y="38" width="270" height="28" rx="3" ry="3"/>
        <text class="label internal-text" x="310" y="52">Circom verifier circuit</text>
        <text class="sublabel internal-sub" x="310" y="62">verifies VADCOP Final STARK</text>
      </g>

      <!-- Arrow down: step 1 → step 2 -->
      <line class="arrow" x1="310" y1="66" x2="310" y2="76" marker-end="url(#cp-a)"/>

      <!-- Internal step 2: Generate witness -->
      <g class="step internal-step">
        <rect class="box internal" x="225" y="78" width="170" height="24" rx="3" ry="3"/>
        <text class="label internal-text" x="310" y="94">Generate witness</text>
      </g>

      <!-- Arrow down: step 2 → step 3 -->
      <line class="arrow" x1="310" y1="102" x2="310" y2="112" marker-end="url(#cp-a)"/>

      <!-- Internal step 3: STARK prover -->
      <g class="step internal-step">
        <rect class="box internal" x="195" y="114" width="230" height="28" rx="3" ry="3"/>
        <text class="label internal-text" x="310" y="128">STARK prover</text>
        <text class="sublabel internal-sub" x="310" y="138">compressed starkinfo.json params</text>
      </g>

      <!-- Arrow: processing region → output -->
      <line class="arrow output-arrow" x1="465" y1="72" x2="498" y2="72" marker-end="url(#cp-a-green)"/>

      <!-- Output box: Compressed proof -->
      <g class="step output-step">
        <rect class="box output" x="500" y="46" width="148" height="52" rx="4" ry="4"/>
        <text class="label output-text" x="574" y="68">Compressed proof</text>
        <text class="sublabel output-sub" x="574" y="82">Goldilocks FRI, smaller size</text>
      </g>

      <!-- Annotation below processing region -->
      <text class="annotation" x="310" y="168">The compressed circuit is simpler than the original —</text>
      <text class="annotation" x="310" y="179">it's a single verifier, not 35 state machines</text>

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
  --input-sub: #8899aa;
  --region-fill: #0d1117;
  --region-stroke: #3a5577;
  --region-title-color: #99bbdd;
  --internal-fill: #1e2230;
  --internal-stroke: #3a5577;
  --internal-text: #8899aa;
  --internal-sub: #667788;
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

  max-width: 480px;
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

.label {
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 10px;
  font-weight: 600;
  text-anchor: middle;
}
.input-text { fill: var(--input-text); color: var(--input-text); -webkit-text-fill-color: var(--input-text); }
.internal-text { fill: var(--internal-text); color: var(--internal-text); -webkit-text-fill-color: var(--internal-text); }
.output-text { fill: var(--output-text); color: var(--output-text); -webkit-text-fill-color: var(--output-text); }

.sublabel {
  font-family: 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 8px;
  text-anchor: middle;
}
.input-sub { fill: var(--input-sub); color: var(--input-sub); -webkit-text-fill-color: var(--input-sub); }
.internal-sub { fill: var(--internal-sub); color: var(--internal-sub); -webkit-text-fill-color: var(--internal-sub); }
.output-sub { fill: var(--output-sub); color: var(--output-sub); -webkit-text-fill-color: var(--output-sub); }

.region-title {
  fill: var(--region-title-color);
  color: var(--region-title-color);
  -webkit-text-fill-color: var(--region-title-color);
  font-family: 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 9px;
  font-weight: 600;
  text-anchor: middle;
}

.annotation {
  fill: var(--annotation-color);
  color: var(--annotation-color);
  -webkit-text-fill-color: var(--annotation-color);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 8px;
  font-style: italic;
  text-anchor: middle;
}

.arrow { stroke: var(--arrow-color); stroke-width: 1.5px; fill: none; }
.output-arrow { stroke: var(--arrow-green); }

.step { cursor: pointer; }
.input-step:hover .input { stroke: var(--hover-input-stroke); filter: drop-shadow(0 0 5px var(--hover-shadow-blue)); }
.internal-step:hover .internal { stroke: var(--hover-internal-stroke); filter: drop-shadow(0 0 5px var(--hover-shadow-blue)); }
.output-step:hover .output { stroke: var(--hover-output-stroke); filter: drop-shadow(0 0 8px var(--hover-shadow-green)); }

.marker-arrow { fill: var(--arrow-color); }
.marker-green { fill: var(--arrow-green); }
</style>

<style>
/* Light mode */
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
  --internal-sub: #444;
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
