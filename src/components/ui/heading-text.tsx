import { SectionTitle, SubsectionTitle } from "./text";

interface HeadingProps {
    children: string;
    subtext?: string;
}

export function HeadingText({ children, subtext }: HeadingProps) {
    return (
        <div className="grid">
            <SectionTitle className="text-lg font-semibold">
                {children}
            </SectionTitle>
            {subtext && (
                <SubsectionTitle className="font-light text-zinc-500 dark:text-zinc-400">
                    {subtext}
                </SubsectionTitle>
            )}
        </div>
    );
}
