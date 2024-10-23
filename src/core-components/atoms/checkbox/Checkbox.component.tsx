import { InputHTMLAttributes, ReactNode, useEffect, useState } from "react";

import "./Checkbox.styles.scss";
import { Icon } from "../icon/Icon.component";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string | ReactNode;
  description?: string | ReactNode;
  cbSize?: "sm" | "md";
  classes?: string;
  hasError?: boolean;
  errorMessage?: string;
  indeterminate?: boolean;
  children?: React.ReactNode;
  onToggle?: (checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  id,
  description = "",
  cbSize = "sm",
  classes = "",
  disabled,
  hasError,
  errorMessage = "Error",
  onToggle,
  checked,
  indeterminate,
  children,
  ...otherProps
}: CheckboxProps) => {
  const defaultChecked = checked ?? false;
  const [isChecked, setIsChecked] = useState(defaultChecked);
  const iconSize = cbSize === "sm" ? 12 : 14;
  const classList = [
    "checkbox",
    "relative",
    "leading-4",
    `checkbox--${cbSize}`,
  ];

  classes && classList.push(classes);
  disabled && classList.push("checkbox--disabled");
  useEffect(() => {
    onToggle?.(isChecked);
  }, [isChecked, onToggle]);
  useEffect(() => {
    setIsChecked(checked ?? false);
  }, [checked]);

  return (
    <div className={`${classList.join(" ")}`}>
      <input
        id={id}
        type="checkbox"
        className={`checkbox__input`}
        disabled={disabled}
        checked={isChecked}
        ref={(input) => {
          if (input && indeterminate) {
            input.indeterminate = true;
          }
        }}
        data-testid={`${id}-CHK`}
        onChange={() => {
          setIsChecked((prev) => !prev);
        }}
        {...otherProps}
      />
      <label
        htmlFor={id}
        className={`flex ${cbSize === "md" ? "text-base" : "text-sm"}`}
      >
        <span className="mt-0.5 checkbox__custom flex justify-center items-center">
          {isChecked && (
            <Icon
              icon={`${indeterminate ? "minus" : "check"}`}
              width={iconSize}
              height={iconSize}
            />
          )}
        </span>
        {!children && (
          <span className="checkbox__content">
            <span className="checkbox__label">{label}</span>
            {description && (
              <span className="checkbox__desc">{description}</span>
            )}
          </span>
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
