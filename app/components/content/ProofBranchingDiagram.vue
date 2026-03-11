<template>
  <div class="pb-diagram">
    <svg width="100%" viewBox="0 0 640 200">

      <!-- VADCOP Final (left) -->
      <g class="step vadcop-step">
        <rect class="box vadcop" x="10" y="60" width="110" height="52" rx="4" ry="4"/>
        <text class="label vadcop-text" x="65" y="82">VADCOP Final</text>
        <text class="sub vadcop-sub" x="65" y="98">Goldilocks STARK</text>
      </g>

      <!-- ═══ TOP BRANCH: compressed ═══ -->

      <path class="arrow" d="M 120 76 L 145 76 L 145 34 L 168 34" fill="none" marker-end="url(#pb-a)"/>
      <text class="method blue-method" x="158" y="52">.compressed()</text>

      <g class="step compressed-step">
        <rect class="box compressed" x="170" y="10" width="150" height="48" rx="4" ry="4"/>
        <text class="label compressed-text" x="245" y="30">Recursive STARK</text>
        <text class="sub compressed-sub" x="245" y="46">re-proves VADCOP Final</text>
      </g>

      <line class="arrow" x1="320" y1="34" x2="348" y2="34" marker-end="url(#pb-a)"/>

      <g class="step output-c-step">
        <rect class="box output-c" x="350" y="10" width="140" height="48" rx="4" ry="4"/>
        <text class="label output-c-text" x="420" y="30">Compressed proof</text>
        <text class="sub output-c-sub" x="420" y="46">Goldilocks, smaller</text>
      </g>

      <!-- ═══ BOTTOM BRANCH: PLONK ═══ -->

      <path class="arrow" d="M 120 96 L 135 96 L 135 140 L 148 140" fill="none" marker-end="url(#pb-a)"/>
      <text class="method green-method" x="145" y="120">.plonk()</text>

      <g class="step plonk-step">
        <rect class="box plonk" x="150" y="118" width="100" height="44" rx="4" ry="4"/>
        <text class="label plonk-text" x="200" y="136">RecursiveF</text>
        <text class="sub plonk-sub" x="200" y="152">GL → BN128</text>
      </g>

      <line class="arrow green-arrow" x1="250" y1="140" x2="268" y2="140" marker-end="url(#pb-a-green)"/>

      <g class="step plonk-step">
        <rect class="box plonk" x="270" y="118" width="100" height="44" rx="4" ry="4"/>
        <text class="label plonk-text" x="320" y="136">Witness gen</text>
        <text class="sub plonk-code" x="320" y="152">final.dylib</text>
      </g>

      <line class="arrow green-arrow" x1="370" y1="140" x2="388" y2="140" marker-end="url(#pb-a-green)"/>

      <g class="step plonk-step">
        <rect class="box plonk" x="390" y="118" width="104" height="44" rx="4" ry="4"/>
        <text class="label plonk-text" x="442" y="136">PLONK prover</text>
        <text class="sub plonk-code" x="442" y="152">final.zkey</text>
      </g>

      <line class="arrow green-arrow" x1="494" y1="140" x2="512" y2="140" marker-end="url(#pb-a-green)"/>

      <g class="step output-p-step">
        <rect class="box output-p" x="514" y="114" width="116" height="52" rx="4" ry="4"/>
        <text class="label output-p-text" x="572" y="136">PLONK proof</text>
        <text class="sub output-p-sub" x="572" y="154">on-chain verifiable</text>
      </g>

      <!-- Constraint -->
      <text class="constraint" x="320" y="188">compress() and prove_snark() only accept uncompressed VADCOP Final</text>

      <defs>
        <marker id="pb-a" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-arrow"/>
        </marker>
        <marker id="pb-a-green" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-green"/>
        </marker>
      </defs>
    </svg>
  </div>
</template>

<style scoped>
.pb-diagram {
  --vadcop-fill: #1a1f28;
  --vadcop-stroke: #3a5577;
  --compressed-fill: #1e2230;
  --compressed-stroke: #3a5577;
  --plonk-fill: #142814;
  --plonk-stroke: #4a8;
  --output-c-fill: #142814;
  --output-c-stroke: #4a8;
  --output-p-fill: #142814;
  --output-p-stroke: #4a8;
  --text-vadcop: #99bbdd;
  --text-vadcop-sub: #667788;
  --text-compressed: #8899aa;
  --text-compressed-sub: #556677;
  --text-plonk: #8d8;
  --text-plonk-sub: #5a8a5a;
  --text-output-c: #8d8;
  --text-output-c-sub: #5a8a5a;
  --text-output-p: #8d8;
  --text-output-p-sub: #5a8a5a;
  --text-method-blue: #5577aa;
  --text-method-green: #4a8;
  --text-constraint: #555;
  --arrow-color: #556;
  --arrow-green: #4a8;
  --hover-vadcop-stroke: #77aadd;
  --hover-compressed-stroke: #77aadd;
  --hover-plonk-stroke: #6c6;
  --hover-output-c-stroke: #6c6;
  --hover-output-p-stroke: #6c6;
  --hover-shadow-blue: rgba(85,136,187,0.3);
  --hover-shadow-green: rgba(68,170,136,0.4);

  max-width: 600px;
  margin: 1.5rem auto;
}
.pb-diagram svg { overflow: visible; }

