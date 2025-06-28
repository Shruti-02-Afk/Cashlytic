/*import {currentUser} from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async() => {
    const user = await currentUser();
    console.log("🧑 Clerk user:", user); // 👈 Add this
    if(!user) {
        console.log("❌ No Clerk user found");
        return null;
    }

    try{
        const loggedInUser = await db.user.findUnique({
            where: {
                clerkUserId : user.id,
            },
        });

        if(loggedInUser){
            console.log("✅ User already exists:", existingUser.email);
            return loggedInUser;
        }

        const name = `${user.firstName} ${user.lastName}`;

        const newUser = await db.user.create({
            data: {
                clerkUserId: user.id,
                name,
                imageUrl: user.imageUrl,
                email: user.emailAddresses[0].emailAddress,
            },
        });
        console.log("🎉 New user created:", newUser.email);
        return newUser;
    }catch(error){
        console.log(error.message);
    }
};*/
"use server"
import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
    const user = await currentUser();

    if (!user) {
        return null;
    }

    try {
        const loggedInUser = await db.user.findUnique({
            where: {
                clerkUserId: user.id,
            },
        });

        if (loggedInUser) {
            return loggedInUser;
        }

        const name = `${user.firstName} ${user.lastName}`;

        const newUser = await db.user.create({
            data: {
                clerkUserId: user.id,
                name,
                imageUrl: user.imageUrl,
                email: user.emailAddresses[0].emailAddress,
            },
        });

        return newUser;
    } catch (error) {
        console.log(error.message);
    }
};