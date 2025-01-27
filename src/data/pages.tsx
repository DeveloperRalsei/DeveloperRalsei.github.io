import { lazy } from 'react'
import { usePage, useBlogs, useSecret } from "@/hooks";

const Home = lazy(() => import("../sections/Home.tsx"));
const AboutMe = lazy(() => import("../sections/AboutMe.tsx"));
const ProjectList = lazy(() => import("../sections/ProjectList.tsx"));
const BlogPage = lazy(() => import("../sections/Blogs.tsx"));
const BlogPostPage = lazy(() => import("../sections/BlogPost.tsx"));
const Secret = lazy(() => import("../sections/Secret.tsx"));
const DesktopPreview = lazy(() => import("../sections/DesktopPreview.tsx"));
const BirtDayPlace = lazy(() => import("../sections/BirthDay.tsx"))

import { page } from "@/types";
import { DefaultMantineColor, Tooltip, ActionIcon, Space } from "@mantine/core";
import { IconChevronLeft, IconChevronRight, IconBook2, IconHomeFilled, IconDeviceDesktop, IconBooks, IconKeyboard, IconQuestionMark } from "@tabler/icons-react";
import Card from '../components/Card'


export function getPageSwitcherConfig() {
    const { setPage, blogPageId } = usePage();
    const blog = useBlogs(blogPageId);
    const { secret } = useSecret()

    let btns = {
        home: (
            <Tooltip label="Home">
                <ActionIcon variant="light" onClick={() => setPage("home")}>
                    <IconHomeFilled />
                </ActionIcon>
            </Tooltip>
        ),
        desktop: (
            <Tooltip label="My Desktop">
                <ActionIcon variant="light" onClick={() => setPage("desktopPreview")}>
                    <IconDeviceDesktop />
                </ActionIcon>
            </Tooltip>
        ),
        aboutme: (
            <Tooltip label="My Links">
                <ActionIcon variant="light" onClick={() => setPage("aboutme")}>
                    <IconBooks />
                </ActionIcon>
            </Tooltip>
        ),
        blogs: (
            <Tooltip label="Blogs">
                <ActionIcon variant="light" onClick={() => setPage("blog")}>
                    <IconBook2 />
                </ActionIcon>
            </Tooltip>
        ),
        projects: (
            <Tooltip label="Projects">
                <ActionIcon variant="light" onClick={() => setPage("projects")}>
                    <IconKeyboard />
                </ActionIcon>
            </Tooltip>
        ),
        disabled: (
            <ActionIcon variant="light" disabled>
                -
            </ActionIcon>
        ),

        secret: (
            <Tooltip label="???">
                <ActionIcon variant="light" onClick={() => setPage("???")} disabled={!secret}>
                    <IconQuestionMark />
                </ActionIcon>
            </Tooltip>

        )
    }

    type PageSwitcher = {
        title: string;
        color: DefaultMantineColor;
        leftBtn: React.ReactNode;
        rightBtn: React.ReactNode;
        content: React.ReactNode;
    };

    const PageSwitcherConfig: {
        [K in page]: PageSwitcher /* yea I'm learning mapped types :P */;
    } = {
        home: {
            title: "Home",
            color: "grape",
            leftBtn: btns.blogs,
            rightBtn: btns.aboutme,
            content: <Home />,
        },

        blog: {
            title: "Blogs",
            color: "orange",
            leftBtn: btns.desktop,
            rightBtn: btns.home,
            content: <BlogPage />,
        },

        "blog-post": {
            title: blog?.title || "Title not found",
            color: "pink",
            leftBtn: btns.blogs,
            rightBtn: btns.home,
            content: <BlogPostPage />,
        },

        aboutme: {
            title: "My Skills",
            color: "green",
            leftBtn: btns.home,
            rightBtn: btns.projects,
            content: <AboutMe />,
        },


        projects: {
            title: "Projects",
            color: "blue",
            leftBtn: btns.aboutme,
            rightBtn: btns.secret,
            content: (
                <>
                    <Card title="Projects" icon={<IconBook2 />}>
                        <ProjectList />
                    </Card>
                    <Space h={"10vh"} />
                </>
            ),
        },

        testingArea: {
            color: "gray",
            title: "Testing Area",
            content: "",
            leftBtn: <></>,
            rightBtn: <></>,
        },

        birthDayPlace: {
            color: "violet",
            title: "Birth Day Event 🎂️",
            leftBtn: btns.home,
            rightBtn: btns.aboutme,
            content: <BirtDayPlace />
        },

        desktopPreview: {
            color: "red",
            title: "My Desktop",
            leftBtn: btns.disabled,
            rightBtn: btns.blogs,
            content: <DesktopPreview />,
        },

        "???": {
            title: "???",
            leftBtn: (
                <Tooltip label="Projects">
                    <ActionIcon variant="light" onClick={() => setPage("projects")}>
                        <IconChevronLeft />
                    </ActionIcon>
                </Tooltip>
            ),
            color: "dark",
            rightBtn: (
                <ActionIcon
                    disabled
                    variant="light"
                    onClick={() => setPage("projects")}
                >
                    <IconChevronRight />
                </ActionIcon>
            ),
            content: <Secret />,
        },
    };

    return PageSwitcherConfig;
}
