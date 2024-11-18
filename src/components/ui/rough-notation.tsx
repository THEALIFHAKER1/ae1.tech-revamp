// components/RoughNotation.tsx
import { FC } from "react";
import { RoughNotation } from "react-rough-notation";

interface AnnotationProps {
    children: React.ReactNode;
    type:
        | "underline"
        | "box"
        | "circle"
        | "highlight"
        | "strike-through"
        | "crossed-off";
    show: boolean;
    className: string;
}

const Annotation: FC<AnnotationProps> = ({
    children,
    type,
    show,
    className,
}) => {
    return (
        <RoughNotation type={type} show={show}>
            <div className={className}>{children}</div>
        </RoughNotation>
    );
};

export default Annotation;
