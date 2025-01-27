import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [
        {
            enforce: "pre",
            ...mdx({
                remarkPlugins: [
                    remarkFrontmatter,
                    [remarkMdxFrontmatter, { name: "frontmatter" }],
                ],
            }),
        },
        react(),
        tsconfigPaths(),
    ],
    optimizeDeps: {
        include: [
            "@tabler/icons-react",
            "@mantine/core",
            "@mantine/notifications",
            "@mantine/hooks",
        ],
    },
    server: {
        open: true,
        cors: true,
    },
});
