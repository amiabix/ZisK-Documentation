# SDK Documentation Integration Plan

This document outlines a comprehensive plan to integrate the updated SDK documentation across the ZisK documentation site.

## Overview

The SDK has been updated with a type-safe builder pattern. This plan ensures all documentation reflects these changes and provides clear guidance for developers using both CLI and programmatic interfaces.

---

## 1. GETTING STARTED SECTION

### 1.1 Quickstart (`/getting-started/quickstart.mdx`)

**Current State:** CLI-focused, mentions SDK briefly at the end

**Changes Needed:**

#### Section: "Prove" (after line 123)
- **Add:** A new subsection "Using the SDK" right after the CLI prove example
- **Content:**
  ```markdown
  ### Using the SDK
  
  You can also generate proofs programmatically using the ZisK SDK:
  
  ```rust
  use zisk_sdk::ProverClientBuilder;
  use zisk_common::io::ZiskStdin;
  use std::path::PathBuf;
  
  let prover = ProverClientBuilder::new()
      .emu()
      .prove()
      .elf_path(PathBuf::from("target/riscv64ima-zisk-zkvm-elf/release/sha_hasher"))
      .output_dir(PathBuf::from("proof"))
      .aggregation(true)
      .verify_proofs(true)
      .save_proofs(true)
      .build()?;
  
  let stdin = ZiskStdin::from_file("build/input.bin")?;
  let result = prover.prove(stdin)?;
  ```
  
  For more details, see the [SDK Reference](/reference/sdk).
  ```

#### Section: "Next Steps" (line 158)
- **Update:** Add SDK as a next step option
- **Change:**
  ```markdown
  ## Next Steps
  
  - [Setup](/developer/setup) - Modify Rust programs for ZisK
  - [Build and Prove](/developer/build-and-prove) - Development workflow
  - [SDK Reference](/reference/sdk) - Programmatic proof generation
  ```

**Priority:** High - This is the first page users see

---

### 1.2 Installation (`/getting-started/installation.mdx`)

**Current State:** Installation instructions only

**Changes Needed:**

#### After "Verify the installation" section (around line 182)
- **Add:** A new section "SDK Installation"
- **Content:**
  ```markdown
  ### SDK Installation
  
  The ZisK SDK is included when you install ZisK. To use it in your Rust projects, add it to your `Cargo.toml`:
  
  ```toml
  [dependencies]
  zisk-sdk = { git = "https://github.com/0xPolygonHermez/zisk.git" }
  zisk-common = { git = "https://github.com/0xPolygonHermez/zisk.git" }
  ```
  
  The SDK provides a type-safe builder interface for programmatic proof generation. See the [SDK Reference](/reference/sdk) for details.
  ```

**Priority:** Medium - Helpful for developers who want to use SDK

---

## 2. DEVELOPER GUIDE SECTION

### 2.1 Build and Prove (`/developer/build-and-prove.mdx`)

**Current State:** Has a "Programmatic Interface" section at the end (line 205) that references SDK

**Changes Needed:**

#### Section: "Programmatic Interface" (line 205)
- **Replace:** The current brief mention with a more detailed section
- **New Content:**
  ```markdown
  ## Programmatic Interface
  
  The ZisK SDK provides a type-safe builder pattern for programmatic proof generation, constraint verification, and program execution.
  
  ### Quick Example
  
  Generate a proof programmatically:
  
  ```rust
  use zisk_sdk::ProverClientBuilder;
  use zisk_common::io::ZiskStdin;
  use std::path::PathBuf;
  
  fn main() -> anyhow::Result<()> {
      let prover = ProverClientBuilder::new()
          .emu()                    // Use emulator backend
          .prove()                  // Generate proof
          .elf_path(PathBuf::from("target/riscv64ima-zisk-zkvm-elf/release/your_program"))
          .output_dir(PathBuf::from("proof"))
          .aggregation(true)
          .verify_proofs(true)
          .build()?;
  
      let stdin = ZiskStdin::from_file("build/input.bin")?;
      let result = prover.prove(stdin)?;
      
      println!("Proof generated! Steps: {}", result.execution.executed_steps);
      Ok(())
  }
  ```
  
  ### Operations
  
  The SDK supports three main operations:
  
  - **Program Execution** (`.witness()`) - Execute program without constraint verification
  - **Constraint Verification** (`.verify_constraints()`) - Verify constraints without generating proof
  - **Proof Generation** (`.prove()`) - Generate complete proof
  
  ### Backends
  
  - **Emulator** (`.emu()`) - Works on all platforms, simpler setup
  - **Assembly** (`.asm()`) - Higher performance, requires ASM files
  
  For complete SDK documentation, see the [SDK Reference](/reference/sdk).
  ```

#### Section: "Next Steps" (line 218)
- **Update:** Ensure SDK is prominently featured
- **Change:**
  ```markdown
  ## Next Steps
  
  - **[SDK Reference](/reference/sdk)** — Complete programmatic interface documentation
  - **[Concurrent Proof Generation](/optimization/concurrent-proof-generation)** — Parallel proof generation
  - **[GPU Proof Generation](/optimization/gpu-proof-generation)** — GPU acceleration
  ```

