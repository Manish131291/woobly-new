import { Tooltip as ReactTooltip } from "react-tooltip";

import "./Tooltip.style.scss";

interface TooltipProps {
  id: string;
  place: "top" | "bottom" | "left" | "right";
  content?: string;
  variant?: "dark" | "light" | "success" | "warning" | "error" | "info";
  width?: string;
  children?: React.JSX.Element;
}

export const Tooltip = ({
  id,
  place,
  content,
  variant = "light",
  width,
  children,
}: TooltipProps) => {
  return (
    <div className="tooltip-component">
      <ReactTooltip
        style={{
          backgroundColor: "var(--neutrals-900)",
          width: `${width}`,
        }}
        opacity={1}
        anchorSelect={id}
        place={place}
        content={content}
        variant={variant}
      >
        {children}
      </ReactTooltip>
    </div>
  );
};
