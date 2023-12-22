import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";


export async function GET(req,res) {
    const prisma= new PrismaClient();
    

    

    try{
        const getAll= await prisma.users.findMany()
        return NextResponse.json({status:"success",total:getAll.length,data:getAll},{status:200})
    }
    catch(err){
        return NextResponse.json({status:"failed",data:err},{status:500})
    }

}
