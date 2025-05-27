import type { Meta, StoryObj } from "@storybook/react";
import SiteHeader from ".";

const meta = {
  title: "portfolio/SiteHeader",
  component: SiteHeader,
  tags: ["autodocs"],
} satisfies Meta<typeof SiteHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 전체 너비의 헤더 컴포넌트입니다.
 */
export const Default: Story = {
  args: {},
};

/**
 * 헤더 컴포넌트의 작은 화면 크기에서의 예시입니다.
 */
export const Small: Story = {
  parameters: {
    viewport: { defaultViewport: "tailwindSmall" },
  },
  args: {},
};

/**
 * 헤더 컴포넌트의 중간 화면 크기에서의 예시입니다.
 */
export const Medium: Story = {
  parameters: {
    viewport: { defaultViewport: "tailwindMedium" },
  },
  args: {},
};

/**
 * 헤더 컴포넌트의 큰 화면 크기에서의 예시입니다.
 */
export const Large: Story = {
  parameters: {
    viewport: { defaultViewport: "tailwindLarge" },
  },
  args: {},
};

/**
 * 헤더 컴포넌트의 매우 큰 화면 크기에서의 예시입니다.
 */
export const XLarge: Story = {
  parameters: {
    viewport: { defaultViewport: "tailwindExtraLarge" },
  },
  args: {},
};

/**
 * 헤더 컴포넌트의 2XL 화면 크기에서의 예시입니다.
 */
export const XXLarge: Story = {
  parameters: {
    viewport: { defaultViewport: "tailwindSmall" },
  },
  args: {},
};
