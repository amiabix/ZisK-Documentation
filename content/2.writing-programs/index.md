---
title: Writing Programs
navigation.icon: i-heroicons-code-bracket
description: The guest/host model, project structure, building, running, and I/O.
---

Every ZisK project has two halves: a **guest** and a **host**. This split is fundamental to how provable computation works.

<div style="max-width: 350px; margin: 1.5rem auto;">

![Architecture: host, guest, and proof](/images/architecture.svg)

</div>

## The Two-Program Model

The **guest** runs inside the ZisK virtual machine. It is the program you are proving, the computation whose correctness a verifier will check. Because it runs inside a VM, it is deterministic and isolated. Given the same input, it always produces the same output. It cannot access the filesystem, the network, or anything outside the VM. This isolation is what makes it provable.

The **host** runs on your machine, just like any other Rust program. It is the orchestrator: it reads files, calls APIs, makes decisions, assembles input for the guest, invokes the prover, and handles the resulting proof. The host is unconstrained; it can do whatever a normal program can do.

The two halves communicate through a well-defined interface: the host writes input before execution begins, the guest reads that input during execution, and the guest commits output that the host can read after execution completes. There is no back-and-forth during execution; the guest runs to completion on whatever input it was given.

Provable computation requires determinism. If the guest could make network calls or read the clock, different runs could produce different results, and the proof would be meaningless. VM isolation guarantees reproducibility.

## The Virtual Machine

ZisK compiles guest programs to RISC-V, specifically the `riscv64ima-zisk-zkvm-elf` target. This is a 64-bit RISC-V target with integer multiplication/division and atomic extensions, running on ZisK's bare-metal operating system (ZiskOS).

When you execute or prove a guest, the VM runs those RISC-V instructions and records every step. Every instruction executed, every register read, every memory access; all of it becomes the **execution trace**, which is the raw material for proof generation.

ZisK provides two execution backends:

**Emulator** (`.emu()`). A portable interpreter. Works on all platforms (macOS, Linux, any architecture). Use during development.

**ASM** (`.asm()`). A native x86_64 backend, Linux only. Translates RISC-V to native machine code. Significantly faster. Use for production proving.

**Precompiles.** Expensive operations (SHA-256, Keccak-256, elliptic curve arithmetic) are implemented as native VM instructions rather than interpreted instruction-by-instruction. This dramatically reduces execution trace size. See the [Optimization](/optimization/precompiles) chapter.

## In This Section

- [Project Setup](/writing-programs/project-setup): project structure, guest anatomy, and dependencies
- [Build and Run](/writing-programs/build-and-run): compile to RISC-V, run in the emulator, metrics and statistics
- [Input and Output](/writing-programs/input-and-output): how data flows between host and guest
- [Host Program](/writing-programs/host-program): write a host that feeds input, drives execution, and reads results
