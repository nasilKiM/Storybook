import BasicBtn from "./Button";

export default {
  title: "components/Button",
  component: BasicBtn,
  tags: ["components"],
  argTypes: {
    onClick: { action: "clicked" },
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
  },
};

export const Primary = {
  args: {
    variant: "primary",
    size: "small",
    children: "Button",
  },
};

export const Secondary = {
  args: {
    variant: "secondary",
    size: "small",
    children: "Button",
  },
};
