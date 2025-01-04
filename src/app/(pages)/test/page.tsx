"use client";
import EntryImage from "@/components/ui/entry-image";
import HeroPicture from "@/assets/heroProfile.svg";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <EntryImage
                src={HeroPicture}
                alt="Beautiful Image"
                width={600}
                height={400}
                priority
            />
            <p className="mt-4 text-lg text-gray-600">
                A beautiful fade-in effect!
            </p>
        </div>
    );
}
