"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { usePathname as Pathname } from "next/navigation";
import LOGO from "@/assets/logo.svg";
import Image from "next/image";
import { BodyText } from "@/components/ui/text";

function Logo() {
    const pathname = Pathname().replace(/\//g, "");
    const [typewriterStrings, setTypewriterStrings] = useState("");

    useEffect(() => {
        setTypewriterStrings(pathname);
    }, [pathname]);

    return (
        <>
            <div className="flex space-x-4 items-center">
                <Link href="/guestbook">
                    <Image
                        priority
                        src={LOGO}
                        alt="logo"
                        width={50}
                        height={50}
                        className="min-h-[50px] min-w-[50px] grayscale filter dark:filter-none"
                    />
                </Link>
                <BodyText>
                    <div className="hidden md:block">
                        <p>THEALIFHAKER1( );</p>
                        <Link href="/" className="flex">
                            {`~/`}
                            <Typewriter
                                options={{
                                    strings: typewriterStrings,
                                    autoStart: true,
                                }}
                            />
                        </Link>
                    </div>
                </BodyText>
            </div>
        </>
    );
}

export default Logo;
