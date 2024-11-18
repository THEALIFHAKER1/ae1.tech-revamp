import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <>
            <div className="flex h-[calc(100dvh-190px)] flex-col items-center justify-center text-center">
                <div className="hero-container">
                    <h1 className={` hero glitch layers text-8xl`}>
                        <span>404</span>
                    </h1>
                </div>
                <div className=" flex flex-col gap-2">
                    <h2 className="max-w-[15rem]  text-sm">
                        An error occurred while trying to access this page
                    </h2>
                    <Link href={"/"}>
                        <Button className="">
                            Home
                            {/* <Icons.back /> */}
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
}
