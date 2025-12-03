import { NextResponse } from 'next/server'

export async function POST(req) {
  const data = await req.json();

  await new Promise((res) => setTimeout(res, 1000));

  return Response.json({
    success: true,
    message: "Form submitted!",
    data,
  });
}
