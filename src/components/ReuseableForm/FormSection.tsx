import React, { useContext } from "react";
import { FormElementContext } from "./Form";
import cn from "../../utils/cn";

export const FormSection = ({ children }) => {
  const { double } = useContext(FormElementContext);

  return (
    <div
      className={cn("grid grid-cols-1 justify-items-center gap-5", {
        "md:grid-cols-2": double,
      })}
    >
      {children}
    </div>
  );
};
