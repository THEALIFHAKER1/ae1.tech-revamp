"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { useTheme } from "next-themes";

interface WrapperPageProps {
    children: React.ReactNode;
}

export default function WrapperPage({ children }: WrapperPageProps) {
    const pathname = usePathname();
    const { theme } = useTheme();
    const [currentTheme, setCurrentTheme] = useState(theme);
    const [isOverflow, setIsOverflow] = useState(false);

    useEffect(() => {
        setCurrentTheme(theme);
    }, [theme]);

    // Check if content overflows the viewport height
    useEffect(() => {
        const checkOverflow = () => {
            const pageHeight =
                document.getElementById("page")?.scrollHeight || 0;
            const viewportHeight = window.innerHeight * 0.8;
            setIsOverflow(pageHeight > viewportHeight);
        };

        checkOverflow();

        // Recheck on resize in case content changes or window resizes
        window.addEventListener("resize", checkOverflow);
        return () => {
            window.removeEventListener("resize", checkOverflow);
        };
    }, [pathname, children]);

    return (
        <motion.main
            key={`${pathname}-${currentTheme}`}
            initial={{ opacity: 0, filter: "blur(5px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ ease: "anticipate", duration: 0.5 }}
            id="page"
            className={`flex flex-col px-4 min-h-[calc(100dvh-160px)] md:min-h-[calc(100dvh-115px)] max-w-screen-2xl mx-auto ${
                isOverflow && "pb-20 md:pb-10"
            }`}
        >
            {children}
        </motion.main>
    );
}
