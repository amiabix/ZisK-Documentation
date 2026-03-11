<template>
  <div class="td-diagram">
    <svg width="100%" viewBox="0 0 420 220">

      <!-- Visible region (left) -->
      <g class="region visible-region">
        <rect class="region-box visible-box" x="10" y="10" width="190" height="200" rx="6" ry="6"/>
        <text class="region-title visible-title" x="105" y="34">Verifier sees</text>

        <rect class="item-box visible-item" x="28" y="50" width="154" height="30" rx="3" ry="3"/>
        <text class="item-text" x="105" y="69">guest program (ELF)</text>

        <rect class="item-box visible-item" x="28" y="90" width="154" height="30" rx="3" ry="3"/>
        <text class="item-text" x="105" y="109">public values</text>

        <rect class="item-box visible-item" x="28" y="130" width="154" height="30" rx="3" ry="3"/>
        <text class="item-text" x="105" y="149">proof</text>

        <text class="region-note" x="105" y="184">trusted</text>
        <text class="region-note" x="105" y="198">verified mathematically</text>
      </g>

      <!-- Divider -->
      <line class="divider" x1="210" y1="20" x2="210" y2="200" stroke-dasharray="4,3"/>

      <!-- Invisible region (right) -->
      <g class="region invisible-region">
        <rect class="region-box invisible-box" x="220" y="10" width="190" height="200" rx="6" ry="6"/>
        <text class="region-title invisible-title" x="315" y="34">Verifier does not see</text>

        <rect class="item-box invisible-item" x="238" y="50" width="154" height="30" rx="3" ry="3"/>
        <text class="item-text inv-text" x="315" y="69">host program</text>

        <rect class="item-box invisible-item" x="238" y="90" width="154" height="30" rx="3" ry="3"/>
        <text class="item-text inv-text" x="315" y="109">data sources</text>

        <rect class="item-box invisible-item" x="238" y="130" width="154" height="30" rx="3" ry="3"/>
        <text class="item-text inv-text" x="315" y="149">proof strategy</text>

        <text class="region-note inv-note" x="315" y="184">untrusted</text>
        <text class="region-note inv-note" x="315" y="198">not part of the proof</text>
      </g>

      <defs/>
    </svg>
  </div>
</template>

<style scoped>
.td-diagram {
  --box-visible-fill: #142814;
  --box-visible-stroke: #4a8;
  --box-invisible-fill: #1a1a1e;
  --box-invisible-stroke: #444;
  --item-visible-fill: #1a2e1a;
  --item-visible-stroke: #3a6a3a;
  --item-invisible-fill: #1e1e22;
  --item-invisible-stroke: #3a3a3e;
  --text-visible-title: #8d8;
  --text-invisible-title: #999;
  --text-item: #8db88d;
  --text-inv-item: #888;
  --text-region-note: #4a6a4a;
  --text-inv-note: #555;
  --divider-color: #333;
  --hover-visible-stroke: #6c6;
  --hover-visible-shadow: rgba(68,170,136,0.35);
  --hover-invisible-stroke: #777;
  --hover-invisible-shadow: rgba(100,100,100,0.25);

  max-width: 525px;
  margin: 1.5rem auto;
}
.td-diagram svg { overflow: visible; }

/* Regions */
.region-box { stroke-width: 1.5px; transition: stroke 0.2s ease, filter 0.2s ease; }
.visible-box { fill: var(--box-visible-fill); stroke: var(--box-visible-stroke); }
.invisible-box { fill: var(--box-invisible-fill); stroke: var(--box-invisible-stroke); }

.region { cursor: pointer; }
.visible-region:hover .visible-box { stroke: var(--hover-visible-stroke); filter: drop-shadow(0 0 6px var(--hover-visible-shadow)); }
.invisible-region:hover .invisible-box { stroke: var(--hover-invisible-stroke); filter: drop-shadow(0 0 5px var(--hover-invisible-shadow)); }

.region-title {
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 12px;
  font-weight: 600;
  text-anchor: middle;
}
.visible-title { fill: var(--text-visible-title); color: var(--text-visible-title); -webkit-text-fill-color: var(--text-visible-title); }
.invisible-title { fill: var(--text-invisible-title); color: var(--text-invisible-title); -webkit-text-fill-color: var(--text-invisible-title); }

/* Items */
.item-box { stroke-width: 1px; }
.visible-item { fill: var(--item-visible-fill); stroke: var(--item-visible-stroke); }
.invisible-item { fill: var(--item-invisible-fill); stroke: var(--item-invisible-stroke); }

.item-text {
  fill: var(--text-item);
  color: var(--text-item);
  -webkit-text-fill-color: var(--text-item);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 10px;
  text-anchor: middle;
}
.inv-text { fill: var(--text-inv-item); color: var(--text-inv-item); -webkit-text-fill-color: var(--text-inv-item); }

/* Notes */
.region-note {
  fill: var(--text-region-note);
  color: var(--text-region-note);
  -webkit-text-fill-color: var(--text-region-note);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  text-anchor: middle;
  font-style: italic;
}
.inv-note { fill: var(--text-inv-note); color: var(--text-inv-note); -webkit-text-fill-color: var(--text-inv-note); }

/* Divider */
.divider { stroke: var(--divider-color); stroke-width: 1px; }
</style>

<style>
html:not(.dark) .td-diagram {
  --box-visible-fill: #f7fcf7;
  --box-visible-stroke: #2a7a4a;
  --box-invisible-fill: #f5f5f7;
  --box-invisible-stroke: #aaa;
  --item-visible-fill: #ddf0dd;
  --item-visible-stroke: #2a7a4a;
  --item-invisible-fill: #f0f0f2;
  --item-invisible-stroke: #aaa;
  --text-visible-title: #111;
  --text-invisible-title: #444;
  --text-item: #111;
  --text-inv-item: #444;
  --text-region-note: #555;
  --text-inv-note: #555;
  --divider-color: #ddd;
  --hover-visible-stroke: #2a7a4a;
  --hover-visible-shadow: rgba(0,0,0,0.1);
  --hover-invisible-stroke: #999;
  --hover-invisible-shadow: rgba(0,0,0,0.1);
}
</style>
