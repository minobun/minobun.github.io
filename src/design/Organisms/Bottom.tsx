import { Container, Text } from "@chakra-ui/react";

export default function Bottom({ copyright }: { copyright: string }) {
  return (
    <Container>
      <Text textAlign="center">2022-{new Date().getFullYear()} &copy; {copyright}</Text>
    </Container>
  )
}