# ADR: Stellar wallet integration selection

## Status

Proposed

## Context

FundRail requires wallet connectivity for account discovery, network visibility, and transaction signing. The wallet layer must support the Stellar network, be straightforward for developers, and work well in a browser-based application.

## Decision

Use a browser wallet integration strategy centered on Freighter as the default wallet for the first implementation, with a wallet abstraction layer that can support future providers.

## Rationale

- Freighter is a widely used Stellar wallet and supports browser-based signing workflows.
- The abstraction keeps the application decoupled from provider-specific APIs.
- The same pattern allows later expansion to alternate wallet integrations without redesigning the app.

## Consequences

### Positive

- Fast path to wallet connection and signing support
- Clear developer experience for Stellar accounts
- Easier future provider compatibility

### Negative

- Additional abstraction and provider compatibility work is required
- Browser wallet support is subject to extension availability and user authorization
