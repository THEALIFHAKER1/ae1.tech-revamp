import { useEffect, useMemo, useState } from "react";
import { format, formatInTimeZone } from "date-fns-tz";

interface UseLocalTimeOptions {
    localFormat?: string;
    malaysiaFormat?: string;
}

export function useLocalTime({
    localFormat = "EEEE, MMMM do, yyyy 'at' hh:mm:ss a zzz",
    malaysiaFormat = "EEEE, MMMM do, yyyy 'at' hh:mm:ss a zzz",
}: UseLocalTimeOptions = {}) {
    const [time, setTime] = useState<Date>(new Date());
    const [is24Hour, setIs24Hour] = useState<boolean>(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const localTimeFormat = useMemo(() => {
        return is24Hour
            ? localFormat.replace(/h/g, "H").replace(/ a/g, "")
            : localFormat;
    }, [is24Hour, localFormat]);

    const malaysiaTime = useMemo(() => {
        return formatInTimeZone(
            time,
            "Asia/Kuala_Lumpur",
            "yyyy-MM-dd'T'HH:mm:ssXXX"
        );
    }, [time]);

    const formattedLocalTime = useMemo(() => {
        return format(time, localTimeFormat);
    }, [time, localTimeFormat]);

    const malaysiaTimeFormat = useMemo(() => {
        return is24Hour
            ? malaysiaFormat.replace(/h/g, "H").replace(/ a/g, "")
            : malaysiaFormat;
    }, [is24Hour, malaysiaFormat]);

    const formattedMalaysiaTime = useMemo(() => {
        return formatInTimeZone(time, "Asia/Kuala_Lumpur", malaysiaTimeFormat);
    }, [time, malaysiaTimeFormat]);

    const toggleFormat = () => {
        setIs24Hour((prevFormat) => !prevFormat);
    };

    // Check if it is nighttime
    const isNight = useMemo(() => {
        const hours = time.getHours();
        return hours >= 19 || hours < 6; // Nighttime from 7 PM to 6 AM
    }, [time]);

    return {
        formattedLocalTime,
        formattedMalaysiaTime,
        malaysiaTime,
        is24Hour,
        toggleFormat,
        isNight, // Return the nighttime check
    };
}
