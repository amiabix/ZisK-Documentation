<template>
  <div class="gio-diagram">
    <svg width="100%" viewBox="0 0 560 220">

      <!-- Private input (left) -->
      <g class="input-side">
        <rect class="io-box private" x="10" y="55" width="140" height="100" rx="4" ry="4"/>
        <text class="io-title" x="80" y="82">stdin buffer</text>
        <text class="io-tag private-tag" x="80" y="104">PRIVATE</text>
        <text class="io-note" x="80" y="124">not in proof</text>
        <text class="io-note" x="80" y="140">host writes before execution</text>
      </g>

      <!-- Arrow: input → guest -->
      <line class="flow" x1="150" y1="105" x2="198" y2="105" marker-end="url(#gio-a)"/>
      <text class="flow-label" x="174" y="95">io::read()</text>

      <!-- Guest box (center) -->
      <g class="guest-zone">
        <rect class="guest-box" x="200" y="35" width="160" height="140" rx="5" ry="5"/>
        <text class="guest-label" x="280" y="78">Guest</text>
        <text class="guest-sub" x="280" y="100">computation</text>
        <text class="guest-sub2" x="280" y="148">ZisK VM</text>
      </g>

      <!-- Arrow: guest → output -->
      <line class="flow pub-flow" x1="360" y1="105" x2="408" y2="105" marker-end="url(#gio-a-pub)"/>
      <text class="flow-label pub-label" x="384" y="95">io::commit()</text>

      <!-- Public output (right) -->
      <g class="output-side">
        <rect class="io-box public" x="410" y="55" width="140" height="100" rx="4" ry="4"/>
        <text class="io-title pub-title" x="480" y="82">public values</text>
        <text class="io-tag public-tag" x="480" y="104">PUBLIC</text>
        <text class="io-note pub-note" x="480" y="124">bound to proof</text>
        <text class="io-note pub-note" x="480" y="140">verifier can inspect</text>
      </g>

      <defs>
        <marker id="gio-a" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-arrow"/>
        </marker>
        <marker id="gio-a-pub" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-arrow-green"/>
        </marker>
      </defs>
    </svg>
  </div>
</template>

<style scoped>
.gio-diagram {
  --box-private-fill: #1a1f28;
  --box-private-stroke: #3a5577;
  --box-public-fill: #142814;
  --box-public-stroke: #4a8;
  --box-guest-fill: #142814;
  --box-guest-stroke: #4a8;
  --text-io-title: #99bbdd;
  --text-pub-title: #8db88d;
  --text-private-tag: #3a5577;
  --text-public-tag: #4a8;
  --text-io-note: #556677;
  --text-pub-note: #4a6a4a;
  --text-guest-label: #8d8;
  --text-guest-sub: #5a8a5a;
  --text-guest-sub2: #3a6a4a;
  --text-flow-label: #667;
  --text-pub-label: #4a6a4a;
  --arrow-color: #556;
  --green-arrow-color: #3a6a4a;
  --hover-private-stroke: #77aadd;
  --hover-private-shadow: rgba(85,136,187,0.3);
  --hover-public-stroke: #6c6;
  --hover-public-shadow: rgba(68,170,136,0.3);
  --hover-guest-stroke: #6c6;
  --hover-guest-shadow: rgba(68,170,136,0.3);

  max-width: 480px;
  margin: 1.5rem auto;
}
.gio-diagram svg { overflow: visible; }

/* IO boxes */
.io-box { stroke-width: 1.5px; }
.private { fill: var(--box-private-fill); stroke: var(--box-private-stroke); }
.public { fill: var(--box-public-fill); stroke: var(--box-public-stroke); }

.io-title {
  fill: var(--text-io-title);
  color: var(--text-io-title);
  -webkit-text-fill-color: var(--text-io-title);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 12px;
  font-weight: 600;
  text-anchor: middle;
}
.pub-title { fill: var(--text-pub-title); color: var(--text-pub-title); -webkit-text-fill-color: var(--text-pub-title); }

