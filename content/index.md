---
title: "ZisK: A Zero-Knowledge Virtual Machine"
description: "ZisK is a zkVM that lets you write ordinary Rust programs and generate zero-knowledge proofs of their execution."
---

ZisK is a zkVM that takes ordinary Rust code and proves it ran correctly. Anyone can verify that proof without re-running the program or seeing its inputs.

No circuit design. No custom DSL. Just Rust.

## Why ZisK?

- **Standard Rust.** Use `std`, bring in crates, define your own types. If it compiles, ZisK can prove it.
- **Built-in precompiles.** SHA-256, Keccak, and elliptic curve ops run as native VM instructions.
- **On-chain verification.** Compress proofs to a PLONK SNARK that verifies cheaply on Ethereum.
- **GPU and distributed proving.** Scale proof generation across GPUs and multiple machines.

## The mental model

The **guest** runs inside the VM: reads input, computes, commits output. Pure function: same input, same output.

The **host** runs on your machine: feeds input to the guest, executes or proves, reads results back. Regular Rust binary.

The **proof** says "this guest ran correctly and produced this output." Verifiable without the input.

<div style="max-width: 300px; margin: 1.5rem auto;">

![ZisK mental model](/images/landing.svg)

</div>

## Proof types

ZisK supports three proof modes, each trading size for generation time:

| Type | Size | Generation speed | On-chain verifiable |
| --- | --- | --- | --- |
| STARK (VADCOP) | Large | Fastest | No |
| Compressed STARK | Medium | Moderate | No |
| PLONK SNARK | Small | Slowest (wraps STARK) | Yes |

For testing and development, use STARK proofs; they generate quickly. For production and on-chain verification, use PLONK SNARKs.

## Key properties

- **Private inputs.** The verifier only sees committed output, never the data that went into the computation.
- **Deterministic.** Same input, same output, same proof. Every time.
- **No per-program setup.** ZisK's prover works with any guest binary. You do not need a separate trusted setup or circuit compilation step for each program.
- **Scalable proving.** Distribute proof generation across GPUs and machines when you need to.

## Get started

1. **Install**: [Linux](/getting-started/install-linux) or [macOS](/getting-started/install-macos)
2. **[Quickstart](/getting-started/getting-started-with-zisk)**: create a project and run your first proof in under 5 minutes
3. **[Writing Programs](/writing-programs/project-setup)**: a complete tutorial building, running, and proving a Fibonacci program from scratch
