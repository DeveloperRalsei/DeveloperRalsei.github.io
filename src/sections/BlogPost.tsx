import loadMdx from "@/helpers/loadMdx";
import { useBlogs } from "@/hooks";
import { Paper, Stack } from "@mantine/core";
import { useParams } from "react-router-dom";

export default function BlogPostPage() {
    // const { blogPageId } = usePage();
    const { id: blogPageId } = useParams();
    const blog = useBlogs(Number(blogPageId));
    console.log(blogPageId);

    const Blog = loadMdx(blog?.slug || "");

    return (
        <Stack>
            <Paper p="sm">{Blog}</Paper>
        </Stack>
    );
}
