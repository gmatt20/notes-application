import connectMongoDB from "../libs/mongodb";
import Note from "../models/note";
import { NextResponse } from "next/server"

export async function POST(request) {
  const { title, description } = new request.json();
  await connectMongoDB();
  await Note.create({ title, description });
  return NextResponse;
}
