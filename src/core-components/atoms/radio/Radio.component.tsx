import React, { InputHTMLAttributes } from "react";

import { Icon } from "../icon/Icon.component";

import "./Radio.style.scss";

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  description?: string;
  rdSize?: "sm" | "md";
  radioType?: "dot" | "fill";
  classes?: string;
  prefixIcon?: string;
  hasError?: boolean;
  errorMessage?: string;
  children?: React.ReactNode;
  value?: number | string;
  isChecked?: boolean;
  fullContent?: boolean;
  visibility?: "visible" | "invisible";
  container?: React.FC<{ children: React.ReactNode }>;
}

export const Radio: React.FC<RadioProps> = ({
  id,
  label,
  description = "",
  rdSize = "sm",
  radioType = "dot",
  classes = "",
  disabled = false,
  prefixIcon,
  hasError,
  errorMessage = "Error",
  children,
  value,
  visibility = "visible",
  isChecked = false,
  fullContent = false,
  container,
  ...otherProps
}: RadioProps) => {
  const iconSize = rdSize === "sm" ? 10 : 14;
  const classList = ["radio", "relative", "leading-4", `radio--${rdSize}`];
  classes && classList.push(classes);
  disabled && classList.push("radio--disabled");
  let RadioContainer;

  const RadioComponent = (
    <>
      {prefixIcon && <Icon icon={prefixIcon} width={24} height={24} />}
      <span
        className={`radio__custom ${radioType} flex justify-center items-center ${visibility}`}
      >
        {radioType === "fill" ? (
          <Icon icon="check" width={iconSize} height={iconSize} />
        ) : (
          <i className={`radio-dot`}></i>
        )}
      </span>
    </>
  );
  if (container) {
    const ContainerComponent = container;
    RadioContainer = <ContainerComponent>{RadioComponent}</ContainerComponent>;
  } else {
    RadioContainer = RadioComponent;
  }

  return (
    <div className={`${classList.join(" ")}`}>
      <input
        id={id}
        type="radio"
        className={`radio__input`}
        disabled={disabled}
        checked={isChecked}
        data-testid={`${id}-RDO`}
        value={value}
        {...otherProps}
      />
      <label
        htmlFor={id}
        className={`${rdSize === "md" ? "text-base" : "text-sm"} ${
          fullContent ? "w-full" : ""
        }`}
      >
        {RadioContainer}
        {!children && (
          <div className="inline">
            <span className="radio__label">{label}</span>
            {description && <span className="radio__desc">{description}</span>}
          </div>
        )}
        {children && <>{children}</>}
      </label>
      {hasError && (
        <span className="error" id={`${id}-error`}>
          {errorMessage}
        </span>
      )}
    </div>
  );
};
