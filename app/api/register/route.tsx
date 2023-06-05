
import {prisma} from "../../../libs/prisma";
import {NextResponse} from "next/server";

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

    const user = await prisma.user.create({
        data: {
            name,
            email,
            hashedPassword: password,
            username: name,
        },
    });

    return NextResponse.json(user);
}
