import CollapseComponents from "@/components/ui/collapse-components";
import { HeadingText } from "@/components/ui/heading-text";
import LocalTime from "./time";
import { BentoGrid, BentoGroup, BentoGridItem } from "./bento";
import Birthday from "./birthday";
import Discord from "./discord";
import Duolingo from "./duolingo";

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
