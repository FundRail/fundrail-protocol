# FundRail

> **Programmable payment infrastructure built on Stellar.**

FundRail is an open-source infrastructure project for building programmable payment workflows on the Stellar network.

Instead of simply moving funds from A to B, FundRail lets developers define rules for how payments should be **split, held, released, routed, and automated**.

### Example

```text
Payment received
       ↓
   Apply rules
       ↓
 ┌─────┼─────┐
 ↓     ↓     ↓
70%   20%   10%
 ↓     ↓     ↓
Creator Agency Reserve
```

## What we're building

* **Payment Splitting** — distribute funds across multiple recipients.
* **Escrow** — hold and release funds based on defined conditions.
* **Payment Workflows** — define rules for automated financial operations.
* **Developer SDK & API** — build FundRail-powered payment experiences.
* **Payment Links & Invoices** — connect real-world payment flows to programmable infrastructure.

## Tech Stack

* **Stellar** — settlement network
* **Soroban** — smart contracts
* **Rust** — contract development
* **TypeScript / Next.js** — application layer
* **PostgreSQL** — off-chain data

## Status

🚧 **Early development**

FundRail is currently being built from the ground up, starting with its core payment and smart-contract infrastructure before expanding into advanced workflow automation.

## Contributing

FundRail is open source and welcomes contributions across smart contracts, frontend, backend, SDKs, testing, documentation, and developer experience.

See [`CONTRIBUTING.md`](./CONTRIBUTING.md) to get started.

## Vision

FundRail aims to make financial workflows programmable:

> **Define what should happen to money. FundRail handles the execution.**

---

**FundRail — Programmable payment infrastructure built on Stellar.**
