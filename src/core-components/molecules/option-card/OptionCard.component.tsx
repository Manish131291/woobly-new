import React from "react";

import "./OptionCard.style.scss";
import { Radio, RadioProps } from "../../atoms/radio/Radio.component";
import {
  Checkbox,
  CheckboxProps,
} from "../../atoms/checkbox/Checkbox.component";

interface OptionCardProps {
  id: string;
  classes?: string;
  cardIcon?: React.ReactNode;
  title?: string;
  titleTag?: string;
  description?: string;
  content?: React.ReactNode;
  cardType?: "radio" | "checkbox";
  radioType?: "dot" | "fill";
  position?: "left" | "right";
  cardDesign?: "content" | "header" | "body";
  size?: "sm" | "md";
  disabled?: boolean;
  checked?: boolean;
  primaryMerchant?: React.ReactNode;
  cardBody?: React.ReactNode;
  value?: number | string;
  visibility?: "visible" | "invisible";
  isChecked?: boolean;
  iconSize?: "sm" | "md" | "lg";
  fullWidthContent?: boolean;
}

export const OptionCard = ({
  id,
  classes,
  cardIcon,
  title,
  titleTag,
  description,
  content,
  cardType = "radio",
  radioType = "dot",
  position = "right",
  cardDesign = "content",
  size = "sm",
  disabled = false,
  checked = false,
  isChecked = false,
  cardBody,
  value = "",
  visibility = "visible",
  iconSize = "sm",
  fullWidthContent = false,
  primaryMerchant,
  ...otherprops
}: OptionCardProps) => {
  let ContainerComponent: React.FC<RadioProps> | React.FC<CheckboxProps>;
  const compAttrs: {
    rdSize?: string;
    cbSize?: string;
    radioType?: string;
    isChecked?: boolean;
    checked?: boolean;
    fullContent?: boolean;
    container?: React.FC<{ children: React.ReactNode }>;
  } = {};
  const cardSizeMap = {
    sm: {
      gap: "gap-3",
      headerFont: "m-text-lg-medium",
    },
    md: {
      gap: "gap-3",
      headerFont: "m-display-sm-medium",
    },
  };
  const iconSizeMap = {
    sm: "max-w-[2rem]",
    md: "max-w-[2.5rem]",
    lg: "max-w-[3rem]",
  };

  const classList = [
    "option-card",
    `option-card--${cardType}`,
    `option-card--${position}`,
    `option-card--${cardDesign}`,
    `option-card--${size}`,
  ];
  classes && classList.push(classes);
  !cardIcon && classList.push("content-only");

  const HeaderComponent = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="flex justify-between items-center p-4 optioncard__header gap-2">
        <div className={`header__content flex items-center gap-3 flex-1`}>
          {cardIcon && (
            <div className={`${iconSizeMap[iconSize]}`}>{cardIcon}</div>
          )}
          <h3 className={`title break-all ${cardSizeMap[size].headerFont}`}>
            {title}
          </h3>
        </div>
        {children}
      </div>
    );
  };

  if (cardType === "radio") {
    ContainerComponent = Radio;
    compAttrs.rdSize = size;
    compAttrs.radioType = radioType;
    compAttrs.isChecked = isChecked;
    compAttrs.fullContent = fullWidthContent;
  } else {
    ContainerComponent = Checkbox;
    compAttrs.cbSize = size;
    compAttrs.checked = checked;
  }
  if (cardDesign === "header") {
    compAttrs.container = HeaderComponent;
  }
  otherprops = { ...otherprops, ...compAttrs };
  return (
    <ContainerComponent
      id={id}
      disabled={disabled}
      classes={`${classList.join(" ")}`}
      value={value}
      visibility={visibility}
      {...otherprops}
    >
      {cardDesign === "header" ? (
        <div className="p-4 optioncard__body">{cardBody}</div>
      ) : (
        <div className="flex p-4 items-center icon-content">
          {cardIcon && (
            <div className={`${iconSizeMap[iconSize]} self-baseline`}>
              {cardIcon}
            </div>
          )}
          <div className={`grow optioncard__content`}>
            {cardDesign === "content" && (
              <>
                <div className="flex gap-3">
                  <h4 className="title">
                    {title}
                    {titleTag && (
                      <span className="title-tag ml-2">{titleTag}</span>
                    )}
                  </h4>
                  {primaryMerchant && <span>{primaryMerchant}</span>}
                </div>
                {description && (
                  <p className="optioncard__description">{description}</p>
                )}
                {content}
              </>
            )}
            {cardDesign === "body" && cardBody}
          </div>
        </div>
      )}
    </ContainerComponent>
  );
};
