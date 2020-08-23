import React from "react";
// Also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line node/no-unpublished-import
import { Meta } from "@storybook/react/types-6-0";
import { HomePage } from "./HomePage";

export const fullScreen = (story) => <div style={{ height: "100vh" }}>{story()}</div>;

export default {
  title: "Pages / Home",
  component: HomePage,
  decorators: [fullScreen],
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Default = () => <HomePage />;
