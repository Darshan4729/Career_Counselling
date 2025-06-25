import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export async function POST(req: NextRequest) {
  try {
    console.log('Chat API request received');
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      console.error('Invalid request format:', { messages });
      return NextResponse.json(
        { error: 'Invalid request format. Messages array is required.' },
        { status: 400 }
      );
    }

    // Add system message if not present
    const systemMessage = {
      role: 'system' as const,
      content: `You are an AI career counselor. Help users explore career options based on their skills, interests, and test results.
      Be supportive, professional, and provide actionable advice.`,
    };

    console.log('Sending request to OpenAI with messages:', messages);
    const chatCompletion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [systemMessage, ...messages],
      temperature: 0.7,
    });

    console.log('Received response from OpenAI');
    const reply = chatCompletion.choices[0].message;

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error('Error in chat API:', {
      error,
      message: error.message,
      response: error.response?.data,
      stack: error.stack,
    });
    
    // Handle specific OpenAI errors
    if (error.response?.data?.error?.message) {
      console.error('OpenAI error details:', error.response.data);
      return NextResponse.json(
        { 
          error: error.response.data.error.message,
          details: error.response.data.error
        },
        { status: error.response.status || 500 }
      );
    }

    return NextResponse.json(
      { 
        error: error.message || 'Failed to process chat message',
        details: error.response?.data || error.stack
      },
      { status: 500 }
    );
  }
}
