import { TypographyStylesProvider } from "@mantine/core";
import { lazy, Suspense } from "react";

export default function loadMdx(slug: string) {
    const Component = lazy(() => import(`../../blogs/${slug}.mdx`));

    return (
        <TypographyStylesProvider fz="lg">
            <Suspense fallback={<></>}>
                <Component />
            </Suspense>
        </TypographyStylesProvider>
    );
}
