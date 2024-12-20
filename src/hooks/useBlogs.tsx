import { Blog } from "@/types";
import { blogs } from "@/data";

export default function useBlogs(blogPageId: number): Blog | undefined {
  const blog = blogs.find((blog) => blog.id === blogPageId);
  return blog;
}
