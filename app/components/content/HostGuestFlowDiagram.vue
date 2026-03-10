<template>
  <div class="hgf-diagram">
    <svg width="100%" viewBox="0 0 600 220">

      <!-- Host column (left) -->
      <g class="step">
        <rect class="box host" x="10" y="30" width="150" height="44" rx="4" ry="4"/>
        <text class="label host-text" x="85" y="48">prepare input</text>
        <text class="code" x="85" y="65">stdin.write(&amp;n)</text>
      </g>
      <g class="step">
        <rect class="box host" x="10" y="90" width="150" height="44" rx="4" ry="4"/>
        <text class="label host-text" x="85" y="108">execute guest</text>
        <text class="code" x="85" y="125">client.execute(&amp;pk, stdin)</text>
      </g>

      <!-- Arrow: host → guest -->
      <line class="arrow green-arrow" x1="160" y1="112" x2="208" y2="112" marker-end="url(#hgf-a-green)"/>

      <!-- Guest column (center) -->
      <g class="step">
        <rect class="box guest" x="210" y="20" width="180" height="44" rx="4" ry="4"/>
        <text class="label guest-text" x="300" y="38">read input</text>
        <text class="code guest-code" x="300" y="55">io::read()</text>
      </g>
      <line class="arrow green-arrow" x1="300" y1="64" x2="300" y2="80" marker-end="url(#hgf-a-green)"/>
      <g class="step">
        <rect class="box guest" x="210" y="82" width="180" height="34" rx="4" ry="4"/>
        <text class="label guest-text" x="300" y="103">compute</text>
      </g>
      <line class="arrow green-arrow" x1="300" y1="116" x2="300" y2="132" marker-end="url(#hgf-a-green)"/>
      <g class="step">
        <rect class="box guest" x="210" y="134" width="180" height="44" rx="4" ry="4"/>
        <text class="label guest-text" x="300" y="152">commit output</text>
        <text class="code guest-code" x="300" y="169">io::commit(&amp;result)</text>
      </g>

      <!-- Arrow: guest → host -->
      <line class="arrow" x1="390" y1="156" x2="438" y2="156" marker-end="url(#hgf-a)"/>

      <!-- Host column (right) -->
      <g class="step">
        <rect class="box host" x="440" y="120" width="150" height="44" rx="4" ry="4"/>
        <text class="label host-text" x="515" y="138">read result</text>
        <text class="code" x="515" y="155">get_public_values::&lt;T&gt;()</text>
      </g>

      <!-- Column labels -->
      <text class="col-label host-col" x="85" y="14">Host</text>
      <text class="col-label guest-col" x="300" y="14">Guest (ZisK VM)</text>
      <text class="col-label host-col" x="515" y="14">Host</text>

      <!-- Dotted separators -->
      <line class="separator" x1="180" y1="6" x2="180" y2="195"/>
      <line class="separator" x1="420" y1="6" x2="420" y2="195"/>

      <defs>
        <marker id="hgf-a" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-arrow"/>
        </marker>
        <marker id="hgf-a-green" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-arrow-green"/>
        </marker>
      </defs>
    </svg>
  </div>
</template>

<style scoped>
.hgf-diagram {
  --box-host-fill: #1a1f28;
  --box-host-stroke: #3a5577;
  --box-guest-fill: #142814;
  --box-guest-stroke: #4a8;
  --text-host: #99bbdd;
  --text-guest: #8d8;
  --text-code: #5577aa;
  --text-guest-code: #5a8a5a;
  --text-host-col: #5577aa;
  --text-guest-col: #4a8;
  --separator-color: #333;
  --arrow-color: #556;
  --green-arrow-color: #3a6a4a;
  --hover-host-stroke: #77aadd;
  --hover-host-shadow: rgba(85,136,187,0.3);
  --hover-guest-stroke: #6c6;
  --hover-guest-shadow: rgba(68,170,136,0.3);

  max-width: 620px;
  margin: 1.5rem auto;
}
.hgf-diagram svg { overflow: visible; }

.box { stroke-width: 1.5px; transition: stroke 0.2s ease, filter 0.2s ease; }
.host { fill: var(--box-host-fill); stroke: var(--box-host-stroke); }
.guest { fill: var(--box-guest-fill); stroke: var(--box-guest-stroke); }

.step { cursor: pointer; }
.step:hover .host { stroke: var(--hover-host-stroke); filter: drop-shadow(0 0 5px var(--hover-host-shadow)); }
.step:hover .guest { stroke: var(--hover-guest-stroke); filter: drop-shadow(0 0 5px var(--hover-guest-shadow)); }

.label {
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 12px;
  font-weight: 500;
  text-anchor: middle;
}
.host-text { fill: var(--text-host); color: var(--text-host); -webkit-text-fill-color: var(--text-host); }
.guest-text { fill: var(--text-guest); color: var(--text-guest); -webkit-text-fill-color: var(--text-guest); }

.code {
  fill: var(--text-code);
  color: var(--text-code);
  -webkit-text-fill-color: var(--text-code);
  font-family: 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 9px;
  text-anchor: middle;
}
.guest-code { fill: var(--text-guest-code); color: var(--text-guest-code); -webkit-text-fill-color: var(--text-guest-code); }

.col-label {
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 10px;
  font-weight: 600;
  text-anchor: middle;
  letter-spacing: 0.5px;
}
.host-col { fill: var(--text-host-col); color: var(--text-host-col); -webkit-text-fill-color: var(--text-host-col); }
.guest-col { fill: var(--text-guest-col); color: var(--text-guest-col); -webkit-text-fill-color: var(--text-guest-col); }

.separator { stroke: var(--separator-color); stroke-width: 1px; stroke-dasharray: 4, 3; }

.arrow { stroke: var(--arrow-color); stroke-width: 1.5px; fill: none; }
.green-arrow { stroke: var(--green-arrow-color); }

.marker-arrow { fill: var(--arrow-color); }
.marker-arrow-green { fill: var(--green-arrow-color); }
</style>

<style>
html:not(.dark) .hgf-diagram {
  --box-host-fill: #f7f9fc;
  --box-host-stroke: #4477aa;
  --box-guest-fill: #f7fcf7;
  --box-guest-stroke: #2a7a4a;
  --text-host: #111;
  --text-guest: #111;
  --text-code: #111;
  --text-guest-code: #111;
  --text-host-col: #111;
  --text-guest-col: #111;
  --separator-color: #ddd;
  --arrow-color: #999;
  --green-arrow-color: #2a7a4a;
  --hover-host-stroke: #3366aa;
  --hover-host-shadow: rgba(0,0,0,0.1);
  --hover-guest-stroke: #2a7a4a;
  --hover-guest-shadow: rgba(0,0,0,0.1);
}
</style>
