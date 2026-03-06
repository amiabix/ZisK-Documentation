---
title: First Program
navigation.icon: i-heroicons-academic-cap
description: Build a complete ZisK application from scratch, covering guest code, CLI workflow, host code, and proof generation.
---

In the previous chapter you wrote a Fibonacci guest program, built it, ran it in the emulator, and generated a VADCOP STARK proof, all from the command line. Now it's time to go deeper.

This chapter explains every piece of that Fibonacci program in detail, then shows you how to write **host code** in Rust that drives execution and proving programmatically. By the end, you'll understand the full ZisK workflow and be able to generate VADCOP, compressed, and PLONK proofs from your own code.

- [Understanding the Guest](/first-program/project-and-guest): what every line of the Fibonacci guest does and why
- [Build and Run](/first-program/build-and-run): deeper look at compiling, emulating, and CLI workflows
- [Write the Host Program](/first-program/host-program): drive execution and proving from Rust code
- [Prove and Verify](/first-program/prove-and-verify): generate STARK, compressed, and PLONK proofs
