"use client";

import { env } from "@/env.mjs";
import { useLanyard } from "react-use-lanyard";
const DISCORD_USER_ID = env.NEXT_PUBLIC_APP_DISCORD_ID;

export function GetDiscordLanyard() {
    const { loading, status } = useLanyard({
        userId: DISCORD_USER_ID,
        socket: true,
    });
    return { loading, status };
}
