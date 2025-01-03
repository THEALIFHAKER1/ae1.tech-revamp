"use client";
import { GetDiscordLanyard } from "@/app/api/get-discord-lanyard";
import { Icons } from "@/components/icons/icons";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/text";
import { motion } from "motion/react";
import Profile from "./profile";
import { Skeleton } from "@/components/ui/skeleton";
import Activities from "./activities";

export default function Discord() {
    const { loading, status } = GetDiscordLanyard();
    return (
        <Card className="relative h-full w-full overflow-hidden text-white bg-[#7289DA] backdrop-blur-sm backdrop-saturate-150">
            <Icons.discord className="absolute -right-4 -top-4 h-40 w-40 -rotate-45 text-white/20" />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-nowrap text-sm font-medium text-white">
                    <SectionTitle>Discord Activity</SectionTitle>
                </CardTitle>
            </CardHeader>
            <CardContent className="grid max-h-max gap-2">
                {loading ? (
                    <SkeletonDiscord />
                ) : (
                    status && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="grid max-h-max gap-2"
                        >
                            <Profile
                                data={status.discord_user}
                                OnlineStatus={status.discord_status}
                                status={status.activities.filter(
                                    (activity) =>
                                        activity.name === "Custom Status"
                                )}
                            />
                            <Activities
                                activities={status.activities}
                                spotify={status.spotify}
                            />
                        </motion.div>
                    )
                )}
            </CardContent>
        </Card>
    );
}

function SkeletonDiscord() {
    return (
        <>
            <div className="flex gap-2">
                <Skeleton className="w-[155px] h-[80px] rounded-lg" />
                <Skeleton className="h-[80px] w-32 rounded-xl" />
            </div>
            <Skeleton className="h-[94px] w-full rounded-xl" />
        </>
    );
}
