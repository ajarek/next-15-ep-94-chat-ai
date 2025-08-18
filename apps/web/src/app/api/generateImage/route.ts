import { experimental_generateImage as generateImage } from "ai";
import { vertex } from '@ai-sdk/google-vertex';
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const { image } = await generateImage({
       model: vertex.image('imagen-3.0-generate-002'),
      prompt,
      aspectRatio: '16:9',
    });

    return NextResponse.json(image.base64);
  } catch (error) {
    console.error("Error generating image:", error);
    return new NextResponse("Failed to generate image", { status: 500 });
  }
}