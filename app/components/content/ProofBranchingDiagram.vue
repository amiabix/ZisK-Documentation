<template>
  <div class="pb-diagram">
    <svg width="100%" viewBox="0 0 680 240">

      <!-- VADCOP Final (left) -->
      <g class="step vadcop-step">
        <rect class="box vadcop" x="10" y="78" width="110" height="52" rx="4" ry="4"/>
        <text class="label vadcop-text" x="65" y="100">VADCOP Final</text>
        <text class="sublabel vadcop-sub" x="65" y="115">Goldilocks STARK</text>
      </g>

      <!-- ═══ TOP BRANCH: compressed path ═══ -->

      <!-- Arrow right from VADCOP → Recursive STARK -->
      <line class="arrow" x1="120" y1="92" x2="188" y2="50" marker-end="url(#pb-a)"/>
      <text class="method" x="148" y="60">.compressed()</text>

      <!-- Recursive STARK -->
      <g class="step">
        <rect class="box compressed" x="190" y="18" width="140" height="52" rx="4" ry="4"/>
        <text class="label compressed-text" x="260" y="37">Recursive STARK</text>
        <text class="sublabel compressed-sub" x="260" y="50">Circom verifies VADCOP</text>
        <text class="sublabel compressed-sub" x="260" y="61">Final, re-proves with</text>
        <text class="sublabel compressed-sub" x="260" y="72">smaller STARK params</text>
      </g>

      <!-- Arrow → Compressed proof output -->
      <line class="arrow" x1="330" y1="44" x2="368" y2="44" marker-end="url(#pb-a)"/>

      <!-- Compressed proof output -->
      <g class="step output-compressed-step">
        <rect class="box output-compressed" x="370" y="22" width="120" height="44" rx="4" ry="4"/>
        <text class="label output-compressed-text" x="430" y="40">Compressed proof</text>
        <text class="sublabel output-compressed-sub" x="430" y="54">Goldilocks, smaller, off-chain</text>
      </g>

      <!-- ═══ BOTTOM BRANCH: PLONK path ═══ -->

      <!-- Arrow right from VADCOP → RecursiveF -->
      <line class="arrow" x1="120" y1="116" x2="148" y2="158" marker-end="url(#pb-a)"/>
      <text class="method green-method" x="124" y="148">.plonk()</text>

      <!-- RecursiveF -->
      <g class="step">
        <rect class="box plonk" x="150" y="138" width="110" height="44" rx="4" ry="4"/>
        <text class="label plonk-text" x="205" y="155">RecursiveF</text>
        <text class="sublabel plonk-sub" x="205" y="168">Goldilocks → BN128</text>
      </g>

      <!-- Arrow → Circom witness -->
      <line class="arrow green-arrow" x1="260" y1="160" x2="278" y2="160" marker-end="url(#pb-a-green)"/>

      <!-- Circom witness -->
      <g class="step">
        <rect class="box plonk" x="280" y="138" width="110" height="44" rx="4" ry="4"/>
        <text class="label plonk-text" x="335" y="155">Circom witness</text>
        <text class="sublabel plonk-sub" x="335" y="168">verifies BN128 STARK</text>
      </g>

      <!-- Arrow → PLONK prover -->
      <line class="arrow green-arrow" x1="390" y1="160" x2="408" y2="160" marker-end="url(#pb-a-green)"/>

      <!-- PLONK prover -->
      <g class="step">
        <rect class="box plonk" x="410" y="138" width="100" height="44" rx="4" ry="4"/>
        <text class="label plonk-text" x="460" y="155">PLONK prover</text>
        <text class="sublabel plonk-sub-code" x="460" y="168">.zkey</text>
      </g>

      <!-- Arrow → PLONK proof output -->
      <line class="arrow green-arrow" x1="510" y1="160" x2="538" y2="160" marker-end="url(#pb-a-green)"/>

      <!-- PLONK proof output -->
      <g class="step output-plonk-step">
        <rect class="box output-plonk" x="540" y="138" width="120" height="44" rx="4" ry="4"/>
        <text class="label output-plonk-text" x="600" y="155">PLONK proof</text>
        <text class="sublabel output-plonk-sub" x="600" y="168">768 bytes, on-chain</text>
      </g>

      <!-- Constraint text -->
      <text class="constraint" x="340" y="210">Both two-step APIs (compress, prove_snark) only accept uncompressed VADCOP Final</text>

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
  --box-vadcop-fill: #1a1f28;
  --box-vadcop-stroke: #3a5577;
  --box-compressed-fill: #1e2230;
  --box-compressed-stroke: #3a5577;
  --box-plonk-fill: #142814;
  --box-plonk-stroke: #4a8;
  --box-output-compressed-fill: #142814;
  --box-output-compressed-stroke: #4a8;
  --box-output-plonk-fill: #1a1a1e;
  --box-output-plonk-stroke: #555;
  --text-vadcop: #99bbdd;
  --text-vadcop-sub: #667788;
  --text-compressed: #8899aa;
  --text-compressed-sub: #556677;
  --text-plonk: #8d8;
  --text-plonk-sub: #5a8a5a;
  --text-output-compressed: #8d8;
  --text-output-compressed-sub: #5a8a5a;
  --text-output-plonk: #999;
  --text-output-plonk-sub: #667;
  --text-method: #5577aa;
  --text-green-method: #4a8;
  --text-constraint: #555;
  --arrow-color: #556;
  --green-arrow-color: #4a8;
  --marker-color: #556;
  --marker-green-color: #4a8;
  --hover-vadcop-stroke: #77aadd;
  --hover-vadcop-shadow: rgba(85,136,187,0.3);
  --hover-compressed-stroke: #77aadd;
  --hover-compressed-shadow: rgba(85,136,187,0.3);
  --hover-plonk-stroke: #6c6;
  --hover-plonk-shadow: rgba(68,170,136,0.4);
  --hover-output-compressed-stroke: #6c6;
  --hover-output-compressed-shadow: rgba(68,170,136,0.4);
  --hover-output-plonk-stroke: #888;

  max-width: 480px;
  margin: 1.5rem auto;
}
.pb-diagram svg { overflow: visible; }

