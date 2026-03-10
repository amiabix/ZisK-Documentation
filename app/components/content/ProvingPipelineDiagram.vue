<template>
  <div class="pp-diagram">
    <svg width="100%" viewBox="0 0 520 340">

      <!-- Row 1: ELF + stdin → VM execution -->
      <g class="step">
        <rect class="box top" x="30" y="10" width="120" height="36" rx="4" ry="4"/>
        <text class="label top-text" x="90" y="32">ELF binary</text>
      </g>
      <line class="arrow" x1="150" y1="28" x2="178" y2="28" marker-end="url(#pp-a)"/>

      <g class="step">
        <rect class="box mid" x="180" y="4" width="160" height="48" rx="4" ry="4"/>
        <text class="label mid-text" x="260" y="25">VM execution</text>
        <text class="input-label" x="260" y="42">+ stdin</text>
      </g>

      <!-- Single arrow down -->
      <line class="arrow" x1="260" y1="52" x2="260" y2="76" marker-end="url(#pp-a)"/>

      <!-- Row 2: execution trace -->
      <g class="step">
        <rect class="box mid" x="180" y="78" width="160" height="36" rx="4" ry="4"/>
        <text class="label mid-text" x="260" y="100">execution trace</text>
      </g>

      <!-- Single arrow down to split point -->
      <line class="arrow" x1="260" y1="114" x2="260" y2="134" marker-end="url(#pp-a)"/>

      <!-- Horizontal bracket line -->
      <line class="arrow bracket" x1="65" y1="138" x2="455" y2="138"/>
      <!-- Vertical taps down from bracket to each state machine -->
      <line class="arrow" x1="65" y1="138" x2="65" y2="154" marker-end="url(#pp-a)"/>
      <line class="arrow" x1="195" y1="138" x2="195" y2="154" marker-end="url(#pp-a)"/>
      <line class="arrow" x1="325" y1="138" x2="325" y2="154" marker-end="url(#pp-a)"/>
      <line class="arrow" x1="455" y1="138" x2="455" y2="154" marker-end="url(#pp-a)"/>

      <!-- Row 3: State machines -->
      <g class="step sm">
        <rect class="box sm-box" x="15" y="156" width="100" height="32" rx="4" ry="4"/>
        <text class="sm-label" x="65" y="176">arithmetic</text>
      </g>
      <g class="step sm">
        <rect class="box sm-box" x="145" y="156" width="100" height="32" rx="4" ry="4"/>
        <text class="sm-label" x="195" y="176">memory</text>
      </g>
      <g class="step sm">
        <rect class="box sm-box" x="275" y="156" width="100" height="32" rx="4" ry="4"/>
        <text class="sm-label" x="325" y="176">binary ops</text>
      </g>
      <g class="step sm">
        <rect class="box sm-box" x="405" y="156" width="100" height="32" rx="4" ry="4"/>
        <text class="sm-label" x="455" y="176">...</text>
      </g>

      <text class="section-label" x="260" y="206">each proven independently</text>

      <!-- Vertical taps up from each state machine to collect bracket -->
      <line class="arrow" x1="65" y1="188" x2="65" y2="216" marker-end="url(#pp-a-green)"/>
      <line class="arrow" x1="195" y1="188" x2="195" y2="216" marker-end="url(#pp-a-green)"/>
      <line class="arrow" x1="325" y1="188" x2="325" y2="216" marker-end="url(#pp-a-green)"/>
      <line class="arrow" x1="455" y1="188" x2="455" y2="216" marker-end="url(#pp-a-green)"/>
      <!-- Collect bracket -->
      <line class="arrow bracket" x1="65" y1="220" x2="455" y2="220"/>

      <!-- Single arrow down to combine -->
      <line class="arrow" x1="260" y1="220" x2="260" y2="244" marker-end="url(#pp-a-green)"/>

      <!-- Row 4: combine proofs -->
      <g class="step">
        <rect class="box mid" x="180" y="246" width="160" height="36" rx="4" ry="4"/>
        <text class="label mid-text" x="260" y="268">combine proofs</text>
      </g>

      <!-- Arrow down to final -->
      <line class="arrow" x1="260" y1="282" x2="260" y2="298" marker-end="url(#pp-a-green)"/>

      <!-- Row 5: VADCOP STARK proof -->
      <g class="step final-step">
        <rect class="box final" x="140" y="300" width="240" height="40" rx="4" ry="4"/>
        <text class="label final-label" x="260" y="318">VADCOP STARK proof</text>
        <text class="pub-label" x="260" y="334">+ public values</text>
      </g>

      <defs>
        <marker id="pp-a" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-arrow"/>
        </marker>
        <marker id="pp-a-green" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-green"/>
        </marker>
      </defs>
    </svg>
  </div>
