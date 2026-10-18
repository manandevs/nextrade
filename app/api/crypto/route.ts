
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://pro-api.coinmarketcap.com/public-api/v2/simple/price?symbol=BTC,ETH,BNB,MATIC,SOL&convert=USD",
      {
        cache: "force-cache",
        next: {
          revalidate: 60,
        },
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Market data unavailable" },
        { status: 502 }
      );
    }

    const result = await response.json();

    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      { error: "Unable to fetch market data" },
      { status: 502 }
    );
  }
}
