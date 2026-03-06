---
title: CLI Reference
navigation.icon: i-heroicons-command-line
description: Complete reference for all cargo-zisk commands.
---

This page documents every command available in the ZisK toolchain. Commands are grouped by workflow stage: building and running programs, analyzing execution, generating and verifying proofs, and managing setup.

---

## Build and Run

### cargo-zisk build

Build a guest program for the ZisK RISC-V target. Run this from the guest crate directory, not the workspace root.

```bash
cargo-zisk build [FLAGS]
```

| Flag | Description |
| --- | --- |
| `--release` | Build in release mode (recommended for proving) |
| `-F, --features <FEATURES>` | Comma-separated list of features to activate |
| `--all-features` | Enable all available features |
| `--no-default-features` | Disable default features |
| `--hints` | Enable precompile hints |

**Example**

```bash
cargo-zisk build --release
```

The compiled ELF binary is written to `target/riscv64ima-zisk-zkvm-elf/release/<name>`.

---

### cargo-zisk run

Build a guest program and immediately execute it in the emulator. This is the fastest way to test a program end-to-end during development.

```bash
cargo-zisk run [FLAGS]
```

| Flag | Description |
| --- | --- |
| `--release` | Build in release mode |
| `-i, --input <PATH>` | Path to an input file supplied to the guest |
| `-F, --features <FEATURES>` | Comma-separated list of features to activate |
| `--all-features` | Enable all available features |
| `--no-default-features` | Disable default features |
| `-x, --stats` | Print detailed statistics |
| `-m, --metrics` | Print execution metrics |
| `-q, --qemu` | Use QEMU emulation instead of ziskemu |
| `--gdb` | Enable GDB debug mode (QEMU only) |
| `-f, --riscof` | Enable RISCOF mode |

**Example**

```bash
cargo-zisk run --release -i input.bin
```

---

## Execute and Analyze

These commands let you inspect what a guest program does without generating a proof. They work with pre-built ELF binaries.

### cargo-zisk execute

Execute a guest program and report execution metrics such as total step count.

```bash
cargo-zisk execute [FLAGS]
```

| Flag | Description |
| --- | --- |
| `-e, --elf <PATH>` | Path to the ELF binary (required) |
| `-i, --inputs <PATH>` | Path to the input file |
| `-l, --emulator` | Use emulator mode (works on all platforms) |
| `-s, --asm <PATH>` | Use ASM backend (Linux x86_64 only) |
| `-H, --hints <PATH>` | Path to precompile hints |
| `-n, --no-auto-setup` | Disable automatic ROM setup |
| `-k, --proving-key <PATH>` | Path to a custom proving key directory |
| `-p, --port <PORT>` | Base port for ASM microservices (default: 23115) |
| `-u, --unlock-mapped-memory` | Unlock memory-mapped files (ASM mode) |
| `-j, --shared-tables` | Use shared tables |
| `-v, --verbose` | Increase verbosity (repeat for more) |

**Example**

```bash
cargo-zisk execute -e path/to/elf -i input.bin -l
```

---

### cargo-zisk stats

Execute a guest program and print a detailed cost breakdown including per-AIR statistics. Outputs `stats.json` and `stats.csv`.

```bash
cargo-zisk stats [FLAGS]
```

| Flag | Description |
| --- | --- |
| `-e, --elf <PATH>` | Path to the ELF binary (required) |
| `-i, --inputs <PATH>` | Path to the input file |
| `-l, --emulator` | Use emulator mode |
| `-s, --asm <PATH>` | Use ASM backend |
| `-H, --hints <PATH>` | Path to precompile hints |
| `-k, --proving-key <PATH>` | Path to a custom proving key directory |
| `-m, --minimal-memory` | Reduce memory usage |
| `-j, --shared-tables` | Use shared tables |
| `-v, --verbose` | Increase verbosity |

**Example**

```bash
cargo-zisk stats -e path/to/elf -i input.bin
```

---

### cargo-zisk verify-constraints

Run the guest program and check that the resulting execution trace satisfies every PIL constraint. This catches constraint violations early, before you spend resources on proof generation.

```bash
cargo-zisk verify-constraints [FLAGS]
```

| Flag | Description |
| --- | --- |
| `-e, --elf <PATH>` | Path to the ELF binary (required) |
| `-i, --inputs <PATH>` | Path to the input file |
| `-l, --emulator` | Use emulator mode |
| `-s, --asm <PATH>` | Use ASM backend |
| `-H, --hints <PATH>` | Path to precompile hints |
| `-d, --debug [NAME]` | Enable debug mode with optional constraint name filter |
| `-n, --no-auto-setup` | Disable automatic ROM setup |
| `-k, --proving-key <PATH>` | Path to a custom proving key directory |
| `-p, --port <PORT>` | Base port for ASM microservices |
| `-u, --unlock-mapped-memory` | Unlock memory-mapped files (ASM mode) |
| `-j, --shared-tables` | Use shared tables |
| `-v, --verbose` | Increase verbosity |

**Example**

```bash
cargo-zisk verify-constraints -e path/to/elf -i input.bin -l
```

A successful run prints no constraint errors. Any violation is reported with the failing constraint name and the offending row.

---

## Prove and Verify

### cargo-zisk prove

Generate a VADCOP STARK proof for a guest program execution.

```bash
cargo-zisk prove [FLAGS]
```

