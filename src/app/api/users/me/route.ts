
import { NextRequest, NextResponse } from "next/server";
import {connectMongoDb} from '../../../../lib/MongoConnect'
import { User } from "../../../../lib/models/User";
import { getDataFromToken } from "@/lib/helper/get_data_from_token";

connectMongoDb();

export async function GET(request:NextRequest){

    try {
        const userId = await getDataFromToken(request);
        const user = await User.findOne({_id: userId}).select("-password");
        return NextResponse.json({
            mesaaage: "User found",
            data: user
        })
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

}