.box { stroke-width: 1.5px; transition: stroke 0.2s ease, filter 0.2s ease; }
.vadcop { fill: var(--box-vadcop-fill); stroke: var(--box-vadcop-stroke); }
.compressed { fill: var(--box-compressed-fill); stroke: var(--box-compressed-stroke); }
.plonk { fill: var(--box-plonk-fill); stroke: var(--box-plonk-stroke); }
.output-compressed { fill: var(--box-output-compressed-fill); stroke: var(--box-output-compressed-stroke); }
.output-plonk { fill: var(--box-output-plonk-fill); stroke: var(--box-output-plonk-stroke); }

.step { cursor: pointer; }
.vadcop-step:hover .vadcop { stroke: var(--hover-vadcop-stroke); filter: drop-shadow(0 0 5px var(--hover-vadcop-shadow)); }
.step:hover .compressed { stroke: var(--hover-compressed-stroke); filter: drop-shadow(0 0 5px var(--hover-compressed-shadow)); }
.step:hover .plonk { stroke: var(--hover-plonk-stroke); filter: drop-shadow(0 0 5px var(--hover-plonk-shadow)); }
.output-compressed-step:hover .output-compressed { stroke: var(--hover-output-compressed-stroke); filter: drop-shadow(0 0 6px var(--hover-output-compressed-shadow)); }
.output-plonk-step:hover .output-plonk { stroke: var(--hover-output-plonk-stroke); }

.label {
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 11px;
  font-weight: 600;
  text-anchor: middle;
}
.vadcop-text { fill: var(--text-vadcop); color: var(--text-vadcop); -webkit-text-fill-color: var(--text-vadcop); }
.compressed-text { fill: var(--text-compressed); color: var(--text-compressed); -webkit-text-fill-color: var(--text-compressed); }
.plonk-text { fill: var(--text-plonk); color: var(--text-plonk); -webkit-text-fill-color: var(--text-plonk); }
.output-compressed-text { fill: var(--text-output-compressed); color: var(--text-output-compressed); -webkit-text-fill-color: var(--text-output-compressed); }
.output-plonk-text { fill: var(--text-output-plonk); color: var(--text-output-plonk); -webkit-text-fill-color: var(--text-output-plonk); }

