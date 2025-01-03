"use client";

import { GetDiscordLanyard } from "@/app/api/get-discord-lanyard";

export default function DiscordStatus() {
    const { loading, status } = GetDiscordLanyard();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Discord Status</h1>
            <pre>{JSON.stringify(status, null, 4)}</pre>;
        </div>
    );
}