**Priority:** High - This is where developers learn the workflow

---

### 2.2 Writing Programs (`/developer/writing-programs.mdx`)

**Current State:** Need to check if this exists and what it contains

**Action:** Read the file and add SDK examples where appropriate, especially in sections about testing and verification

**Priority:** Medium

---

### 2.3 Setup (`/developer/setup.mdx`)

**Current State:** Need to check content

**Action:** If it covers project setup, add a note about SDK dependency

**Priority:** Low

---

## 3. REFERENCE SECTION

### 3.1 SDK (`/reference/sdk.mdx`)

**Current State:** Already has comprehensive SDK documentation

**Changes Needed:**

#### Add at the beginning (after Overview):
- **Add:** A "Quick Links" section
- **Content:**
  ```markdown
  ## Quick Links
  
  - [CLI to SDK Mapping](#cli-to-sdk-mapping) - Convert CLI commands to SDK code
  - [Basic Usage](#basic-usage) - Get started quickly
  - [Complete Examples](#complete-examples) - Full working examples
  - [Type Safety](#type-safety) - Understanding compile-time guarantees
  ```

#### Add after "Integration with CLI" section:
- **Add:** A new section "Common Patterns"
- **Content:**
  ```markdown
  ## Common Patterns
  
  ### Pattern 1: Development Workflow
  
  During development, you might want to verify constraints before generating proofs:
  
  ```rust
  // First, verify constraints
  let verifier = ProverClientBuilder::new()
      .emu()
      .verify_constraints()
      .elf_path(elf_path.clone())
      .build()?;
  
  verifier.verify_constraints(stdin.clone())?;
  println!("Constraints verified!");
  
  // Then generate proof
  let prover = ProverClientBuilder::new()
      .emu()
      .prove()
      .elf_path(elf_path)
      .output_dir(PathBuf::from("proof"))
      .build()?;
  
  prover.prove(stdin)?;
  ```
  
  ### Pattern 2: Error Handling
  
  ```rust
  use anyhow::{Context, Result};
  
  fn generate_proof(elf_path: PathBuf, input_path: PathBuf) -> Result<()> {
      let prover = ProverClientBuilder::new()
          .emu()
          .prove()
          .elf_path(elf_path)
          .output_dir(PathBuf::from("proof"))
          .build()
          .context("Failed to build prover")?;
  
      let stdin = ZiskStdin::from_file(&input_path)
          .context("Failed to load input file")?;
  
      let result = prover.prove(stdin)
          .context("Proof generation failed")?;
  
      println!("Success! Proof ID: {:?}", result.proof.id);
      Ok(())
  }
  ```
  
  ### Pattern 3: Conditional Backend Selection
  
  ```rust
  let use_asm = std::env::var("USE_ASM").is_ok();
  
  let mut builder = ProverClientBuilder::new()
      .prove()
      .elf_path(elf_path);
  
  let prover = if use_asm {
      builder.asm()
          .base_port(23115)
          .unlock_mapped_memory(true)
          .build()?
  } else {
      builder.emu().build()?
  };
  ```
  ```

**Priority:** High - This is the main SDK reference

---

## 4. OPTIMIZATION SECTION

### 4.1 Concurrent Proof Generation (`/optimization/concurrent-proof-generation.mdx`)

**Current State:** Need to check if it mentions SDK

**Changes Needed:**

#### Add a section: "Using SDK with MPI"
- **Content:**
  ```markdown
  ## Using SDK with MPI
  
  When using the SDK programmatically with MPI, the SDK automatically detects the MPI environment:
  
  ```rust
  // The SDK automatically uses MPI if available
  let prover = ProverClientBuilder::new()
      .asm()
      .prove()
      .elf_path(elf_path)
      .output_dir(PathBuf::from("proof"))
      .build()?;
  
  // Only rank 0 should call prove()
  if prover.world_rank() == 0 {
      let result = prover.prove(stdin)?;
      println!("Proof generated on rank 0");
  }
  ```
  
  The SDK handles MPI coordination internally. Use `world_rank()` and `local_rank()` to check the current process rank.
  ```

**Priority:** Medium

---

### 4.2 GPU Proof Generation (`/optimization/gpu-proof-generation.mdx`)

**Current State:** Need to check content

**Changes Needed:**

#### Add SDK GPU example
- **Content:**
  ```markdown
  ## GPU Configuration with SDK
  
  Configure GPU parameters when building the prover:
  
  ```rust
  use proofman_common::ParamsGPU;
  
  let mut gpu_params = ParamsGPU::new(true);  // Enable preallocation
  gpu_params.with_max_number_streams(4);
  gpu_params.with_number_threads_pools_witness(8);
  gpu_params.with_max_witness_stored(10);
  
  let prover = ProverClientBuilder::new()
      .emu()
      .prove()
      .elf_path(elf_path)
      .gpu(gpu_params)
      .build()?;
  ```
  ```

