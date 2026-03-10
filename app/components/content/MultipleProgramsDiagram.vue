<template>
  <div class="mp-diagram">
    <svg width="100%" viewBox="0 0 880 230">

      <!-- ProverClient singleton -->
      <g class="step">
        <rect class="box client" x="10" y="86" width="130" height="56" rx="5" ry="5"/>
        <text class="label client-text" x="75" y="108">ProverClient</text>
        <text class="note client-note" x="75" y="122">singleton</text>
      </g>

      <!-- Arrow to setup -->
      <line class="arrow" x1="140" y1="114" x2="178" y2="114" marker-end="url(#mp-a)"/>
      <text class="edge-label" x="159" y="106">.setup()</text>

      <!-- Setup fan to two programs -->
      <g class="step">
        <rect class="box host" x="180" y="86" width="100" height="56" rx="5" ry="5"/>
        <text class="label host-text" x="230" y="108">setup</text>
        <text class="note" x="230" y="122">per ELF</text>
      </g>

      <!-- Fan out to Program 1 and Program 2 -->
      <line class="arrow fan-arrow" x1="280" y1="100" x2="338" y2="52" marker-end="url(#mp-a-blue)"/>
      <text class="fan-label" x="300" y="66">ELF 1</text>
      <line class="arrow fan-arrow" x1="280" y1="128" x2="338" y2="176" marker-end="url(#mp-a-blue)"/>
      <text class="fan-label" x="300" y="164">ELF 2</text>

      <!-- Program 1 row -->
      <g class="step guest-step">
        <rect class="box guest" x="340" y="22" width="120" height="56" rx="5" ry="5"/>
        <text class="label guest-text" x="400" y="44">guest 1</text>
        <text class="code guest-code" x="400" y="58">fibonacci-guest</text>
        <text class="note guest-note" x="400" y="72">pk, vk</text>
      </g>

      <line class="arrow" x1="460" y1="50" x2="528" y2="50" marker-end="url(#mp-a)"/>
      <text class="edge-label" x="494" y="42">.prove()</text>

      <g class="step">
        <rect class="box proof" x="530" y="28" width="110" height="44" rx="5" ry="5"/>
        <text class="label proof-text" x="585" y="48">proof 1</text>
        <text class="note proof-note" x="585" y="62">+ publics</text>
      </g>

      <line class="arrow" x1="640" y1="50" x2="708" y2="50" marker-end="url(#mp-a)"/>
      <text class="edge-label" x="674" y="42">.verify()</text>

      <g class="step">
        <rect class="box verify" x="710" y="32" width="60" height="36" rx="4" ry="4"/>
        <text class="label verify-text" x="740" y="54">&#x2713;</text>
      </g>

      <!-- Program 2 row -->
      <g class="step guest-step">
        <rect class="box guest" x="340" y="148" width="120" height="56" rx="5" ry="5"/>
        <text class="label guest-text" x="400" y="170">guest 2</text>
        <text class="code guest-code" x="400" y="184">fibonacci-guest-2</text>
        <text class="note guest-note" x="400" y="198">pk2, vk2</text>
      </g>

      <line class="arrow" x1="460" y1="176" x2="528" y2="176" marker-end="url(#mp-a)"/>
      <text class="edge-label" x="494" y="168">.prove()</text>

      <g class="step">
        <rect class="box proof" x="530" y="154" width="110" height="44" rx="5" ry="5"/>
        <text class="label proof-text" x="585" y="174">proof 2</text>
        <text class="note proof-note" x="585" y="188">+ publics</text>
      </g>

      <line class="arrow" x1="640" y1="176" x2="708" y2="176" marker-end="url(#mp-a)"/>
      <text class="edge-label" x="674" y="168">.verify()</text>

      <g class="step">
        <rect class="box verify" x="710" y="158" width="60" height="36" rx="4" ry="4"/>
        <text class="label verify-text" x="740" y="180">&#x2713;</text>
      </g>

      <!-- Dashed box around both rows to show independence -->
      <rect class="independent" x="330" y="12" width="452" height="210" rx="6" ry="6"/>
      <text class="independent-label" x="556" y="230">independent proofs</text>

      <defs>
        <marker id="mp-a" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-arrow"/>
        </marker>
        <marker id="mp-a-blue" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-blue"/>
        </marker>
      </defs>
    </svg>
  </div>
</template>

<style scoped>
.mp-diagram {
  --box-client-fill: #1a1a1e;
  --box-client-stroke: #555;
  --box-host-fill: #1a1f28;
  --box-host-stroke: #3a5577;
  --box-guest-fill: #142814;
  --box-guest-stroke: #4a8;
  --box-proof-fill: #142814;
  --box-proof-stroke: #4a8;
  --box-verify-fill: #1a1a1e;
  --box-verify-stroke: #555;
  --text-client: #ccc;
  --text-host: #99bbdd;
  --text-guest: #8d8;
  --text-proof: #8d8;
  --text-verify: #888;
  --text-guest-code: #5a8a5a;
  --text-note: #556;
  --text-client-note: #777;
  --text-guest-note: #3a6a4a;
  --text-proof-note: #3a6a4a;
  --text-edge: #888;
  --text-fan: #6688aa;
  --text-independent: #555;
  --arrow-color: #556;
  --fan-arrow-color: #3a5577;
  --independent-stroke: #333;
  --marker-color: #556;
  --marker-blue-color: #3a5577;
  --hover-client-stroke: #888;
  --hover-host-stroke: #77aadd;
  --hover-host-shadow: rgba(85,136,187,0.3);
  --hover-guest-stroke: #6c6;
  --hover-guest-shadow: rgba(68,170,136,0.3);
  --hover-proof-stroke: #6c6;
  --hover-proof-shadow: rgba(68,170,136,0.3);
  --hover-verify-stroke: #888;
  max-width: 780px;
  margin: 1.5rem auto;
}
.mp-diagram svg { overflow: visible; }