</template>

<style scoped>
.pp-diagram {
  --box-top-fill: #1a1a1e;
  --box-top-stroke: #555;
  --box-mid-fill: #1a1f28;
  --box-mid-stroke: #3a5577;
  --box-sm-fill: #1e2230;
  --box-final-fill: #142814;
  --box-final-stroke: #4a8;
  --text-top: #aaa;
  --text-mid: #99bbdd;
  --text-final: #8d8;
  --text-sm: #8899aa;
  --text-section: #556;
  --text-input: #888;
  --text-pub: #5a8a5a;
  --arrow-color: #556;
  --arrow-green: #4a8;
  --hover-mid-stroke: #77aadd;
  --hover-top-stroke: #888;
  --hover-final-stroke: #6c6;

  max-width: 480px;
  margin: 1.5rem auto;
}
.pp-diagram svg { overflow: visible; }

.box { stroke-width: 1.5px; transition: stroke 0.2s ease, filter 0.2s ease; }
.top { fill: var(--box-top-fill); stroke: var(--box-top-stroke); }
.mid { fill: var(--box-mid-fill); stroke: var(--box-mid-stroke); }
.sm-box { fill: var(--box-sm-fill); stroke: var(--box-mid-stroke); }
.final { fill: var(--box-final-fill); stroke: var(--box-final-stroke); }

.step { cursor: pointer; }
.step:hover .mid { stroke: var(--hover-mid-stroke); filter: drop-shadow(0 0 5px rgba(85,136,187,0.3)); }
.step:hover .top { stroke: var(--hover-top-stroke); }
.sm:hover .sm-box { stroke: var(--hover-mid-stroke); filter: drop-shadow(0 0 5px rgba(85,136,187,0.3)); }
.final-step:hover .final { stroke: var(--hover-final-stroke); filter: drop-shadow(0 0 8px rgba(68,170,136,0.4)); }

.label {
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 12px;
  font-weight: 600;
  text-anchor: middle;
}
.top-text { fill: var(--text-top); color: var(--text-top); -webkit-text-fill-color: var(--text-top); }
.mid-text { fill: var(--text-mid); color: var(--text-mid); -webkit-text-fill-color: var(--text-mid); }
.final-label { fill: var(--text-final); color: var(--text-final); -webkit-text-fill-color: var(--text-final); }

.sm-label {
  fill: var(--text-sm);
  color: var(--text-sm);
  -webkit-text-fill-color: var(--text-sm);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 10px;
  text-anchor: middle;
}

.section-label {
  fill: var(--text-section);
  color: var(--text-section);
  -webkit-text-fill-color: var(--text-section);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  text-anchor: middle;
  font-style: italic;
}

.arrow { stroke: var(--arrow-color); stroke-width: 1.5px; fill: none; }
.bracket { stroke-width: 1px; }
.input-arrow { stroke: var(--arrow-color); stroke-width: 1px; fill: none; stroke-dasharray: 4, 3; }
.input-label {
  fill: var(--text-input);
  color: var(--text-input);
  -webkit-text-fill-color: var(--text-input);
  font-family: 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 10px;
  text-anchor: middle;
}
.pub-label {
  fill: var(--text-pub);
  color: var(--text-pub);
  -webkit-text-fill-color: var(--text-pub);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  text-anchor: middle;
  font-style: italic;
}

.marker-arrow { fill: var(--arrow-color); }
.marker-green { fill: var(--arrow-green); }

</style>

<style>
/* ── Light mode ── */
html:not(.dark) .pp-diagram {
  --box-top-fill: #f5f5f7;
  --box-top-stroke: #aaa;
  --box-mid-fill: #f7f9fc;
  --box-mid-stroke: #4477aa;
  --box-sm-fill: #f7f9fc;
  --box-final-fill: #f7fcf7;
  --box-final-stroke: #2a7a4a;
  --text-top: #111;
  --text-mid: #111;
  --text-final: #111;
  --text-sm: #111;
  --text-section: #444;
  --text-input: #111;
  --text-pub: #222;
  --arrow-color: #999;
  --arrow-green: #2a7a4a;
  --hover-mid-stroke: #2255aa;
  --hover-top-stroke: #777;
  --hover-final-stroke: #1a6a3a;
}
</style>
