import Category from "@/lib/models/Category";
import Product from "@/lib/models/Product";
import { connectMongoDb } from "@/lib/MongoConnect";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
    try {
        const body=await request.json();
       
       
        const {name}=body;
        await connectMongoDb();
        const data=await Category.create({
           name
        })
       
        

        console.log("data",data);
        
    return NextResponse.json({msg:"UpdateSuccessful",data})
    } catch (error) {
        return NextResponse.json({
            error,
            msg:"Something wrong"
        },
    {status:400}
    )
    }
}