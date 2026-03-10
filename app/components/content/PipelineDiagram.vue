<template>
  <div class="pipeline-diagram">
    <svg width="100%" viewBox="0 -28 800 292">

      <!-- Input data (feeds into Execute) -->
      <g class="step">
        <rect class="box neutral" x="662" y="-24" width="86" height="24" rx="3" ry="3"/>
        <text class="sublabel" x="705" y="-8">input.bin</text>
      </g>
      <line class="input-arrow" x1="705" y1="0" x2="705" y2="16" marker-end="url(#ph)"/>

      <!-- Row 1 boxes -->
      <g class="step">
        <rect class="box neutral" x="20" y="16" width="150" height="56" rx="5" ry="5"/>
        <text class="label" x="95" y="38">Guest Program</text>
        <text class="sublabel" x="95" y="56">guest/src/main.rs</text>
      </g>

      <g class="step">
        <rect class="box neutral" x="325" y="16" width="150" height="56" rx="5" ry="5"/>
        <text class="label" x="400" y="38">RISC-V ELF</text>
        <text class="sublabel" x="400" y="56">target/.../sha_hasher</text>
      </g>

      <g class="step">
        <rect class="box process" x="630" y="16" width="150" height="56" rx="5" ry="5"/>
        <text class="label process-text" x="705" y="38">Execute</text>
        <text class="sublabel" x="705" y="56">verify correctness</text>
      </g>

      <!-- Row 2 boxes -->
      <g class="step">
        <rect class="box process" x="20" y="160" width="150" height="56" rx="5" ry="5"/>
        <text class="label process-text" x="95" y="182">Prove</text>
        <text class="sublabel" x="95" y="200">execution trace</text>
      </g>

      <g class="step proof-step">
        <rect class="box proof" x="325" y="160" width="150" height="56" rx="5" ry="5"/>
        <text class="label proof-text" x="400" y="182">Proof</text>
        <text class="sublabel proof-sub" x="400" y="200">vadcop_final_proof.bin</text>
      </g>

      <g class="step">
        <rect class="box neutral" x="630" y="160" width="150" height="56" rx="5" ry="5"/>
        <text class="label" x="705" y="182">Verify</text>
        <text class="sublabel" x="705" y="200">fast, no re-execution</text>
      </g>

      <!-- Arrows and labels (drawn last = always on top) -->

      <!-- Guest → ELF -->
      <line class="arrow" x1="170" y1="44" x2="323" y2="44" marker-end="url(#ph)"/>
      <text class="edge-label" x="247" y="36">cargo-zisk build</text>

      <!-- ELF → Execute -->
      <line class="arrow" x1="475" y1="44" x2="628" y2="44" marker-end="url(#ph)"/>
      <text class="edge-label" x="552" y="36">ziskemu -e -i</text>

      <!-- L-shape: Execute → Prove -->
      <path class="arrow connector" d="M 705 72 L 705 120 L 95 120 L 95 158" fill="none" marker-end="url(#ph)"/>
      <text class="edge-label" x="400" y="112">rom-setup + prove</text>

      <!-- Prove → Proof -->
      <line class="arrow green-arrow" x1="170" y1="188" x2="323" y2="188" marker-end="url(#ph-green)"/>
      <text class="edge-label green-text" x="247" y="180">VADCOP STARK</text>

      <!-- Proof → Verify -->
      <line class="arrow" x1="475" y1="188" x2="628" y2="188" marker-end="url(#ph)"/>
      <text class="edge-label" x="552" y="180">cargo-zisk verify</text>

      <!-- Public values -->
      <line class="pub-arrow" x1="400" y1="216" x2="400" y2="236" stroke-dasharray="4,3"/>
      <text class="pub-label" x="400" y="252">public values</text>

      <defs>
        <marker id="ph" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-arrow"/>
        </marker>
        <marker id="ph-green" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-green"/>
        </marker>
      </defs>
    </svg>
  </div>
</template>

