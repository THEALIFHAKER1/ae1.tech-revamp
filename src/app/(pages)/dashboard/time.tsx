"use client";
import { useLocalTime } from "@/hooks/useLocalTime";
import { useRef, useEffect } from "react";
import drawStars from "./draw-star";
import Sun from "./sun";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BodyText, PageTitle, SectionTitle } from "@/components/ui/text";

export default function LocalTime() {
    const { formattedMalaysiaTime, toggleFormat, isNight } = useLocalTime({
        malaysiaFormat: "hh:mm a",
    });
    const nightCanvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = nightCanvasRef.current;
        if (canvas) drawStars(canvas, isNight);
    }, [isNight]);
    return (
        <Card
            onClick={toggleFormat}
            className={` relative h-[150px]  w-full overflow-hidden  ${
                !isNight && "bg-blue-400"
            }`}
        >
            <div className={"relative h-full w-full"}>
                <canvas
                    ref={nightCanvasRef}
                    aria-hidden
                    className={`${isNight && "bg-black w-full h-full"}`}
                />
                <div className={"absolute inset-0"}>
                    <CardHeader
                        className={
                            "flex flex-row items-center justify-between space-y-0 pb-2"
                        }
                    >
                        <CardTitle className={"text-sm font-medium"}>
                            <SectionTitle>
                                {isNight ? "Night" : "Day"}
                            </SectionTitle>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className={"whitespace-nowrap text-lg font-bold"}>
                            <PageTitle>{formattedMalaysiaTime}</PageTitle>
                        </div>
                        <p className={`text-xs font-light`}>
                            <BodyText>Malaysia Time (GMT+8)</BodyText>
                        </p>
                        {!isNight && <Sun />}
                    </CardContent>
                </div>
            </div>
        </Card>
        // <div
        //     className={`relative w-full h-full ${
        //         isNight ? "bg-black" : "bg-blue-400"
        //     }`}
        // >
        //     {isNight && (
        //         <canvas
        //             ref={nightCanvasRef}
        //             aria-hidden
        //             className={`${isNight && "bg-black w-full h-full"}`}
        //         />
        //     )}
        //     {!isNight && <Sun />}
        //     <div className="text-white text-center">
        //         <span>Malaysia Time: {formattedMalaysiaTime}</span>
        //     </div>
        // </div>
    );
}

{
    /* <div>
<div>
    <span>Malaysia Time: {formattedMalaysiaTime}</span>
</div>
<div>
    <span>
        It is currently {isNight ? "nighttime" : "daytime"} in
        Malaysia
    </span>
</div>
<button onClick={toggleFormat}>
    Switch to {is24Hour ? "12-hour" : "24-hour"} format
</button>
</div> */
}
