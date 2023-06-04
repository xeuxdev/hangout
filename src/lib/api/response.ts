import { NextResponse } from "next/server"

export const AppResponse = (message: string, status: number) => {
  return NextResponse.json(
    { message: message },
    {
      status,
    }
  )
}
