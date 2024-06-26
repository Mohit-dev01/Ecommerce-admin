import prismadb from "@/lib/prismadb"
import { auth } from "@clerk/nextjs"
import { NEXT_BUILTIN_DOCUMENT } from "next/dist/shared/lib/constants"
import { NextResponse } from "next/server"

export async function POST ( req: Request) {
    try{
        const {userId} = auth()
        const body = await req.json()

        const {name} = body

        if(!userId){
            return new NextResponse("Unauthorised", {status: 401})
        }

        if(!name){
            return new NextResponse("Name is required", {status: 400})
        }

        
        const store = await prismadb.store.create({
            data:{
                name,
                userId
            }
        })

        // return new NextResponse(store);
    }
    catch(error){
        console.log("[Stores-Post]", error)
        return new NextResponse("Internal Error", {status : 500})
    }
}