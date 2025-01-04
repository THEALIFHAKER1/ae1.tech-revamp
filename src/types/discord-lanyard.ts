export type DiscordLanyardTypes = {
    success: boolean;
    data?: {
        spotify?: {
            track_id: string;
            song: string;
            artist: string;
            album_art_url: string;
        };
        listening_to_spotify: boolean;
        discord_user: {
            id: string;
            username: string;
            avatar: string;
            discriminator: string;
            public_flags: number;
        };
        discord_status: "online" | "idle" | "dnd" | "offline";
        activities: Array<{
            name: string;
            type: number;
            state?: string;
            details?: string;
            timestamps?: {
                start?: number;
                end?: number;
            };
        }>;
        active_on_discord_mobile: boolean;
        active_on_discord_desktop: boolean;
    };
    error?: string;
};