| Flag | Description |
| --- | --- |
| `-e, --elf <PATH>` | Path to the ELF binary (required) |
| `-i, --inputs <PATH>` | Path to the input file |
| `-o, --output-dir <PATH>` | Output directory for proof artifacts (default: `tmp`) |
| `-l, --emulator` | Use emulator mode |
| `-s, --asm <PATH>` | Use ASM backend |
| `-H, --hints <PATH>` | Path to precompile hints |
| `-c, --compressed` | Generate a compressed proof (incompatible with `--snark`) |
| `--snark` | Generate a PLONK SNARK proof (incompatible with `-c`) |
| `-k, --proving-key <PATH>` | Path to a custom proving key directory |
| `-w, --proving-key-snark <PATH>` | Path to SNARK proving key directory |
| `-a, --aggregation` | Enable aggregation |
| `-y, --verify-proofs` | Verify proofs after generation |
| `-m, --minimal-memory` | Reduce memory usage during proving |
| `-b, --save-proofs` | Save intermediate proof artifacts |
| `-r, --rma` | Enable RMA |
| `-p, --port <PORT>` | Base port for ASM microservices |
| `-u, --unlock-mapped-memory` | Unlock memory-mapped files (ASM mode) |
| `-n, --no-auto-setup` | Skip automatic ROM setup |
| `-j, --shared-tables` | Use shared tables |
| `-v, --verbose` | Increase verbosity |

**Example**

```bash
cargo-zisk prove -e path/to/elf -i input.bin -o /tmp/proof -l
```

---

### cargo-zisk prove-snark

Generate a PLONK SNARK proof from an existing VADCOP STARK proof. The resulting SNARK is compact enough for on-chain verification.

```bash
cargo-zisk prove-snark [FLAGS]
```

| Flag | Description |
| --- | --- |
| `-p, --proof <PATH>` | Path to the VADCOP final proof file (required) |
| `-e, --elf <PATH>` | Path to the ELF binary (required) |
| `-k, --proving-key-snark <PATH>` | Path to the SNARK proving key directory (required) |
| `-o, --output-dir <PATH>` | Output directory (default: `tmp`) |
| `-v, --verbose` | Increase verbosity |

**Example**

```bash
cargo-zisk prove-snark -p /tmp/proof/vadcop_final_proof.bin -e path/to/elf \
  -k ~/.zisk/provingKeySnark -o /tmp/proof
```

---

### cargo-zisk verify

Verify a VADCOP STARK proof.

```bash
cargo-zisk verify [FLAGS]
```

| Flag | Description |
| --- | --- |
| `-p, --proof <PATH>` | Path to the proof file (required) |
| `-k, --proving-key <PATH>` | Path to a custom proving key directory |
| `-v, --verbose` | Increase verbosity |

**Example**

```bash
cargo-zisk verify -p /tmp/proof/proof.bin
```

---

### cargo-zisk verify-snark

Verify a PLONK SNARK proof.

```bash
cargo-zisk verify-snark [FLAGS]
```

| Flag | Description |
| --- | --- |
| `-p, --proof <PATH>` | Path to the proof file (required) |
| `-k, --verkey <PATH>` | Path to the verification key (required) |
| `-v, --verbose` | Increase verbosity |

**Example**

```bash
cargo-zisk verify-snark -p /tmp/proof/snark_proof.bin -k /tmp/proof/verkey.bin
```

---

## Setup

### cargo-zisk rom-setup

Generate ROM-specific setup files for a guest program. This step is required before proving with the CLI and must be re-run whenever the guest binary changes.

```bash
cargo-zisk rom-setup [FLAGS]
```

| Flag | Description |
| --- | --- |
| `-e, --elf <PATH>` | Path to the ELF binary (required) |
| `-k, --proving-key <PATH>` | Path to a custom proving key directory |
| `-o, --output-dir <PATH>` | Output directory for setup files |
| `-n, --hints` | Enable precompile hints in assembly generation |
| `-v, --verbose` | Increase verbosity |

**Example**

```bash
cargo-zisk rom-setup -e path/to/elf
```

---

### cargo-zisk check-setup

Verify that all required setup files (constant trees, proving parameters) exist and are valid. Optionally generate any that are missing.

```bash
cargo-zisk check-setup [FLAGS]
```

| Flag | Description |
| --- | --- |
| `-a, --aggregation` | Check aggregation setup |
| `-s, --snark` | Also check SNARK setup |
| `-k, --proving-key <PATH>` | Path to proving key directory (default: `~/.zisk/provingKey`) |
| `-w, --proving-key-snark <PATH>` | Path to SNARK proving key directory (default: `~/.zisk/provingKeySnark`) |
| `-v, --verbose` | Increase verbosity |

**Example**

```bash
cargo-zisk check-setup -a -s
```

---

### cargo-zisk clean

Remove the ZisK cache directory (`~/.zisk/cache`).

```bash
cargo-zisk clean
```

---

### cargo-zisk sdk

Project scaffolding and toolchain management commands.

#### cargo-zisk sdk new

Create a new ZisK project from the starter template. This clones a guest program template with a SHA-256 example pre-configured.

```bash
cargo-zisk sdk new <NAME>
```

| Argument | Description |
| --- | --- |
| `<NAME>` | Name of the new project directory |

**Example**

```bash
cargo-zisk sdk new my-project
```

#### cargo-zisk sdk install-toolchain

Download and install the pre-built ZisK Rust toolchain.

```bash
cargo-zisk sdk install-toolchain [VERSION]
```

| Argument | Description |
| --- | --- |
| `[VERSION]` | Specific toolchain version to install (optional) |

#### cargo-zisk sdk build-toolchain

Build the ZisK Rust toolchain from source. This requires all [Rust build dependencies](https://github.com/rust-lang/rust/blob/master/INSTALL.md#dependencies).

```bash
cargo-zisk sdk build-toolchain
```

No additional flags.
