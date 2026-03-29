import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json(
    {
      message:
        'AI suggestions coming soon — for now, enjoy our curated picks!',
    },
    { status: 501 }
  );
}
