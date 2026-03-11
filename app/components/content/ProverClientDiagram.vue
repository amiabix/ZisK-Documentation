<template>
  <div class="pc-diagram">
    <svg width="100%" viewBox="0 0 700 210">

      <!-- Builder phase -->
      <g class="step">
        <rect class="box neutral" x="10" y="50" width="100" height="40" rx="4" ry="4"/>
        <text class="label neutral-text" x="60" y="74">builder()</text>
      </g>

      <line class="arrow" x1="110" y1="70" x2="138" y2="70" marker-end="url(#pc-a)"/>

      <!-- Backend -->
      <g class="step">
        <rect class="box process" x="140" y="40" width="100" height="60" rx="4" ry="4"/>
        <text class="label process-text" x="190" y="62">backend</text>
        <text class="code process-code" x="190" y="78">.emu()</text>
        <text class="code process-code" x="190" y="90">.asm()</text>
      </g>

      <line class="arrow" x1="240" y1="70" x2="268" y2="70" marker-end="url(#pc-a)"/>

      <!-- Mode -->
      <g class="step">
        <rect class="box process" x="270" y="34" width="120" height="72" rx="4" ry="4"/>
        <text class="label process-text" x="330" y="54">mode</text>
        <text class="code process-code" x="330" y="70">.prove()</text>
        <text class="code process-code" x="330" y="82">.verify_constraints()</text>
        <text class="opt" x="330" y="98">.snark() .gpu()</text>
      </g>

      <line class="arrow" x1="390" y1="70" x2="418" y2="70" marker-end="url(#pc-a)"/>

      <!-- .build() -->
      <g class="step build-step">
        <rect class="box build" x="420" y="50" width="80" height="40" rx="4" ry="4"/>
        <text class="label build-text" x="460" y="74">.build()</text>
      </g>

      <line class="arrow green-arrow" x1="500" y1="70" x2="528" y2="70" marker-end="url(#pc-a-green)"/>

      <!-- ProverClient -->
      <g class="step client-step">
        <rect class="box client" x="530" y="20" width="160" height="168" rx="5" ry="5"/>
        <text class="label client-text" x="610" y="42">ProverClient</text>

        <rect class="method-box" x="545" y="52" width="130" height="22" rx="3" ry="3"/>
        <text class="method-text" x="610" y="67">.setup(&ELF)</text>

        <rect class="method-box" x="545" y="80" width="130" height="22" rx="3" ry="3"/>
        <text class="method-text" x="610" y="95">.execute(&pk, stdin)</text>

        <rect class="method-box" x="545" y="108" width="130" height="22" rx="3" ry="3"/>
        <text class="method-text" x="610" y="123">.prove(&pk, stdin)</text>

        <rect class="method-box" x="545" y="136" width="130" height="22" rx="3" ry="3"/>
        <text class="method-text" x="610" y="151">.verify(proof, pub, &vk)</text>

        <rect class="method-box" x="545" y="164" width="130" height="22" rx="3" ry="3"/>
        <text class="method-text" x="610" y="179">.vk(&ELF)</text>
      </g>

      <!-- Phase labels -->
      <text class="phase" x="220" y="20">configuration</text>
      <line class="phase-line" x1="10" y1="24" x2="418" y2="24"/>
      <text class="phase green-phase" x="610" y="10">usage</text>
      <line class="phase-line green-line" x1="530" y1="14" x2="690" y2="14"/>

      <!-- Separator -->
      <line class="separator" x1="510" y1="6" x2="510" y2="196"/>

      <!-- Singleton note -->
      <text class="singleton" x="610" y="202">singleton: one per process</text>

      <defs>
        <marker id="pc-a" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-arrow"/>
        </marker>
        <marker id="pc-a-green" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-arrow-green"/>
        </marker>
      </defs>
    </svg>
  </div>
</template>

<style scoped>
.pc-diagram {
  --box-neutral-fill: #1a1a1e;
  --box-neutral-stroke: #555;
  --box-process-fill: #1a1f28;
  --box-process-stroke: #3a5577;
  --box-build-fill: #1a1f28;
  --box-build-stroke: #3a5577;
  --box-client-fill: #142814;
  --box-client-stroke: #4a8;
  --box-method-fill: #1a2e1a;
  --box-method-stroke: #3a6a3a;
  --text-neutral: #999;
  --text-process: #99bbdd;
  --text-build: #99bbdd;
  --text-client: #8d8;
  --text-process-code: #5577aa;
  --text-opt: #445566;
  --text-method: #8db88d;
  --text-phase: #556677;
  --text-green-phase: #4a8;
  --text-singleton: #556;
  --arrow-color: #556;
  --arrow-green: #3a6a4a;
  --phase-line-color: #333;
  --green-line-color: #3a6a4a;
  --separator-color: #333;
  --hover-neutral-stroke: #888;
  --hover-process-stroke: #77aadd;
  --hover-process-shadow: rgba(85,136,187,0.3);
  --hover-client-stroke: #6c6;
  --hover-client-shadow: rgba(68,170,136,0.3);
  max-width: 600px;
  margin: 1.5rem auto;
}
.pc-diagram svg { overflow: visible; }