.box { stroke-width: 1.5px; transition: stroke 0.2s ease, filter 0.2s ease; }
.client { fill: var(--box-client-fill); stroke: var(--box-client-stroke); }
.host { fill: var(--box-host-fill); stroke: var(--box-host-stroke); }
.guest { fill: var(--box-guest-fill); stroke: var(--box-guest-stroke); }
.proof { fill: var(--box-proof-fill); stroke: var(--box-proof-stroke); }
.verify { fill: var(--box-verify-fill); stroke: var(--box-verify-stroke); }

.step { cursor: pointer; }
.step:hover .client { stroke: var(--hover-client-stroke); }
.step:hover .host { stroke: var(--hover-host-stroke); filter: drop-shadow(0 0 5px var(--hover-host-shadow)); }
.guest-step:hover .guest { stroke: var(--hover-guest-stroke); filter: drop-shadow(0 0 5px var(--hover-guest-shadow)); }
.step:hover .proof { stroke: var(--hover-proof-stroke); filter: drop-shadow(0 0 5px var(--hover-proof-shadow)); }
.step:hover .verify { stroke: var(--hover-verify-stroke); }

.label {
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 12px;
  font-weight: 600;
  text-anchor: middle;
}
.client-text { fill: var(--text-client); color: var(--text-client); -webkit-text-fill-color: var(--text-client); }
.host-text { fill: var(--text-host); color: var(--text-host); -webkit-text-fill-color: var(--text-host); }
.guest-text { fill: var(--text-guest); color: var(--text-guest); -webkit-text-fill-color: var(--text-guest); }
.proof-text { fill: var(--text-proof); color: var(--text-proof); -webkit-text-fill-color: var(--text-proof); }
.verify-text {
  fill: var(--text-verify);
  color: var(--text-verify);
  -webkit-text-fill-color: var(--text-verify);
  font-size: 14px;
}

.code {
  font-family: 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 9px;
  text-anchor: middle;
}
.guest-code {
  fill: var(--text-guest-code);
  color: var(--text-guest-code);
  -webkit-text-fill-color: var(--text-guest-code);
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
.client-note {
  fill: var(--text-client-note);
  color: var(--text-client-note);
  -webkit-text-fill-color: var(--text-client-note);
}
.guest-note {
  fill: var(--text-guest-note);
  color: var(--text-guest-note);
  -webkit-text-fill-color: var(--text-guest-note);
}
.proof-note {
  fill: var(--text-proof-note);
  color: var(--text-proof-note);
  -webkit-text-fill-color: var(--text-proof-note);
}

.edge-label {
  fill: var(--text-edge);
  color: var(--text-edge);
  -webkit-text-fill-color: var(--text-edge);
  font-family: 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 9px;
  text-anchor: middle;
}

.arrow { stroke: var(--arrow-color); stroke-width: 1.5px; fill: none; }
.fan-arrow { stroke: var(--fan-arrow-color); }
.fan-label {
  fill: var(--text-fan);
  color: var(--text-fan);
  -webkit-text-fill-color: var(--text-fan);
  font-family: 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 9px;
  text-anchor: middle;
  font-weight: 600;
}

.independent {
  fill: none;
  stroke: var(--independent-stroke);
  stroke-width: 1px;
  stroke-dasharray: 6, 3;
}
.independent-label {
  fill: var(--text-independent);
  color: var(--text-independent);
  -webkit-text-fill-color: var(--text-independent);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  text-anchor: middle;
  font-style: italic;
}

.marker-arrow { fill: var(--marker-color); }
.marker-blue { fill: var(--marker-blue-color); }
</style>

<style>
html:not(.dark) .mp-diagram {
  --box-client-fill: #f5f5f7;
  --box-client-stroke: #aaa;
  --box-host-fill: #f7f9fc;
  --box-host-stroke: #4477aa;
  --box-guest-fill: #f7fcf7;
  --box-guest-stroke: #2a7a4a;
  --box-proof-fill: #f7fcf7;
  --box-proof-stroke: #2a7a4a;
  --box-verify-fill: #f5f5f7;
  --box-verify-stroke: #aaa;
  --text-client: #111;
  --text-host: #111;
  --text-guest: #111;
  --text-proof: #111;
  --text-verify: #444;
  --text-guest-code: #111;
  --text-note: #555;
  --text-client-note: #555;
  --text-guest-note: #2a7a4a;
  --text-proof-note: #2a7a4a;
  --text-edge: #555;
  --text-fan: #111;
  --text-independent: #555;
  --arrow-color: #999;
  --fan-arrow-color: #4477aa;
  --independent-stroke: #ddd;
  --marker-color: #999;
  --marker-blue-color: #4477aa;
  --hover-client-stroke: #888;
  --hover-host-stroke: #3366aa;
  --hover-host-shadow: rgba(0,0,0,0.1);
  --hover-guest-stroke: #2a7a4a;
  --hover-guest-shadow: rgba(0,0,0,0.1);
  --hover-proof-stroke: #2a7a4a;
  --hover-proof-shadow: rgba(0,0,0,0.1);
  --hover-verify-stroke: #888;
}
</style>
