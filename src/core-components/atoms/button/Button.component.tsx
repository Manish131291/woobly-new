import React, { ButtonHTMLAttributes } from "react";

import { Icon } from "../icon/Icon.component";

import "./Button.styles.scss";

export type ButtonTypes =
  | "primary"
  | "secondary"
  | "tertiary"
  | "primary-error"
  | "primary-error-50"
  | "secondary-gray"
  | "secondary-error"
  | "tertiary-gray"
  | "tertiary-error"
  | "primary-underline"
  | "gray-underline";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  dataTestId: string;
  type?: "submit" | "button" | "reset";
  classes?: string;
  onClick?: (e: any) => void;
  suffixIconClick?: () => void;
  btnType?: ButtonTypes;
  backgroundColor?: string;
  labelColor?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  children?: React.ReactNode;
  iconName?: string;
  iconPos?: "left" | "right";
  suffixIcon?: string;
  suffixIconWidth?: number;
  suffixIconHeight?: number;
  showLoader?: boolean;
  iconColor?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  dataTestId,
  classes = "",
  disabled = false,
  type,
  backgroundColor,
  labelColor,
  onClick,
  suffixIconClick,
  children,
  size = "md",
  btnType = "primary",
  iconName = "",
  iconPos,
  suffixIcon,
  suffixIconWidth,
  suffixIconHeight,
  iconColor,
  showLoader = false,
  ...props
}: ButtonProps) => {
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const ref = React.useRef<HTMLButtonElement>(null);
  const iconSizes = {
    xs: 12,
    sm: 16,
    md: 16,
    lg: 20,
    xl: 20,
  };
  const classList = ["btn", `btn--${size}`, `btn--${btnType}`];
  classes && classList.push(classes);
  showLoader && classList.push("loading");
  iconPos === "right" && classList.push(`btn--icon-right`);
  !children && !suffixIcon && classList.push(`btn--icon-only`);

  const dimensionStyle = showLoader
    ? {
        width: `${width}px`,
        height: `${height}px`,
      }
    : {};

  React.useEffect(() => {
    if (ref.current?.getBoundingClientRect().width) {
      setWidth(ref.current.getBoundingClientRect().width);
    }
    if (ref.current?.getBoundingClientRect().height) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, [children]);

  return (
    <button
      data-testid={`BTN`}
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${classList.join(" ")}`}
      style={{ backgroundColor, ...dimensionStyle }}
      onClickCapture={(event) => {}}
      {...props}
    >
      {showLoader ? (
        <div className="loader" />
      ) : (
        <>
          {iconName && (
            <>
              <Icon
                icon={iconName}
                color={iconColor}
                width={iconSizes[size]}
                height={iconSizes[size]}
              />
            </>
          )}
          {children && (
            <span style={{ color: labelColor }} className="btn__text">
              {children}
            </span>
          )}
          {suffixIcon && (
            <div
              role="svgDiv"
              onClick={(event) => {
                event.stopPropagation();
                suffixIconClick?.();
              }}
            >
              <Icon
                icon={suffixIcon}
                width={suffixIconWidth}
                height={suffixIconHeight}
              />
            </div>
          )}
        </>
      )}
    </button>
  );
};
