import { lazy } from "react";

export default function loadMdx(slug: string) {
  return lazy(() => import(`../../blogs/${slug}.mdx`));
}
