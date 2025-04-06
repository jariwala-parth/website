import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const filePath = searchParams.get('file');
  
  if (!filePath || !filePath.endsWith('.css')) {
    return new NextResponse('File not found', { status: 404 });
  }
  
  try {
    // Construct the full path to the CSS file
    const fullPath = path.join(process.cwd(), '.next', 'static', filePath);
    
    // Read the file
    const cssContent = await fs.readFile(fullPath, 'utf8');
    
    // Return the CSS with proper headers
    return new NextResponse(cssContent, {
      headers: {
        'Content-Type': 'text/css; charset=utf-8',
        'X-Content-Type-Options': 'nosniff',
        'Cache-Control': 'public, max-age=31536000, immutable',
        'Content-Script-Type': 'text/javascript'
      }
    });
  } catch (error) {
    console.error('Error reading CSS file:', error);
    return new NextResponse('File not found', { status: 404 });
  }
} 