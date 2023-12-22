import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req,res) {
    
try{
    let reqBody= await req.json();
    console.log(reqBody);
    const prisma = new PrismaClient();
    const multitpleStudent= await prisma.users.createMany({
      data:reqBody
        
    })
    console.log(multitpleStudent);
    return NextResponse.json({status:"success",data:multitpleStudent},{status:200})
}
catch(e){
  console.log(e)
return NextResponse.json({status:"failed",data:e},{status:500})
}
}
