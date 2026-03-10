<template>
  <div class="ioo-diagram">
    <svg width="100%" viewBox="0 0 580 160">

      <!-- Column labels -->
      <text class="col-label host-col" x="120" y="16">Host .write() order</text>
      <text class="col-label guest-col" x="440" y="16">Guest io::read() order</text>

      <!-- Row 1 -->
      <g class="step">
        <rect class="box host" x="20" y="28" width="200" height="24" rx="3" ry="3"/>
        <text class="num" x="32" y="44">1</text>
        <text class="code-label host-code" x="135" y="44">.write(&amp;10u32)</text>
      </g>
      <path class="arrow match-arrow" d="M 220 40 L 318 40" marker-end="url(#ioo-a)"/>
      <g class="step guest-step">
        <rect class="box guest" x="320" y="28" width="240" height="24" rx="3" ry="3"/>
        <text class="num guest-num" x="332" y="44">1</text>
        <text class="code-label guest-code" x="455" y="44">io::read::&lt;u32&gt;() → 10</text>
      </g>

      <!-- Row 2 -->
      <g class="step">
        <rect class="box host" x="20" y="62" width="200" height="24" rx="3" ry="3"/>
        <text class="num" x="32" y="78">2</text>
        <text class="code-label host-code" x="135" y="78">.write(&amp;"hello")</text>
      </g>
      <path class="arrow match-arrow" d="M 220 74 L 318 74" marker-end="url(#ioo-a)"/>
      <g class="step guest-step">
        <rect class="box guest" x="320" y="62" width="240" height="24" rx="3" ry="3"/>
        <text class="num guest-num" x="332" y="78">2</text>
        <text class="code-label guest-code" x="455" y="78">io::read::&lt;String&gt;() → "hello"</text>
      </g>

      <!-- Row 3 -->
      <g class="step">
        <rect class="box host" x="20" y="96" width="200" height="24" rx="3" ry="3"/>
        <text class="num" x="32" y="112">3</text>
        <text class="code-label host-code" x="135" y="112">.write(&amp;vec![1, 2, 3])</text>
      </g>
      <path class="arrow match-arrow" d="M 220 108 L 318 108" marker-end="url(#ioo-a)"/>
      <g class="step guest-step">
        <rect class="box guest" x="320" y="96" width="240" height="24" rx="3" ry="3"/>
        <text class="num guest-num" x="332" y="112">3</text>
        <text class="code-label guest-code" x="455" y="112">io::read::&lt;Vec&lt;u8&gt;&gt;() → [1, 2, 3]</text>
      </g>

      <!-- Footer note -->
      <text class="note" x="290" y="146">order and types must match, or the guest panics</text>

      <defs>
        <marker id="ioo-a" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-arrow"/>
        </marker>
      </defs>
    </svg>
  </div>
</template>

<style scoped>
.ioo-diagram {
  --text-host-col: #5577aa;
  --text-guest-col: #4a8;
  --box-host-fill: #1a1f28;
  --box-host-stroke: #3a5577;
  --box-guest-fill: #142814;
  --box-guest-stroke: #4a8;
  --text-num: #3a5577;
  --text-guest-num: #3a6a4a;
  --text-host-code: #8899bb;
  --text-guest-code: #8db88d;
  --text-note: #556;
  --arrow-color: #556;
  --hover-host-stroke: #77aadd;
  --hover-host-shadow: rgba(85,136,187,0.3);
  --hover-guest-stroke: #6c6;
  --hover-guest-shadow: rgba(68,170,136,0.3);
  max-width: 700px;
  margin: 1.5rem auto;
}
.ioo-diagram svg { overflow: visible; }

/* Column labels */
.col-label {
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  font-weight: 600;
  text-anchor: middle;
  letter-spacing: 0.5px;
}
.host-col { fill: var(--text-host-col); color: var(--text-host-col); -webkit-text-fill-color: var(--text-host-col); }
.guest-col { fill: var(--text-guest-col); color: var(--text-guest-col); -webkit-text-fill-color: var(--text-guest-col); }

/* Boxes */
.box { stroke-width: 1px; transition: stroke 0.2s ease, filter 0.2s ease; }
.host { fill: var(--box-host-fill); stroke: var(--box-host-stroke); }
.guest { fill: var(--box-guest-fill); stroke: var(--box-guest-stroke); }

.step { cursor: pointer; }
.step:hover .host { stroke: var(--hover-host-stroke); filter: drop-shadow(0 0 4px var(--hover-host-shadow)); }
.guest-step:hover .guest { stroke: var(--hover-guest-stroke); filter: drop-shadow(0 0 4px var(--hover-guest-shadow)); }

/* Row numbers */
.num {
  fill: var(--text-num); color: var(--text-num); -webkit-text-fill-color: var(--text-num);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  font-weight: 700;
}
.guest-num { fill: var(--text-guest-num); color: var(--text-guest-num); -webkit-text-fill-color: var(--text-guest-num); }

/* Code labels */
.code-label {
  font-family: 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 9px;
  text-anchor: middle;
}
.host-code { fill: var(--text-host-code); color: var(--text-host-code); -webkit-text-fill-color: var(--text-host-code); }
.guest-code { fill: var(--text-guest-code); color: var(--text-guest-code); -webkit-text-fill-color: var(--text-guest-code); }

/* Arrows */
.arrow { stroke: var(--arrow-color); stroke-width: 1px; fill: none; }
.match-arrow { stroke-dasharray: 4, 3; }

/* Note */
.note {
  fill: var(--text-note); color: var(--text-note); -webkit-text-fill-color: var(--text-note);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  text-anchor: middle;
  font-style: italic;
}

.marker-arrow { fill: var(--arrow-color); }
</style>

<style>
html:not(.dark) .ioo-diagram {
  --text-host-col: #444;
  --text-guest-col: #2a7a4a;
  --box-host-fill: #f7f9fc;
  --box-host-stroke: #4477aa;
  --box-guest-fill: #f7fcf7;
  --box-guest-stroke: #2a7a4a;
  --text-num: #111;
  --text-guest-num: #2a7a4a;
  --text-host-code: #111;
  --text-guest-code: #111;
  --text-note: #555;
  --arrow-color: #999;
  --hover-host-stroke: #3366aa;
  --hover-host-shadow: rgba(0,0,0,0.1);
  --hover-guest-stroke: #2a7a4a;
  --hover-guest-shadow: rgba(0,0,0,0.1);
}
</style>
