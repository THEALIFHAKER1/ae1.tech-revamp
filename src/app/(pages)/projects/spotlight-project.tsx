"use client";
import { Icons } from "@/components/icons/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { spotlightProjectsConfig } from "@/config/spotlight-project";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import Image from "next/image"; // Import Next.js Image component
import { BodyText, SectionTitle } from "@/components/ui/text";

export default function SpotlightProjects() {
    return (
        <div className={`relative flex items-center justify-center`}>
            <Carousel
                className={`w-full`}
                plugins={[
                    Autoplay({
                        delay: 5000,
                    }),
                ]}
                opts={{
                    align: "start",
                    loop: true,
                }}
            >
                <CarouselContent className={`-ml-1`}>
                    {spotlightProjectsConfig.map((project, idx) => (
                        <CarouselItem key={idx} className={`pl-1 md:basis-1/3`}>
                            <div className={`p-1`}>
                                <Card className={`h-60`}>
                                    <CardContent className="relative flex h-full justify-end rounded-lg bg-[#F5F5F5] dark:bg-[#1C1C1E] saturate-150 filter backdrop-blur-md py-0">
                                        {project.image && (
                                            <Image
                                                priority
                                                src={project.image}
                                                alt={project.projectName}
                                                fill
                                                className="rounded-lg -z-50 object-cover"
                                                sizes="auto"
                                            />
                                        )}
                                        <CarouselItem className="flex flex-col justify-end pb-6">
                                            <SectionTitle
                                                className={`font-bold ${
                                                    project.image &&
                                                    "text-white"
                                                }`}
                                            >
                                                {project.projectName}
                                            </SectionTitle>
                                            <BodyText
                                                className={` ${
                                                    project.image &&
                                                    "text-white"
                                                }`}
                                            >
                                                {project.description}
                                            </BodyText>
                                            <div className="my-5 flex space-x-2 md:mb-0">
                                                <Link
                                                    href={project.link}
                                                    target="_blank"
                                                >
                                                    <Button
                                                        variant="outline"
                                                        size={"icon"}
                                                    >
                                                        <Icons.externalLink />
                                                    </Button>
                                                </Link>
                                                <Link
                                                    href={project.repo}
                                                    target="_blank"
                                                >
                                                    <Button
                                                        variant="outline"
                                                        size={"icon"}
                                                    >
                                                        <Icons.github />
                                                    </Button>
                                                </Link>
                                            </div>
                                        </CarouselItem>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <div
                className={`absolute inset-0 hidden w-1/3 bg-gradient-to-r from-background from-10% to-transparent md:block pointer-events-none`}
            />
            <div
                className={`absolute inset-0 left-auto hidden w-1/3 bg-gradient-to-l from-background from-10% to-transparent md:flex pointer-events-none`}
            />
        </div>
    );
}
