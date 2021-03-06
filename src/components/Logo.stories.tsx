import React from "react";
// Also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line node/no-unpublished-import
import { Meta } from "@storybook/react/types-6-0";
import { Logo, LogoWithBlobs } from "./Logo";

export default {
  title: "UI Elements / Logo",
  component: Logo,
  parameters: {
    layout: "centered",
  },
} as Meta;

export const LogoStory = () => <Logo />;
export const withBlobs = () => <LogoWithBlobs />;
