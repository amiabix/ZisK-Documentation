---
title: Writing Programs
navigation: false
description: The guest/host model, project structure, building, running, and I/O.
---

Every ZisK project has two halves: a **guest** that runs inside the VM and produces provable computation, and a **host** that orchestrates everything from your machine. Understanding this split is the key to writing ZisK programs.

<div style="max-width: 350px; margin: 1.5rem auto;">

![Architecture: host, guest, and proof](/images/architecture.svg)

</div>

Start with **[How it works](/writing-programs/how-it-works)** to see the full pipeline in action, then follow the pages in order.

## In This Section

- [How it works](/writing-programs/how-it-works): walk through build, execute, prove, and verify step by step
- [Guest and Host](/writing-programs/guest-and-host): what the guest and host are, why the split exists, and how they communicate
- [Project Setup](/writing-programs/project-setup): create a project, write the fibonacci guest
- [Build and Run](/writing-programs/build-and-run): build script, host program, execute your guest, profiling tools
- [Input and Output](/writing-programs/input-and-output): how data flows between host and guest
- [Prove and Verify](/writing-programs/prove-and-verify): add proving and verification to `main.rs`
- [Proof Types](/writing-programs/proof-types): VADCOP, compressed, and PLONK proofs
- [On-Chain Verification](/writing-programs/onchain-verification): verify proofs on Ethereum
- [Fibonacci Example](/writing-programs/fibonacci-example): complete assembled code in one place
