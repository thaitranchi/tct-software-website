import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    // Simulate sending the message (log it or integrate with an email service)
    console.log("Contact Form Data:", { name, email, message });

    // You can replace this with your actual email or database logic
    return NextResponse.json({ success: true, message: "Message received!" });
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
