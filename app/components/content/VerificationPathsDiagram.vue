<template>
  <div class="vp-diagram">
    <svg width="100%" viewBox="0 0 620 180">

      <!-- Proof source (left) -->
      <g class="step">
        <rect class="box neutral" x="10" y="50" width="120" height="60" rx="4" ry="4"/>
        <text class="label neutral-text" x="70" y="72">Proof</text>
        <text class="note" x="70" y="88">+ publics + vk</text>
        <text class="note" x="70" y="100">from disk or memory</text>
      </g>

      <!-- Fan out to three paths -->
      <line class="arrow" x1="130" y1="62" x2="198" y2="32" marker-end="url(#vp-a)"/>
      <line class="arrow" x1="130" y1="80" x2="198" y2="80" marker-end="url(#vp-a)"/>
      <line class="arrow" x1="130" y1="98" x2="198" y2="128" marker-end="url(#vp-a)"/>

      <!-- CLI path -->
      <g class="step">
        <rect class="box process" x="200" y="10" width="180" height="44" rx="4" ry="4"/>
        <text class="label process-text" x="290" y="28">CLI</text>
        <text class="code process-code" x="290" y="44">cargo-zisk verify -p proof.bin</text>
      </g>

      <!-- SDK path -->
      <g class="step">
        <rect class="box process" x="200" y="58" width="180" height="44" rx="4" ry="4"/>
        <text class="label process-text" x="290" y="76">SDK</text>
        <text class="code process-code" x="290" y="92">prover.verify(proof, pub, &vk)</text>
      </g>

      <!-- Standalone path -->
      <g class="step">
        <rect class="box process" x="200" y="106" width="180" height="44" rx="4" ry="4"/>
        <text class="label process-text" x="290" y="124">Standalone</text>
        <text class="code process-code" x="290" y="140">verify_zisk_proof(&p, &pub, &vk)</text>
      </g>

      <!-- All three converge -->
      <line class="arrow green-arrow" x1="380" y1="32" x2="428" y2="62" marker-end="url(#vp-a-green)"/>
      <line class="arrow green-arrow" x1="380" y1="80" x2="428" y2="80" marker-end="url(#vp-a-green)"/>
      <line class="arrow green-arrow" x1="380" y1="128" x2="428" y2="98" marker-end="url(#vp-a-green)"/>

      <!-- Same checks (right) -->
      <g class="step result-step">
        <rect class="box result" x="430" y="36" width="180" height="88" rx="5" ry="5"/>
        <text class="label result-text" x="520" y="56">Same Checks</text>

        <rect class="check-box" x="445" y="64" width="150" height="18" rx="3" ry="3"/>
        <text class="check-text" x="520" y="77">constraint satisfaction</text>

        <rect class="check-box" x="445" y="86" width="150" height="18" rx="3" ry="3"/>
        <text class="check-text" x="520" y="99">public output binding</text>

        <rect class="check-box" x="445" y="108" width="150" height="18" rx="3" ry="3"/>
        <text class="check-text" x="520" y="121">program binding</text>
      </g>

      <!-- Note -->
      <text class="equiv" x="290" y="168">all three perform identical verification</text>

      <defs>
        <marker id="vp-a" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-arrow"/>
        </marker>
        <marker id="vp-a-green" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-arrow-green"/>
        </marker>
      </defs>
    </svg>
  </div>
</template>

<style scoped>
.vp-diagram {
  --box-neutral-fill: #1a1a1e;
  --box-neutral-stroke: #555;
  --box-process-fill: #1a1f28;
  --box-process-stroke: #3a5577;
  --box-result-fill: #142814;
  --box-result-stroke: #4a8;
  --check-box-fill: #1a2e1a;
  --check-box-stroke: #3a6a3a;
  --text-neutral: #999;
  --text-process: #99bbdd;
  --text-result: #8d8;
  --text-process-code: #5577aa;
  --text-note: #556;
  --text-check: #8db88d;
  --text-equiv: #556;
  --arrow-color: #556;
  --green-arrow-color: #3a6a4a;
  --hover-neutral-stroke: #888;
  --hover-process-stroke: #77aadd;
  --hover-process-shadow: rgba(85,136,187,0.3);
  --hover-result-stroke: #6c6;
  --hover-result-shadow: rgba(68,170,136,0.3);

  max-width: 740px;
  margin: 1.5rem auto;
}
.vp-diagram svg { overflow: visible; }

.box { stroke-width: 1.5px; transition: stroke 0.2s ease, filter 0.2s ease; }
.neutral { fill: var(--box-neutral-fill); stroke: var(--box-neutral-stroke); }
.process { fill: var(--box-process-fill); stroke: var(--box-process-stroke); }
.result { fill: var(--box-result-fill); stroke: var(--box-result-stroke); }

.step { cursor: pointer; }
.step:hover .neutral { stroke: var(--hover-neutral-stroke); }
.step:hover .process { stroke: var(--hover-process-stroke); filter: drop-shadow(0 0 5px var(--hover-process-shadow)); }
.result-step:hover .result { stroke: var(--hover-result-stroke); filter: drop-shadow(0 0 6px var(--hover-result-shadow)); }

.label {
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 12px;
  font-weight: 600;
  text-anchor: middle;
}
.neutral-text { fill: var(--text-neutral); color: var(--text-neutral); -webkit-text-fill-color: var(--text-neutral); }
.process-text { fill: var(--text-process); color: var(--text-process); -webkit-text-fill-color: var(--text-process); }
.result-text { fill: var(--text-result); color: var(--text-result); -webkit-text-fill-color: var(--text-result); }

.code {
  font-family: 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 9px;
  text-anchor: middle;
}
.process-code { fill: var(--text-process-code); color: var(--text-process-code); -webkit-text-fill-color: var(--text-process-code); }

.note {
  fill: var(--text-note);
  color: var(--text-note);
  -webkit-text-fill-color: var(--text-note);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  text-anchor: middle;
  font-style: italic;
}

.check-box { fill: var(--check-box-fill); stroke: var(--check-box-stroke); stroke-width: 1px; }
.check-text {
  fill: var(--text-check);
  color: var(--text-check);
  -webkit-text-fill-color: var(--text-check);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  text-anchor: middle;
}

.equiv {
  fill: var(--text-equiv);
  color: var(--text-equiv);
  -webkit-text-fill-color: var(--text-equiv);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  text-anchor: middle;
  font-style: italic;
}

.arrow { stroke: var(--arrow-color); stroke-width: 1.5px; fill: none; }
.green-arrow { stroke: var(--green-arrow-color); }

.marker-arrow { fill: var(--arrow-color); }
.marker-arrow-green { fill: var(--green-arrow-color); }
</style>

<style>
html:not(.dark) .vp-diagram {
  --box-neutral-fill: #f5f5f7;
  --box-neutral-stroke: #aaa;
  --box-process-fill: #f7f9fc;
  --box-process-stroke: #4477aa;
  --box-result-fill: #f7fcf7;
  --box-result-stroke: #2a7a4a;
  --check-box-fill: #f7fcf7;
  --check-box-stroke: #2a7a4a;
  --text-neutral: #111;
  --text-process: #111;
  --text-result: #111;
  --text-process-code: #111;
  --text-note: #555;
  --text-check: #111;
  --text-equiv: #555;
  --arrow-color: #999;
  --green-arrow-color: #2a7a4a;
  --hover-neutral-stroke: #999;
  --hover-process-stroke: #3366aa;
  --hover-process-shadow: rgba(0,0,0,0.1);
  --hover-result-stroke: #2a7a4a;
  --hover-result-shadow: rgba(0,0,0,0.1);
}
</style>
