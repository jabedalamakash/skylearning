import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"


export async function PUT(req,res) {
const prisma=new PrismaClient();
const {searchParams}=new URL(req.url);
const id=Number(searchParams.get('id'));
console.log(id)
const reqBody=await req.json();
console.log(reqBody)
console.log(reqBody.firstName)

try{
    const updateData=await prisma.users.update({
        where: {id:id},
        data:reqBody
    
    })
    console.log(updateData)
return NextResponse.json({status:"success",data:updateData},{status:200})
}
catch(err){
    return NextResponse.json({status:"failed",data:err},{status:500})
}


}
