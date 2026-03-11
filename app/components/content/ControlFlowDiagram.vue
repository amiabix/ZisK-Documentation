<template>
  <div class="cf-diagram">
    <svg width="100%" viewBox="0 0 600 490">

      <!-- Column labels -->
      <text class="col-label host-col" x="130" y="16">Host</text>
      <text class="col-label guest-col" x="450" y="16">Guest (ZisK VM)</text>

      <!-- Separator -->
      <line class="separator" x1="285" y1="6" x2="285" y2="480"/>

      <!-- HOST: main() starts -->
      <g class="step">
        <rect class="box host" x="30" y="30" width="200" height="30" rx="4" ry="4"/>
        <text class="code-label host-code" x="130" y="49">main()</text>
      </g>
      <line class="arrow" x1="130" y1="60" x2="130" y2="74" marker-end="url(#cf-a)"/>

      <!-- HOST: ZiskStdin -->
      <g class="step">
        <rect class="box host" x="30" y="76" width="200" height="38" rx="4" ry="4"/>
        <text class="code-label host-code" x="130" y="92">ZiskStdin::new()</text>
        <text class="code-label host-code" x="130" y="106">stdin.write(&amp;n)</text>
      </g>
      <line class="arrow" x1="130" y1="114" x2="130" y2="128" marker-end="url(#cf-a)"/>

      <!-- HOST: ProverClient -->
      <g class="step">
        <rect class="box host" x="30" y="130" width="200" height="38" rx="4" ry="4"/>
        <text class="code-label host-code" x="130" y="146">ProverClient::builder()</text>
        <text class="code-label host-code" x="130" y="160">.emu().build()</text>
      </g>
      <line class="arrow" x1="130" y1="168" x2="130" y2="182" marker-end="url(#cf-a)"/>

      <!-- HOST: setup -->
      <g class="step">
        <rect class="box host" x="30" y="184" width="200" height="38" rx="4" ry="4"/>
        <text class="code-label host-code" x="130" y="200">client.setup(&amp;ELF)</text>
        <text class="result-text" x="130" y="214">→ (pk, vk)</text>
      </g>
      <line class="arrow" x1="130" y1="222" x2="130" y2="236" marker-end="url(#cf-a)"/>

      <!-- HOST: execute (handoff point) -->
      <g class="step">
        <rect class="box handoff" x="30" y="238" width="200" height="30" rx="4" ry="4"/>
        <text class="code-label handoff-code" x="130" y="257">client.execute(&amp;pk, stdin)</text>
      </g>

      <!-- CROSSING ARROW: host → guest (L-shaped) -->
      <path class="crossing-arrow" d="M 230 253 L 270 253 L 270 300 L 330 300" fill="none" marker-end="url(#cf-a-green)"/>
      <text class="crossing-label enter-label" x="270" y="280">enters VM</text>

      <!-- GUEST: main() -->
      <g class="step guest-step">
        <rect class="box guest" x="332" y="286" width="220" height="30" rx="4" ry="4"/>
        <text class="code-label guest-code" x="442" y="305">main()</text>
      </g>
      <line class="arrow green-arrow" x1="442" y1="316" x2="442" y2="328" marker-end="url(#cf-a-green)"/>

      <!-- GUEST: io::read -->
      <g class="step guest-step">
        <rect class="box guest" x="332" y="330" width="220" height="30" rx="4" ry="4"/>
        <text class="code-label guest-code" x="442" y="349">io::read() → n</text>
      </g>
      <line class="arrow green-arrow" x1="442" y1="360" x2="442" y2="372" marker-end="url(#cf-a-green)"/>

      <!-- GUEST: compute -->
      <g class="step guest-step">
        <rect class="box guest" x="332" y="374" width="220" height="30" rx="4" ry="4"/>
        <text class="code-label guest-code" x="442" y="393">compute fibonacci</text>
      </g>
      <line class="arrow green-arrow" x1="442" y1="404" x2="442" y2="416" marker-end="url(#cf-a-green)"/>

      <!-- GUEST: io::commit -->
      <g class="step guest-step">
        <rect class="box guest" x="332" y="418" width="220" height="30" rx="4" ry="4"/>
        <text class="code-label guest-code" x="442" y="437">io::commit(&amp;result)</text>
      </g>

      <!-- CROSSING ARROW: guest → host (L-shaped, returns) -->
      <path class="crossing-return" d="M 332 433 L 300 433 L 300 470 L 232 470" fill="none" marker-end="url(#cf-a)"/>
      <text class="crossing-label return-label" x="300" y="460">returns</text>

      <!-- HOST: result -->
      <g class="step">
        <rect class="box host" x="30" y="456" width="200" height="38" rx="4" ry="4"/>
        <text class="code-label host-code" x="130" y="472">result.get_public_values()</text>
        <text class="result-text" x="130" y="486">→ Fibonacci(10) = 55</text>
      </g>

      <!-- Waiting indicator on host side -->
      <line class="wait-line" x1="130" y1="268" x2="130" y2="454"/>
      <text class="wait-label" x="118" y="365" transform="rotate(-90,118,365)">waiting for VM</text>

      <defs>
        <marker id="cf-a" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-arrow"/>
        </marker>
        <marker id="cf-a-green" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="marker-arrow-green"/>
        </marker>
      </defs>
    </svg>
  </div>
</template>

