import {
    HeroTitle,
    PageTitle,
    SectionTitle,
    SubsectionTitle,
    BodyText,
    SmallText,
    FooterText,
} from "@/components/ui/text";

export default function TextDemo() {
    return (
        <>
            <HeroTitle>Hero Title</HeroTitle>
            <PageTitle>Page Title</PageTitle>
            <SectionTitle>Section Title </SectionTitle>
            <SubsectionTitle>Subsection Title </SubsectionTitle>
            <BodyText>
                This is body text. suitable for paragraphs or main content.
            </BodyText>
            <SmallText>
                This is small text. perfect for captions or small notes.
            </SmallText>
            <FooterText>
                This is footer text. suitable for disclaimers or fine prints.
            </FooterText>
        </>
    );
}
