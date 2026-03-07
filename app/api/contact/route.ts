import { NextRequest, NextResponse } from "next/server";
import supabase from "@/app/lib/supabase/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { subject, department, name, email, message } = body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !subject ||
      subject.trim() === "" ||
      !message ||
      message.trim() === "" ||
      !department
    ) {
      return NextResponse.json(
        { message: "Invalid input" },
        { status: 422 }
      );
    }

    const storeContactInfo = {
      email: email.trim(),
      department: department.trim(),
      subject: subject.trim(),
      name: name.trim(),
      message: message.trim(),
      website: "Prototype.NEXT",
    };

    const { error } = await supabase
      .from("contact_messages")
      .insert([storeContactInfo]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { message: "Oops, something went wrong while storing the message." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: "Successfully stored",
        payload: storeContactInfo,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { message: "Unexpected server error" },
      { status: 500 }
    );
  }
}