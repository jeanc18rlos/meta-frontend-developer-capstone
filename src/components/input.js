import "./input.css";
import React, { forwardRef } from "react";
import cn from "classnames";

export const Input = forwardRef(
  ({ onChange, onBlur, name, placeholder, isEmpty, type = "text", id }, ref) => (
    <input
      {...{
        className: cn("input", isEmpty && "filled"),
        type,
        name,
        onBlur,

        onChange,
        placeholder,
        id,
      }}
      ref={ref}
    />
  )
);
