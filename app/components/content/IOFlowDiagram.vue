<template>
  <div class="iof-diagram">
    <svg width="100%" viewBox="0 0 620 200">

      <!-- Host writes (left) -->
      <g class="step">
        <rect class="box host" x="10" y="50" width="120" height="80" rx="4" ry="4"/>
        <text class="label host-text" x="70" y="72">Host writes</text>
        <text class="code" x="70" y="90">stdin.write(&amp;n)</text>
        <text class="code" x="70" y="103">stdin.write(&amp;data)</text>
        <text class="note" x="70" y="122">sequential, ordered</text>
      </g>

      <!-- Arrow -->
      <line class="arrow" x1="130" y1="90" x2="168" y2="90" marker-end="url(#iof-a)"/>

      <!-- Input buffer -->
      <g class="step">
        <rect class="box neutral" x="170" y="70" width="90" height="40" rx="4" ry="4"/>
        <text class="label neutral-text" x="215" y="94">input buffer</text>
      </g>

      <!-- Arrow -->
      <line class="arrow green-arrow" x1="260" y1="90" x2="298" y2="90" marker-end="url(#iof-a-green)"/>

      <!-- Guest (center) -->
      <g class="step">
        <rect class="box guest" x="300" y="30" width="120" height="120" rx="4" ry="4"/>
        <text class="label guest-text" x="360" y="55">Guest</text>
        <text class="code guest-code" x="360" y="75">io::read()</text>
        <text class="label guest-text" x="360" y="100">compute</text>
        <text class="code guest-code" x="360" y="120">io::commit()</text>
        <text class="note guest-note" x="360" y="142">ZisK VM</text>
      </g>

      <!-- Arrow -->
      <line class="arrow green-arrow" x1="420" y1="90" x2="458" y2="90" marker-end="url(#iof-a-green)"/>

      <!-- Public values -->
      <g class="step">
        <rect class="box proof" x="460" y="60" width="90" height="60" rx="4" ry="4"/>
        <text class="label proof-text" x="505" y="83">public</text>
        <text class="label proof-text" x="505" y="98">values</text>
        <text class="note proof-note" x="505" y="114">&le;256 bytes</text>
      </g>

      <!-- Arrow -->
      <line class="arrow" x1="505" y1="120" x2="505" y2="148" marker-end="url(#iof-a)"/>

      <!-- Host reads (bottom right) -->
      <g class="step">
        <rect class="box host" x="440" y="150" width="120" height="40" rx="4" ry="4"/>
        <text class="label host-text" x="500" y="166">Host reads</text>
        <text class="code" x="500" y="181">get_public_values()</text>
      </g>

      <!-- Column labels -->
      <text class="col-label host-col" x="70" y="38">private input</text>
      <text class="col-label guest-col" x="360" y="20">provable computation</text>
      <text class="col-label proof-col" x="505" y="48">public output</text>

      <defs>
        <marker id="iof-a" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-arrow"/>
        </marker>
        <marker id="iof-a-green" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-arrow-green"/>
        </marker>
      </defs>
    </svg>
  </div>
</template>

<style scoped>
.iof-diagram {
  --box-host-fill: #1a1f28;
  --box-host-stroke: #3a5577;
  --box-guest-fill: #142814;
  --box-guest-stroke: #4a8;
  --box-neutral-fill: #1a1a1e;
  --box-neutral-stroke: #555;
  --box-proof-fill: #142814;
  --box-proof-stroke: #4a8;
  --text-host: #99bbdd;
  --text-guest: #8d8;
  --text-neutral: #999;
  --text-proof: #8d8;
  --text-code: #5577aa;
  --text-guest-code: #5a8a5a;
  --text-note: #556;
  --text-guest-note: #3a6a4a;
  --text-proof-note: #3a6a4a;
  --text-host-col: #5577aa;
  --text-guest-col: #4a8;
  --text-proof-col: #4a8;
  --arrow-color: #556;
  --green-arrow-color: #3a6a4a;
  --hover-host-stroke: #77aadd;
  --hover-host-shadow: rgba(85,136,187,0.3);
  --hover-guest-stroke: #6c6;
  --hover-guest-shadow: rgba(68,170,136,0.3);
  --hover-neutral-stroke: #888;
  --hover-proof-stroke: #6c6;
  --hover-proof-shadow: rgba(68,170,136,0.3);

  max-width: 740px;
  margin: 1.5rem auto;
}
.iof-diagram svg { overflow: visible; }

