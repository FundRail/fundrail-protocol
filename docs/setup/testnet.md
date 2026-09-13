# Stellar Testnet setup

Use this guide to create a working local wallet and account on Stellar Testnet.

## Required configuration

- Network: Testnet
- Passphrase: `Test SDF Network ; September 2015`
- RPC: `https://soroban-testnet.stellar.org`

## Create an account

1. Install and open a compatible wallet such as Freighter.
2. Choose the Testnet network in the wallet.
3. Generate or import an account.
4. Fund the account using the Testnet friendbot endpoint.

Example:

```bash
curl "https://friendbot.stellar.org?addr=<ACCOUNT_PUBLIC_KEY>"
```

## Query the account

```bash
stellar account <ACCOUNT_PUBLIC_KEY>
```

## Notes

- Keep account secrets out of version control.
- Use `.env.*` files only with placeholders and local values.
- For contract deployment and tests, prefer local Soroban host testing when possible.
