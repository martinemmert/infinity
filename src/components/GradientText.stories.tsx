import React from "react";
// Also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line node/no-unpublished-import
import { Meta } from "@storybook/react/types-6-0";
import { GradientText } from "./GradientText";

export default {
  title: "UI Elements / Gradient Text",
  component: GradientText,
  parameters: {
    layout: "centered",
  },
} as Meta;

export const WithHeading2 = () => (
  <GradientText>
    <h2 className="text-3xl font-display">Hallo Welt</h2>
  </GradientText>
);
