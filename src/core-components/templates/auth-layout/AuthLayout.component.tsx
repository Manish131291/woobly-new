import * as React from "react";
import { Outlet } from "react-router";

import "./AuthLayout.style.scss";
import Logo from "../../../assets/images/woobly-logo.svg";
export const AuthLayout = () => {
  return (
    <>
      <section className="auth-screen">
        <div className="auth-screen__container bg-white">
          <div className="auth-screen__carousel relative bg-gray-900 h-screen flex flex-col justify-between hidden md:block">
            <div className="flex flex-col">
              <div className="flex">
                <img src={Logo} alt="logo" style={{ borderRadius: 5 }} />
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="auth-screen__content h-screen overflow-scroll relative">
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
};
