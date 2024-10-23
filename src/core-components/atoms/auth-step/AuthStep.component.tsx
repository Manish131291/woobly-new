import * as React from "react";

import "./AuthStep.style.scss";

interface AuthStepProps {
  title: string;
  description: string;
  headerContent?: React.ReactNode;
  mainContent?: React.ReactNode;
  footerContent?: React.ReactNode;
  showPolicy?: boolean;
}

export const AuthStep = ({
  title,
  description,
  headerContent,
  mainContent,
  footerContent,
  showPolicy = false,
}: AuthStepProps) => {
  return (
    <div className="flex flex-col">
      {headerContent}
      <div className="auth-step flex flex-col">
        <div className="mb-8 lg:pr-3 md:px-0 mt-10 w-[262px]">
          <h2 className="auth-step__title m-display-xxl-bold text-black">
            {title}
          </h2>
          <p className="auth-step__sub-title m-text-lg-regular text-neutral-500">
            {description}
          </p>
        </div>
        <div className="grow mb-8 lg:pr-3 md:px-0 py-1.5">{mainContent}</div>

        <div className="lg:px-3 md:px-0">{footerContent}</div>
      </div>
    </div>
  );
};
