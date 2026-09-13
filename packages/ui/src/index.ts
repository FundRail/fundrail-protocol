import * as React from 'react';

export const uiVersion = '0.1.0';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function getButtonClass(variant: ButtonVariant = 'primary', className?: string) {
  const lookup: Record<ButtonVariant, string> = {
    primary:
      'inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500',
    secondary:
      'inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-slate-700',
    ghost:
      'inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-300 transition hover:bg-slate-800',
  };

  return [lookup[variant], className].filter(Boolean).join(' ');
}

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  return React.createElement(
    'button',
    { className: getButtonClass(variant, className), ...props },
    children,
  );
}

export function Badge({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return React.createElement(
    'span',
    {
      className: `inline-flex items-center rounded-full border border-blue-500/40 bg-blue-500/10 px-2.5 py-1 text-xs font-medium uppercase tracking-[0.18em] text-blue-300 ${className}`,
    },
    children,
  );
}

export function Input({
  label,
  className = '',
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label?: string }) {
  const input = React.createElement('input', {
    className: `w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-slate-50 outline-none transition placeholder:text-slate-500 focus:border-blue-500 ${className}`,
    ...props,
  });

  if (!label) {
    return input;
  }

  return React.createElement(
    'label',
    { className: 'block text-sm text-slate-300' },
    React.createElement(
      'span',
      { className: 'mb-2 block text-xs uppercase tracking-[0.2em] text-slate-400' },
      label,
    ),
    input,
  );
}

export function Card({
  title,
  eyebrow,
  description,
  className = '',
}: {
  title: string;
  eyebrow?: string;
  description: string;
  className?: string;
}) {
  const content = [
    eyebrow ? React.createElement('p', { key: 'eyebrow', className: 'text-xs uppercase tracking-[0.2em] text-slate-400' }, eyebrow) : null,
    React.createElement('h2', { key: 'title', className: 'mt-3 text-2xl font-semibold text-white' }, title),
    React.createElement('p', { key: 'desc', className: 'mt-3 text-sm leading-6 text-slate-300' }, description),
  ];

  return React.createElement('article', { className: `rounded-2xl border border-slate-800 bg-slate-900 p-6 ${className}` }, content);
}

export function Sidebar({ items }: { items: Array<{ label: string; active?: boolean }> }) {
  return React.createElement(
    'aside',
    { className: 'w-72 rounded-2xl border border-slate-800 bg-slate-900 p-4' },
    React.createElement('div', { className: 'mb-6 px-2' },
      React.createElement('p', { className: 'text-sm font-medium uppercase tracking-[0.2em] text-blue-400' }, 'FundRail'),
    ),
    React.createElement(
      'nav',
      { className: 'space-y-2' },
      items.map((item) =>
        React.createElement(
          'button',
          {
            key: item.label,
            className: `w-full rounded-lg px-3 py-2 text-left text-sm font-medium ${
              item.active ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-800'
            }`,
          },
          item.label,
        ),
      ),
    ),
  );
}

export function Header({ title }: { title: string }) {
  return React.createElement(
    'header',
    { className: 'flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 px-6 py-4' },
    React.createElement('div', null,
      React.createElement('p', { className: 'text-xs uppercase tracking-[0.2em] text-slate-400' }, 'Operations'),
      React.createElement('h1', { className: 'mt-2 text-2xl font-semibold text-white' }, title),
    ),
    React.createElement(
      'div',
      { className: 'flex items-center gap-3' },
      React.createElement(Badge, null, 'Testnet'),
      React.createElement(Button, { variant: 'primary' }, 'Connect wallet'),
    ),
  );
}

export function WalletPanel() {
  return React.createElement(
    'section',
    { className: 'rounded-2xl border border-slate-800 bg-slate-900 p-5' },
    React.createElement('p', { className: 'text-xs uppercase tracking-[0.2em] text-slate-400' }, 'Wallet'),
    React.createElement('div', { className: 'mt-4 flex items-center justify-between' },
      React.createElement('div', null,
        React.createElement('p', { className: 'text-sm text-slate-400' }, 'Connected account'),
        React.createElement('p', { className: 'mt-1 text-lg font-semibold text-white' }, 'GABC...8F13'),
      ),
      React.createElement(Badge, null, 'Connected'),
    ),
    React.createElement('div', { className: 'mt-5 grid grid-cols-2 gap-3 text-sm' },
      React.createElement('div', { className: 'rounded-xl bg-slate-800 p-3' },
        React.createElement('p', { className: 'text-slate-400' }, 'XLM'),
        React.createElement('p', { className: 'mt-2 font-semibold text-white' }, '125.40'),
      ),
      React.createElement('div', { className: 'rounded-xl bg-slate-800 p-3' },
        React.createElement('p', { className: 'text-slate-400' }, 'USDC'),
        React.createElement('p', { className: 'mt-2 font-semibold text-white' }, '848.20'),
      ),
    ),
  );
}

export function NotificationPanel() {
  return React.createElement(
    'section',
    { className: 'rounded-2xl border border-slate-800 bg-slate-900 p-5' },
    React.createElement('p', { className: 'text-xs uppercase tracking-[0.2em] text-slate-400' }, 'Notifications'),
    React.createElement('ul', { className: 'mt-4 space-y-3' },
      React.createElement('li', { className: 'rounded-xl bg-slate-800 p-3 text-sm text-slate-200' }, 'Batch payment approved by finance ops'),
      React.createElement('li', { className: 'rounded-xl bg-slate-800 p-3 text-sm text-slate-200' }, 'Treasury threshold review pending'),
      React.createElement('li', { className: 'rounded-xl bg-slate-800 p-3 text-sm text-slate-200' }, 'Wallet network switched to Testnet'),
    ),
  );
}
