<template>
  <div class="pt-diagram">
    <svg width="100%" viewBox="0 0 660 160">

      <!-- Execution Trace -->
      <g class="step">
        <rect class="box neutral" x="10" y="40" width="130" height="44" rx="4" ry="4"/>
        <text class="label neutral-text" x="75" y="58">Execution Trace</text>
        <text class="note" x="75" y="73">from VM run</text>
      </g>

      <!-- Arrow → VADCOP -->
      <line class="arrow" x1="140" y1="62" x2="178" y2="62" marker-end="url(#pt-a)"/>
      <text class="method" x="159" y="52">.run()</text>

      <!-- VADCOP STARK -->
      <g class="step">
        <rect class="box process" x="180" y="30" width="130" height="64" rx="4" ry="4"/>
        <text class="label process-text" x="245" y="52">VADCOP STARK</text>
        <text class="size-label" x="245" y="72">large</text>
        <text class="trait" x="245" y="86">fastest to generate</text>
      </g>

      <!-- Arrow → Compressed -->
      <line class="arrow" x1="310" y1="62" x2="348" y2="62" marker-end="url(#pt-a)"/>
      <text class="method" x="329" y="52">.compressed()</text>

      <!-- Compressed STARK -->
      <g class="step">
        <rect class="box process" x="350" y="30" width="130" height="64" rx="4" ry="4"/>
        <text class="label process-text" x="415" y="52">Compressed</text>
        <text class="size-label" x="415" y="72">medium</text>
        <text class="trait" x="415" y="86">recursive wrapping</text>
      </g>

      <!-- Arrow → PLONK -->
      <line class="arrow green-arrow" x1="480" y1="62" x2="518" y2="62" marker-end="url(#pt-a-green)"/>
      <text class="method green-method" x="499" y="52">.plonk()</text>

      <!-- PLONK SNARK -->
      <g class="step final-step">
        <rect class="box proof" x="520" y="30" width="130" height="64" rx="4" ry="4"/>
        <text class="label proof-text" x="585" y="52">PLONK SNARK</text>
        <text class="size-label proof-size" x="585" y="72">small (constant)</text>
        <text class="trait proof-trait" x="585" y="86">on-chain verifiable</text>
      </g>

      <!-- Category labels -->
      <text class="cat off" x="245" y="18">off-chain only</text>
      <line class="cat-line" x1="180" y1="22" x2="480" y2="22"/>
      <text class="cat on" x="585" y="18">on-chain</text>
      <line class="cat-line on-line" x1="520" y1="22" x2="650" y2="22"/>

      <!-- Dotted vertical separator -->
      <line class="separator" x1="505" y1="10" x2="505" y2="100"/>

      <defs>
        <marker id="pt-a" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-arrow"/>
        </marker>
        <marker id="pt-a-green" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-green"/>
        </marker>
      </defs>
    </svg>
  </div>
</template>

<style scoped>
.pt-diagram {
  --box-neutral-fill: #1a1a1e;
  --box-neutral-stroke: #555;
  --box-process-fill: #1a1f28;
  --box-process-stroke: #3a5577;
  --box-proof-fill: #142814;
  --box-proof-stroke: #4a8;
  --text-neutral: #999;
  --text-process: #99bbdd;
  --text-proof: #8d8;
  --text-note: #556;
  --text-size: #667788;
  --text-proof-size: #5a8a5a;
  --text-trait: #445566;
  --text-proof-trait: #3a6a4a;
  --text-method: #5577aa;
  --text-green-method: #4a8;
  --text-cat-off: #556677;
  --text-cat-on: #4a8;
  --cat-line-color: #333;
  --cat-on-line-color: #3a6a4a;
  --separator-color: #333;
  --arrow-color: #556;
  --green-arrow-color: #3a6a4a;
  --marker-color: #556;
  --marker-green-color: #4a8;
  --hover-neutral-stroke: #888;
  --hover-process-stroke: #77aadd;
  --hover-process-shadow: rgba(85,136,187,0.3);
  --hover-proof-stroke: #6c6;
  --hover-proof-shadow: rgba(68,170,136,0.4);
  max-width: 600px;
  margin: 1.5rem auto;
}
.pt-diagram svg { overflow: visible; }

