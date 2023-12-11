import logFetchAll from "@/prisma/log/getAll";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const logs = await logFetchAll();
    const response = await NextResponse.json(
        { body: JSON.stringify(logs) },
        { status: 200 }
    )
    return response;
}
