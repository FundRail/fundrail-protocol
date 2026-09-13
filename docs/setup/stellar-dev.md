# Stellar development setup

This project is built around the Stellar/Soroban ecosystem and requires a Rust-first local toolchain.

## Required tools

- Rust toolchain (stable)
- Cargo and rustup
- Stellar CLI
- Node.js 20+
- pnpm 9+
- Postgres for local database work
- A compatible wallet such as Freighter
- Access to Stellar Testnet

## Recommended local environment

- VS Code with Rust Analyzer enabled
- Terminal with `pnpm`, `cargo`, and `stellar` on PATH
- Testnet RPC endpoint configured in environment files

## Notes

The current setup follows Soroban guidance: use Rust for contract development, Stellar CLI for builds and deployment, and a wallet for account management and signing.
