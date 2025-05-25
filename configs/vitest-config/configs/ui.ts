import { defineProject, mergeConfig } from "vitest/config";
import base from "@iamhoonse-js/vitest-config/base";

const ui = mergeConfig(
  base,
  defineProject({
    test: {
      environment: "jsdom",
    },
  }),
);
export default ui;
