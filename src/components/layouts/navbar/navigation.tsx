"use client";
import React, { useMemo } from "react";
import { usePathname as Pathname } from "next/navigation";
import { routeConfig } from "@/config/route";
import { Link } from "next-view-transitions";
import { BodyText } from "@/components/ui/text";

function Navigation() {
    const pathname = Pathname();

    const renderedLinks = useMemo(() => {
        return routeConfig.map((link) => {
            const isActive =
                link.path === "/"
                    ? pathname === link.path
                    : pathname.includes(link.path);
            return (
                <li
                    key={link.path}
                    className={`hover:text-primary hover:scale-105 ${
                        isActive ? "text-primary" : "text-primary/30"
                    }`}
                    style={{ transition: "transform 0.2s, color 0.2s" }}
                >
                    <Link href={link.path} className="hidden md:block">
                        <BodyText> {link.label}</BodyText>
                    </Link>
                    <Link href={link.path} className="md:hidden">
                        <link.icon />
                    </Link>
                </li>
            );
        });
    }, [pathname]);

    return renderedLinks;
}

export default Navigation;
