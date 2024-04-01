import type { PortfolioType } from "@/types";
import { Container, Divider } from "@chakra-ui/react";
import Bottom from "../Organisms/Bottom";
import ContentCard from "../Organisms/ContentCard";
import Header from "../Organisms/Header";

export default function Portfolio({ props }: { props: PortfolioType }) {
    const { title, copyright, contents } = props;
    return (
        <Container padding="20px">
            <Header title={title} />
            {contents.map((content) => (
                <>
                    <ContentCard props={content} />
                    <Divider />
                </>
            ))}
            <Bottom copyright={copyright} />
        </Container>
    )
}