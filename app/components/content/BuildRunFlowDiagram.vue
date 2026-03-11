<template>
  <div class="brf-diagram">
    <svg width="100%" viewBox="0 0 560 420">

      <!-- Header -->
      <rect class="header-bar" x="10" y="6" width="540" height="26" rx="4" ry="4"/>
      <text class="header-label" x="280" y="23">cargo run --release</text>

      <!-- BUILD PHASE -->
      <text class="phase-label" x="20" y="54">BUILD PHASE</text>

      <g class="step">
        <rect class="box host" x="40" y="62" width="150" height="34" rx="4" ry="4"/>
        <text class="label host-text" x="115" y="83">build.rs</text>
      </g>

      <path class="arrow" d="M 190 79 L 250 79" marker-end="url(#brf-a)"/>
      <text class="arrow-label" x="220" y="72">build_program()</text>

      <g class="step">
        <rect class="box artifact" x="252" y="58" width="200" height="42" rx="4" ry="4"/>
        <text class="label artifact-text" x="352" y="76">RISC-V ELF</text>
        <text class="sub-label" x="352" y="92">+ tmp/input.bin</text>
      </g>

      <!-- Separator -->
      <line class="separator" x1="20" y1="116" x2="540" y2="116"/>

      <!-- RUNTIME -->
      <text class="phase-label" x="20" y="136">RUNTIME</text>

      <!-- Vertical arrow from ELF down into runtime -->
      <path class="arrow elf-arrow" d="M 352 100 L 352 116 L 352 144" marker-end="url(#brf-a)"/>

      <!-- include_elf! -->
      <g class="step">
        <rect class="box host" x="180" y="146" width="260" height="28" rx="4" ry="4"/>
        <text class="code-label host-code" x="310" y="164">include_elf!("guest")</text>
      </g>

      <line class="arrow" x1="310" y1="174" x2="310" y2="190" marker-end="url(#brf-a)"/>

      <!-- ProverClient -->
      <g class="step">
        <rect class="box host" x="180" y="192" width="260" height="34" rx="4" ry="4"/>
        <text class="code-label host-code" x="310" y="213">ProverClient::builder().emu().build()</text>
      </g>

      <line class="arrow" x1="310" y1="226" x2="310" y2="240" marker-end="url(#brf-a)"/>

      <!-- setup -->
      <g class="step">
        <rect class="box host" x="180" y="242" width="260" height="34" rx="4" ry="4"/>
        <text class="code-label host-code" x="310" y="256">client.setup(&ELF)</text>
        <text class="result-label" x="310" y="270">→ (pk, vk)</text>
      </g>

      <line class="arrow" x1="310" y1="276" x2="310" y2="290" marker-end="url(#brf-a)"/>

      <!-- ZiskStdin feeds into execute -->
      <g class="step">
        <rect class="box host" x="20" y="292" width="140" height="34" rx="4" ry="4"/>
        <text class="code-label host-code" x="90" y="306">ZiskStdin</text>
        <text class="sub-label" x="90" y="320">.write(&n)</text>
      </g>

      <path class="arrow" d="M 160 309 L 178 309" marker-end="url(#brf-a)"/>

      <!-- execute -->
      <g class="step">
        <rect class="box host" x="180" y="292" width="260" height="34" rx="4" ry="4"/>
        <text class="code-label host-code" x="310" y="313">client.execute(&pk, stdin)</text>
      </g>

      <line class="arrow" x1="310" y1="326" x2="310" y2="340" marker-end="url(#brf-a-green)"/>

      <!-- ZisK VM (guest execution) -->
      <g class="step guest-step">
        <rect class="box guest" x="180" y="342" width="260" height="52" rx="5" ry="5"/>
        <text class="label guest-text" x="310" y="358">ZisK VM</text>
        <text class="code-label guest-code" x="310" y="372">io::read() → compute → io::commit()</text>
        <text class="sub-label guest-sub" x="310" y="386">deterministic guest execution</text>
      </g>

      <line class="arrow green-arrow" x1="310" y1="394" x2="310" y2="406" marker-end="url(#brf-a-green)"/>

      <!-- Result -->
      <g class="step result-step">
        <rect class="box result" x="180" y="408" width="260" height="34" rx="4" ry="4"/>
        <text class="code-label result-code" x="245" y="422">Fibonacci(10) = 55</text>
        <text class="sub-label result-sub" x="245" y="436">5255 cycles</text>
        <text class="code-label result-code" x="410" y="429">.get_public_values()</text>
      </g>

      <defs>
        <marker id="brf-a" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-arrow"/>
        </marker>
        <marker id="brf-a-green" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-arrow-green"/>
        </marker>
      </defs>
    </svg>
  </div>
</template>

<style scoped>
.brf-diagram {
  --header-bar-fill: #1a1a1e;
  --header-bar-stroke: #555;
  --text-header: #ccc;
  --text-phase: #556;
  --box-host-fill: #1a1f28;
  --box-host-stroke: #3a5577;
  --box-artifact-fill: #1a1a1e;
  --box-artifact-stroke: #555;
  --box-guest-fill: #142814;
  --box-guest-stroke: #4a8;
  --box-result-fill: #142814;
  --box-result-stroke: #4a8;
  --text-host: #99bbdd;
  --text-artifact: #ccc;
  --text-guest: #8d8;
  --text-host-code: #8899bb;
  --text-guest-code: #8db88d;
  --text-result-code: #8db88d;
  --text-sub: #556;
  --text-guest-sub: #3a6a4a;
  --text-result-sub: #3a6a4a;
  --text-result-label: #5577aa;
  --text-arrow-label: #556;
  --arrow-color: #556;
  --arrow-green: #3a6a4a;
  --separator-color: #333;
  --hover-host-stroke: #77aadd;
  --hover-host-shadow: rgba(85,136,187,0.3);
  --hover-artifact-stroke: #888;
  --hover-guest-stroke: #6c6;
  --hover-guest-shadow: rgba(68,170,136,0.4);
  max-width: 600px;
  margin: 1.5rem auto;
}
.brf-diagram svg { overflow: visible; }

