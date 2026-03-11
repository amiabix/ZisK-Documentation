<template>
  <div class="gh-diagram">
    <svg width="100%" viewBox="0 0 730 306">

      <!-- Column labels -->
      <text class="col-label host-col" x="100" y="16">Host</text>
      <text class="col-label guest-col" x="400" y="16">Guest (ZisK VM)</text>
      <text class="col-label neutral-col" x="630" y="16">Output</text>

      <!-- Dotted separators -->
      <line class="separator" x1="230" y1="6" x2="230" y2="296"/>
      <line class="separator" x1="560" y1="6" x2="560" y2="296"/>

      <!-- HOST COLUMN -->

      <g class="step">
        <rect class="box muted" x="20" y="34" width="160" height="36" rx="4" ry="4"/>
        <text class="label muted-text" x="100" y="56">external data</text>
      </g>
      <line class="arrow" x1="100" y1="70" x2="100" y2="88" marker-end="url(#gha)"/>

      <g class="step">
        <rect class="box host" x="20" y="90" width="160" height="36" rx="4" ry="4"/>
        <text class="label host-text" x="100" y="112">host program</text>
      </g>
      <line class="arrow" x1="100" y1="126" x2="100" y2="144" marker-end="url(#gha)"/>

      <g class="step">
        <rect class="box host" x="20" y="146" width="160" height="42" rx="4" ry="4"/>
        <text class="label host-text" x="100" y="163">prepare input</text>
        <text class="code host-code" x="100" y="179">stdin.write()</text>
      </g>

      <!-- Arrow: host → guest (L-shaped) -->
      <path class="arrow green-arrow" d="M 180 167 L 215 167 L 215 77 L 268 77" fill="none" marker-end="url(#gha-green)"/>

      <!-- GUEST COLUMN — provability boundary -->
      <rect class="boundary" x="250" y="28" width="300" height="146" rx="5" ry="5"/>
      <text class="boundary-label" x="260" y="44">PROVABILITY BOUNDARY</text>

      <g class="step guest-step">
        <rect class="box guest" x="270" y="56" width="200" height="42" rx="4" ry="4"/>
        <text class="label guest-text" x="370" y="73">guest execution</text>
        <text class="code guest-code" x="370" y="89">io::read() → compute</text>
      </g>
      <line class="inner-arrow" x1="370" y1="98" x2="370" y2="118" marker-end="url(#gha-green)"/>

      <g class="step guest-step">
        <rect class="box guest" x="270" y="120" width="200" height="42" rx="4" ry="4"/>
        <text class="label guest-text" x="370" y="137">public outputs</text>
        <text class="code guest-code" x="370" y="153">io::commit()</text>
      </g>

      <!-- Below boundary: proof generation (host-side operation) -->
      <line class="arrow" x1="370" y1="174" x2="370" y2="194" marker-end="url(#gha)"/>

      <!-- Dashed line: host triggers proof generation -->
      <path class="host-trigger" d="M 100 188 L 100 217 L 268 217" marker-end="url(#gha-blue)"/>

      <g class="step">
        <rect class="box host" x="270" y="196" width="200" height="42" rx="4" ry="4"/>
        <text class="label host-text" x="370" y="213">proof generation</text>
        <text class="code host-code" x="370" y="229">client.prove()</text>
      </g>

      <!-- Arrow: proof generation → proof output -->
      <line class="arrow" x1="470" y1="217" x2="568" y2="217" marker-end="url(#gha-green)"/>

      <!-- OUTPUT COLUMN -->

      <!-- Public values output (separate from proof) -->
      <line class="arrow green-arrow" x1="470" y1="141" x2="568" y2="141" marker-end="url(#gha-green)"/>
      <g class="step proof-step">
        <rect class="box proof-out" x="570" y="125" width="120" height="32" rx="4" ry="4"/>
        <text class="label proof-text" x="630" y="145">public values</text>
      </g>

      <!-- Proof output -->
      <g class="step proof-step">
        <rect class="box proof-out" x="570" y="199" width="120" height="36" rx="4" ry="4"/>
        <text class="label proof-text" x="630" y="221">proof</text>
      </g>

      <!-- Arrows: both feed into verifier -->
      <line class="arrow dashed-green" x1="630" y1="157" x2="630" y2="199"/>
      <line class="arrow" x1="630" y1="235" x2="630" y2="258" marker-end="url(#gha)"/>

      <!-- Verifier -->
      <g class="step">
        <rect class="box verify" x="570" y="260" width="120" height="36" rx="4" ry="4"/>
        <text class="label verify-text" x="630" y="282">verifier</text>
      </g>

      <!-- Bracket: verifier sees (public values + proof) -->
      <line class="bracket" x1="696" y1="125" x2="696" y2="240"/>
      <line class="bracket" x1="690" y1="125" x2="696" y2="125"/>
      <line class="bracket" x1="690" y1="240" x2="696" y2="240"/>
      <text class="bracket-label" x="710" y="182" transform="rotate(90,710,182)">verifier sees this</text>

      <defs>
        <marker id="gha" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-arrow"/>
        </marker>
        <marker id="gha-green" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-arrow-green"/>
        </marker>
        <marker id="gha-blue" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-arrow-blue"/>
        </marker>
      </defs>
    </svg>
  </div>
