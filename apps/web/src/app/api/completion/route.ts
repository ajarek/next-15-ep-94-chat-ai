import {generateText} from 'ai'
import {google} from '@ai-sdk/google'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try{
  const { prompt } = await req.json();
  const { text } = await generateText({
    model: google("gemini-2.5-pro"),
    prompt,
  });
  return NextResponse.json({ text });
  } catch (error) {
    console.error("Error generating text:", error);
    return NextResponse.json({ error: "Failed to generate text" }, { status: 500 });
  }
}