.box { stroke-width: 1.5px; transition: stroke 0.2s ease, filter 0.2s ease; }
.vadcop { fill: var(--vadcop-fill); stroke: var(--vadcop-stroke); }
.compressed { fill: var(--compressed-fill); stroke: var(--compressed-stroke); }
.plonk { fill: var(--plonk-fill); stroke: var(--plonk-stroke); }
.output-c { fill: var(--output-c-fill); stroke: var(--output-c-stroke); }
.output-p { fill: var(--output-p-fill); stroke: var(--output-p-stroke); }

.step { cursor: pointer; }
.vadcop-step:hover .vadcop { stroke: var(--hover-vadcop-stroke); filter: drop-shadow(0 0 5px var(--hover-shadow-blue)); }
.compressed-step:hover .compressed { stroke: var(--hover-compressed-stroke); filter: drop-shadow(0 0 5px var(--hover-shadow-blue)); }
.plonk-step:hover .plonk { stroke: var(--hover-plonk-stroke); filter: drop-shadow(0 0 5px var(--hover-shadow-green)); }
.output-c-step:hover .output-c { stroke: var(--hover-output-c-stroke); filter: drop-shadow(0 0 6px var(--hover-shadow-green)); }
.output-p-step:hover .output-p { stroke: var(--hover-output-p-stroke); filter: drop-shadow(0 0 6px var(--hover-shadow-green)); }

.label {
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 13px;
  font-weight: 600;
  text-anchor: middle;
}
.vadcop-text { fill: var(--text-vadcop); color: var(--text-vadcop); -webkit-text-fill-color: var(--text-vadcop); }
.compressed-text { fill: var(--text-compressed); color: var(--text-compressed); -webkit-text-fill-color: var(--text-compressed); }
.plonk-text { fill: var(--text-plonk); color: var(--text-plonk); -webkit-text-fill-color: var(--text-plonk); }
.output-c-text { fill: var(--text-output-c); color: var(--text-output-c); -webkit-text-fill-color: var(--text-output-c); }
.output-p-text { fill: var(--text-output-p); color: var(--text-output-p); -webkit-text-fill-color: var(--text-output-p); }

.sub {
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 10px;
  text-anchor: middle;
}
.vadcop-sub { fill: var(--text-vadcop-sub); color: var(--text-vadcop-sub); -webkit-text-fill-color: var(--text-vadcop-sub); }
.compressed-sub { fill: var(--text-compressed-sub); color: var(--text-compressed-sub); -webkit-text-fill-color: var(--text-compressed-sub); }
.plonk-sub { fill: var(--text-plonk-sub); color: var(--text-plonk-sub); -webkit-text-fill-color: var(--text-plonk-sub); }
.plonk-code {
  fill: var(--text-plonk-sub);
  color: var(--text-plonk-sub);
  -webkit-text-fill-color: var(--text-plonk-sub);
  font-family: 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
}
.output-c-sub { fill: var(--text-output-c-sub); color: var(--text-output-c-sub); -webkit-text-fill-color: var(--text-output-c-sub); }
.output-p-sub { fill: var(--text-output-p-sub); color: var(--text-output-p-sub); -webkit-text-fill-color: var(--text-output-p-sub); }

.method {
  font-family: 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 10px;
  text-anchor: middle;
}
.blue-method { fill: var(--text-method-blue); color: var(--text-method-blue); -webkit-text-fill-color: var(--text-method-blue); }
.green-method { fill: var(--text-method-green); color: var(--text-method-green); -webkit-text-fill-color: var(--text-method-green); }

.constraint {
  fill: var(--text-constraint);
  color: var(--text-constraint);
  -webkit-text-fill-color: var(--text-constraint);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 10px;
  text-anchor: middle;
  font-style: italic;
}

.arrow { stroke: var(--arrow-color); stroke-width: 1.5px; fill: none; }
.green-arrow { stroke: var(--arrow-green); }

.marker-arrow { fill: var(--arrow-color); }
.marker-green { fill: var(--arrow-green); }
</style>

<style>
html:not(.dark) .pb-diagram {
  --vadcop-fill: #f7f9fc;
  --vadcop-stroke: #4477aa;
  --compressed-fill: #f7f9fc;
  --compressed-stroke: #4477aa;
  --plonk-fill: #f7fcf7;
  --plonk-stroke: #2a7a4a;
  --output-c-fill: #f7fcf7;
  --output-c-stroke: #2a7a4a;
  --output-p-fill: #f7fcf7;
  --output-p-stroke: #2a7a4a;
  --text-vadcop: #111;
  --text-vadcop-sub: #444;
  --text-compressed: #111;
  --text-compressed-sub: #444;
  --text-plonk: #111;
  --text-plonk-sub: #444;
  --text-output-c: #111;
  --text-output-c-sub: #444;
  --text-output-p: #111;
  --text-output-p-sub: #444;
  --text-method-blue: #2255aa;
  --text-method-green: #2a7a4a;
  --text-constraint: #555;
  --arrow-color: #999;
  --arrow-green: #2a7a4a;
  --hover-vadcop-stroke: #3366aa;
  --hover-compressed-stroke: #3366aa;
  --hover-plonk-stroke: #2a7a4a;
  --hover-output-c-stroke: #2a7a4a;
  --hover-output-p-stroke: #2a7a4a;
  --hover-shadow-blue: rgba(0,0,0,0.1);
  --hover-shadow-green: rgba(0,0,0,0.1);
}
</style>