.sublabel {
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 8px;
  text-anchor: middle;
  font-style: italic;
}
.vadcop-sub { fill: var(--text-vadcop-sub); color: var(--text-vadcop-sub); -webkit-text-fill-color: var(--text-vadcop-sub); }
.compressed-sub { fill: var(--text-compressed-sub); color: var(--text-compressed-sub); -webkit-text-fill-color: var(--text-compressed-sub); }
.plonk-sub { fill: var(--text-plonk-sub); color: var(--text-plonk-sub); -webkit-text-fill-color: var(--text-plonk-sub); }
.plonk-sub-code {
  fill: var(--text-plonk-sub);
  color: var(--text-plonk-sub);
  -webkit-text-fill-color: var(--text-plonk-sub);
  font-family: 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 9px;
  text-anchor: middle;
  font-style: normal;
}
.output-compressed-sub { fill: var(--text-output-compressed-sub); color: var(--text-output-compressed-sub); -webkit-text-fill-color: var(--text-output-compressed-sub); }
.output-plonk-sub { fill: var(--text-output-plonk-sub); color: var(--text-output-plonk-sub); -webkit-text-fill-color: var(--text-output-plonk-sub); }

.method {
  fill: var(--text-method);
  color: var(--text-method);
  -webkit-text-fill-color: var(--text-method);
  font-family: 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 9px;
  text-anchor: middle;
}
.green-method {
  fill: var(--text-green-method);
  color: var(--text-green-method);
  -webkit-text-fill-color: var(--text-green-method);
}

.constraint {
  fill: var(--text-constraint);
  color: var(--text-constraint);
  -webkit-text-fill-color: var(--text-constraint);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 8px;
  text-anchor: middle;
  font-style: italic;
}

.arrow { stroke: var(--arrow-color); stroke-width: 1.5px; fill: none; }
.green-arrow { stroke: var(--green-arrow-color); }

.marker-arrow { fill: var(--marker-color); }
.marker-green { fill: var(--marker-green-color); }
</style>

<style>
html:not(.dark) .pb-diagram {
  --box-vadcop-fill: #f7f9fc;
  --box-vadcop-stroke: #4477aa;
  --box-compressed-fill: #f7f9fc;
  --box-compressed-stroke: #4477aa;
  --box-plonk-fill: #f7fcf7;
  --box-plonk-stroke: #2a7a4a;
  --box-output-compressed-fill: #f7fcf7;
  --box-output-compressed-stroke: #2a7a4a;
  --box-output-plonk-fill: #f5f5f7;
  --box-output-plonk-stroke: #aaa;
  --text-vadcop: #111;
  --text-vadcop-sub: #444;
  --text-compressed: #111;
  --text-compressed-sub: #444;
  --text-plonk: #111;
  --text-plonk-sub: #444;
  --text-output-compressed: #111;
  --text-output-compressed-sub: #444;
  --text-output-plonk: #111;
  --text-output-plonk-sub: #444;
  --text-method: #111;
  --text-green-method: #2a7a4a;
  --text-constraint: #555;
  --arrow-color: #999;
  --green-arrow-color: #2a7a4a;
  --marker-color: #999;
  --marker-green-color: #2a7a4a;
  --hover-vadcop-stroke: #3366aa;
  --hover-vadcop-shadow: rgba(0,0,0,0.1);
  --hover-compressed-stroke: #3366aa;
  --hover-compressed-shadow: rgba(0,0,0,0.1);
  --hover-plonk-stroke: #2a7a4a;
  --hover-plonk-shadow: rgba(0,0,0,0.1);
  --hover-output-compressed-stroke: #2a7a4a;
  --hover-output-compressed-shadow: rgba(0,0,0,0.1);
  --hover-output-plonk-stroke: #777;
}
</style>
