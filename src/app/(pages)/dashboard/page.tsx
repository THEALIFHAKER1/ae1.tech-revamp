import CollapseComponents from "@/components/ui/collapse-components";
import { HeadingText } from "@/components/ui/heading-text";
import LocalTime from "./_components/time/time";
import { BentoGrid, BentoGroup, BentoGridItem } from "./_components/bento";
import Birthday from "./_components/birthday/birthday";
import Discord from "./_components/discord/discord";
import Duolingo from "./_components/duolingo/duolingo";

export default function DashboardPage() {
    return (
        <>
            <CollapseComponents
                nameComponent={
                    <HeadingText subtext="Statistics about my activities">
                        Dashboard
                    </HeadingText>
                }
                contentComponent={
                    <BentoGrid className="md:grid-cols-4">
                        <BentoGroup
                            top={
                                <BentoGridItem
                                    component={<LocalTime />}
                                    size={"1x1"}
                                />
                            }
                            bottom={
                                <BentoGridItem
                                    component={<Birthday />}
                                    size={"1x1"}
                                />
                            }
                        />
                        <BentoGridItem component={<Discord />} size={"2x1"} />
                        <BentoGridItem component={<Duolingo />} size={"1x1"} />
                    </BentoGrid>
                }
            />
        </>
    );
}
