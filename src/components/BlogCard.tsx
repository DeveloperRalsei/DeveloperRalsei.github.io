import { Blog } from "@/types";
import { Card, Group, Text } from "@mantine/core";
// import { usePage } from "@/hooks";

export default function BlogCard({ blogInfo }: { blogInfo: Blog }) {
    // const { setPage } = usePage();
    return (
        <Card
            className="hover"
            component={"a"}
            href={`#blogs/${blogInfo.id}`}
            target="_self"
            withBorder
            style={{ cursor: "pointer", textDecoration: "none" }}
        >
            <Card.Section withBorder fz={"h3"} p={"sm"}>
                <Group justify="space-between" w={"100%"}>
                    {blogInfo.title}
                    <Text fz={"md"} c={"dimmed"}>
                        {blogInfo.date.toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                        })}
                    </Text>
                </Group>
            </Card.Section>
            <Card.Section p={"xs"} fz={"sm"}>
                {blogInfo.description}
            </Card.Section>
        </Card>
    );
}