</template>

<style scoped>
.gh-diagram {
  --box-muted-fill: #1a1a1e;
  --box-muted-stroke: #444;
  --box-host-fill: #1a1f28;
  --box-host-stroke: #3a5577;
  --box-guest-fill: #142814;
  --box-guest-stroke: #4a8;
  --box-verify-fill: #1a1a1e;
  --box-verify-stroke: #555;
  --box-proof-fill: #142814;
  --box-proof-stroke: #4a8;
  --boundary-fill: #0d1a0d;
  --boundary-stroke: #4a8;
  --text-muted: #999;
  --text-host: #99bbdd;
  --text-guest: #8d8;
  --text-verify: #aaa;
  --text-proof: #8d8;
  --text-host-code: #5577aa;
  --text-guest-code: #5a8a5a;
  --text-host-col: #5577aa;
  --text-guest-col: #4a8;
  --text-neutral-col: #888;
  --text-boundary: #3a6a4a;
  --text-bracket: #6aaa7a;
  --arrow-color: #556;
  --arrow-green: #3a6a4a;
  --arrow-blue: #3a5577;
  --dashed-green-color: #3a6a4a;
  --separator-color: #333;
  --bracket-color: #6aaa7a;
  --host-trigger-color: #3a5577;
  --inner-arrow-color: #3a6a4a;
  --hover-host-stroke: #77aadd;
  --hover-host-shadow: rgba(85,136,187,0.3);
  --hover-muted-stroke: #777;
  --hover-verify-stroke: #888;
  --hover-guest-stroke: #6c6;
  --hover-guest-shadow: rgba(68,170,136,0.4);
  max-width: 600px;
  margin: 1.5rem auto;
}
.gh-diagram svg { overflow: visible; }

.box {
  stroke-width: 1.5px;
  transition: stroke 0.2s ease, filter 0.2s ease;
}
.muted { fill: var(--box-muted-fill); stroke: var(--box-muted-stroke); }
.host { fill: var(--box-host-fill); stroke: var(--box-host-stroke); }
.guest { fill: var(--box-guest-fill); stroke: var(--box-guest-stroke); }
.verify { fill: var(--box-verify-fill); stroke: var(--box-verify-stroke); }
.proof-out { fill: var(--box-proof-fill); stroke: var(--box-proof-stroke); }

.step { cursor: pointer; }
.step:hover .host { stroke: var(--hover-host-stroke); filter: drop-shadow(0 0 5px var(--hover-host-shadow)); }
.step:hover .muted { stroke: var(--hover-muted-stroke); }
.step:hover .verify { stroke: var(--hover-verify-stroke); }
.proof-step:hover .proof-out { stroke: var(--hover-guest-stroke); filter: drop-shadow(0 0 6px var(--hover-guest-shadow)); }
.guest-step:hover .guest { stroke: var(--hover-guest-stroke); filter: drop-shadow(0 0 6px var(--hover-guest-shadow)); }

.label {
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 12px;
  font-weight: 500;
  text-anchor: middle;
}
.muted-text { fill: var(--text-muted); color: var(--text-muted); -webkit-text-fill-color: var(--text-muted); }
.host-text { fill: var(--text-host); color: var(--text-host); -webkit-text-fill-color: var(--text-host); }
.guest-text { fill: var(--text-guest); color: var(--text-guest); -webkit-text-fill-color: var(--text-guest); }
.verify-text { fill: var(--text-verify); color: var(--text-verify); -webkit-text-fill-color: var(--text-verify); }
.proof-text { fill: var(--text-proof); color: var(--text-proof); -webkit-text-fill-color: var(--text-proof); }