<style scoped>
.pipeline-diagram {
  --box-neutral-fill: #1a1a1e;
  --box-neutral-stroke: #555;
  --box-process-fill: #1a1f28;
  --box-process-stroke: #3a5577;
  --box-proof-fill: #142814;
  --box-proof-stroke: #4a8;
  --text-label: #ccc;
  --text-process: #99bbdd;
  --text-proof: #8d8;
  --text-sublabel: #888;
  --text-proof-sub: #5a8a5a;
  --text-edge: #999;
  --text-green: #4a8a4a;
  --text-pub: #4a6a4a;
  --arrow-color: #556;
  --green-arrow-color: #3a6a4a;
  --pub-arrow-color: #3a6a4a;
  --input-arrow-color: #556;
  --marker-color: #556;
  --marker-green-color: #4a8;
  --hover-neutral-stroke: #888;
  --hover-process-stroke: #77aadd;
  --hover-process-shadow: rgba(85,136,187,0.3);
  --hover-proof-stroke: #6c6;
  --hover-proof-shadow: rgba(68,170,136,0.4);
  max-width: 780px;
  margin: 1.5rem auto;
}
.pipeline-diagram svg { overflow: visible; }

.box { stroke-width: 1.5px; transition: stroke 0.2s ease, filter 0.2s ease; }
.neutral { fill: var(--box-neutral-fill); stroke: var(--box-neutral-stroke); }
.process { fill: var(--box-process-fill); stroke: var(--box-process-stroke); }
.proof { fill: var(--box-proof-fill); stroke: var(--box-proof-stroke); }

.label {
  fill: var(--text-label);
  color: var(--text-label);
  -webkit-text-fill-color: var(--text-label);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 12px;
  font-weight: 600;
  text-anchor: middle;
}
.process-text {
  fill: var(--text-process);
  color: var(--text-process);
  -webkit-text-fill-color: var(--text-process);
}
.proof-text {
  fill: var(--text-proof);
  color: var(--text-proof);
  -webkit-text-fill-color: var(--text-proof);
}

.sublabel {
  fill: var(--text-sublabel);
  color: var(--text-sublabel);
  -webkit-text-fill-color: var(--text-sublabel);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 10px;
  text-anchor: middle;
}
.proof-sub {
  fill: var(--text-proof-sub);
  color: var(--text-proof-sub);
  -webkit-text-fill-color: var(--text-proof-sub);
}

.edge-label {
  fill: var(--text-edge);
  color: var(--text-edge);
  -webkit-text-fill-color: var(--text-edge);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 10px;
  text-anchor: middle;
}
.green-text {
  fill: var(--text-green);
  color: var(--text-green);
  -webkit-text-fill-color: var(--text-green);
}

.pub-label {
  fill: var(--text-pub);
  color: var(--text-pub);
  -webkit-text-fill-color: var(--text-pub);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  font-style: italic;
  text-anchor: middle;
}

.arrow {
  stroke: var(--arrow-color);
  stroke-width: 1.5px;
  fill: none;
}
.green-arrow { stroke: var(--green-arrow-color); }
.pub-arrow { stroke: var(--pub-arrow-color); stroke-width: 1px; fill: none; }
.input-arrow { stroke: var(--input-arrow-color); stroke-width: 1px; fill: none; stroke-dasharray: 4, 3; }
.connector { stroke-width: 1px; }

.step { cursor: pointer; }
.step:hover .neutral { stroke: var(--hover-neutral-stroke); }
.step:hover .process { stroke: var(--hover-process-stroke); filter: drop-shadow(0 0 5px var(--hover-process-shadow)); }
.proof-step:hover .proof { stroke: var(--hover-proof-stroke); filter: drop-shadow(0 0 8px var(--hover-proof-shadow)); }

.marker-arrow { fill: var(--marker-color); }
.marker-green { fill: var(--marker-green-color); }
</style>

<style>
html:not(.dark) .pipeline-diagram {
  --box-neutral-fill: #f5f5f7;
  --box-neutral-stroke: #aaa;
  --box-process-fill: #f7f9fc;
  --box-process-stroke: #4477aa;
  --box-proof-fill: #f7fcf7;
  --box-proof-stroke: #2a7a4a;
  --text-label: #111;
  --text-process: #111;
  --text-proof: #111;
  --text-sublabel: #444;
  --text-proof-sub: #444;
  --text-edge: #444;
  --text-green: #2a7a4a;
  --text-pub: #2a7a4a;
  --arrow-color: #999;
  --green-arrow-color: #2a7a4a;
  --pub-arrow-color: #2a7a4a;
  --input-arrow-color: #999;
  --marker-color: #999;
  --marker-green-color: #2a7a4a;
  --hover-neutral-stroke: #888;
  --hover-process-stroke: #3366aa;
  --hover-process-shadow: rgba(0,0,0,0.1);
  --hover-proof-stroke: #2a7a4a;
  --hover-proof-shadow: rgba(0,0,0,0.1);
}
</style>
