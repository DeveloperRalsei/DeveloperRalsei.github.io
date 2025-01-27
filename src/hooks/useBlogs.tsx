import { Blog } from "@/types";
import { blogs } from "@/data/blogs";

export function useBlogs(blogPageId: number): Blog | undefined {
    return blogs.find((blog) => blog.id === blogPageId);
}
