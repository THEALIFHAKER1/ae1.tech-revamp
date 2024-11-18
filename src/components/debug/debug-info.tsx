"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import ViewTransition from "@/components/debug/view-transition/view-transition";
import { motion } from "motion/react";
import { Icons } from "../icons/icons";
import ScreenSizeDetector from "./screen-size-detector/screen-size-detector";
import { Card } from "../ui/card";
import { BodyText, FooterText } from "../ui/text";

interface DebugInfoProps {
    isDev: boolean;
}

export default function DebugInfo({ isDev }: DebugInfoProps) {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isDevMode, setIsDevMode] = useState(isDev);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const toggleCollapse = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        setIsCollapsed((prevState) => !prevState);
    }, []);

    const handleContainerClick = () => {
        if (isCollapsed) {
            setIsCollapsed(true);
        }
    };

    const resetTimer = useCallback(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        if (!isCollapsed) {
            timerRef.current = setTimeout(() => {
                setIsCollapsed(true);
            }, 5000);
        }
    }, [isCollapsed]);

    useEffect(() => {
        resetTimer();
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, [isCollapsed, resetTimer]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.ctrlKey && event.key === "d") {
                setIsDevMode((prevState) => !prevState);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0, x: -50, transition: { duration: 0.5 } },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <Card
            className={` ${
                isDevMode ? "block" : "hidden"
            } opacity-50 hover:opacity-100 transition-opacity duration-300 fixed bottom-24 md:bottom-14 left-3 py-2 px-4 bg-[#F5F5F5] dark:bg-[#1C1C1E] overflow-hidden z-50 text-xs saturate-150 filter backdrop-blur-md`}
        >
            <motion.div
                onClick={handleContainerClick}
                onMouseOver={() => {
                    if (timerRef.current) {
                        clearTimeout(timerRef.current);
                    }
                }}
                onMouseLeave={resetTimer}
                role="button"
                aria-expanded={!isCollapsed}
                aria-controls="debug-content"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {isCollapsed && (
                    <motion.button
                        onClick={toggleCollapse}
                        aria-expanded={!isCollapsed}
                        aria-controls="debug-content"
                        initial="hidden"
                        animate="visible"
                        variants={buttonVariants}
                    >
                        <div className="flex gap-2">
                            <Icons.dev />
                            <BodyText className="leading-7">DEV MODE</BodyText>
                        </div>
                    </motion.button>
                )}
                {!isCollapsed && (
                    <motion.div
                        id="debug-content"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <BodyText className="font-bold">
                            List of debug information:
                        </BodyText>
                        <FooterText>
                            <ScreenSizeDetector />
                            <ViewTransition />
                        </FooterText>
                    </motion.div>
                )}
            </motion.div>
        </Card>
    );
}
