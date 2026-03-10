<template>
  <div class="ov-diagram">
    <svg width="100%" viewBox="0 0 620 220">

      <!-- Rust Host (left) -->
      <g class="step">
        <rect class="box host" x="10" y="50" width="140" height="100" rx="4" ry="4"/>
        <text class="label host-text" x="80" y="72">Rust Host</text>
        <text class="code host-code" x="80" y="92">prove(&pk, stdin)</text>
        <text class="code host-code" x="80" y="106">.plonk().run()?</text>
        <text class="note" x="80" y="130">generates proof +</text>
        <text class="note" x="80" y="142">extracts public values</text>
      </g>

      <!-- Arrow: proof bytes -->
      <line class="arrow" x1="150" y1="80" x2="228" y2="80" marker-end="url(#ov-a)"/>
      <text class="arrow-label" x="189" y="72">proof bytes</text>

      <!-- Arrow: public values hash -->
      <line class="arrow" x1="150" y1="120" x2="228" y2="120" marker-end="url(#ov-a)"/>
      <text class="arrow-label" x="189" y="112">programVK + publicValues</text>

      <!-- Solidity Verifier (center) -->
      <g class="step verifier-step">
        <rect class="box verifier" x="230" y="40" width="180" height="120" rx="5" ry="5"/>
        <text class="label verifier-text" x="320" y="64">Solidity Verifier</text>

        <rect class="inner-box" x="250" y="76" width="140" height="24" rx="3" ry="3"/>
        <text class="inner-text" x="320" y="92">hashPublicValues()</text>

        <rect class="inner-box" x="250" y="108" width="140" height="24" rx="3" ry="3"/>
        <text class="inner-text" x="320" y="124">verifyProof()</text>

        <text class="verifier-note" x="320" y="150">reverts if invalid</text>
      </g>

      <!-- Arrow: result -->
      <line class="arrow green-arrow" x1="410" y1="100" x2="458" y2="100" marker-end="url(#ov-a-green)"/>

      <!-- On-chain result (right) -->
      <g class="step result-step">
        <rect class="box result" x="460" y="55" width="150" height="90" rx="4" ry="4"/>
        <text class="label result-text" x="535" y="80">On-Chain Result</text>
        <text class="result-ok" x="535" y="102">success: proof valid</text>
        <text class="result-fail" x="535" y="118">revert: InvalidProof()</text>
        <text class="note result-note" x="535" y="138">constant gas cost</text>
      </g>

      <!-- Labels -->
      <text class="col-label host-col" x="80" y="38">off-chain</text>
      <text class="col-label chain-col" x="320" y="28">on-chain (EVM)</text>

      <!-- Separator -->
      <line class="separator" x1="218" y1="18" x2="218" y2="170"/>

      <defs>
        <marker id="ov-a" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-arrow"/>
        </marker>
        <marker id="ov-a-green" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-arrow-green"/>
        </marker>
      </defs>
    </svg>
  </div>
</template>

<style scoped>
.ov-diagram {
  --box-host-fill: #1a1f28;
  --box-host-stroke: #3a5577;
  --box-verifier-fill: #1a1a1e;
  --box-verifier-stroke: #555;
  --box-result-fill: #142814;
  --box-result-stroke: #4a8;
  --inner-box-fill: #222226;
  --inner-box-stroke: #444;
  --text-host: #99bbdd;
  --text-verifier: #bbb;
  --text-result: #8d8;
  --text-host-code: #5577aa;
  --text-note: #556;
  --text-result-note: #3a6a4a;
  --text-inner: #999;
  --text-verifier-note: #666;
  --text-result-ok: #5a8a5a;
  --text-result-fail: #885555;
  --text-arrow-label: #667;
  --text-host-col: #5577aa;
  --text-chain-col: #888;
  --separator-color: #333;
  --arrow-color: #556;
  --green-arrow-color: #3a6a4a;
  --hover-host-stroke: #77aadd;
  --hover-host-shadow: rgba(85,136,187,0.3);
  --hover-verifier-stroke: #888;
  --hover-verifier-shadow: rgba(100,100,100,0.25);
  --hover-result-stroke: #6c6;
  --hover-result-shadow: rgba(68,170,136,0.3);

  max-width: 740px;
  margin: 1.5rem auto;
}
.ov-diagram svg { overflow: visible; }

.box { stroke-width: 1.5px; transition: stroke 0.2s ease, filter 0.2s ease; }
.host { fill: var(--box-host-fill); stroke: var(--box-host-stroke); }
.verifier { fill: var(--box-verifier-fill); stroke: var(--box-verifier-stroke); }
.result { fill: var(--box-result-fill); stroke: var(--box-result-stroke); }

