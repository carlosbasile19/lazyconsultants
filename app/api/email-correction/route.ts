import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";
const openai = new OpenAI();
import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import { PROMPT_INSTRUCTIONS_MAIL } from "@/constants";

interface ChatCompletionRequestMessage {
    role: 'user' | 'assistant' | 'system';
    content: string;
    name?: string;
  }

const instructionMessage: ChatCompletionRequestMessage = {
    role: 'system',
    content: PROMPT_INSTRUCTIONS_MAIL,
}


export async function POST(
    req: Request
) {
    try{
        const { userId} = auth();
        const body = await req.json();
        const {messages} = body;

        if(!userId)
            return new NextResponse("Unauthorized", {status: 401})
        
        if(!messages)
            return new NextResponse("Message is required", {status: 400})

            const freeTrial = await checkApiLimit();
            const isPro = await checkSubscription();
    
            if (!freeTrial && !isPro)
                return new NextResponse("You have reached the free limit", {status: 403})

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [instructionMessage, ...messages],
          });

        if(!isPro)
            await increaseApiLimit();

        return NextResponse.json(response.choices[0].message)

    }catch (e) {
        console.error("[CODE_ERROR]",e);
        return new NextResponse("Internal error", {status: 500})
    }
}