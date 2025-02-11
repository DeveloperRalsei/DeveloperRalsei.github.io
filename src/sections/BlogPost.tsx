import loadMdx from "@/helpers/loadMdx";
import { useBlogs } from "@/hooks";
import { Loader, Stack, TypographyStylesProvider } from "@mantine/core";
import { Suspense } from "react";
import { useParams } from "react-router-dom";

export default function BlogPostPage() {
    // const { blogPageId } = usePage();
    const { id: blogPageId } = useParams();
    const blog = useBlogs(Number(blogPageId));
    console.log(blogPageId);

    const Blog = loadMdx(blog?.slug || "");

    return (
        <Stack>
            <Suspense fallback={<Loader type="dots" />}>
                <TypographyStylesProvider>
                    <Blog />
                </TypographyStylesProvider>
            </Suspense>
        </Stack>
    );
}
