import { cn } from "@/lib/utils";

type BentoGroupProps = {
    top: React.ReactNode;
    bottom: React.ReactNode;
};

interface BentoGridItemProps {
    size: "1x1" | "1x2" | "2x1" | "2x2";
    className?: string;
    title?: string;
    description?: string;
    component?: React.ReactNode;
    icon?: React.ReactNode;
}

interface BentoGridProps {
    className?: string;
    children: React.ReactNode;
}

export function BentoGrid({ className, children }: BentoGridProps) {
    return (
        <div
            className={cn(
                "grid grid-cols-1 grid-flow-dense md:grid-cols-3 gap-4 ",
                className
            )}
        >
            {children}
        </div>
    );
}

export function BentoGridItem({
    size,
    className,
    title,
    description,
    component,
    icon,
}: BentoGridItemProps) {
    const sizeClass = {
        "1x1": "md:col-span-1 md:row-span-1",
        "1x2": "md:col-span-1 md:row-span-2",
        "2x1": "md:col-span-2 md:row-span-1",
        "2x2": "md:col-span-2 md:row-span-2",
    }[size];
    return (
        <div
            className={cn(
                `row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none overflow-hidden dark:border-white/[0.2]  border justify-between flex flex-col space-y-4 ${sizeClass} bg-[#F5F5F5] dark:bg-[#1C1C1E] saturate-150 filter backdrop-blur-md`,
                className
            )}
        >
            {component}
            {(icon || title || description) && (
                <div className="flex flex-col space-y-2">
                    {icon && (
                        <div className="text-2xl text-neutral-500">{icon}</div>
                    )}
                    {title && (
                        <div className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
                            {title}
                        </div>
                    )}
                    {description && (
                        <div className="text-sm text-neutral-500 dark:text-neutral-300">
                            {description}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export function BentoGroup({ top, bottom }: BentoGroupProps) {
    return (
        <div className="grid h-full gap-4 md:col-span-1 md:row-span-1 grid-cols-2 md:grid-cols-1">
            <div className="md:col-span-1">{top}</div>
            <div className="md:col-span-1">{bottom}</div>
        </div>
    );
}
