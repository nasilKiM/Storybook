import React from "react";
import BasicInput from "./Input";

export default {
  title: "components/Input",
  component: BasicInput,
  argTypes: {
    variant: {
      options: ["default"],
      control: { type: "radio" },
    },
    shape: {
      options: ["rounded", "square"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <BasicInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "default",
  shape: "square",
  size: "medium",
};

export const Rounded = Template.bind({});
Rounded.args = {
  variant: "default",
  shape: "rounded",
  size: "medium",
};

export const Square = Template.bind({});
Square.args = {
  variant: "default",
  shape: "square",
  size: "medium",
};
