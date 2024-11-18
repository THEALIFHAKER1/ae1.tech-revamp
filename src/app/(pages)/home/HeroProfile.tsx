import React from "react";
import HeroPicture from "@/assets/heroProfile.svg";
import Image from "next/image";

function HeroProfile() {
    return (
        <div className={`relative`}>
            <Image
                src={HeroPicture}
                width={400}
                height={400}
                alt="Hero Picture"
                priority
                className="h-[calc(100dvh-400px)] md:h-auto"
            />
            <div
                className={`absolute inset-0 bg-gradient-to-b from-transparent from-40% to-background to-90% `}
            />
        </div>
    );
}

export default HeroProfile;
