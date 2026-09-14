# FundRail

FundRail is a foundation project for building a Stellar/Soroban-powered payment workflow and dashboard. This repository establishes the initial structure, tooling, and project conventions for the FundRail monorepo.


## Repository layout

- `apps/` – user-facing applications
- `contracts/` – Rust/Soroban contracts
- `packages/` – shared utilities and libraries
- `docs/` – architecture, ADRs, and setup guides
- `scripts/` – automation and helper commands
- `.github/` – GitHub automation and repository metadata

## Getting started

### Prerequisites

- Node.js 20+
- pnpm 9+
- Rust stable
- Stellar CLI

### Install workspace dependencies

```bash
pnpm install
```

### Run Rust checks

```bash
cargo check
cargo test
```

### Build contract

```bash
stellar contract build
```

## Documentation

- [docs/setup/stellar-dev.md](docs/setup/stellar-dev.md)
- [docs/adr/wallet-integration-decision.md](docs/adr/wallet-integration-decision.md)
- [CONTRIBUTING.md](CONTRIBUTING.md)
- [SECURITY.md](SECURITY.md)
- [CHANGELOG.md](CHANGELOG.md)

## License

This project is licensed under the [MIT License](LICENSE).
