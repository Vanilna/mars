import React from "react";
import { addDecorator } from "@storybook/react";
import Input from "../components/atoms/Input";
import { GlobalStyles } from "../App";

addDecorator((s) => (
  <>
    <GlobalStyles />
    {s()}
  </>
));

export default {
  title: "Input",
  component: Input,
};

export const Regular = () => (
  <Input
    type="text"
    placeholder="CAMERA"
    changeHandler={() => {}}
    value=""
    label=""
    name=""
  />
);
