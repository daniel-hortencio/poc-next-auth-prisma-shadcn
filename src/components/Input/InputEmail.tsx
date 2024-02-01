"use client";

import * as React from "react";

import { useState } from "react";
import { mask } from "@lib/mask";
import { ButtonProps, InputBase } from "./InputBase";

interface Props extends Omit<ButtonProps, "type" | "className"> {}

const InputEmail = ({ name, placeholder, label }: Props) => {
  const [value, setValue] = useState("");

  return (
    <InputBase
      {...{ name, placeholder, label }}
      type="email"
      value={value}
      onChange={(e) => setValue(mask.email(e.target.value))}
    />
  );
};

export { InputEmail };
