import * as React from "react";

import { ButtonProps, InputBase } from "./InputBase";

interface Props extends Omit<ButtonProps, "type" | "className"> {}

const InputPassword = ({ name, placeholder, label }: Props) => (
  <InputBase {...{ name, placeholder, label }} type="password" />
);

export { InputPassword };
