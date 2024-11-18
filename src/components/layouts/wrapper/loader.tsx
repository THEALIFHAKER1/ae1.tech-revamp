"use client";

import Image from "next/image";
import { motion as m } from "motion/react";

import LOGO from "@/assets/logo.svg";

type LoaderProps = {
    loadingText?: string;
};

export default function Loader({ loadingText }: LoaderProps) {
    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { duration: 0.5, ease: "easeInOut" },
            }}
            exit={{
                opacity: 0,
                transition: { duration: 0.5, ease: "easeInOut" },
            }}
            className="relative h-dvh flex flex-col items-center justify-center font-sans focus:focus-visible:focus:outline-none"
        >
            <span className="z-[1] animate-pulse font-sans text-8xl sm:text-[30vh]">
                <Image src={LOGO} alt="Logo" width={128} height={128} />
            </span>
            {loadingText && (
                <span className="z-[1] font-mono text-sm uppercase">
                    [{loadingText}]
                </span>
            )}
        </m.div>
    );
}
