import { serverApiBaseUrl } from "@/constant"
import axios from "axios"
import { NextResponse } from "next/server"

export const GET = async () => {

    const { data } = await axios.get(serverApiBaseUrl)
    return NextResponse.json({ Users: data }, { status: 200 })
}