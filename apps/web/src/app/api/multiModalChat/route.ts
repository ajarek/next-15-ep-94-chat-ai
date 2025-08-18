import { streamText,  convertToModelMessages } from "ai";
import type { UIMessage, } from "ai";
import { google } from "@ai-sdk/google";
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json();

    const result = streamText({
      model: google("gemini-2.5-pro"),
      messages: convertToModelMessages(messages),
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("Error streaming chat completion:", error);
    return new NextResponse("Failed to stream chat completion", { status: 500 });
  }
}