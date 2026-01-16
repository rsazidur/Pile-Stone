import { NextResponse } from 'next/server';

export async function POST() {
    // In a real app, you would parse request.formData() here
    return NextResponse.json({ success: true, message: "Message sent! We will get back to you soon." });
}
