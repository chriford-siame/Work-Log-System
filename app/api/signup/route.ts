
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient, User } from "@prisma/client";

interface ErrorWithStatus extends Error {
    status?: number;
    field?: string;
}

export async function POST(request: NextRequest) {
    const client = new PrismaClient();
    try {
        const {
            username,
            email,
            password,
            confirmPassword,
        } = await request.json();

        // Regular expression for email validation
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!emailRegex.test(email)) {
            console.log('Invalid email format');
            const response = NextResponse.json({ message: "invalidEmailFormat" }, { status: 400 });
            return response;
        }

        // Checks whether or not the email address or username is unique
        const userExists = await client.user.findUnique(
            {
                where: {
                    email: email
                }
            }
        ) || await client.user.findUnique(
            {
                where: {
                    username: username
                }
            }
        )
        if (userExists) {
            const response = NextResponse.json({ message: "User already exists" }, { status: 409 });
            return response
        }

        // Regular expression for password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|[\]\\';:,.<>/?]).{8,}$/;
        if (!passwordRegex.test(password)) {
            console.log('Invalid password format');
            const response = NextResponse.json({ message: "invalidPasswordFormat" }, { status: 400 });
            return response;
        }

        if (password !== confirmPassword) {
            console.log('Passwords not matching');
            const response = NextResponse.json({ message: "passwordsDontMatch" }, { status: 405 });
            return response
        }

        // Save the submitted User information
        const user = await client.user.create({
            data: {
                email: email,
                username: username,
                password: password,
            }
        });

        return NextResponse.json({
            message: "Account created successfully",
            body: JSON.stringify(user),
        }, { status: 201 });

    } catch (error) {
        console.error(error);
        const err = error as ErrorWithStatus;
        return NextResponse.json({ field: err.field, message: err.message }, { status: err.status });
    }
}























