# Contributing to FundRail

Thanks for your interest in FundRail. This project is built as a multi-workspace monorepo spanning the frontend, contracts, and shared packages.

## Development workflow

1. Fork the repository and create a feature branch.
2. Install the workspace toolchain:
   - Node.js 20+
   - pnpm 9+
   - Rust stable
   - Stellar CLI for Soroban work
3. Run the workspace checks relevant to your change.
4. Add or update tests for any behavior change.
5. Open a pull request with a clear description and screenshots when relevant.

## Coding standards

- Prefer clear, small, well-documented changes.
- Follow the existing structure for frontend components and Rust modules.
- Avoid committing secrets or local environment files.
- Keep documentation in sync with implementation changes.

## Commit guidance

- Use conventional commit style when possible:
  - `feat:` for new features
  - `fix:` for bug fixes
  - `docs:` for documentation updates
  - `chore:` for tooling and repository maintenance

## Pull requests

- Keep PRs focused on one concern.
- Include a brief summary and testing notes.
- Link the related issue or milestone when applicable.

## Security

Please do not report security vulnerabilities in public issues. Review [SECURITY.md](SECURITY.md) for reporting instructions.
