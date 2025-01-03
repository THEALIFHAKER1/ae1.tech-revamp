"use client";

import { Progress } from "@/components/ui/progress";
import { calculateProgress } from "./time-lib";
import { useState, useEffect } from "react";

interface SpotifyBarProps {
    start: number;
    end: number;
}

export function ProgressBar({ start, end }: SpotifyBarProps) {
    const [progress, setProgress] = useState(calculateProgress(start, end));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setProgress(calculateProgress(start, end));
        }, 1000);

        return () => clearInterval(intervalId);
    }, [start, end]);

    return (
        <div className="py-1">
            <Progress
                value={progress}
                className="w-full rounded bg-neutral-400 dark:bg-neutral-500"
            />
        </div>
    );
}
