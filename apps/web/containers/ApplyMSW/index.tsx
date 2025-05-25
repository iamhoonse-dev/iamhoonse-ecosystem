"use client";

import type { FC, PropsWithChildren } from "react";
import { MSWProvider } from "@iamhoonse-js/react-utils/providers";
import rootHandlers from "@iamhoonse-js/http-clients/mocks";
import { MSW_START_OPTIONS } from "../../configs/mocks";

const ApplyMSW: FC<PropsWithChildren> = ({ children }) => {
  return (
    <MSWProvider handlers={rootHandlers} startOptions={MSW_START_OPTIONS}>
      {children}
    </MSWProvider>
  );
};
export default ApplyMSW;
