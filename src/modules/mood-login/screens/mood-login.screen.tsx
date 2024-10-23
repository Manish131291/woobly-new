import * as React from "react";
import "../styles/mood-login.style.scss";
import { IG_Input } from "../../../core-components/atoms/input/IG_Input.component";

import { Button } from "../../../core-components/atoms/button/Button.component";
import { AuthStep } from "../../../core-components/atoms/auth-step/AuthStep.component";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/images/woobly.svg";
import LoginBg from "../../../assets/images/login-bg.svg";
import WooblyLogo from "../../../assets/images/woobly-logo.svg";

const MoodLogin: React.FC = () => {
  const navigation = useNavigate();
  const [usernameHasError, setusernameHasError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passHasError, setPassHasError] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessager] = useState("");

  const loginUser = (e: any) => {
    e.preventDefault();
    if (!username || !password) {
      !username && setusernameHasError("Please enter valid email ID");
      !password && setPassHasError("Please enter valid password");
      setShowError(true);
      setErrorMessager("");
    } else if (username.length < 5 || password.length < 8) {
      setErrorMessager("invalidLoginCredentials");
      setShowError(true);
    } else {
      setusernameHasError("");
      setPassHasError("");
      navigation("/dashboard");
    }
  };
  return (
    <>
      <section className="auth-screen">
        <div className="auth-screen__container bg-white">
          <img
            className="login-bg-img"
            src={LoginBg}
            width={200}
            height={200}
            alt="logo"
            style={{ borderRadius: 5 }}
          />
          <div className="auth-screen__carousel relative bg-purple-800 h-screen flex flex-col justify-between p-8 pt-[4rem] hidden md:block">
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <img src={Logo} alt="logo" style={{ borderRadius: 5 }} />
                <div className="flex flex-col gap-4 items-start">
                  <h1 className="m-display-lg-bold text-white">USP 1</h1>
                  <span className="m-display-sm-regular text-white">
                    Lorem ipsum dolor sit amet consectetur.
                  </span>
                </div>
              </div>
              <div className="flex gap-4">
                <img src={Logo} alt="logo" style={{ borderRadius: 5 }} />
                <div className="flex flex-col gap-4 items-start">
                  <h1 className="m-display-lg-bold text-white">USP 1</h1>
                  <span className="m-display-sm-regular text-white">
                    Lorem ipsum dolor sit amet consectetur.
                  </span>
                </div>
              </div>
              <div className="flex gap-4">
                <img src={Logo} alt="logo" style={{ borderRadius: 5 }} />
                <div className="flex flex-col gap-4 items-start">
                  <h1 className="m-display-lg-bold text-white">USP 1</h1>
                  <span className="m-display-sm-regular text-white">
                    Lorem ipsum dolor sit amet consectetur.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="auth-screen__content h-screen overflow-scroll relative">
            <form className="login-form" onSubmit={(e) => e.preventDefault()}>
              <>
                <div className="flex">
                  <img
                    src={WooblyLogo}
                    alt="logo"
                    style={{ borderRadius: 5 }}
                  />
                </div>
                <AuthStep
                  title={"Welcome Back!"}
                  description="Manage Your Restaurant with Ease"
                  mainContent={
                    <>
                      <div>
                        <IG_Input
                          id="USER-NAME"
                          type="email"
                          classes="mb-4"
                          label={`Email Address`}
                          placeholder={"mayank@au.design"}
                          msgType={usernameHasError ? "error" : ""}
                          infoMsgText={usernameHasError}
                          value={username}
                          required={true}
                          onInputChange={setUsername}
                        />
                      </div>
                      <div>
                        <IG_Input
                          id="PSWD"
                          classes="mb-4"
                          type={"password"}
                          label={"password"}
                          placeholder={"Enter Password"}
                          value={password}
                          onInputChange={setPassword}
                          msgType={passHasError ? "error" : ""}
                          infoMsgText={passHasError}
                          autoComplete="off"
                        />
                        {showError && (
                          <span
                            className="text-red-500 m-text-md-regular"
                            id="error"
                            data-testid="LGN-CRED-ERR"
                          >
                            {errorMessage}
                          </span>
                        )}
                      </div>
                      <div>
                        <Button
                          classes="min-w-full mt-4 bg-primary-600 rounded-2xl cursor-pointer"
                          dataTestId="LGN"
                          btnType="primary"
                          onClick={(e: any) => loginUser(e)}
                        >
                          {"login"}
                        </Button>
                      </div>
                      <div className="forgot__action">
                        <span className="cursor-pointer underline">{`Forgot Password`}</span>
                      </div>
                    </>
                  }
                  footerContent={<></>}
                />
              </>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default MoodLogin;