.step { cursor: pointer; }
.step:hover .host { stroke: var(--hover-host-stroke); filter: drop-shadow(0 0 5px var(--hover-host-shadow)); }
.verifier-step:hover .verifier { stroke: var(--hover-verifier-stroke); filter: drop-shadow(0 0 5px var(--hover-verifier-shadow)); }
.result-step:hover .result { stroke: var(--hover-result-stroke); filter: drop-shadow(0 0 6px var(--hover-result-shadow)); }

.label {
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 12px;
  font-weight: 600;
  text-anchor: middle;
}
.host-text { fill: var(--text-host); color: var(--text-host); -webkit-text-fill-color: var(--text-host); }
.verifier-text { fill: var(--text-verifier); color: var(--text-verifier); -webkit-text-fill-color: var(--text-verifier); }
.result-text { fill: var(--text-result); color: var(--text-result); -webkit-text-fill-color: var(--text-result); }

.code {
  font-family: 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 9px;
  text-anchor: middle;
}
.host-code { fill: var(--text-host-code); color: var(--text-host-code); -webkit-text-fill-color: var(--text-host-code); }

.note {
  fill: var(--text-note);
  color: var(--text-note);
  -webkit-text-fill-color: var(--text-note);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  text-anchor: middle;
  font-style: italic;
}
.result-note { fill: var(--text-result-note); color: var(--text-result-note); -webkit-text-fill-color: var(--text-result-note); }

.inner-box { fill: var(--inner-box-fill); stroke: var(--inner-box-stroke); stroke-width: 1px; }
.inner-text {
  fill: var(--text-inner);
  color: var(--text-inner);
  -webkit-text-fill-color: var(--text-inner);
  font-family: 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 9px;
  text-anchor: middle;
}

.verifier-note {
  fill: var(--text-verifier-note);
  color: var(--text-verifier-note);
  -webkit-text-fill-color: var(--text-verifier-note);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  text-anchor: middle;
  font-style: italic;
}

.result-ok {
  fill: var(--text-result-ok);
  color: var(--text-result-ok);
  -webkit-text-fill-color: var(--text-result-ok);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 10px;
  text-anchor: middle;
}
.result-fail {
  fill: var(--text-result-fail);
  color: var(--text-result-fail);
  -webkit-text-fill-color: var(--text-result-fail);
  font-family: 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 9px;
  text-anchor: middle;
}

.arrow-label {
  fill: var(--text-arrow-label);
  color: var(--text-arrow-label);
  -webkit-text-fill-color: var(--text-arrow-label);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  text-anchor: middle;
}

.col-label {
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  font-weight: 600;
  text-anchor: middle;
  letter-spacing: 0.5px;
}
.host-col { fill: var(--text-host-col); color: var(--text-host-col); -webkit-text-fill-color: var(--text-host-col); }
.chain-col { fill: var(--text-chain-col); color: var(--text-chain-col); -webkit-text-fill-color: var(--text-chain-col); }

.separator { stroke: var(--separator-color); stroke-width: 1px; stroke-dasharray: 4, 3; }

.arrow { stroke: var(--arrow-color); stroke-width: 1.5px; fill: none; }
.green-arrow { stroke: var(--green-arrow-color); }

.marker-arrow { fill: var(--arrow-color); }
.marker-arrow-green { fill: var(--green-arrow-color); }
</style>

<style>
html:not(.dark) .ov-diagram {
  --box-host-fill: #f7f9fc;
  --box-host-stroke: #4477aa;
  --box-verifier-fill: #f5f5f7;
  --box-verifier-stroke: #aaa;
  --box-result-fill: #f7fcf7;
  --box-result-stroke: #2a7a4a;
  --inner-box-fill: #f5f5f7;
  --inner-box-stroke: #aaa;
  --text-host: #111;
  --text-verifier: #111;
  --text-result: #111;
  --text-host-code: #111;
  --text-note: #555;
  --text-result-note: #555;
  --text-inner: #444;
  --text-verifier-note: #555;
  --text-result-ok: #2a7a4a;
  --text-result-fail: #994444;
  --text-arrow-label: #444;
  --text-host-col: #111;
  --text-chain-col: #444;
  --separator-color: #ddd;
  --arrow-color: #999;
  --green-arrow-color: #2a7a4a;
  --hover-host-stroke: #3366aa;
  --hover-host-shadow: rgba(0,0,0,0.1);
  --hover-verifier-stroke: #999;
  --hover-verifier-shadow: rgba(0,0,0,0.1);
  --hover-result-stroke: #2a7a4a;
  --hover-result-shadow: rgba(0,0,0,0.1);
}
</style>
