import {prisma} from "../../../libs/prisma";
import {NextResponse} from "next/server";
import crypto from 'crypto';
interface Body {
    name: string;
    email: string;
    password: string;
}

export async function POST(request: Request) {
    const body: Body = await request.json();
    const {name, email, password} = body;
   
    if (!name || !email || !password) {
        return new NextResponse("Missing Fields", {status: 400});
    }

    const exist = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (exist) {
        throw new Error("Email already exists");
    }

    const hashedPassword: string = crypto
    .createHash('sha256') // Use the hash algorithm of your choice (e.g., sha256)
    .update(password + 10) // Combine the password and salt
    .digest('hex'); // Convert the hash to hexadecimal representation
  

    const user = await prisma.user.create({
        data: {
            name,
            email,
            hashedPassword: hashedPassword,
            username: name,
        },
    });

    return NextResponse.json(user);
}
