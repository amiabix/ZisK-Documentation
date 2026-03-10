<template>
  <div class="ps-diagram">
    <svg width="100%" viewBox="0 0 640 230">

      <!-- Workspace root (top bar) -->
      <rect class="ws-bar" x="10" y="8" width="620" height="28" rx="4" ry="4"/>
      <text class="ws-label" x="320" y="26">fibonacci/ workspace</text>

      <!-- Host crate (left) -->
      <g class="step host-step">
        <rect class="box host" x="30" y="56" width="230" height="140" rx="5" ry="5"/>
        <text class="crate-label host-text" x="145" y="78">host/</text>

        <rect class="file-box host-file" x="50" y="90" width="190" height="24" rx="3" ry="3"/>
        <text class="file-text host-file-text" x="145" y="106">src/main.rs</text>

        <rect class="file-box host-file" x="50" y="122" width="190" height="24" rx="3" ry="3"/>
        <text class="file-text host-file-text" x="145" y="138">build.rs</text>

        <text class="dep-text host-dep" x="145" y="168">zisk-sdk</text>
        <text class="dep-sub host-dep-sub" x="145" y="182">ProverClient, ZiskStdin, include_elf!</text>
      </g>

      <!-- Guest crate (right) -->
      <g class="step guest-step">
        <rect class="box guest" x="380" y="56" width="230" height="140" rx="5" ry="5"/>
        <text class="crate-label guest-text" x="495" y="78">guest/</text>

        <rect class="file-box guest-file" x="400" y="90" width="190" height="24" rx="3" ry="3"/>
        <text class="file-text guest-file-text" x="495" y="106">src/main.rs</text>

        <rect class="file-box guest-file" x="400" y="122" width="190" height="24" rx="3" ry="3"/>
        <text class="file-text guest-file-text" x="495" y="138">Cargo.toml</text>

        <text class="dep-text guest-dep" x="495" y="168">ziskos</text>
        <text class="dep-sub guest-dep-sub" x="495" y="182">entrypoint!, io::read, io::commit</text>
      </g>

      <!-- Arrow: host main.rs loads & runs the guest crate (straight horizontal) -->
      <path class="arrow build-arrow"
            d="M 240 102 L 398 102"
            marker-end="url(#ps-a)"/>
      <text class="arrow-label" x="320" y="96">loads &amp; runs</text>

      <!-- Arrow: shared types (bidirectional, straight horizontal) -->
      <line class="arrow shared-arrow" x1="260" y1="170" x2="378" y2="170" marker-end="url(#ps-a-both)"/>
      <line class="arrow shared-arrow" x1="378" y1="177" x2="260" y2="177" marker-end="url(#ps-a-both)"/>
      <text class="arrow-label shared-label" x="320" y="162">shared types (serde)</text>

      <!-- Runs-in labels -->
      <text class="env-label host-env" x="145" y="212">runs on your machine</text>
      <text class="env-label guest-env" x="495" y="212">runs in ZisK VM</text>

      <defs>
        <marker id="ps-a" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-arrow"/>
        </marker>
        <marker id="ps-a-both" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-arrow"/>
        </marker>
      </defs>
    </svg>
  </div>
</template>

<style scoped>
.ps-diagram {
  --ws-bar-fill: #1a1a1e;
  --ws-bar-stroke: #555;
  --text-ws: #999;
  --box-host-fill: #1a1f28;
  --box-host-stroke: #3a5577;
  --box-guest-fill: #142814;
  --box-guest-stroke: #4a8;
  --file-host-fill: #1a2230;
  --file-host-stroke: #2a4566;
  --file-guest-fill: #1a2e1a;
  --file-guest-stroke: #3a6a3a;
  --text-host: #99bbdd;
  --text-guest: #8d8;
  --text-host-file: #8899bb;
  --text-guest-file: #8db88d;
  --text-host-dep: #5577aa;
  --text-guest-dep: #5a8a5a;
  --text-host-dep-sub: #3a5577;
  --text-guest-dep-sub: #3a6a4a;
  --text-arrow-label: #556;
  --text-host-env: #3a5577;
  --text-guest-env: #3a6a4a;
  --arrow-color: #556;
  --hover-host-stroke: #77aadd;
  --hover-host-shadow: rgba(85,136,187,0.3);
  --hover-guest-stroke: #6c6;
  --hover-guest-shadow: rgba(68,170,136,0.3);
  max-width: 740px;
  margin: 1.5rem auto;
}
.ps-diagram svg { overflow: visible; }

/* Workspace bar */
.ws-bar { fill: var(--ws-bar-fill); stroke: var(--ws-bar-stroke); stroke-width: 1.5px; }
.ws-label {
  fill: var(--text-ws); color: var(--text-ws); -webkit-text-fill-color: var(--text-ws);
  font-family: 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 9px;
  font-weight: 600;
  text-anchor: middle;
}