/* Header */
.header-bar { fill: var(--header-bar-fill); stroke: var(--header-bar-stroke); stroke-width: 1.5px; }
.header-label {
  fill: var(--text-header); color: var(--text-header); -webkit-text-fill-color: var(--text-header);
  font-family: 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 11px;
  font-weight: 600;
  text-anchor: middle;
}

/* Phase labels */
.phase-label {
  fill: var(--text-phase); color: var(--text-phase); -webkit-text-fill-color: var(--text-phase);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.5px;
}

/* Boxes */
.box { stroke-width: 1.5px; transition: stroke 0.2s ease, filter 0.2s ease; }
.host { fill: var(--box-host-fill); stroke: var(--box-host-stroke); }
.artifact { fill: var(--box-artifact-fill); stroke: var(--box-artifact-stroke); }
.guest { fill: var(--box-guest-fill); stroke: var(--box-guest-stroke); }
.result { fill: var(--box-result-fill); stroke: var(--box-result-stroke); }

.step { cursor: pointer; }
.step:hover .host { stroke: var(--hover-host-stroke); filter: drop-shadow(0 0 5px var(--hover-host-shadow)); }
.step:hover .artifact { stroke: var(--hover-artifact-stroke); }
.guest-step:hover .guest { stroke: var(--hover-guest-stroke); filter: drop-shadow(0 0 6px var(--hover-guest-shadow)); }
.result-step:hover .result { stroke: var(--hover-guest-stroke); filter: drop-shadow(0 0 6px var(--hover-guest-shadow)); }

/* Labels */
.label {
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 11px;
  font-weight: 600;
  text-anchor: middle;
}
.host-text { fill: var(--text-host); color: var(--text-host); -webkit-text-fill-color: var(--text-host); }
.artifact-text { fill: var(--text-artifact); color: var(--text-artifact); -webkit-text-fill-color: var(--text-artifact); }
.guest-text { fill: var(--text-guest); color: var(--text-guest); -webkit-text-fill-color: var(--text-guest); }

.code-label {
  font-family: 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 9px;
  text-anchor: middle;
}
.host-code { fill: var(--text-host-code); color: var(--text-host-code); -webkit-text-fill-color: var(--text-host-code); }
.guest-code { fill: var(--text-guest-code); color: var(--text-guest-code); -webkit-text-fill-color: var(--text-guest-code); }
.result-code { fill: var(--text-result-code); color: var(--text-result-code); -webkit-text-fill-color: var(--text-result-code); font-size: 9px; }

.sub-label {
  fill: var(--text-sub); color: var(--text-sub); -webkit-text-fill-color: var(--text-sub);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  text-anchor: middle;
  font-style: italic;
}
.guest-sub { fill: var(--text-guest-sub); color: var(--text-guest-sub); -webkit-text-fill-color: var(--text-guest-sub); }
.result-sub { fill: var(--text-result-sub); color: var(--text-result-sub); -webkit-text-fill-color: var(--text-result-sub); }

.result-label {
  fill: var(--text-result-label); color: var(--text-result-label); -webkit-text-fill-color: var(--text-result-label);
  font-family: 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 9px;
  text-anchor: middle;
}

/* Arrows */
.arrow { stroke: var(--arrow-color); stroke-width: 1.5px; fill: none; }
.green-arrow { stroke: var(--arrow-green); }
.elf-arrow { stroke-dasharray: 4, 3; }

.arrow-label {
  fill: var(--text-arrow-label); color: var(--text-arrow-label); -webkit-text-fill-color: var(--text-arrow-label);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  text-anchor: middle;
  font-style: italic;
}

/* Separator */
.separator { stroke: var(--separator-color); stroke-width: 1px; stroke-dasharray: 6, 3; }

.marker-arrow { fill: var(--arrow-color); }
.marker-arrow-green { fill: var(--arrow-green); }
</style>

<style>
html:not(.dark) .brf-diagram {
  --header-bar-fill: #f5f5f7;
  --header-bar-stroke: #aaa;
  --text-header: #111;
  --text-phase: #444;
  --box-host-fill: #f7f9fc;
  --box-host-stroke: #4477aa;
  --box-artifact-fill: #f5f5f7;
  --box-artifact-stroke: #aaa;
  --box-guest-fill: #f7fcf7;
  --box-guest-stroke: #2a7a4a;
  --box-result-fill: #f7fcf7;
  --box-result-stroke: #2a7a4a;
  --text-host: #111;
  --text-artifact: #111;
  --text-guest: #111;
  --text-host-code: #111;
  --text-guest-code: #111;
  --text-result-code: #111;
  --text-sub: #555;
  --text-guest-sub: #2a7a4a;
  --text-result-sub: #2a7a4a;
  --text-result-label: #111;
  --text-arrow-label: #555;
  --arrow-color: #999;
  --arrow-green: #2a7a4a;
  --separator-color: #ddd;
  --hover-host-stroke: #3366aa;
  --hover-host-shadow: rgba(0,0,0,0.1);
  --hover-artifact-stroke: #888;
  --hover-guest-stroke: #2a7a4a;
  --hover-guest-shadow: rgba(0,0,0,0.1);
}
</style>
