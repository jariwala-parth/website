import { NextResponse } from 'next/server';

// Enable edge runtime for faster API responses
export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Here you would typically:
    // 1. Validate the data
    // 2. Store it in your database
    // 3. Send it to your analytics service (e.g., Google Analytics, DataDog, etc.)
    
    // For now, we'll just log it
    console.log('Performance metric received:', data);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing analytics:', error);
    return NextResponse.json(
      { error: 'Failed to process analytics data' },
      { status: 500 }
    );
  }
} 