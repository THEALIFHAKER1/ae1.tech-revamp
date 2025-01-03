"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Icons } from "@/components/icons/icons";
import { BodyText, PageTitle, SectionTitle } from "@/components/ui/text";
import { birthdayConfig } from "@/config/birthday";
import { useDaysUntilBirthday } from "@/hooks/useDaysUntilBirthday";
import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";

export default function Birthday() {
    const { days, hours, minutes, seconds, isWithin1Days } =
        useDaysUntilBirthday(birthdayConfig.date);

    const controls = useAnimation();

    // Start the rainbow gradient animation if within 7 days
    useEffect(() => {
        if (isWithin1Days) {
            controls.start({
                backgroundImage: [
                    "linear-gradient(45deg, #ff9a9e, #fad0c4, #fad0c4)",
                    "linear-gradient(45deg, #fbc2eb, #a6c1ee)",
                    "linear-gradient(45deg, #a1c4fd, #c2e9fb)",
                    "linear-gradient(45deg, #fcb69f, #ff9a9e)",
                ],
                transition: {
                    duration: 5,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse",
                },
            });
        }
    }, [isWithin1Days, controls]);

    return (
        <Card className="relative h-[150px]  w-full overflow-hidden">
            <motion.div
                animate={controls}
                className={`absolute w-full h-full inset-0  ${
                    isWithin1Days ? "" : "bg-purple-400"
                }`}
            />
            <CardHeader className="relative z-10 flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    <SectionTitle>Birthday</SectionTitle>
                </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
                <div className="text-nowrap text-lg font-bold">
                    <PageTitle>{days} Days</PageTitle>
                </div>
                <p className="text-xs">
                    <BodyText>Until birthday</BodyText>
                </p>
                {isWithin1Days && (
                    <p className="text-xs">
                        <BodyText>
                            {hours}h {minutes}m {seconds}s
                        </BodyText>
                    </p>
                )}
            </CardContent>
            <div className="absolute right-0 top-14 opacity-30 md:bottom-0">
                <Icons.cake size={100} />
            </div>
        </Card>
    );
}
