import { useEffect } from "react";

import "./SideDrawer.style.scss";
import { Icon } from "../icon/Icon.component";

interface SideDrawerProps {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: (e: boolean) => void;
  classes?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  onCloseDrawer?: () => void;
}

interface HeadingBarProps {
  onClose?: (e: boolean) => void;
  children?: React.ReactNode;
  isGrayHeader?: boolean;
}
export const SideDrawer = ({
  children,
  header,
  footer,
  open = false,
  setOpen,
  classes,
  onCloseDrawer,
}: SideDrawerProps) => {
  /**
   * @description for close on press esc button
   */
  useEffect(() => {
    const close = (e: any) => {
      if (e.keyCode === 27) {
        setOpen?.(false);
        onCloseDrawer?.();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <div
      className={`outer_container  ${
        open ? "outer_container-fade-in" : " outer_container-fade-out"
      } ${classes}`}
      onClick={() => {
        setOpen?.(false);
        onCloseDrawer?.();
      }}
    >
      <div
        className={`${
          open ? "drawer_open_container " : "drawer_close_container"
        }
          drawer-container`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between">
          <header className="m-display-xxl-normal text-neutral-600">
            {header}
          </header>
          <div onClick={onCloseDrawer} className="cursor-pointer">
            <Icon
              icon="cross"
              width={30}
              height={30}
              className="drawer-cross-icon"
            />
          </div>
        </div>
        <div
          className={`${
            footer ? "drawer_body_with_footer" : "drawer_body"
          } px-6 pt-6 mb-6 overflow-y-scroll`}
        >
          {children}
        </div>
        <footer>{footer}</footer>
      </div>
    </div>
  );
};

export const HeadingBar = ({
  onClose,
  children,
  isGrayHeader,
}: HeadingBarProps) => {
  const isGrayHeaderClass = isGrayHeader ? "gray-header" : "";
  return <div className={`heading_bar ${isGrayHeaderClass}`}>{children}</div>;
};