.code {
  font-family: 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 9px;
  text-anchor: middle;
}
.host-code { fill: var(--text-host-code); color: var(--text-host-code); -webkit-text-fill-color: var(--text-host-code); }
.guest-code { fill: var(--text-guest-code); color: var(--text-guest-code); -webkit-text-fill-color: var(--text-guest-code); }

.col-label {
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  font-weight: 600;
  text-anchor: middle;
  letter-spacing: 0.5px;
}
.host-col { fill: var(--text-host-col); color: var(--text-host-col); -webkit-text-fill-color: var(--text-host-col); }
.guest-col { fill: var(--text-guest-col); color: var(--text-guest-col); -webkit-text-fill-color: var(--text-guest-col); }
.neutral-col { fill: var(--text-neutral-col); color: var(--text-neutral-col); -webkit-text-fill-color: var(--text-neutral-col); }

.separator { stroke: var(--separator-color); stroke-width: 1px; stroke-dasharray: 4, 3; }

.arrow, .inner-arrow {
  stroke: var(--arrow-color);
  stroke-width: 1.5px;
  fill: none;
}
.inner-arrow { stroke: var(--inner-arrow-color); }
.green-arrow { stroke: var(--arrow-green); }
.dashed-green { stroke: var(--dashed-green-color); stroke-dasharray: 4, 3; stroke-width: 1px; }

.boundary {
  fill: var(--boundary-fill);
  stroke: var(--boundary-stroke);
  stroke-width: 1.5px;
  stroke-dasharray: 6, 3;
}
.boundary-label {
  fill: var(--text-boundary); color: var(--text-boundary); -webkit-text-fill-color: var(--text-boundary);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.5px;
}

.bracket { stroke: var(--bracket-color); stroke-width: 1.5px; fill: none; }
.bracket-label {
  fill: var(--text-bracket); color: var(--text-bracket); -webkit-text-fill-color: var(--text-bracket);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 10px;
  font-weight: 600;
  text-anchor: middle;
  letter-spacing: 0.5px;
}

.host-trigger {
  stroke: var(--host-trigger-color);
  stroke-width: 1.5px;
  stroke-dasharray: 6, 3;
  fill: none;
}

.marker-arrow { fill: var(--arrow-color); }
.marker-arrow-green { fill: var(--arrow-green); }
.marker-arrow-blue { fill: var(--arrow-blue); }
</style>

<style>
html:not(.dark) .gh-diagram {
  --box-muted-fill: #f5f5f7;
  --box-muted-stroke: #aaa;
  --box-host-fill: #f7f9fc;
  --box-host-stroke: #4477aa;
  --box-guest-fill: #f7fcf7;
  --box-guest-stroke: #2a7a4a;
  --box-verify-fill: #f5f5f7;
  --box-verify-stroke: #aaa;
  --box-proof-fill: #f7fcf7;
  --box-proof-stroke: #2a7a4a;
  --boundary-fill: #f0faf0;
  --boundary-stroke: #2a7a4a;
  --text-muted: #111;
  --text-host: #111;
  --text-guest: #111;
  --text-verify: #111;
  --text-proof: #111;
  --text-host-code: #111;
  --text-guest-code: #111;
  --text-host-col: #444;
  --text-guest-col: #2a7a4a;
  --text-neutral-col: #444;
  --text-boundary: #2a7a4a;
  --text-bracket: #2a7a4a;
  --arrow-color: #999;
  --arrow-green: #2a7a4a;
  --arrow-blue: #4477aa;
  --dashed-green-color: #2a7a4a;
  --separator-color: #ddd;
  --bracket-color: #2a7a4a;
  --host-trigger-color: #4477aa;
  --inner-arrow-color: #2a7a4a;
  --hover-host-stroke: #3366aa;
  --hover-host-shadow: rgba(0,0,0,0.1);
  --hover-muted-stroke: #888;
  --hover-verify-stroke: #888;
  --hover-guest-stroke: #2a7a4a;
  --hover-guest-shadow: rgba(0,0,0,0.1);
}
</style>
