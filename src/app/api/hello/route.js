import dbConnect from "@/lib/dbConnect";
import { nameModel } from "@/models/Name";
import { NextResponse } from "next/server";

export async function GET(){
    await dbConnect()
    const value = await nameModel.create({ name: "Test" + Math.random() });
    return NextResponse.json({ message: value.name });
}