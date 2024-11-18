import { useEffect, useRef, useState } from "react";
import { getTextColor } from "@/lib/get-text-color";
import { LanguagesColorConfig } from "@/config/languages-color";
import { SmallText } from "@/components/ui/text";
import { motion } from "motion/react";

interface LanguageBadgeProps {
    language: string;
}

export default function LanguageBadge({ language }: LanguageBadgeProps) {
    const [expandedBadge, setExpandedBadge] = useState<string | null>(null);
    const [textWidth, setTextWidth] = useState<number>(0); // Store the text width
    const textRef = useRef<HTMLSpanElement>(null); // Ref to measure text width

    const languageColor =
        LanguagesColorConfig[language as keyof typeof LanguagesColorConfig] ??
        "";
    const textColor = getTextColor(languageColor, language);
    const isOpen = expandedBadge === language;

    const handleClick = () => {
        setExpandedBadge((prev) => (prev === language ? null : language));
    };

    // Measure the text width on mount and store it
    useEffect(() => {
        if (textRef.current) {
            setTextWidth(textRef.current.offsetWidth);
        }
    }, [language]); // Recalculate if language changes

    return (
        <motion.div
            className="relative flex items-center justify-center cursor-pointer overflow-hidden"
            onClick={handleClick}
            style={{
                backgroundColor: languageColor,
                color: textColor,
                borderRadius: "9999px",
            }}
            animate={{
                width: isOpen ? textWidth + 24 : 12, // Add padding for spacing
                height: 22,
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
            }}
        >
            {/* Invisible span to measure the text width */}
            <span
                ref={textRef}
                className="absolute invisible whitespace-nowrap"
            >
                <SmallText>{language}</SmallText>
            </span>

            {/* Visible span with the animated opacity */}
            <motion.span
                className="absolute whitespace-nowrap"
                style={{ color: textColor }}
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.2 }}
            >
                <SmallText>{language}</SmallText>
            </motion.span>
        </motion.div>
    );
}
