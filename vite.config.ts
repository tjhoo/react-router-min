import { reactRouter } from "@react-router/dev/vite";
import type { UserConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default {
  plugins: [reactRouter(), tsconfigPaths()],
} satisfies UserConfig;