.box { stroke-width: 1.5px; transition: stroke 0.2s ease, filter 0.2s ease; }
.neutral { fill: var(--box-neutral-fill); stroke: var(--box-neutral-stroke); }
.process { fill: var(--box-process-fill); stroke: var(--box-process-stroke); }
.proof { fill: var(--box-proof-fill); stroke: var(--box-proof-stroke); }

.step { cursor: pointer; }
.step:hover .neutral { stroke: var(--hover-neutral-stroke); }
.step:hover .process { stroke: var(--hover-process-stroke); filter: drop-shadow(0 0 5px var(--hover-process-shadow)); }
.final-step:hover .proof { stroke: var(--hover-proof-stroke); filter: drop-shadow(0 0 6px var(--hover-proof-shadow)); }

.label {
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 12px;
  font-weight: 600;
  text-anchor: middle;
}
.neutral-text { fill: var(--text-neutral); color: var(--text-neutral); -webkit-text-fill-color: var(--text-neutral); }
.process-text { fill: var(--text-process); color: var(--text-process); -webkit-text-fill-color: var(--text-process); }
.proof-text { fill: var(--text-proof); color: var(--text-proof); -webkit-text-fill-color: var(--text-proof); }

.note {
  fill: var(--text-note);
  color: var(--text-note);
  -webkit-text-fill-color: var(--text-note);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  text-anchor: middle;
  font-style: italic;
}

.size-label {
  fill: var(--text-size);
  color: var(--text-size);
  -webkit-text-fill-color: var(--text-size);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 10px;
  text-anchor: middle;
  font-weight: 500;
}
.proof-size {
  fill: var(--text-proof-size);
  color: var(--text-proof-size);
  -webkit-text-fill-color: var(--text-proof-size);
}

.trait {
  fill: var(--text-trait);
  color: var(--text-trait);
  -webkit-text-fill-color: var(--text-trait);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  text-anchor: middle;
  font-style: italic;
}
.proof-trait {
  fill: var(--text-proof-trait);
  color: var(--text-proof-trait);
  -webkit-text-fill-color: var(--text-proof-trait);
}

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

.cat {
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  font-weight: 600;
  text-anchor: middle;
  letter-spacing: 0.5px;
}
.off {
  fill: var(--text-cat-off);
  color: var(--text-cat-off);
  -webkit-text-fill-color: var(--text-cat-off);
}
.on {
  fill: var(--text-cat-on);
  color: var(--text-cat-on);
  -webkit-text-fill-color: var(--text-cat-on);
}

.cat-line { stroke: var(--cat-line-color); stroke-width: 1px; }
.on-line { stroke: var(--cat-on-line-color); }

.separator { stroke: var(--separator-color); stroke-width: 1px; stroke-dasharray: 4, 3; }

.arrow { stroke: var(--arrow-color); stroke-width: 1.5px; fill: none; }
.green-arrow { stroke: var(--green-arrow-color); }

.marker-arrow { fill: var(--marker-color); }
.marker-green { fill: var(--marker-green-color); }
</style>

<style>
html:not(.dark) .pt-diagram {
  --box-neutral-fill: #f5f5f7;
  --box-neutral-stroke: #aaa;
  --box-process-fill: #f7f9fc;
  --box-process-stroke: #4477aa;
  --box-proof-fill: #f7fcf7;
  --box-proof-stroke: #2a7a4a;
  --text-neutral: #111;
  --text-process: #111;
  --text-proof: #111;
  --text-note: #555;
  --text-size: #444;
  --text-proof-size: #444;
  --text-trait: #555;
  --text-proof-trait: #555;
  --text-method: #111;
  --text-green-method: #2a7a4a;
  --text-cat-off: #444;
  --text-cat-on: #2a7a4a;
  --cat-line-color: #ddd;
  --cat-on-line-color: #2a7a4a;
  --separator-color: #ddd;
  --arrow-color: #999;
  --green-arrow-color: #2a7a4a;
  --marker-color: #999;
  --marker-green-color: #2a7a4a;
  --hover-neutral-stroke: #888;
  --hover-process-stroke: #3366aa;
  --hover-process-shadow: rgba(0,0,0,0.1);
  --hover-proof-stroke: #2a7a4a;
  --hover-proof-shadow: rgba(0,0,0,0.1);
}
</style>
