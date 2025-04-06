import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, "./");
    return {
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
            cors: true,
            proxy: {
                "/api": {
                    target:
                        mode !== "production"
                            ? "http://localhost:8080"
                            : env.VITE_API_URL,
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, ""),
                },
            },
        },
        base: "/",
    };
});
