
const flows = [
  {
    label: 'Creator payout',
    amount: '$7,000',
    percentage: '70%',
    recipient: 'Creator',
  },
  {
    label: 'Agency fee',
    amount: '$2,000',
    percentage: '20%',
    recipient: 'Agency',
  },
  {
    label: 'Reserve',
    amount: '$1,000',
    percentage: '10%',
    recipient: 'Reserve',
  },
];

const useCases = [
  {
    number: '01',
    title: 'Revenue splitting',
    description:
      'Automatically distribute incoming payments across contributors, partners, teams, or accounts.',
  },
  {
    number: '02',
    title: 'Milestone payments',
    description:
      'Hold funds in escrow and release them when predefined milestones are approved.',
  },
  {
    number: '03',
    title: 'Recurring workflows',
    description:
      'Define payment rules once and create repeatable financial workflows without manual processing.',
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07090d] text-white">
      {/* Navigation */}
      <header className="relative z-20 border-b border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-black text-black">
              F
            </div>

            <span className="text-lg font-semibold tracking-tight">
              FundRail
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
            <a
              href="#product"
              className="transition hover:text-white"
            >
              Product
            </a>

            <a
              href="#how-it-works"
              className="transition hover:text-white"
            >
              How it works
            </a>

            <a
              href="#use-cases"
              className="transition hover:text-white"
            >
              Use cases
            </a>

            <a
              href="#developers"
              className="transition hover:text-white"
            >
              Developers
            </a>

            <a
              href="#docs"
              className="transition hover:text-white"
            >
              Docs
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#developers"
              className="hidden rounded-lg px-4 py-2 text-sm text-slate-300 transition hover:bg-white/[0.05] hover:text-white sm:block"
            >
              GitHub
            </a>

            <button className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-slate-200">
              Launch app
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-blue-500/[0.08] blur-[140px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-24 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:pb-32 lg:pt-32">
          {/* Hero copy */}
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-2 text-xs text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Programmable payments on Stellar
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Move money by
              <span className="block text-slate-500">
                rules, not manual steps.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
              FundRail gives you programmable payment infrastructure for
              splitting, routing, holding, and releasing funds automatically
              on Stellar.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button className="rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-slate-200">
                Build a payment flow
                <span className="ml-2">→</span>
              </button>

              <button className="rounded-xl border border-white/[0.1] bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/[0.07]">
                Explore the docs
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-slate-500">
              <span>Open source</span>
              <span>•</span>
              <span>Stellar</span>
              <span>•</span>
              <span>Soroban</span>
              <span>•</span>
              <span>Developer-first</span>
            </div>
          </div>

          {/* Payment flow visual */}
          <div className="relative">
            <div className="absolute -inset-8 rounded-[40px] bg-blue-500/[0.04] blur-2xl" />

            <div className="relative rounded-3xl border border-white/[0.08] bg-[#0c1017] p-5 shadow-2xl shadow-black/30">
              {/* Card header */}
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                    Active workflow
                  </p>

                  <p className="mt-1 font-medium text-white">
                    Client payment split
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-3 py-1.5 text-xs text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Active
                </div>
              </div>

              {/* Trigger */}
              <div className="py-6">
                <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-slate-500">
                  Trigger
                </p>

                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-lg">
                      ↓
                    </div>

                    <div>
                      <p className="text-sm font-medium">
                        Payment received
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        USDC · $10,000.00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connector */}
              <div className="relative ml-5 h-7 border-l border-dashed border-slate-700">
                <div className="absolute -bottom-1 -left-[3px] h-1.5 w-1.5 rounded-full bg-slate-600" />
              </div>

              {/* Action */}
              <div>
                <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-slate-500">
                  Action
                </p>

                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10 text-sm">
                      ✦
                    </div>

                    <div>
                      <p className="text-sm font-medium">
                        Split payment
                      </p>

                      <p className="text-xs text-slate-500">
                        3 recipients
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {flows.map((flow) => (
                      <div
                        key={flow.label}
                        className="flex items-center justify-between rounded-xl bg-black/20 px-3 py-2.5"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-2 w-2 rounded-full bg-slate-500" />

                          <div>
                            <p className="text-xs text-slate-300">
                              {flow.recipient}
                            </p>

                            <p className="text-[10px] text-slate-600">
                              {flow.label}
                            </p>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="text-xs font-medium">
                            {flow.amount}
                          </p>

                          <p className="text-[10px] text-slate-600">
                            {flow.percentage}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom status */}
              <div className="mt-5 flex items-center justify-between rounded-xl border border-white/[0.05] bg-white/[0.02] px-4 py-3">
                <span className="text-xs text-slate-500">
                  Executed automatically
                </span>

                <span className="font-mono text-[10px] text-slate-600">
                  STELLAR · TESTNET
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product statement */}
      <section
        id="product"
        className="border-y border-white/[0.06] bg-white/[0.015]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
              The idea
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Payments should do more than move from A to B.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400">
              FundRail turns payment instructions into programmable
              workflows. Define what should happen when money arrives,
              who receives it, when funds are released, and what happens
              next.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.07] md:grid-cols-3">
            <div className="bg-[#0a0d12] p-7">
              <div className="text-2xl">↗</div>

              <h3 className="mt-8 font-medium">
                Define
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Create rules that describe how your money should move.
              </p>
            </div>

            <div className="bg-[#0a0d12] p-7">
              <div className="text-2xl">◇</div>

              <h3 className="mt-8 font-medium">
                Automate
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Let smart contracts execute the financial logic.
              </p>
            </div>

            <div className="bg-[#0a0d12] p-7">
              <div className="text-2xl">✓</div>

              <h3 className="mt-8 font-medium">
                Verify
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Track every transaction and workflow on Stellar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
      >
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              How it works
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              One payment.
              <span className="block text-slate-500">
                Multiple outcomes.
              </span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              Instead of manually moving funds between accounts, describe
              the workflow once and let FundRail handle the execution.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                number: '01',
                title: 'Connect',
                text: 'Connect a Stellar wallet and choose the asset you want to work with.',
              },
              {
                number: '02',
                title: 'Define',
                text: 'Create rules, recipients, conditions, milestones, and payment actions.',
              },
              {
                number: '03',
                title: 'Review',
                text: 'Preview exactly how the workflow will execute before signing.',
              },
              {
                number: '04',
                title: 'Execute',
                text: 'Sign the transaction and let the FundRail protocol execute the workflow.',
              },
            ].map((step) => (
              <div
                key={step.number}
                className="group flex gap-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition hover:border-white/[0.12] hover:bg-white/[0.035]"
              >
                <span className="font-mono text-xs text-slate-600">
                  {step.number}
                </span>

                <div>
                  <h3 className="font-medium">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section
        id="use-cases"
        className="border-y border-white/[0.06] bg-[#090c11]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Use cases
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                Built for real payment workflows.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              Start with simple payment automation and build toward
              increasingly powerful financial workflows.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {useCases.map((item) => (
              <div
                key={item.number}
                className="group rounded-3xl border border-white/[0.07] bg-[#0c1016] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/[0.14]"
              >
                <span className="font-mono text-xs text-slate-600">
                  {item.number}
                </span>

                <h3 className="mt-16 text-xl font-medium">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {item.description}
                </p>

                <div className="mt-8 text-sm text-slate-400 transition group-hover:text-white">
                  Explore use case →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stellar section */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="overflow-hidden rounded-[32px] border border-white/[0.07] bg-gradient-to-br from-[#111722] to-[#0a0d12]">
          <div className="grid items-center gap-12 p-8 md:p-12 lg:grid-cols-[1fr_0.8fr] lg:p-16">
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.04] font-semibold">
                ✦
              </div>

              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Built on Stellar
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                Financial workflows,
                <span className="block text-slate-500">
                  powered by Soroban.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
                FundRail uses Stellar smart-contract infrastructure to
                make payment rules transparent, programmable, and
                verifiable on-chain.
              </p>

              <button className="mt-8 rounded-xl border border-white/[0.1] bg-white/[0.04] px-5 py-3 text-sm font-medium transition hover:bg-white/[0.08]">
                Explore the architecture →
              </button>
            </div>

            <div className="relative flex min-h-[280px] items-center justify-center">
              <div className="absolute h-56 w-56 rounded-full border border-white/[0.06]" />
              <div className="absolute h-40 w-40 rounded-full border border-white/[0.08]" />
              <div className="absolute h-24 w-24 rounded-full border border-white/[0.1]" />

              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/[0.12] bg-white/[0.06] shadow-2xl">
                ✦
              </div>

              <span className="absolute left-8 top-16 text-[10px] uppercase tracking-widest text-slate-600">
                Wallet
              </span>

              <span className="absolute right-3 top-24 text-[10px] uppercase tracking-widest text-slate-600">
                Contract
              </span>

              <span className="absolute bottom-12 left-20 text-[10px] uppercase tracking-widest text-slate-600">
                Workflow
              </span>

              <span className="absolute bottom-16 right-12 text-[10px] uppercase tracking-widest text-slate-600">
                Settlement
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Developers */}
      <section
        id="developers"
        className="border-t border-white/[0.06]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                For developers
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                Do not build payment infrastructure from scratch.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
                Use FundRail contracts, SDK, APIs, and workflow
                primitives to build programmable payment experiences
                into your own applications.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black">
                  Read the docs
                </button>

                <button className="rounded-xl border border-white/[0.1] px-5 py-3 text-sm font-medium">
                  View GitHub
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-white/[0.07] bg-[#0b0f15] p-6">
              <div className="mb-5 flex items-center justify-between">
                <span className="font-mono text-xs text-slate-500">
                  fundrail.ts
                </span>

                <span className="text-xs text-emerald-400">
                  TypeScript
                </span>
              </div>

              <pre className="overflow-x-auto text-xs leading-7 text-slate-400">
                <code>{`const workflow = fundRail
  .payment()
  .whenReceived()
  .split([
    { recipient: creator, share: 70 },
    { recipient: agency, share: 20 },
    { recipient: reserve, share: 10 },
  ])
  .build();

await workflow.execute();`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Open source CTA */}
      <section id="docs" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.025] px-6 py-16 text-center md:px-12">
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-blue-500/[0.08] blur-[100px]" />

          <div className="relative">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Open source infrastructure
            </p>

            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
              The future of payments should be programmable.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500">
              FundRail is being built in the open. Explore the protocol,
              contribute to the codebase, or build something on top of it.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <button className="rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black">
                Explore FundRail
              </button>

              <button className="rounded-xl border border-white/[0.1] px-6 py-3.5 text-sm font-medium">
                Contribute on GitHub
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-[10px] font-black text-black">
              F
            </div>

            <span>FundRail</span>
          </div>

          <div className="flex gap-6">
            <a href="#product" className="hover:text-slate-300">
              Product
            </a>

            <a href="#developers" className="hover:text-slate-300">
              Developers
            </a>

            <a href="#docs" className="hover:text-slate-300">
              Docs
            </a>

            <a href="#" className="hover:text-slate-300">
              GitHub
            </a>
          </div>

          <p>
            Programmable payment infrastructure on Stellar.
          </p>
        </div>
      </footer>
    </main>
  );
}

