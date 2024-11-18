"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useSessionStorage } from "usehooks-ts";
import Loader from "./loader";

interface WrapperPageProps {
    children: React.ReactNode;
}
export default function WrapperLoader({ children }: WrapperPageProps) {
    const { theme } = useTheme();
    const [LoaderStatus, setLoaderStatus] = useSessionStorage(
        "firstload",
        false
    );
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        if (isMounted && !LoaderStatus) {
            setTimeout(() => {
                setLoaderStatus(true);
            }, 2000);
        }
    }, [isMounted, LoaderStatus, setLoaderStatus, theme]);

    if (!isMounted || !LoaderStatus) {
        return <Loader />;
    }

    return <>{children}</>;
}
