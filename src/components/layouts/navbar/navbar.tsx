import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import Logo from "./logo";
import Navigation from "./navigation";

export default function Navbar() {
    return (
        <>
            {/* Navbar */}
            <nav
                className={`blur-background sticky top-0 z-50 w-full border-b border-input p-3 px-5 md:border-none`}
            >
                <div className={`flex justify-between`}>
                    <Logo />
                    <div className={`flex items-center gap-4`}>
                        <ul
                            className={`hidden items-center space-x-4 text-foreground md:flex`}
                        >
                            <Navigation />
                        </ul>
                        <ThemeSwitcher />
                    </div>
                </div>
            </nav>

            {/* Bottom Navigation for Mobile */}
            <footer
                className={`blur-background fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center overflow-auto border-t border-input px-5 py-7 md:hidden`}
            >
                <div className={`flex items-center gap-4`}>
                    <ul
                        className={`flex items-center space-x-10 text-sm md:space-x-4`}
                    >
                        <Navigation />
                    </ul>
                </div>
            </footer>
        </>
    );
}
