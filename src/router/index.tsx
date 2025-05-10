import App from "@/App";
import { lazy } from "react";
import { createHashRouter } from "react-router-dom";

const Home = lazy(() => import("@/sections/Home.tsx"));
const About = lazy(async () => import("@/sections/AboutMe.tsx"));
const Projects = lazy(() => import("@/sections/ProjectList.tsx"));
const Blogs = lazy(() => import("@/sections/Blogs.tsx"));
const Desktop = lazy(() => import("@/sections/DesktopPreview.tsx"));
const Secret = lazy(() => import("@/sections/Secret.tsx"));
const BlogPost = lazy(() => import("@/sections/BlogPost.tsx"));
const Music = lazy(() => import("@/sections/Music"));
const NotFound = lazy(() => import("@/sections/NotFound.tsx"));

export const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
            { path: "projects", element: <Projects /> },
            { path: "blogs", element: <Blogs /> },
            { path: "blogs/:id", element: <BlogPost /> },
            { path: "desktop", element: <Desktop /> },
            { path: "music", element: <Music /> },
            { path: "hmm", element: <Secret /> },
        ],
    },
]);
