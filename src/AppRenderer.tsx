import PageSwitcher from "./components/PageSwitcher.tsx";
import { Suspense, useEffect } from "react";
import { PageLoader } from "./components/Loader.tsx";
import { getPageSwitcherConfig } from "./data/pages";
import { Container } from "@mantine/core";
import { usePage, useSecret } from "./hooks";

export default function AppRenderer() {
    const PageSwitcherConfig = getPageSwitcherConfig();
    const { page } = usePage();
    const { setSecret } = useSecret();

    useEffect(() => {
        scrollTo(0, 0);
        setSecret(false);
    }, [page]);

    const currentPage = PageSwitcherConfig[page];
    if (!currentPage) throw new Error(`Page configuration ${page} not found`);

    return (
        <>
            <PageSwitcher
                page={currentPage.title}
                pageTitleColor={currentPage.color}
                leftBtn={currentPage.leftBtn}
                rightBtn={currentPage.rightBtn}
            />
            <Suspense fallback={<PageLoader />}>
                <Container
                    size={
                        page === "projects" ? "xs" : page === "desktopPreview" ? "xl" : "sm"
                    }
                    mb={30}
                >
                    {currentPage.content}
                </Container>
            </Suspense>
        </>
    );
}
