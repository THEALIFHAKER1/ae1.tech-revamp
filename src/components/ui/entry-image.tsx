import { motion } from "motion/react";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

export default function EntryImage(props: ImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="overflow-hidden"
        >
            <Image
                {...props}
                alt={props.alt || ""}
                onLoad={() => setIsLoaded(true)}
                className={`transition-all duration-500 ${
                    isLoaded ? "scale-100 blur-0" : "scale-110 blur-md"
                }`}
            />
        </motion.div>
    );
}
