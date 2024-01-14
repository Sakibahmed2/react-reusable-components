import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
import cn from "../../utils/cn";

type TVariant = "solid" | "ghost" | "outline";

type TButtonOption = {
  variant?: TVariant;
};

type TRef = HTMLButtonElement;

type TButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  TButtonOption;

const Button = forwardRef<TRef, TButton>(
  ({ className, variant = "solid", children, ...rest }, ref) => {
    const getVariant = (variant: TVariant) => {
      switch (variant) {
        case "outline":
          return "btn-outline";
        case "ghost":
          return "btn-ghost";

        default:
          return "btn-solid";
      }
    };

    return (
      <button
        {...rest}
        ref={ref}
        className={cn(getVariant(variant), className)}
      >
        {children}
      </button>
    );
  }
);

export default Button;
