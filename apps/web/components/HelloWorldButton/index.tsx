"use client";

import type { FC } from "react";
import { alertHelloWorld } from "@iamhoonse-js/browser-utils/dom";

const HelloWorldButton: FC = () => {
  return <button onClick={alertHelloWorld}>Click me!</button>;
};
export default HelloWorldButton;
