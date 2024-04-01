import { CardType } from "@/types";
import { Card, CardBody, Heading, Image, List, ListItem, Stack, Text } from "@chakra-ui/react";


export default function ContentCard({ props }: { props: CardType }) {
    const { tag, title, imagePath, imageCaption, contents } = props;
    return (
        <Card margin="5px">
            <CardBody>
                <Heading size="sm">{title}</Heading>
                {tag === "image" &&
                    <Stack>
                        {imagePath && imageCaption &&
                            <Image src={imagePath} alt={imageCaption} />
                        }
                        {contents.map((content) => (<Text>{content}</Text>))}
                    </Stack>
                }
                {tag === "list" &&
                    <List>
                        {contents.map((content) => (<ListItem>{content}</ListItem>))}
                    </List>
                }
            </CardBody>
        </Card>
    )
}