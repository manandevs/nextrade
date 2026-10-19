import { NextResponse } from "next/server";

export async function GET() {
  try {
    const coins = [
      {
        id: "bitcoin",
        name: "Bitcoin",
        symbol: "BTC",
        sub: "Bitcoin Token",
        price: 68430.12,
        change24h: 5.74,
        marketCap: "$1.34T",
        volume24h: "$34.2B",
        sparkline: [64000, 65200, 64800, 66100, 67000, 67500, 68430],
        image: "/images/coins/bitcoin.jpg",
        color: "from-[#F7931A] to-[#E8820B]",
      },
      {
        id: "ethereum",
        name: "Ethereum",
        symbol: "ETH",
        sub: "Proof of Stake",
        price: 3540.85,
        change24h: 4.12,
        marketCap: "$425.6B",
        volume24h: "$18.4B",
        sparkline: [3300, 3350, 3400, 3380, 3450, 3500, 3540],
        image: "/images/coins/ethereum.jpg",
        color: "from-[#7C8CFF] to-[#4A5BDB]",
      },
      {
        id: "binancecoin",
        name: "BNB Chain",
        symbol: "BNB",
        sub: "Proof of Stake",
        price: 615.40,
        change24h: 2.85,
        marketCap: "$94.2B",
        volume24h: "$2.1B",
        sparkline: [590, 598, 605, 602, 610, 612, 615],
        image: "/images/coins/bnb.jpg",
        color: "from-[#FFD43B] to-[#E0A800]",
      },
      // {
      //   id: "matic-network",
      //   name: "Polygon",
      //   symbol: "POL",
      //   sub: "Proof of Stake",
      //   price: 0.542,
      //   change24h: -1.25,
      //   marketCap: "$5.4B",
      //   volume24h: "$410M",
      //   sparkline: [0.56, 0.55, 0.552, 0.548, 0.545, 0.54, 0.542],
      //   image: "/images/coins/polygon.jpg",
      //   color: "from-[#A06BFF] to-[#6A35D9]",
      // },
      // {
      //   id: "solana",
      //   name: "Solana",
      //   symbol: "SOL",
      //   sub: "Proof of Stake",
      //   price: 185.30,
      //   change24h: 8.45,
      //   marketCap: "$86.1B",
      //   volume24h: "$7.9B",
      //   sparkline: [168, 172, 175, 178, 180, 182, 185],
      //   image: "/images/coins/solana.jpg",
      //   color: "from-[#3DDC97] to-[#16A36A]",
      // },
    ];

    return NextResponse.json(coins);
  } catch {
    return NextResponse.json(
      { error: "Unable to fetch market data" },
      { status: 502 }
    );
  }
}