.io-tag {
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  font-weight: 700;
  text-anchor: middle;
  letter-spacing: 1.5px;
}
.private-tag { fill: var(--text-private-tag); color: var(--text-private-tag); -webkit-text-fill-color: var(--text-private-tag); }
.public-tag { fill: var(--text-public-tag); color: var(--text-public-tag); -webkit-text-fill-color: var(--text-public-tag); }

.io-note {
  fill: var(--text-io-note);
  color: var(--text-io-note);
  -webkit-text-fill-color: var(--text-io-note);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  text-anchor: middle;
  font-style: italic;
}
.pub-note { fill: var(--text-pub-note); color: var(--text-pub-note); -webkit-text-fill-color: var(--text-pub-note); }

/* Guest */
.guest-box {
  fill: var(--box-guest-fill);
  stroke: var(--box-guest-stroke);
  stroke-width: 1.5px;
  transition: stroke 0.2s ease, filter 0.2s ease;
}
.guest-zone { cursor: pointer; }
.guest-zone:hover .guest-box {
  stroke: var(--hover-guest-stroke);
  filter: drop-shadow(0 0 5px var(--hover-guest-shadow));
}

.guest-label {
  fill: var(--text-guest-label);
  color: var(--text-guest-label);
  -webkit-text-fill-color: var(--text-guest-label);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 12px;
  font-weight: 600;
  text-anchor: middle;
}
.guest-sub {
  fill: var(--text-guest-sub);
  color: var(--text-guest-sub);
  -webkit-text-fill-color: var(--text-guest-sub);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 10px;
  text-anchor: middle;
}
.guest-sub2 {
  fill: var(--text-guest-sub2);
  color: var(--text-guest-sub2);
  -webkit-text-fill-color: var(--text-guest-sub2);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 10px;
  text-anchor: middle;
  font-style: italic;
}

/* Flow */
.flow { stroke: var(--arrow-color); stroke-width: 1.5px; fill: none; }
.pub-flow { stroke: var(--green-arrow-color); }

.flow-label {
  fill: var(--text-flow-label);
  color: var(--text-flow-label);
  -webkit-text-fill-color: var(--text-flow-label);
  font-family: 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 9px;
  text-anchor: middle;
}
.pub-label { fill: var(--text-pub-label); color: var(--text-pub-label); -webkit-text-fill-color: var(--text-pub-label); }

/* Hover on sides */
.input-side, .output-side { cursor: pointer; }
.input-side:hover .private {
  stroke: var(--hover-private-stroke);
  filter: drop-shadow(0 0 5px var(--hover-private-shadow));
}
.output-side:hover .public {
  stroke: var(--hover-public-stroke);
  filter: drop-shadow(0 0 5px var(--hover-public-shadow));
}

.marker-arrow { fill: var(--arrow-color); }
.marker-arrow-green { fill: var(--green-arrow-color); }
</style>

<style>
html:not(.dark) .gio-diagram {
  --box-private-fill: #f7f9fc;
  --box-private-stroke: #4477aa;
  --box-public-fill: #f7fcf7;
  --box-public-stroke: #2a7a4a;
  --box-guest-fill: #f7fcf7;
  --box-guest-stroke: #2a7a4a;
  --text-io-title: #111;
  --text-pub-title: #111;
  --text-private-tag: #111;
  --text-public-tag: #111;
  --text-io-note: #555;
  --text-pub-note: #555;
  --text-guest-label: #111;
  --text-guest-sub: #111;
  --text-guest-sub2: #555;
  --text-flow-label: #444;
  --text-pub-label: #444;
  --arrow-color: #999;
  --green-arrow-color: #2a7a4a;
  --hover-private-stroke: #3366aa;
  --hover-private-shadow: rgba(0,0,0,0.1);
  --hover-public-stroke: #2a7a4a;
  --hover-public-shadow: rgba(0,0,0,0.1);
  --hover-guest-stroke: #2a7a4a;
  --hover-guest-shadow: rgba(0,0,0,0.1);
}
</style>
