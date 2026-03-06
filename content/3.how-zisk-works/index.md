---
title: How ZisK Works
navigation.icon: i-heroicons-light-bulb
navigation.title: How ZisK Works
description: Understand the guest/host architecture, data flow, and proving pipeline.
---

In the previous chapter you wrote, built, and proved a Fibonacci program. You used `io::read()`, `io::commit()`, `ProverClient`, and `ZiskStdin`, but we didn't stop to explain what was happening behind the scenes. This chapter fills in those gaps.

Understanding these concepts will help you write better programs, debug issues faster, and make informed decisions about proof types and optimization.

- [Architecture](/how-zisk-works/architecture): the guest/host split, the VM, and the execution model
- [Data Flow](/how-zisk-works/data-flow): how input gets to the guest, how output gets committed, and the serialization details
- [The Proving Pipeline](/how-zisk-works/proving-pipeline): what happens between "execute" and "here's your proof"
