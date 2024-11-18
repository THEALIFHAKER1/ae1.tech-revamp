// components/TextShowcase.tsx
import { cn } from "@/lib/utils";
import React from "react";

// Shared Props Interface
interface TextProps {
    className?: string;
    children: React.ReactNode;
}
// Reusable Text Components with Clamp Sizes
export function HeroTitle({ children, className }: TextProps) {
    return (
        <span
            className={cn("font-bold", className)}
            style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
        >
            {children}
        </span>
    );
}

export function PageTitle({ children, className }: TextProps) {
    return (
        <span
            className={cn("font-bold", className)}
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
        >
            {children}
        </span>
    );
}

export function SectionTitle({ children, className }: TextProps) {
    return (
        <span
            className={cn("font-semibold", className)}
            style={{ fontSize: "clamp(1.1rem, 3vw, 1.2rem)" }}
        >
            {children}
        </span>
    );
}

export function SubsectionTitle({ children, className }: TextProps) {
    return (
        <span
            className={cn("font-medium", className)}
            style={{ fontSize: "clamp(0.8rem, 3vw, 0.9rem)" }}
        >
            {children}
        </span>
    );
}

export function BodyText({ children, className }: TextProps) {
    return (
        <span
            className={cn(className)}
            style={{ fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)" }}
        >
            {children}
        </span>
    );
}

export function SmallText({ children, className }: TextProps) {
    return (
        <span
            className={cn(className)}
            style={{ fontSize: "clamp(0.4rem, 2.5vw, 0.5rem)" }}
        >
            {children}
        </span>
    );
}

export function FooterText({ children, className }: TextProps) {
    return (
        <span
            className={cn(className)}
            style={{ fontSize: "clamp(0.75rem, 1.25vw, 0.875rem)" }}
        >
            {children}
        </span>
    );
}
