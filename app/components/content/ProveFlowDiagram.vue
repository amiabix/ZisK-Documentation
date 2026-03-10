<template>
  <div class="pf-diagram">
    <svg width="100%" viewBox="0 0 720 240">

      <!-- Column labels -->
      <text class="col-label host-col" x="150" y="14">host</text>
      <text class="col-label vm-col" x="530" y="14">ZisK prover</text>

      <!-- Separator -->
      <line class="separator" x1="350" y1="6" x2="350" y2="234"/>

      <!-- HOST: prove() -->
      <g class="step">
        <rect class="box host" x="16" y="30" width="180" height="30" rx="4" ry="4"/>
        <text class="code-text host-code" x="106" y="49">client.prove(&amp;pk, stdin)</text>
      </g>
      <line class="arrow" x1="106" y1="60" x2="106" y2="74" marker-end="url(#pf-a)"/>

      <!-- HOST: ProveBuilder -->
      <g class="step">
        <rect class="box host" x="16" y="76" width="180" height="56" rx="4" ry="4"/>
        <text class="label host-label" x="106" y="94">ProveBuilder</text>
        <text class="method-text" x="106" y="108">.with_proof_options()</text>
        <text class="method-text" x="106" y="120">.compressed()  .plonk()</text>
      </g>

      <!-- Note: lazy -->
      <text class="note-text" x="210" y="100">lazy</text>

      <!-- Arrow to .run() -->
      <line class="arrow" x1="196" y1="104" x2="238" y2="104" marker-end="url(#pf-a)"/>

      <!-- HOST/CROSSING: .run() -->
      <g class="step">
        <rect class="box handoff" x="240" y="88" width="100" height="32" rx="4" ry="4"/>
        <text class="code-text run-code" x="290" y="108">.run()?</text>
      </g>

      <!-- Arrow crossing into VM -->
      <path class="crossing-arrow" d="M 340 104 L 378 104" marker-end="url(#pf-a-green)"/>

      <!-- VM: re-execute guest -->
      <g class="step vm-step">
        <rect class="box vm" x="380" y="30" width="150" height="28" rx="4" ry="4"/>
        <text class="label vm-text" x="455" y="48">re-execute guest</text>
      </g>
      <line class="arrow green-arrow" x1="455" y1="58" x2="455" y2="72" marker-end="url(#pf-a-green)"/>

      <!-- VM: build trace -->
      <g class="step vm-step">
        <rect class="box vm" x="380" y="74" width="150" height="28" rx="4" ry="4"/>
        <text class="label vm-text" x="455" y="92">build execution trace</text>
      </g>
      <line class="arrow green-arrow" x1="455" y1="102" x2="455" y2="116" marker-end="url(#pf-a-green)"/>

      <!-- VM: prove state machines -->
      <g class="step vm-step">
        <rect class="box vm" x="380" y="118" width="150" height="28" rx="4" ry="4"/>
        <text class="label vm-text" x="455" y="136">prove state machines</text>
      </g>
      <line class="arrow green-arrow" x1="455" y1="146" x2="455" y2="160" marker-end="url(#pf-a-green)"/>

      <!-- VM: aggregate -->
      <g class="step vm-step">
        <rect class="box vm" x="380" y="162" width="150" height="28" rx="4" ry="4"/>
        <text class="label vm-text" x="455" y="180">aggregate proof</text>
      </g>

      <!-- Arrow from aggregate down and left to ProveResult -->
      <path class="crossing-return" d="M 380 176 L 360 176 L 360 215 L 338 215" marker-end="url(#pf-a-green)"/>
      <text class="crossing-label" x="360" y="200">returns</text>

      <!-- HOST: ProveResult -->
      <g class="step">
        <rect class="box result" x="130" y="190" width="206" height="50" rx="4" ry="4"/>
        <text class="label result-label" x="233" y="207">ProveResult</text>
        <text class="method-text result-method" x="233" y="220">.get_proof()  .get_publics()</text>
        <text class="method-text result-method" x="233" y="232">.get_public_values()</text>
      </g>

      <!-- Arrow left to verify -->
      <line class="arrow" x1="130" y1="215" x2="112" y2="215" marker-end="url(#pf-a)"/>

      <!-- HOST: verify -->
      <g class="step">
        <rect class="box result" x="4" y="200" width="106" height="30" rx="4" ry="4"/>
        <text class="code-text verify-code" x="57" y="219">client.verify()</text>
      </g>

      <defs>
        <marker id="pf-a" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-arrow"/>
        </marker>
        <marker id="pf-a-green" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-green"/>
        </marker>
      </defs>
    </svg>
  </div>
</template>

<style scoped>
.pf-diagram {
  --box-host-fill: #1a1f28;
  --box-host-stroke: #3a5577;
  --box-handoff-fill: #1a1f28;
  --box-handoff-stroke: #5577aa;
  --box-vm-fill: #142814;
  --box-vm-stroke: #4a8;
  --box-result-fill: #142814;
  --box-result-stroke: #4a8;
  --text-host-col: #5577aa;
  --text-vm-col: #4a8;
  --text-host-code: #8899bb;
  --text-host-label: #99bbdd;
  --text-method: #556;
  --text-run: #99bbdd;
  --text-vm: #8db88d;
  --text-result: #8d8;
  --text-result-method: #5a8a5a;
  --text-verify: #8d8;
  --text-note: #556;
  --text-crossing: #556;
  --arrow-color: #556;
  --arrow-green: #4a8;
  --separator-color: #333;
  --crossing-color: #4a8;
  --return-color: #556;
  --hover-blue: #77aadd;
  --hover-green: #6c6;

  max-width: 480px;
  margin: 1.5rem auto;
}
.pf-diagram svg { overflow: visible; }