<style scoped>
.cf-diagram {
  --text-host-col: #5577aa;
  --text-guest-col: #4a8;
  --separator-color: #333;
  --box-host-fill: #1a1f28;
  --box-host-stroke: #3a5577;
  --box-guest-fill: #142814;
  --box-guest-stroke: #4a8;
  --box-handoff-fill: #1a1f28;
  --box-handoff-stroke: #5577aa;
  --text-host-code: #8899bb;
  --text-guest-code: #8db88d;
  --text-handoff-code: #99bbdd;
  --text-result: #5577aa;
  --arrow-color: #556;
  --arrow-green: #3a6a4a;
  --crossing-arrow-color: #4a8;
  --crossing-return-color: #556;
  --text-crossing: #556;
  --text-enter: #4a8;
  --text-return: #556;
  --wait-line-color: #2a3a55;
  --text-wait: #3a4a66;
  --hover-host-stroke: #77aadd;
  --hover-host-shadow: rgba(85,136,187,0.3);
  --hover-handoff-stroke: #99bbdd;
  --hover-guest-stroke: #6c6;
  --hover-guest-shadow: rgba(68,170,136,0.4);
  max-width: 600px;
  margin: 1.5rem auto;
}
.cf-diagram svg { overflow: visible; }

/* Column labels */
.col-label {
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 10px;
  font-weight: 600;
  text-anchor: middle;
  letter-spacing: 0.5px;
}
.host-col { fill: var(--text-host-col); color: var(--text-host-col); -webkit-text-fill-color: var(--text-host-col); }
.guest-col { fill: var(--text-guest-col); color: var(--text-guest-col); -webkit-text-fill-color: var(--text-guest-col); }

/* Separator */
.separator { stroke: var(--separator-color); stroke-width: 1px; stroke-dasharray: 4, 3; }

/* Boxes */
.box { stroke-width: 1.5px; transition: stroke 0.2s ease, filter 0.2s ease; }
.host { fill: var(--box-host-fill); stroke: var(--box-host-stroke); }
.guest { fill: var(--box-guest-fill); stroke: var(--box-guest-stroke); }
.handoff { fill: var(--box-handoff-fill); stroke: var(--box-handoff-stroke); stroke-width: 2px; }

.step { cursor: pointer; }
.step:hover .host { stroke: var(--hover-host-stroke); filter: drop-shadow(0 0 5px var(--hover-host-shadow)); }
.step:hover .handoff { stroke: var(--hover-handoff-stroke); filter: drop-shadow(0 0 5px var(--hover-host-shadow)); }
.guest-step:hover .guest { stroke: var(--hover-guest-stroke); filter: drop-shadow(0 0 6px var(--hover-guest-shadow)); }

/* Code labels */
.code-label {
  font-family: 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 9px;
  text-anchor: middle;
}
.host-code { fill: var(--text-host-code); color: var(--text-host-code); -webkit-text-fill-color: var(--text-host-code); }
.guest-code { fill: var(--text-guest-code); color: var(--text-guest-code); -webkit-text-fill-color: var(--text-guest-code); }
.handoff-code { fill: var(--text-handoff-code); color: var(--text-handoff-code); -webkit-text-fill-color: var(--text-handoff-code); }

.result-text {
  fill: var(--text-result); color: var(--text-result); -webkit-text-fill-color: var(--text-result);
  font-family: 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 9px;
  text-anchor: middle;
  font-style: italic;
}

/* Arrows */
.arrow { stroke: var(--arrow-color); stroke-width: 1.5px; fill: none; }
.green-arrow { stroke: var(--arrow-green); }

/* Crossing arrows */
.crossing-arrow { stroke: var(--crossing-arrow-color); stroke-width: 2px; fill: none; }
.crossing-return { stroke: var(--crossing-return-color); stroke-width: 2px; stroke-dasharray: 6, 3; fill: none; }

.crossing-label {
  fill: var(--text-crossing); color: var(--text-crossing); -webkit-text-fill-color: var(--text-crossing);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  font-weight: 600;
  text-anchor: middle;
}
.enter-label { fill: var(--text-enter); color: var(--text-enter); -webkit-text-fill-color: var(--text-enter); }
.return-label { fill: var(--text-return); color: var(--text-return); -webkit-text-fill-color: var(--text-return); }

/* Waiting indicator */
.wait-line {
  stroke: var(--wait-line-color);
  stroke-width: 1px;
  stroke-dasharray: 3, 4;
}
.wait-label {
  fill: var(--text-wait); color: var(--text-wait); -webkit-text-fill-color: var(--text-wait);
  font-family: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 9px;
  text-anchor: middle;
  font-style: italic;
}

.marker-arrow { fill: var(--arrow-color); }
.marker-arrow-green { fill: var(--arrow-green); }
</style>

<style>
html:not(.dark) .cf-diagram {
  --text-host-col: #444;
  --text-guest-col: #2a7a4a;
  --separator-color: #ddd;
  --box-host-fill: #f7f9fc;
  --box-host-stroke: #4477aa;
  --box-guest-fill: #f7fcf7;
  --box-guest-stroke: #2a7a4a;
  --box-handoff-fill: #f7f9fc;
  --box-handoff-stroke: #4477aa;
  --text-host-code: #111;
  --text-guest-code: #111;
  --text-handoff-code: #111;
  --text-result: #111;
  --arrow-color: #999;
  --arrow-green: #2a7a4a;
  --crossing-arrow-color: #2a7a4a;
  --crossing-return-color: #999;
  --text-crossing: #444;
  --text-enter: #2a7a4a;
  --text-return: #444;
  --wait-line-color: #bbd;
  --text-wait: #668;
  --hover-host-stroke: #3366aa;
  --hover-host-shadow: rgba(0,0,0,0.1);
  --hover-handoff-stroke: #3366aa;
  --hover-guest-stroke: #2a7a4a;
  --hover-guest-shadow: rgba(0,0,0,0.1);
}
</style>
