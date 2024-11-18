import { Icons } from "@/components/icons/icons";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/text";

function Disocrd() {
    return (
        <Card className="relative h-full  w-full overflow-hidden text-white bg-[#7289DA] backdrop-blur-sm backdrop-saturate-150 ">
            <Icons.discord className="absolute -right-4 -top-4 h-40 w-40 -rotate-45 text-white/20" />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-nowrap text-sm font-medium text-white">
                    <SectionTitle> Discord Activity </SectionTitle>
                </CardTitle>
            </CardHeader>
            <CardContent className="grid max-h-max gap-2"></CardContent>
        </Card>
    );
}

export default Disocrd;
