import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";


export async function DELETE(req,res) {
    const{searchParams}= new URL(req.url);
    const id= parseInt(searchParams.get('id'));
    console.log(id);
    const prisma=new PrismaClient()


    try{
        const deleteData= await prisma.users.delete({
            where:{id:id}
        })
        return NextResponse.json({status:"success",data:deleteData},{status:200})
    }
    catch(e){
        return NextResponse.json({status:"failed",data:e.toString()},{status:500})
    }
}