.box { stroke-width: 1.5px; transition: stroke 0.2s ease, filter 0.2s ease; }
.neutral { fill: var(--box-neutral-fill); stroke: var(--box-neutral-stroke); }
.process { fill: var(--box-process-fill); stroke: var(--box-process-stroke); }
.build { fill: var(--box-build-fill); stroke: var(--box-build-stroke); }
.client { fill: var(--box-client-fill); stroke: var(--box-client-stroke); }

.step { cursor: pointer; }
.step:hover .neutral { stroke: var(--hover-neutral-stroke); }
.step:hover .process { stroke: var(--hover-process-stroke); filter: drop-shadow(0 0 5px var(--hover-process-shadow)); }
.build-step:hover .build { stroke: var(--hover-process-stroke); filter: drop-shadow(0 0 5px var(--hover-process-shadow)); }
.client-step:hover .client { stroke: var(--hover-client-stroke); filter: drop-shadow(0 0 6px var(--hover-client-shadow)); }

.label {
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 12px;
  font-weight: 600;
  text-anchor: middle;
}
.neutral-text { fill: var(--text-neutral); color: var(--text-neutral); -webkit-text-fill-color: var(--text-neutral); }
.process-text { fill: var(--text-process); color: var(--text-process); -webkit-text-fill-color: var(--text-process); }
.build-text { fill: var(--text-build); color: var(--text-build); -webkit-text-fill-color: var(--text-build); }
.client-text { fill: var(--text-client); color: var(--text-client); -webkit-text-fill-color: var(--text-client); }

.code {
  font-family: 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 9px;
  text-anchor: middle;
}
.process-code { fill: var(--text-process-code); color: var(--text-process-code); -webkit-text-fill-color: var(--text-process-code); }

.opt {
  fill: var(--text-opt); color: var(--text-opt); -webkit-text-fill-color: var(--text-opt);
  font-family: 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 9px;
  text-anchor: middle;
  font-style: italic;
}

.method-box { fill: var(--box-method-fill); stroke: var(--box-method-stroke); stroke-width: 1px; }
.method-text {
  fill: var(--text-method); color: var(--text-method); -webkit-text-fill-color: var(--text-method);
  font-family: 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 9px;
  text-anchor: middle;
}

.phase {
  fill: var(--text-phase); color: var(--text-phase); -webkit-text-fill-color: var(--text-phase);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  font-weight: 600;
  text-anchor: middle;
  letter-spacing: 0.5px;
}
.green-phase { fill: var(--text-green-phase); color: var(--text-green-phase); -webkit-text-fill-color: var(--text-green-phase); }

.phase-line { stroke: var(--phase-line-color); stroke-width: 1px; }
.green-line { stroke: var(--green-line-color); }

.separator { stroke: var(--separator-color); stroke-width: 1px; stroke-dasharray: 4, 3; }

.singleton {
  fill: var(--text-singleton); color: var(--text-singleton); -webkit-text-fill-color: var(--text-singleton);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  text-anchor: middle;
  font-style: italic;
}

.arrow { stroke: var(--arrow-color); stroke-width: 1.5px; fill: none; }
.green-arrow { stroke: var(--arrow-green); }

.marker-arrow { fill: var(--arrow-color); }
.marker-arrow-green { fill: var(--arrow-green); }
</style>

<style>
html:not(.dark) .pc-diagram {
  --box-neutral-fill: #f5f5f7;
  --box-neutral-stroke: #aaa;
  --box-process-fill: #f7f9fc;
  --box-process-stroke: #4477aa;
  --box-build-fill: #f7f9fc;
  --box-build-stroke: #4477aa;
  --box-client-fill: #f7fcf7;
  --box-client-stroke: #2a7a4a;
  --box-method-fill: #f7fcf7;
  --box-method-stroke: #2a7a4a;
  --text-neutral: #111;
  --text-process: #111;
  --text-build: #111;
  --text-client: #111;
  --text-process-code: #111;
  --text-opt: #555;
  --text-method: #111;
  --text-phase: #444;
  --text-green-phase: #2a7a4a;
  --text-singleton: #555;
  --arrow-color: #999;
  --arrow-green: #2a7a4a;
  --phase-line-color: #ddd;
  --green-line-color: #2a7a4a;
  --separator-color: #ddd;
  --hover-neutral-stroke: #888;
  --hover-process-stroke: #3366aa;
  --hover-process-shadow: rgba(0,0,0,0.1);
  --hover-client-stroke: #2a7a4a;
  --hover-client-shadow: rgba(0,0,0,0.1);
}
</style>
