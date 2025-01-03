"use client";

import * as React from "react";
import { Progress } from "@/components/ui/progress";
export function calculateProgress(
    startTimestamp: number,
    endTimestamp: number
): number {
    const currentDateTimestamp: number = new Date().getTime();

    if (startTimestamp > endTimestamp) {
        throw new Error(
            "Invalid timestamps: startTimestamp should be less than endTimestamp."
        );
    }

    const totalDuration: number = endTimestamp - startTimestamp;
    const elapsedTime: number = currentDateTimestamp - startTimestamp;
    let progress: number = (elapsedTime / totalDuration) * 100;
    progress = Math.min(100, Math.max(0, progress));

    return parseFloat(progress.toFixed(2));
}

interface SpotifyBarProps {
    start: number;
    end: number;
}

export function ProgressBar({ start, end }: SpotifyBarProps) {
    const [progress, setProgress] = React.useState(
        calculateProgress(start, end)
    );

    React.useEffect(() => {
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
