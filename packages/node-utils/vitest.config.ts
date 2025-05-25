import { mergeConfig } from "vite";
import nodeTestConfig from "@iamhoonse-js/vitest-config/node";
import viteConfig from "./vite.config";

export default mergeConfig(viteConfig, nodeTestConfig);
