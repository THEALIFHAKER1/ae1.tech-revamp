"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";

export function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className={`relative overflow-hidden transition-all duration-300 ${
                theme === "dark"
                    ? "hover:shadow-lg hover:shadow-blue-500" // Glow color for dark theme
                    : "hover:shadow-lg hover:shadow-yellow-500" // Glow color for light theme
            }`}
        >
            <motion.div
                initial={{ rotate: 0 }}
                animate={{
                    rotate: theme === "dark" ? 360 : 0,
                }}
                transition={{ duration: 0.5 }}
                className="relative flex items-center justify-center"
            >
                <Sun
                    className={`h-[1.2rem] w-[1.2rem] transition-all ${
                        theme === "dark"
                            ? "rotate-0 scale-0"
                            : "rotate-90 scale-100"
                    }`}
                />
                <Moon
                    className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
                        theme === "dark"
                            ? "rotate-0 scale-100"
                            : "rotate-180 scale-0"
                    }`}
                />
            </motion.div>
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
