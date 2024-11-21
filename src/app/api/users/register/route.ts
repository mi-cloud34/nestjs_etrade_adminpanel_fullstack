
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import {connectMongoDb} from '../../../../lib/MongoConnect'
import { User } from "../../../../lib/models/User";

export async function POST(request: NextRequest){
    try {
        await connectMongoDb()
        const reqBody = await request.json()
        const {name, email, password} = reqBody

        console.log("bodyyyy",reqBody);

        //check if user already exists
        const user = await User.findOne({email})
           console.log("userss",user);
  
        if(user){
            return NextResponse.json({error: "User already exists"}, {status: 400})
        }
//hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        })
 const savedUser = await newUser.save()
        console.log(savedUser);
 //send verification email
// await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})
 return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })} catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
}