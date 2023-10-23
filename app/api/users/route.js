import axios from "axios"
import { NextResponse } from "next/server"

export const GET = async () => {

    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
    return NextResponse.json({ Users: data }, { status: 200 })
}