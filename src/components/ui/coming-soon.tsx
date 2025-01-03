import React from "react";

interface IndicatorProps {
    status: "comingsoon" | "inprogress";
}

export default function Indicator({ status }: IndicatorProps) {
    return (
        <div className="flex justify-center items-center h-full w-full">
            {status === "comingsoon" ? "Coming Soon" : "In Progress"}
        </div>
    );
}
