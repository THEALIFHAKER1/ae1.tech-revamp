"use client";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { motion } from "motion/react";
import { useState } from "react";

interface CollapseComponentsProps {
    nameComponent: React.ReactNode;
    contentComponent: React.ReactNode;
    defaultOpen?: boolean;
}

export default function CollapseComponents({
    nameComponent,
    contentComponent,
    defaultOpen = true,
}: CollapseComponentsProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const toggleAccordion = () => {
        setIsOpen((prev) => !prev);
    };
    return (
        <div className="border-b">
            <div className="flex">
                <button
                    onClick={toggleAccordion}
                    className="flex flex-1 items-center justify-between py-4 text-left text-sm font-medium transition-all"
                >
                    {nameComponent}
                    <ChevronDownIcon
                        className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                        }`}
                    />
                </button>
            </div>
            <motion.div
                className="overflow-hidden text-sm"
                initial={{ maxHeight: 0, opacity: 0 }}
                animate={{
                    maxHeight: isOpen ? "1000px" : 0,
                    opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <div className="pb-4 pt-0">{contentComponent}</div>
            </motion.div>
        </div>
    );
}
