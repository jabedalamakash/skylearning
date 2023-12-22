import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req,res) {
    
try{
    let reqBody= await req.json();
    console.log(reqBody);
    // let{firstName,lastName,age,grade,courses}=reqBody;
    const prisma = new PrismaClient();
    const createStudent= await prisma.users.create({
        data: reqBody       
    })
    console.log(createStudent);
    return NextResponse.json({status:"success",data:createStudent},{status:200})
}
catch(e){
return NextResponse.json({status:"failed",data:e.toString()},{status:500})
}


}

