"use client";

import { Label } from "@components/Label";
import { cn } from "@lib/utils";
import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import { useFormContext } from "react-hook-form";

export interface ButtonProps {
  className?: string;
  name: string;
  placeholder?: string;
  label?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type: HTMLInputTypeAttribute;
}

export const InputBase = ({
  name,
  className,
  onChange,
  label,
  ...props
}: ButtonProps) => {
  const { register } = useFormContext();

  return (
    <>
      {label && <Label htmlFor={name}>{label}</Label>}
      <input
        {...props}
        {...register(name)}
        id={name}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        onChange={onChange}
      />
    </>
  );
};
