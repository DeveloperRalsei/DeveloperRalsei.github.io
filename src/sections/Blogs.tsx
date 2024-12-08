import BlogCard from "@/components/BlogCard";
import blogs from "@blogs";
import { Stack, TextInput } from "@mantine/core";

export default function Blogs() {
  console.log(blogs);
  return (
    <Stack>
      <TextInput placeholder="Search..." />

      {blogs.map((b, i) => {
        return <BlogCard blogInfo={b} key={i} />;
      })}
    </Stack>
  );
}
