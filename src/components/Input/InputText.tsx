import * as React from "react";

import { ButtonProps, InputBase } from "./InputBase";

interface Props extends Omit<ButtonProps, "type" | "className"> {}

const InputText = ({ placeholder, name, label }: Props) => (
  <InputBase {...{ name, placeholder, label }} type="text" />
);

export { InputText };