**Priority:** Medium

---

## 5. NEW SECTIONS TO ADD

### 5.1 Getting Started: "SDK Quickstart" (`/getting-started/sdk-quickstart.mdx`)

**Purpose:** A dedicated quickstart for SDK users who want to skip CLI

**Content Structure:**
```markdown
# SDK Quickstart

This guide shows you how to get started with the ZisK SDK for programmatic proof generation.

## Installation

Add the SDK to your project:

```toml
[dependencies]
zisk-sdk = { git = "https://github.com/0xPolygonHermez/zisk.git" }
zisk-common = { git = "https://github.com/0xPolygonHermez/zisk.git" }
anyhow = "1.0"
```

## Your First Proof

[Complete example with explanation]

## Next Steps

- [Full SDK Reference](/reference/sdk)
- [CLI Quickstart](/getting-started/quickstart) - If you prefer CLI
```

**Priority:** High - Provides SDK-first onboarding

---

### 5.2 Developer: "SDK Integration Guide" (`/developer/sdk-integration.mdx`)

**Purpose:** Guide for integrating SDK into existing projects

**Content Structure:**
```markdown
# SDK Integration Guide

This guide helps you integrate the ZisK SDK into your existing Rust projects.

## Project Structure

## Error Handling Best Practices

## Testing with SDK

## Performance Considerations

## Migration from CLI
```

**Priority:** Medium

---

## 6. META FILE UPDATES

### 6.1 Getting Started Meta (`/getting-started/_meta.tsx`)

**Update:**
```typescript
export default {
  installation: 'Installation',
  quickstart: 'Quickstart',
  'sdk-quickstart': 'SDK Quickstart',  // NEW
}
```

### 6.2 Developer Meta (`/developer/_meta.tsx`)

**Update:**
```typescript
export default {
  setup: 'Setup',
  io: 'I/O Model',
  'build-and-prove': 'Build and Prove',
  'writing-programs': 'Writing Programs',
  'sdk-integration': 'SDK Integration',  // NEW
}
```

---

## 7. CROSS-REFERENCES AND CONSISTENCY

### 7.1 Add SDK Links Throughout

**Pages to update:**
- All pages mentioning "proof generation" should link to SDK
- All CLI examples should have SDK equivalents nearby
- Optimization pages should show both CLI and SDK approaches

### 7.2 Consistent Terminology

**Ensure consistent use of:**
- "Programmatic interface" vs "SDK" (use SDK)
- "Builder pattern" vs "typestate pattern" (use builder pattern in user docs)
- Operation names: `.witness()`, `.verify_constraints()`, `.prove()`

---

## 8. IMPLEMENTATION PRIORITY

### Phase 1: Critical (Do First)
1. ✅ Update `/reference/sdk.mdx` - Add common patterns section
2. ✅ Update `/getting-started/quickstart.mdx` - Add SDK example in Prove section
3. ✅ Update `/developer/build-and-prove.mdx` - Expand Programmatic Interface section
4. ✅ Create `/getting-started/sdk-quickstart.mdx` - New SDK-first quickstart

### Phase 2: Important (Do Second)
5. Update `/getting-started/installation.mdx` - Add SDK installation note
6. Update `/optimization/gpu-proof-generation.mdx` - Add SDK GPU example
7. Update `/optimization/concurrent-proof-generation.mdx` - Add SDK MPI example
8. Update meta files for navigation

### Phase 3: Enhancement (Do Third)
9. Create `/developer/sdk-integration.mdx` - Integration guide
10. Review and update `/developer/writing-programs.mdx`
11. Add cross-references throughout all pages
12. Review terminology consistency

---

## 9. CONTENT GUIDELINES

### Writing Style
- **Simple and Clear:** Avoid jargon, explain concepts
- **Code-First:** Show code examples before explanations
- **Progressive Disclosure:** Start simple, add complexity
- **Consistent Examples:** Use same project structure across examples

### Code Examples
- Always include `use` statements
- Show error handling where appropriate
- Include comments for clarity
- Use realistic file paths
- Show both success and error cases

### Structure
- Each section should be self-contained
- Link to related sections
- Use consistent heading levels
- Include "Next Steps" at end of major sections

---

## 10. REVIEW CHECKLIST

Before marking as complete, verify:

- [ ] All CLI examples have SDK equivalents
- [ ] All SDK examples compile and work
- [ ] Cross-references are correct
- [ ] Terminology is consistent
- [ ] Navigation flows logically
- [ ] Code examples are tested
- [ ] Links work correctly
- [ ] Meta files updated
- [ ] No broken references

---

## Summary

This plan ensures the SDK documentation is:
1. **Discoverable** - Found from multiple entry points
2. **Comprehensive** - Covers all use cases
3. **Consistent** - Same patterns throughout
4. **Progressive** - Simple to advanced
5. **Practical** - Real examples that work

The integration maintains the CLI-first approach while making SDK equally accessible for developers who prefer programmatic interfaces.

