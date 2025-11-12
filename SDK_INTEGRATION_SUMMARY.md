# SDK Documentation Integration - Quick Summary

## Overview

The SDK now uses a type-safe builder pattern. This document summarizes where and how to integrate SDK updates across the documentation.

---

## Critical Updates (Do First)

### 1. `/getting-started/quickstart.mdx`
**Location:** After "Prove" section (line 123)
**Action:** Add SDK code example showing how to generate proof programmatically
**Impact:** High - First page users see

### 2. `/developer/build-and-prove.mdx`
**Location:** "Programmatic Interface" section (line 205)
**Action:** Expand with detailed SDK examples and operation explanations
**Impact:** High - Core developer workflow page

### 3. `/reference/sdk.mdx`
**Location:** After "Integration with CLI" section
**Action:** Add "Common Patterns" section with real-world examples
**Impact:** High - Main SDK reference

### 4. Create `/getting-started/sdk-quickstart.mdx`
**Action:** New page for SDK-first users
**Impact:** High - Provides alternative onboarding path

---

## Important Updates (Do Second)

### 5. `/getting-started/installation.mdx`
**Location:** After "Verify the installation" section
**Action:** Add SDK installation instructions for Cargo.toml

### 6. `/optimization/gpu-proof-generation.mdx`
**Action:** Add SDK GPU configuration example

### 7. `/optimization/concurrent-proof-generation.mdx`
**Action:** Add SDK MPI usage example

### 8. Update Meta Files
**Files:** `_meta.tsx` in getting-started and developer folders
**Action:** Add new SDK-related pages to navigation

---

## Key Integration Points

### Where to Add SDK Examples

1. **Every CLI example** → Add SDK equivalent nearby
2. **Proof generation sections** → Show both CLI and SDK
3. **Configuration examples** → Include SDK builder pattern
4. **Error handling** → Show SDK error handling patterns

### What to Emphasize

- **Type Safety:** Compile-time guarantees
- **Builder Pattern:** Step-by-step configuration
- **Three Operations:** `.witness()`, `.verify_constraints()`, `.prove()`
- **Two Backends:** `.emu()`, `.asm()`

### Cross-Reference Strategy

- Quickstart → SDK Reference
- Build and Prove → SDK Reference
- Optimization pages → SDK examples
- SDK Reference → Related guides

---

## Content Patterns to Use

### Pattern 1: Side-by-Side CLI and SDK

```markdown
### Using CLI

```bash
cargo-zisk prove -e program.elf -i input.bin -o proof
```

### Using SDK

```rust
let prover = ProverClientBuilder::new()
    .emu().prove()
    .elf_path(PathBuf::from("program.elf"))
    .output_dir(PathBuf::from("proof"))
    .build()?;
prover.prove(ZiskStdin::from_file("input.bin")?)?;
```
```

### Pattern 2: Progressive Examples

1. Start with simplest example
2. Add configuration options
3. Show error handling
4. Show advanced patterns

### Pattern 3: Consistent Project Structure

Use same project structure across all examples:
- `target/riscv64ima-zisk-zkvm-elf/release/my_program`
- `build/input.bin`
- `proof/` output directory

---

## Implementation Order

1. **Week 1:** Critical updates (items 1-4)
2. **Week 2:** Important updates (items 5-8)
3. **Week 3:** Review, cross-references, polish

---

## Success Criteria

✅ Users can find SDK documentation from multiple entry points
✅ Every major operation has both CLI and SDK examples
✅ SDK examples are tested and work
✅ Navigation flows logically
✅ Terminology is consistent
✅ Code examples are clear and practical

---

## Questions to Answer

- Should we make SDK the primary interface or keep CLI-first?
  **Recommendation:** Keep CLI-first for quickstart, but make SDK equally prominent

- How much detail in quickstart vs reference?
  **Recommendation:** Quickstart = simple examples, Reference = comprehensive

- Should we have separate SDK vs CLI sections?
  **Recommendation:** Show both together where possible, separate only when needed

