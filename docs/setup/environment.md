# Environment configuration reference

This project uses `.env.example`, `.env.local.example`, and `.env.test.example` as templates for local development and test environments.

## Shared variables

- `NEXT_PUBLIC_APP_NAME` – display name for the frontend app
- `NEXT_PUBLIC_APP_ENV` – environment name (`development`, `test`, `local`)
- `NEXT_PUBLIC_STELLAR_NETWORK` – network target, usually `testnet`
- `NEXT_PUBLIC_API_BASE_URL` – base URL for app API endpoints
- `NEXT_PUBLIC_ENABLE_ANALYTICS` – toggles analytics
- `STELLAR_NETWORK_PASSPHRASE` – Stellar network passphrase
- `STELLAR_RPC_URL` – RPC endpoint for Soroban operations
- `DATABASE_URL` – database connection string
- `REDIS_URL` – Redis connection string
- `JWT_SECRET` – JWT signing secret
- `SESSION_SECRET` – session secret
- `WALLET_SECRET_KEY` – wallet secret only when explicitly required for local testing

## Feature flags

- `FEATURE_PAYMENT_ROUTING` – enables payment routing logic
- `FEATURE_STELLAR_TESTNET` – enables Testnet flows in development

## Security notes

- Never commit real environment values.
- Keep secrets in local-only `.env` files that are ignored by Git.
- Rotate secrets if they are exposed.
