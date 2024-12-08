import BlogCard from "@/components/BlogCard";
import blogs from "@blogs";
import { Stack, TextInput, Text } from "@mantine/core";
import { useState } from "react";

export default function Blogs() {
  const [search, setSearch] = useState("");
  const filteredBlogs = !!search
    ? blogs.filter((b) =>
        [b.title, b.description, b.slug]
          .filter((x) => x)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase())
      )
    : blogs;

  return (
    <Stack>
      <TextInput
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredBlogs.map((b, i) => {
        return <BlogCard blogInfo={b} key={i} />;
      })}

      {!blogs.length && (
        <Text w={"100%"} ta={"center"}>
          No blogs yet {":("} <br />
          Check back later
        </Text>
      )}

      {/* {filteredBlogs.length === 0 && (
        <Text w={"100%"} ta={"center"}>
          There's nothing I can show you 3:
        </Text>
      )} */}
    </Stack>
  );
}