/* Crate boxes */
.box { stroke-width: 1.5px; transition: stroke 0.2s ease, filter 0.2s ease; }
.guest { fill: var(--box-guest-fill); stroke: var(--box-guest-stroke); }
.host { fill: var(--box-host-fill); stroke: var(--box-host-stroke); }

.step { cursor: pointer; }
.guest-step:hover .guest { stroke: var(--hover-guest-stroke); filter: drop-shadow(0 0 6px var(--hover-guest-shadow)); }
.host-step:hover .host { stroke: var(--hover-host-stroke); filter: drop-shadow(0 0 5px var(--hover-host-shadow)); }

/* Crate labels */
.crate-label {
  font-family: 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 12px;
  font-weight: 600;
  text-anchor: middle;
}
.guest-text { fill: var(--text-guest); color: var(--text-guest); -webkit-text-fill-color: var(--text-guest); }
.host-text { fill: var(--text-host); color: var(--text-host); -webkit-text-fill-color: var(--text-host); }

/* File boxes */
.file-box { stroke-width: 1px; }
.guest-file { fill: var(--file-guest-fill); stroke: var(--file-guest-stroke); }
.host-file { fill: var(--file-host-fill); stroke: var(--file-host-stroke); }

.file-text {
  font-family: 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 9px;
  text-anchor: middle;
}
.guest-file-text { fill: var(--text-guest-file); color: var(--text-guest-file); -webkit-text-fill-color: var(--text-guest-file); }
.host-file-text { fill: var(--text-host-file); color: var(--text-host-file); -webkit-text-fill-color: var(--text-host-file); }

/* Dependency labels */
.dep-text {
  font-family: 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 9px;
  font-weight: 600;
  text-anchor: middle;
}
.guest-dep { fill: var(--text-guest-dep); color: var(--text-guest-dep); -webkit-text-fill-color: var(--text-guest-dep); }
.host-dep { fill: var(--text-host-dep); color: var(--text-host-dep); -webkit-text-fill-color: var(--text-host-dep); }

.dep-sub {
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  text-anchor: middle;
  font-style: italic;
}
.guest-dep-sub { fill: var(--text-guest-dep-sub); color: var(--text-guest-dep-sub); -webkit-text-fill-color: var(--text-guest-dep-sub); }
.host-dep-sub { fill: var(--text-host-dep-sub); color: var(--text-host-dep-sub); -webkit-text-fill-color: var(--text-host-dep-sub); }

/* Arrows */
.arrow { stroke: var(--arrow-color); stroke-width: 1.5px; fill: none; }
.build-arrow { stroke-dasharray: 4, 3; }
.shared-arrow { stroke-width: 1px; }

.arrow-label {
  fill: var(--text-arrow-label); color: var(--text-arrow-label); -webkit-text-fill-color: var(--text-arrow-label);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  text-anchor: middle;
  font-style: italic;
}
.shared-label { font-size: 9px; }

/* Environment labels */
.env-label {
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  text-anchor: middle;
  font-style: italic;
}
.guest-env { fill: var(--text-guest-env); color: var(--text-guest-env); -webkit-text-fill-color: var(--text-guest-env); }
.host-env { fill: var(--text-host-env); color: var(--text-host-env); -webkit-text-fill-color: var(--text-host-env); }

.marker-arrow { fill: var(--arrow-color); }
</style>

<style>
html:not(.dark) .ps-diagram {
  --ws-bar-fill: #f5f5f7;
  --ws-bar-stroke: #aaa;
  --text-ws: #111;
  --box-host-fill: #f7f9fc;
  --box-host-stroke: #4477aa;
  --box-guest-fill: #f7fcf7;
  --box-guest-stroke: #2a7a4a;
  --file-host-fill: #f7f9fc;
  --file-host-stroke: #4477aa;
  --file-guest-fill: #f7fcf7;
  --file-guest-stroke: #2a7a4a;
  --text-host: #111;
  --text-guest: #111;
  --text-host-file: #111;
  --text-guest-file: #111;
  --text-host-dep: #111;
  --text-guest-dep: #111;
  --text-host-dep-sub: #555;
  --text-guest-dep-sub: #555;
  --text-arrow-label: #555;
  --text-host-env: #444;
  --text-guest-env: #2a7a4a;
  --arrow-color: #999;
  --hover-host-stroke: #3366aa;
  --hover-host-shadow: rgba(0,0,0,0.1);
  --hover-guest-stroke: #2a7a4a;
  --hover-guest-shadow: rgba(0,0,0,0.1);
}
</style>
