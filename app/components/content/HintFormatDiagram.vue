<template>
  <div class="hf-diagram">
    <svg width="100%" viewBox="0 0 440 240">

      <!-- Header row -->
      <g class="step">
        <rect class="box header-box" x="60" y="10" width="320" height="36" rx="4" ry="4"/>
        <text class="label header-text" x="220" y="26">Header (u64)</text>
        <text class="note header-note" x="220" y="40">1 value per hint request</text>
      </g>

      <!-- Split view of header -->
      <line class="arrow" x1="220" y1="46" x2="220" y2="60" marker-end="url(#hf-a)"/>

      <g class="step">
        <rect class="box code-box" x="60" y="62" width="155" height="32" rx="4" ry="4"/>
        <text class="label code-text" x="137" y="82">Hint Code (32 bits)</text>
      </g>
      <g class="step">
        <rect class="box code-box" x="225" y="62" width="155" height="32" rx="4" ry="4"/>
        <text class="label code-text" x="302" y="82">Length (32 bits)</text>
      </g>

      <!-- Annotations for hint code -->
      <text class="note" x="137" y="106">bit 31: pass-through flag</text>
      <text class="note" x="137" y="118">bits 0-30: hint type ID</text>

      <!-- Annotation for length -->
      <text class="note" x="302" y="106">payload size in bytes</text>
      <text class="note" x="302" y="118">last u64 may be padded</text>

      <!-- Data rows -->
      <line class="arrow" x1="220" y1="124" x2="220" y2="138" marker-end="url(#hf-a)"/>

      <g class="step data-step">
        <rect class="box data-box" x="60" y="140" width="320" height="28" rx="4" ry="4"/>
        <text class="label data-text" x="220" y="158">Data[0] (u64)</text>
      </g>

      <g class="step data-step">
        <rect class="box data-box" x="60" y="174" width="320" height="28" rx="4" ry="4"/>
        <text class="label data-text" x="220" y="192">Data[1] (u64)</text>
      </g>

      <text class="dots" x="220" y="214">...</text>

      <g class="step data-step">
        <rect class="box data-box" x="60" y="218" width="320" height="28" rx="4" ry="4"/>
        <text class="label data-text" x="220" y="236">Data[length-1] (u64)</text>
      </g>

      <!-- Bracket: data payload -->
      <line class="bracket" x1="48" y1="140" x2="48" y2="246"/>
      <line class="bracket" x1="48" y1="140" x2="54" y2="140"/>
      <line class="bracket" x1="48" y1="246" x2="54" y2="246"/>
      <text class="bracket-label" x="44" y="193" transform="rotate(-90,44,193)">payload</text>

      <!-- Size label -->
      <text class="size-note" x="400" y="193">N values</text>

      <defs>
        <marker id="hf-a" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-arrow"/>
        </marker>
      </defs>
    </svg>
  </div>
</template>

<style scoped>
.hf-diagram {
  --box-header-fill: #1a1f28;
  --box-header-stroke: #3a5577;
  --box-code-fill: #1a1f28;
  --box-code-stroke: #3a5577;
  --box-data-fill: #142814;
  --box-data-stroke: #4a8;
  --text-header: #99bbdd;
  --text-code: #99bbdd;
  --text-data: #8db88d;
  --text-note: #556;
  --text-header-note: #5577aa;
  --text-dots: #667;
  --text-bracket: #3a6a4a;
  --text-size-note: #3a6a4a;
  --bracket-color: #3a6a4a;
  --arrow-color: #556;
  --marker-color: #556;
  --hover-header-stroke: #77aadd;
  --hover-header-shadow: rgba(85,136,187,0.3);
  --hover-code-stroke: #77aadd;
  --hover-code-shadow: rgba(85,136,187,0.3);
  --hover-data-stroke: #6c6;
  --hover-data-shadow: rgba(68,170,136,0.3);
  max-width: 580px;
  margin: 1.5rem auto;
}
.hf-diagram svg { overflow: visible; }

.box { stroke-width: 1.5px; transition: stroke 0.2s ease, filter 0.2s ease; }
.header-box { fill: var(--box-header-fill); stroke: var(--box-header-stroke); }
.code-box { fill: var(--box-code-fill); stroke: var(--box-code-stroke); }
.data-box { fill: var(--box-data-fill); stroke: var(--box-data-stroke); }

.step { cursor: pointer; }
.step:hover .header-box { stroke: var(--hover-header-stroke); filter: drop-shadow(0 0 5px var(--hover-header-shadow)); }
.step:hover .code-box { stroke: var(--hover-code-stroke); filter: drop-shadow(0 0 5px var(--hover-code-shadow)); }
.data-step:hover .data-box { stroke: var(--hover-data-stroke); filter: drop-shadow(0 0 5px var(--hover-data-shadow)); }

.label {
  font-family: 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 9px;
  text-anchor: middle;
}
.header-text {
  fill: var(--text-header);
  color: var(--text-header);
  -webkit-text-fill-color: var(--text-header);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 12px;
  font-weight: 600;
}
.code-text {
  fill: var(--text-code);
  color: var(--text-code);
  -webkit-text-fill-color: var(--text-code);
}
.data-text {
  fill: var(--text-data);
  color: var(--text-data);
  -webkit-text-fill-color: var(--text-data);
}

.note {
  fill: var(--text-note);
  color: var(--text-note);
  -webkit-text-fill-color: var(--text-note);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  text-anchor: middle;
  font-style: italic;
}
.header-note {
  fill: var(--text-header-note);
  color: var(--text-header-note);
  -webkit-text-fill-color: var(--text-header-note);
}

.dots {
  fill: var(--text-dots);
  color: var(--text-dots);
  -webkit-text-fill-color: var(--text-dots);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 12px;
  text-anchor: middle;
}

.bracket { stroke: var(--bracket-color); stroke-width: 1px; fill: none; }
.bracket-label {
  fill: var(--text-bracket);
  color: var(--text-bracket);
  -webkit-text-fill-color: var(--text-bracket);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  text-anchor: middle;
  font-weight: 600;
}

.size-note {
  fill: var(--text-size-note);
  color: var(--text-size-note);
  -webkit-text-fill-color: var(--text-size-note);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  font-style: italic;
}

.arrow { stroke: var(--arrow-color); stroke-width: 1.5px; fill: none; }

.marker-arrow { fill: var(--marker-color); }
</style>

<style>
html:not(.dark) .hf-diagram {
  --box-header-fill: #f7f9fc;
  --box-header-stroke: #4477aa;
  --box-code-fill: #f7f9fc;
  --box-code-stroke: #4477aa;
  --box-data-fill: #f7fcf7;
  --box-data-stroke: #2a7a4a;
  --text-header: #111;
  --text-code: #111;
  --text-data: #111;
  --text-note: #555;
  --text-header-note: #444;
  --text-dots: #555;
  --text-bracket: #2a7a4a;
  --text-size-note: #2a7a4a;
  --bracket-color: #2a7a4a;
  --arrow-color: #999;
  --marker-color: #999;
  --hover-header-stroke: #3366aa;
  --hover-header-shadow: rgba(0,0,0,0.1);
  --hover-code-stroke: #3366aa;
  --hover-code-shadow: rgba(0,0,0,0.1);
  --hover-data-stroke: #2a7a4a;
  --hover-data-shadow: rgba(0,0,0,0.1);
}
</style>
