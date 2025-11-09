"use client";

import { useEffect, useState } from "react";

type TradingSummary = {
  startingBalance: number;
  currentBalance: number;
  totalPnL: number;
  winRate: number; // percent
  tradesCount: number;
  bestTradePnL: number;
  worstTradePnL: number;
};

type EquityPoint = { date: string; balance: number };

type Trade = {
  id: string;
  date: string;
  symbol: string;
  side: "LONG" | "SHORT";
  qty: number;
  entry: number;
  exit: number;
  pnl: number;
};

type TradingResponse = {
  summary: TradingSummary;
  equityCurve: EquityPoint[];
  recentTrades: Trade[];
};

function formatCurrency(n: number) {
  return n.toLocaleString(undefined, { style: "currency", currency: "USD" });
}

export default function TradingPage() {
  const [data, setData] = useState<TradingResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/trading");
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        const json = (await res.json()) as TradingResponse;
        setData(json);
      } catch (e: any) {
        setError(e?.message ?? "Failed to load trading data");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <div className="container space-y-10 py-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Trading Dashboard</h1>
        <p className="text-muted-foreground">A simple view of recent performance. Data is currently mocked from a fake API.</p>
      </div>

      {loading && (
        <div className="text-sm text-muted-foreground">Loading trading data…</div>
      )}

      {error && (
        <div className="rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
          {error}
        </div>
      )}

      {data && (
        <div className="space-y-10">
          {/* Summary cards */}
          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <SummaryCard label="Starting Balance" value={formatCurrency(data.summary.startingBalance)} />
            <SummaryCard label="Current Balance" value={formatCurrency(data.summary.currentBalance)} />
            <SummaryCard label="Total P&L" value={formatCurrency(data.summary.totalPnL)} valueClass={data.summary.totalPnL >= 0 ? "text-emerald-600" : "text-red-600"} />
            <SummaryCard label="Win Rate" value={`${data.summary.winRate.toFixed(1)}%`} />
            <SummaryCard label="# Trades" value={String(data.summary.tradesCount)} />
            <SummaryCard label="Best Trade" value={formatCurrency(data.summary.bestTradePnL)} valueClass="text-emerald-600" />
            <SummaryCard label="Worst Trade" value={formatCurrency(data.summary.worstTradePnL)} valueClass="text-red-600" />
          </section>

          {/* Equity curve */}
          <section className="space-y-3">
            <h2 className="text-xl font-medium tracking-tight">Equity Curve</h2>
            <div className="rounded-lg border bg-card p-4">
              <Sparkline points={data.equityCurve.map(p => p.balance)} className="h-24 w-full" positive={data.summary.totalPnL >= 0} />
              <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                <span>{new Date(data.equityCurve[0].date).toLocaleDateString()}</span>
                <span>{new Date(data.equityCurve[data.equityCurve.length - 1].date).toLocaleDateString()}</span>
              </div>
            </div>
          </section>

          {/* Recent trades */}
          <section className="space-y-3">
            <h2 className="text-xl font-medium tracking-tight">Recent Trades</h2>
            <div className="overflow-x-auto">
              <table className="min-w-[640px] w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b bg-muted/30 text-left">
                    <Th>Date</Th>
                    <Th>Symbol</Th>
                    <Th>Side</Th>
                    <Th className="text-right">Qty</Th>
                    <Th className="text-right">Entry</Th>
                    <Th className="text-right">Exit</Th>
                    <Th className="text-right">P&L</Th>
                  </tr>
                </thead>
                <tbody>
                  {data.recentTrades.map((t) => (
                    <tr key={t.id} className="border-b last:border-0">
                      <Td>{new Date(t.date).toLocaleDateString()}</Td>
                      <Td>{t.symbol}</Td>
                      <Td>
                        <span className={
                          t.side === "LONG"
                            ? "rounded bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-700"
                            : "rounded bg-red-500/10 px-2 py-0.5 text-xs font-medium text-red-700"
                        }>
                          {t.side}
                        </span>
                      </Td>
                      <Td className="text-right">{t.qty}</Td>
                      <Td className="text-right">{formatCurrency(t.entry)}</Td>
                      <Td className="text-right">{formatCurrency(t.exit)}</Td>
                      <Td className={`text-right ${t.pnl >= 0 ? "text-emerald-600" : "text-red-600"}`}>{formatCurrency(t.pnl)}</Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

function SummaryCard({ label, value, valueClass }: { label: string; value: string; valueClass?: string }) {
  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className={`mt-1 text-xl font-semibold ${valueClass ?? ""}`}>{value}</div>
    </div>
  );
}

function Th({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <th className={`px-3 py-2 ${className}`}>{children}</th>;
}
function Td({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <td className={`px-3 py-2 ${className}`}>{children}</td>;
}

function Sparkline({ points, className, positive }: { points: number[]; className?: string; positive?: boolean }) {
  const width = 600;
  const height = 96;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const pad = 8;
  const scaleX = (i: number) => pad + (i * (width - pad * 2)) / Math.max(points.length - 1, 1);
  const scaleY = (v: number) => {
    if (max === min) return height / 2;
    return height - pad - ((v - min) * (height - pad * 2)) / (max - min);
  };
  const d = points.map((p, i) => `${i === 0 ? "M" : "L"}${scaleX(i)},${scaleY(p)}`).join(" ");

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className={className} aria-label="Equity sparkline">
      <path d={d} fill="none" stroke={positive ? "#059669" : "#dc2626"} strokeWidth={2} />
    </svg>
  );
}
