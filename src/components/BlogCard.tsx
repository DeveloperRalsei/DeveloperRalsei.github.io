import { Blog } from "@/types";
import { Card, Group, Text } from "@mantine/core";
import usePage from "@/hooks/usePage";

export default function BlogCard({ blogInfo }: { blogInfo: Blog }) {
  const { setPage } = usePage();
  return (
    <Card
      onClick={() => setPage("blog-post", blogInfo.id)}
      style={{ cursor: "pointer" }}
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
      <Card.Section p={"sm"}>{blogInfo.description}</Card.Section>
    </Card>
  );
}