.box { stroke-width: 1.5px; transition: stroke 0.2s ease, filter 0.2s ease; }
.host { fill: var(--box-host-fill); stroke: var(--box-host-stroke); }
.guest { fill: var(--box-guest-fill); stroke: var(--box-guest-stroke); }
.neutral { fill: var(--box-neutral-fill); stroke: var(--box-neutral-stroke); }
.proof { fill: var(--box-proof-fill); stroke: var(--box-proof-stroke); }

.step { cursor: pointer; }
.step:hover .host { stroke: var(--hover-host-stroke); filter: drop-shadow(0 0 5px var(--hover-host-shadow)); }
.step:hover .guest { stroke: var(--hover-guest-stroke); filter: drop-shadow(0 0 5px var(--hover-guest-shadow)); }
.step:hover .neutral { stroke: var(--hover-neutral-stroke); }
.step:hover .proof { stroke: var(--hover-proof-stroke); filter: drop-shadow(0 0 5px var(--hover-proof-shadow)); }

.label {
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 12px;
  font-weight: 500;
  text-anchor: middle;
}
.host-text { fill: var(--text-host); color: var(--text-host); -webkit-text-fill-color: var(--text-host); }
.guest-text { fill: var(--text-guest); color: var(--text-guest); -webkit-text-fill-color: var(--text-guest); }
.neutral-text { fill: var(--text-neutral); color: var(--text-neutral); -webkit-text-fill-color: var(--text-neutral); }
.proof-text { fill: var(--text-proof); color: var(--text-proof); -webkit-text-fill-color: var(--text-proof); }

.code {
  fill: var(--text-code);
  color: var(--text-code);
  -webkit-text-fill-color: var(--text-code);
  font-family: 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 9px;
  text-anchor: middle;
}
.guest-code { fill: var(--text-guest-code); color: var(--text-guest-code); -webkit-text-fill-color: var(--text-guest-code); }

.note {
  fill: var(--text-note);
  color: var(--text-note);
  -webkit-text-fill-color: var(--text-note);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  text-anchor: middle;
  font-style: italic;
}
.guest-note { fill: var(--text-guest-note); color: var(--text-guest-note); -webkit-text-fill-color: var(--text-guest-note); }
.proof-note { fill: var(--text-proof-note); color: var(--text-proof-note); -webkit-text-fill-color: var(--text-proof-note); }

.col-label {
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 10px;
  font-weight: 600;
  text-anchor: middle;
  letter-spacing: 0.5px;
}
.host-col { fill: var(--text-host-col); color: var(--text-host-col); -webkit-text-fill-color: var(--text-host-col); }
.guest-col { fill: var(--text-guest-col); color: var(--text-guest-col); -webkit-text-fill-color: var(--text-guest-col); }
.proof-col { fill: var(--text-proof-col); color: var(--text-proof-col); -webkit-text-fill-color: var(--text-proof-col); }

.arrow { stroke: var(--arrow-color); stroke-width: 1.5px; fill: none; }
.green-arrow { stroke: var(--green-arrow-color); }

.marker-arrow { fill: var(--arrow-color); }
.marker-arrow-green { fill: var(--green-arrow-color); }
</style>

<style>
html:not(.dark) .iof-diagram {
  --box-host-fill: #f7f9fc;
  --box-host-stroke: #4477aa;
  --box-guest-fill: #f7fcf7;
  --box-guest-stroke: #2a7a4a;
  --box-neutral-fill: #f5f5f7;
  --box-neutral-stroke: #aaa;
  --box-proof-fill: #f7fcf7;
  --box-proof-stroke: #2a7a4a;
  --text-host: #111;
  --text-guest: #111;
  --text-neutral: #111;
  --text-proof: #111;
  --text-code: #111;
  --text-guest-code: #111;
  --text-note: #555;
  --text-guest-note: #555;
  --text-proof-note: #555;
  --text-host-col: #111;
  --text-guest-col: #111;
  --text-proof-col: #111;
  --arrow-color: #999;
  --green-arrow-color: #2a7a4a;
  --hover-host-stroke: #3366aa;
  --hover-host-shadow: rgba(0,0,0,0.1);
  --hover-guest-stroke: #2a7a4a;
  --hover-guest-shadow: rgba(0,0,0,0.1);
  --hover-neutral-stroke: #999;
  --hover-proof-stroke: #2a7a4a;
  --hover-proof-shadow: rgba(0,0,0,0.1);
}
</style>
