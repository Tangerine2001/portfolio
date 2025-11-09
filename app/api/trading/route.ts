import { NextResponse } from "next/server";

// Fake trading data for demonstration purposes only
const mockData = {
  summary: {
    startingBalance: 10000,
    currentBalance: 12430.55,
    totalPnL: 2430.55,
    winRate: 62.5, // percent
    tradesCount: 16,
    bestTradePnL: 540.2,
    worstTradePnL: -210.75,
  },
  equityCurve: [
    { date: "2025-10-01", balance: 10000 },
    { date: "2025-10-08", balance: 10210 },
    { date: "2025-10-15", balance: 10120 },
    { date: "2025-10-22", balance: 10840 },
    { date: "2025-10-29", balance: 11210 },
    { date: "2025-11-05", balance: 11950 },
    { date: "2025-11-08", balance: 12430.55 },
  ],
  recentTrades: [
    {
      id: "T-001",
      date: "2025-11-07",
      symbol: "AAPL",
      side: "LONG",
      qty: 20,
      entry: 218.1,
      exit: 225.2,
      pnl: 142.0,
    },
    {
      id: "T-002",
      date: "2025-11-06",
      symbol: "NVDA",
      side: "SHORT",
      qty: 5,
      entry: 117.4,
      exit: 112.6,
      pnl: 24.0,
    },
    {
      id: "T-003",
      date: "2025-11-04",
      symbol: "TSLA",
      side: "LONG",
      qty: 10,
      entry: 224.9,
      exit: 212.8,
      pnl: -121.0,
    },
    {
      id: "T-004",
      date: "2025-11-01",
      symbol: "BTC-USD",
      side: "LONG",
      qty: 0.05,
      entry: 69000,
      exit: 70100,
      pnl: 55.0,
    },
  ],
};

export async function GET() {
  // Simulate small latency to mimic a real API
  await new Promise((r) => setTimeout(r, 350));
  return NextResponse.json(mockData);
}
