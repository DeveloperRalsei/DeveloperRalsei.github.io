import { Blog } from "@/types";
import { Card } from "@mantine/core";
import usePage from "@/hooks/usePage";

export default function BlogCard({ blogInfo }: { blogInfo: Blog }) {
  const { setPage } = usePage();
  return (
    <Card
      onClick={() => setPage("blog-post", blogInfo.id)}
      style={{ cursor: "pointer" }}
    >
      <Card.Section withBorder fz={"h3"} p={"sm"}>
        {blogInfo.title}
      </Card.Section>
      <Card.Section p={"sm"}>{blogInfo.description}</Card.Section>
    </Card>
  );
}
