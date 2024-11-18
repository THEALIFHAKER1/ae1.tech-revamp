import { BodyText, HeroTitle, SectionTitle } from "@/components/ui/text";
import { skillsConfig } from "@/config/skills";
import {
    TooltipProvider,
    Tooltip,
    TooltipTrigger,
    TooltipContent,
} from "@/components/ui/tooltip";

export default function HeroDetails() {
    return (
        <div className="flex flex-col items-center justify-center text-center md:items-start md:text-start">
            <HeroTitle className="leading-none">THEALIFHAKER1</HeroTitle>

            <BodyText className="text-neutral-500 w-72">
                MUHAMMAD ALIF DANIEL BIN MOHD HAIRUL HEZZELIN
            </BodyText>

            <SectionTitle className="leading-loose">
                Fullstack Developer {"</>"}
            </SectionTitle>

            <div className=" flex w-full flex-row justify-center space-x-2 overflow-x-auto md:justify-start">
                {skillsConfig.map((item, id) => (
                    <TooltipProvider key={id}>
                        <Tooltip>
                            <TooltipTrigger>
                                <div
                                    key={id}
                                    className="h-10 grid w-10 place-content-center rounded border border-black px-3 py-4 dark:border-neutral-700 bg-[#F5F5F5] dark:bg-[#1C1C1E] saturate-150 filter backdrop-blur-md"
                                >
                                    <item.icon />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>{item.name}</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                ))}
            </div>
        </div>
    );
}
