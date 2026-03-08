---
title: Optimization
navigation: false
description: Precompiles, GPU acceleration, distributed proving, and precompile hints.
---

ZisK is fast by default, but when you need more, there are four levers to pull: **precompiles** replace expensive operations with native VM instructions, **GPU proving** accelerates the polynomial math on NVIDIA GPUs, **distributed proving** splits the workload across multiple processes or machines, and **precompile hints** pre-compute precompile results outside the VM to further accelerate proof generation.

- [Precompiles](/optimization/precompiles): native acceleration for expensive operations
- [GPU Proving](/optimization/gpu-proving): use NVIDIA GPUs to speed up proof generation
- [Distributed Proving](/optimization/distributed-proving): MPI, coordinator-worker clusters, and Docker deployment
- [Precompile Hints](/optimization/precompile-hints): pre-compute precompile results for faster proving
- [Generating Hints](/optimization/generating-hints): emit and process hints from your guest program
