import loadMdx from "@/helpers/loadMdx";
import useBlogs from "@/hooks/useBlogs";
import usePage from "@/hooks/usePage";
import { Loader, Stack } from "@mantine/core";
import { Suspense } from "react";

export default function BlogPostPage() {
  const { blogPageId } = usePage();
  const blog = useBlogs(blogPageId);

  const Blog = loadMdx(blog?.slug || "");

  return (
    <Stack>
      <Suspense fallback={<Loader type="dots" />}>
        <Blog />
      </Suspense>
    </Stack>
  );
}
