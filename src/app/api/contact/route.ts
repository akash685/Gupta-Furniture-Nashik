import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function POST(request: Request) {
  try {
    await connectDB();
    
    const body = await request.json();
    
    if (!body.name || !body.phone) {
      return NextResponse.json(
        { message: "Required fields missing", success: false },
        { status: 400 }
      );
    }
    
    const contact = await Contact.create({
      name: body.name,
      phone: body.phone,
      email: body.email,
      category: body.category,
      requirements: body.requirements,
      message: body.message
    });

    return NextResponse.json({ 
      message: "Contact saved successfully",
      success: true,
      contact 
    });
  } catch (error) {
    console.error('Contact save error:', error);
    return NextResponse.json(
      { message: "Error saving contact", success: false },
      { status: 500 }
    );
  }
}
