import { Container, Heading } from "@chakra-ui/react";

export default function Header({ title }: { title: string }) {
    return (
        <Container>
            <Heading textAlign="center">{title}</Heading>
        </Container>
    );
}