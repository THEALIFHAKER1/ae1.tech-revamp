import React from "react";

export default function ScreenSizeDetector() {
    return (
        <div className="flex gap-2">
            <p>Screen Size:</p>
            <span className="4xl:hidden 3xl:hidden xs:hidden hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">
                2XL
            </span>
            <span className="4xl:hidden 3xl:hidden xs:hidden hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">
                XL
            </span>
            <span className="4xl:hidden 3xl:hidden xs:hidden hidden sm:hidden md:hidden lg:block xl:hidden 2xl:hidden">
                Lg
            </span>
            <span className="4xl:hidden 3xl:hidden xs:hidden hidden sm:hidden md:block lg:hidden xl:hidden 2xl:hidden">
                md
            </span>
            <span className="4xl:hidden 3xl:hidden xs:hidden hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
                sm
            </span>
            <span className="4xl:hidden 3xl:hidden xs:block hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
                xs
            </span>
            <span className="4xl:hidden 3xl:hidden xs:hidden block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
                below xs
            </span>
        </div>
    );
}
