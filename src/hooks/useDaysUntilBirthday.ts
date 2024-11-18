"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
import { useLocalTime } from "@/hooks/useLocalTime";

interface BirthdayCountdown {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isWithin1Days: boolean;
}

export function useDaysUntilBirthday(birthday: string): BirthdayCountdown {
    const { malaysiaTime } = useLocalTime(); // Get Malaysia's local time (as Date object)

    // Memoize the malaysiaTime to avoid unnecessary recalculations
    const memoizedMalaysiaTime = useMemo(
        () => new Date(malaysiaTime),
        [malaysiaTime]
    );

    const [countdown, setCountdown] = useState<BirthdayCountdown>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isWithin1Days: false,
    });

    const calculateCountdown = useCallback(() => {
        const today = memoizedMalaysiaTime; // Use the memoized Malaysia time
        const dob = new Date(birthday);

        const nextBirthday = new Date(
            today.getFullYear(),
            dob.getMonth(),
            dob.getDate()
        );

        // If the birthday has passed this year, move it to the next year
        if (today > nextBirthday) {
            nextBirthday.setFullYear(today.getFullYear() + 1);
        }

        const diffTime = nextBirthday.getTime() - today.getTime();
        const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diffTime / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diffTime / (1000 * 60)) % 60);
        const seconds = Math.floor((diffTime / 1000) % 60);

        return {
            days,
            hours,
            minutes,
            seconds,
            isWithin1Days: days <= 1,
        };
    }, [memoizedMalaysiaTime, birthday]); // Dependency on memoizedMalaysiaTime

    useEffect(() => {
        const updateCountdown = () => setCountdown(calculateCountdown());

        // Initial calculation
        updateCountdown();

        // Update every second
        const intervalId = setInterval(updateCountdown, 1000);

        // Cleanup
        return () => clearInterval(intervalId);
    }, [calculateCountdown]);

    return countdown;
}