/* Column labels */
.col-label {
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 10px;
  font-weight: 700;
  text-anchor: middle;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.host-col { fill: var(--text-host-col); color: var(--text-host-col); -webkit-text-fill-color: var(--text-host-col); }
.vm-col { fill: var(--text-vm-col); color: var(--text-vm-col); -webkit-text-fill-color: var(--text-vm-col); }

/* Separator */
.separator { stroke: var(--separator-color); stroke-width: 1px; stroke-dasharray: 4, 3; }

/* Boxes */
.box { stroke-width: 1.5px; transition: stroke 0.2s ease, filter 0.2s ease; }
.host { fill: var(--box-host-fill); stroke: var(--box-host-stroke); }
.handoff { fill: var(--box-handoff-fill); stroke: var(--box-handoff-stroke); stroke-width: 2px; }
.vm { fill: var(--box-vm-fill); stroke: var(--box-vm-stroke); }
.result { fill: var(--box-result-fill); stroke: var(--box-result-stroke); }

.step { cursor: pointer; }
.step:hover .host { stroke: var(--hover-blue); filter: drop-shadow(0 0 5px rgba(85,136,187,0.3)); }
.step:hover .handoff { stroke: var(--hover-blue); filter: drop-shadow(0 0 6px rgba(85,136,187,0.4)); }
.vm-step:hover .vm { stroke: var(--hover-green); filter: drop-shadow(0 0 5px rgba(68,170,136,0.3)); }
.step:hover .result { stroke: var(--hover-green); filter: drop-shadow(0 0 5px rgba(68,170,136,0.3)); }

/* Labels */
.label {
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 10px;
  font-weight: 600;
  text-anchor: middle;
}
.host-label { fill: var(--text-host-label); color: var(--text-host-label); -webkit-text-fill-color: var(--text-host-label); }
.vm-text { fill: var(--text-vm); color: var(--text-vm); -webkit-text-fill-color: var(--text-vm); }
.result-label { fill: var(--text-result); color: var(--text-result); -webkit-text-fill-color: var(--text-result); }

/* Code text */
.code-text {
  font-family: 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 9px;
  text-anchor: middle;
}
.host-code { fill: var(--text-host-code); color: var(--text-host-code); -webkit-text-fill-color: var(--text-host-code); }
.run-code { fill: var(--text-run); color: var(--text-run); -webkit-text-fill-color: var(--text-run); font-size: 11px; font-weight: 600; }
.verify-code { fill: var(--text-verify); color: var(--text-verify); -webkit-text-fill-color: var(--text-verify); }

/* Method text */
.method-text {
  fill: var(--text-method);
  color: var(--text-method);
  -webkit-text-fill-color: var(--text-method);
  font-family: 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 8px;
  text-anchor: middle;
}
.result-method { fill: var(--text-result-method); color: var(--text-result-method); -webkit-text-fill-color: var(--text-result-method); }

/* Notes */
.note-text {
  fill: var(--text-note);
  color: var(--text-note);
  -webkit-text-fill-color: var(--text-note);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 8px;
  font-style: italic;
}

.crossing-label {
  fill: var(--text-crossing);
  color: var(--text-crossing);
  -webkit-text-fill-color: var(--text-crossing);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 8px;
  font-weight: 600;
  text-anchor: middle;
}

/* Arrows */
.arrow { stroke: var(--arrow-color); stroke-width: 1.5px; fill: none; }
.green-arrow { stroke: var(--arrow-green); stroke-width: 1.5px; fill: none; }
.crossing-arrow { stroke: var(--crossing-color); stroke-width: 2px; fill: none; }
.crossing-return { stroke: var(--return-color); stroke-width: 1.5px; stroke-dasharray: 5, 3; fill: none; }

.marker-arrow { fill: var(--arrow-color); }
.marker-green { fill: var(--arrow-green); }
</style>

<style>
/* ── Light mode ── */
html:not(.dark) .pf-diagram {
  --box-host-fill: #f7f9fc;
  --box-host-stroke: #4477aa;
  --box-handoff-fill: #f7f9fc;
  --box-handoff-stroke: #2255aa;
  --box-vm-fill: #f7fcf7;
  --box-vm-stroke: #2a7a4a;
  --box-result-fill: #f7fcf7;
  --box-result-stroke: #2a7a4a;
  --text-host-col: #2a4a77;
  --text-vm-col: #1a5a2a;
  --text-host-code: #111;
  --text-host-label: #111;
  --text-method: #444;
  --text-run: #111;
  --text-vm: #111;
  --text-result: #111;
  --text-result-method: #333;
  --text-verify: #111;
  --text-note: #555;
  --text-crossing: #555;
  --arrow-color: #999;
  --arrow-green: #2a7a4a;
  --separator-color: #ddd;
  --crossing-color: #2a7a4a;
  --return-color: #999;
  --hover-blue: #2255aa;
  --hover-green: #1a6a3a;
}
</style>
