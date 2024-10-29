import { Link } from "react-router-dom";

import "./SideNav.style.scss";
import { Icon } from "../../atoms/icon/Icon.component";
import { Button } from "../../atoms/button/Button.component";
import Logo from "../../../assets/images/woobly-logo.svg";
import { OptionCard } from "../../molecules/option-card/OptionCard.component";
import { Radio } from "../../atoms/radio/Radio.component";
import QuantityInput from "../../atoms/quantityinput/QuanityInput.component";
import { IG_Input } from "../../atoms/input/IG_Input.component";
import { RegEx } from "../../../core-constants/regex.constant";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";
import dayjs from "dayjs";
import { Tab } from "../../molecules/tab/Tab.component";
import { useState } from "react";
import { SideDrawer } from "../../atoms/side-drawer/SideDrawer.component";
import { Divider } from "../../atoms/divider/Divider.component";
export const SideNavBar: React.FC<any> = () => {
  const [currentTabSelected, setCurrentTabSelected] = useState(0);
  const [showSideDrawerUI, setShowSideDrawerUI] = useState(0);
  const [openSideDrawer, setOpenSideDrawer] = useState(false);

  const tabList = ["Art", "Classic", "Jump"];
  const activeTabFunc = (key: number) => {
    setCurrentTabSelected(key);
  };
  const onCloseDrawer = () => {
    setOpenSideDrawer(false);
  };
  const renderTabContents = (val: number) => {
    const getContent = () => {
      switch (val) {
        case 0:
          return (
            <>
              <OptionCard
                key={"TABLE1"}
                id={"TABLE1"}
                title={"Table 01"}
                description={"4 Seater"}
                position="right"
                cardIcon={
                  <Icon icon="card-icon" width={30} height={30} color="none" />
                }
                classes="mt-3 p-0.5"
                cardType="radio"
                isChecked={true}
                cardDesign="content"
                size="sm"
                {...{
                  name: "tableSelection",
                }}
              />
              <OptionCard
                key={"TABLE2"}
                id={"TABLE2"}
                title={"Table 02"}
                description={"4 Seater"}
                position="right"
                cardIcon={
                  <Icon icon="card-icon" width={30} height={30} color="none" />
                }
                classes="mt-3 p-0.5"
                cardType="radio"
                isChecked={false}
                cardDesign="content"
                size="sm"
                {...{
                  name: "tableSelection",
                }}
              />
              <OptionCard
                key={"TABLE3"}
                id={"TABLE3"}
                title={"Table 03"}
                description={"4 Seater"}
                position="right"
                cardIcon={
                  <Icon icon="card-icon" width={30} height={30} color="none" />
                }
                classes="mt-3 p-0.5"
                cardType="radio"
                isChecked={false}
                cardDesign="content"
                size="sm"
                {...{
                  name: "tableSelection",
                }}
              />
            </>
          );
        case 1:
          return <></>;

        case 2:
          return <></>;

        default:
          return;
      }
    };

    return <div>{getContent()}</div>;
  };
  const tabContentList = [
    renderTabContents(0),
    renderTabContents(1),
    renderTabContents(2),
  ];
  const modalUI = () => {
    switch (showSideDrawerUI) {
      case 1:
        return checkInTime();
      case 0:
        return checkInForm();
      case 2:
        return checkInTable();
      default:
        return <div></div>;
    }
  };
  const checkInTime = () => {
    return (
      <div className="flex flex-col items-start">
        <h2 className="m-text-md-bold text-neutral-900 mb-4">Guest Details</h2>
        <div className="bank-acc-input-container w-full flex gap-4 flex-col">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              components={[
                "TimePicker",
                "MobileTimePicker",
                "DesktopTimePicker",
                "StaticTimePicker",
              ]}
            >
              <DemoItem label="Time">
                <DesktopTimePicker defaultValue={dayjs("2022-04-17T15:30")} />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <div className="flex flex-row gap-2 mt-4">
          <Radio
            label={"Now"}
            rdSize="sm"
            id={`BOOKING1`}
            isChecked={true}
            name="booking"
            classes="items-center"
          />
          <Radio
            label={"5 min ago"}
            rdSize="sm"
            id={`BOOKING1`}
            isChecked={true}
            name="booking"
            classes="items-center"
          />
          <Radio
            label={"15 min ago"}
            rdSize="sm"
            id={`BOOKING1`}
            isChecked={true}
            name="booking"
            classes="items-center"
          />
          <Radio
            label={"30 min ago"}
            rdSize="sm"
            id={`BOOKING1`}
            isChecked={true}
            name="booking"
            classes="items-center"
          />
        </div>
      </div>
    );
  };
  const checkInForm = () => {
    return (
      <div className="flex flex-col items-start">
        <h2 className="m-text-md-bold text-neutral-900 mb-4">Guest Details</h2>
        <div className="bank-acc-input-container w-full flex gap-4 flex-col">
          <IG_Input
            id="MOB-NMBR"
            label={"Mobile Number"}
            type="phone"
            placeholder={"Enter Mobile Number"}
            regex={RegEx.onlyDigit}
            autoComplete="off"
            value={""}
          />
          <IG_Input
            id="MOB-NMBR"
            label={"First Name (optional)"}
            type="phone"
            placeholder={"Enter First Name"}
            regex={RegEx.onlyDigit}
            autoComplete="off"
            value={""}
          />
          <IG_Input
            id="MOB-NMBR"
            label={"Last Name (optional)"}
            type="phone"
            placeholder={"Enter Last Name"}
            regex={RegEx.onlyDigit}
            autoComplete="off"
            value={""}
          />
          <div className="flex flex-col items-start mt-4 mb-4 gap-4">
            <label className="m-text-md-regular text-neutral-700">
              Number of Guest
            </label>
            <QuantityInput />
          </div>

          <div className="mb-4 flex flex-col gap-4 items-start">
            <label className="m-text-md-regular text-neutral-700">
              Booking Via
            </label>
            <div className="flex gap-2 flex-wrap">
              <Radio
                label={"Dineout"}
                rdSize="sm"
                id={`BOOKING1`}
                isChecked={true}
                prefixIcon="dine-out"
                name="booking"
                classes="items-center"
              />
              <Radio
                label={"Easy Diner"}
                rdSize="sm"
                id={`BOOKING2`}
                isChecked={true}
                prefixIcon="easy-dinner"
                name="booking"
                classes="items-center"
              />
              <Radio
                label={"Swiggy"}
                rdSize="sm"
                id={`BOOKING3`}
                isChecked={true}
                prefixIcon="swiggy"
                name="booking"
                classes="items-center"
              />
              <Radio
                label={"Zomato"}
                rdSize="sm"
                id={`BOOKING4`}
                prefixIcon="Zomato"
                isChecked={true}
                name="booking"
                classes="items-center"
              />
              <Radio
                label={"Phone"}
                rdSize="sm"
                id={`BOOKING5`}
                prefixIcon="Phone"
                isChecked={true}
                name="booking"
                classes="items-center"
              />
              <Radio
                label={"Walk-in"}
                rdSize="sm"
                id={`BOOKING6`}
                prefixIcon="walk-in"
                isChecked={true}
                name="booking"
                classes="items-center"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  const checkInTable = () => {
    return (
      <div className="flex flex-col items-start">
        <h2 className="m-text-md-bold text-neutral-900 mb-4">Select Table</h2>
        <div className="check-in-container w-full flex gap-4 flex-col">
          <Tab
            tablist={tabList}
            tabChangeFunc={activeTabFunc}
            tabContentList={tabContentList}
            tabSelected={currentTabSelected}
          ></Tab>
        </div>
      </div>
    );
  };
  const showButtons = () => {
    switch (showSideDrawerUI) {
      case 1:
        return (
          <Button
            dataTestId="SLCT-TABL"
            btnType="primary"
            classes="w-full"
            onClick={() => {
              setShowSideDrawerUI(2);
            }}
          >
            {"Select Table"}
          </Button>
        );
      case 0:
        return (
          <Button
            dataTestId="CNFM"
            btnType="primary"
            classes="w-full"
            onClick={() => {
              setShowSideDrawerUI(1);
            }}
          >
            {"Next"}
          </Button>
        );
      case 2:
        return (
          <Button
            dataTestId="RSRV-TABL"
            btnType="primary"
            classes="w-full"
            onClick={() => {
              setShowSideDrawerUI(2);
            }}
          >
            {"Reserve Table"}
          </Button>
        );
      default:
        return <div></div>;
    }
  };
  const SideDrawerData = () => {
    return (
      <SideDrawer
        open={openSideDrawer}
        header="Check-in"
        classes=""
        onCloseDrawer={onCloseDrawer}
        footer={
          <div className="p-3 absolute w-full bottom-0 flex gap-3">
            {showButtons()}
          </div>
        }
      >
        {modalUI()}
      </SideDrawer>
    );
  };
  const [expandedNavbar, setExpandedNavbar] = useState<boolean>(false);
  const handleNavbarOpen = () => {
    setExpandedNavbar((prev) => !prev);
    document.body.classList.toggle("overflow-hidden");
  };
  return (
    <>
      {SideDrawerData()}
      <div className="mobile-menu p-4 md:hidden block">
        <div className="flex justify-between">
          <img src={Logo} width={77.89} height={40} />
          <div className="flex hamburger-sidebar-icon gap-2 justify-center">
            <Button
              dataTestId=""
              iconName="featureIcon"
              btnType="primary"
              children=""
              classes="w-[60%] border p-3 gap-2 rounded-full"
              onClick={() => {
                setOpenSideDrawer(true);
              }}
            />
            <Icon
              icon="bell-mobile-icon"
              color="#fff"
              className="cursor-pointer m-auto"
              width={24}
              height={24}
            />
            <div
              onClick={() => {
                handleNavbarOpen();
              }}
            >
              <Icon
                icon="humberger-icon"
                color="#fff"
                className="cursor-pointer m-auto"
                height={24}
                width={24}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`menu-item h-screen gap-4 w-full p-4 ${
          expandedNavbar ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-between">
          <h1 className="m-display-xxl-normal text-neutral-600"> Menu</h1>
          <div onClick={handleNavbarOpen} className="cursor-pointer">
            <Icon
              icon="cross"
              width={30}
              height={30}
              className="cross-icon m-auto"
            />
          </div>
        </div>
        <Button
          dataTestId=""
          iconName="featureIcon"
          btnType="primary"
          children="Check-in"
          classes="w-full border gap-2 mt-4 mb-4"
          onClick={() => {
            setOpenSideDrawer(true);
          }}
        />
        <Divider />
        <div className="pt-4 gap-5 flex flex-col">
          <div className="flex gap-2 justify-start p-2">
            <Icon icon="homeIcon" color="none" />{" "}
            <Link to="/dashboard">Dashboard</Link>
          </div>
          <div className="flex gap-2 justify-start p-2">
            <Icon icon="tableIcon" color="none" />
            <Link to="/floor-map">Tables</Link>
          </div>
          <div className="flex gap-2 justify-start p-2">
            <Icon icon="shapeIcon" color="none" /> <Link to="">Hosts</Link>
          </div>
          <div className="flex gap-2 justify-start p-2">
            <Icon icon="guestIcon" color="none" />
            <Link to="/guest-list">Guest List</Link>
          </div>
          <div className="flex gap-2 justify-start p-2">
            <Icon icon="settingIcon" color="none" /> <Link to="">Settings</Link>
          </div>
        </div>
        <div className="absolute bottom-0 w-full">
          <Divider />
          <div className="flex flex-col text-left justify-between gap-2 p-2">
            <div>
              <img src="" alt="" />
              <div>
                <div>
                  <span className="text-neutral-700 m-text-lg-medium">
                    Naveen
                  </span>
                  &#9660;
                </div>
                <span className="text-neutral-500 m-text-xs-regular">
                  Manager
                </span>
              </div>
            </div>
            <span className="flex gap-2">
              <Icon icon="logoutIcon" />
              Logout
            </span>
          </div>
        </div>
      </div>
      <div className="side-bar w-[20%] bg-neutral-100 items-center p-4 md:block hidden">
        <div className="grid justify-items-center">
          <img src={Logo} width={77.89} height={40} />
        </div>

        <div className="w-full border text-gray-200 gap-2 mt-4 mb-4"></div>
        <div className="gap-4 ">
          <Button
            dataTestId=""
            iconName="featureIcon"
            btnType="primary"
            children="Check-in"
            classes="w-[60%] border p-3 gap-2"
            onClick={() => {
              setOpenSideDrawer(true);
            }}
          />
        </div>

        <div className="w-full border text-gray-200 gap-4 mt-4 mb-4"></div>

        <div className=" h-[65%] gap-4">
          <div className="p-2 gap-5 flex flex-col">
            <div className="flex gap-2 justify-start p-2">
              <Icon icon="homeIcon" color="none" />{" "}
              <Link to="/dashboard">Dashboard</Link>
            </div>
            <div className="flex gap-2 justify-start p-2">
              <Icon icon="tableIcon" color="none" />
              <Link to="/floor-map">Tables</Link>
            </div>
            <div className="flex gap-2 justify-start p-2">
              <Icon icon="shapeIcon" color="none" /> <Link to="">Hosts</Link>
            </div>
            <div className="flex gap-2 justify-start p-2">
              <Icon icon="guestIcon" color="none" />
              <Link to="/guest-list">Guest List</Link>
            </div>
            <div className="flex gap-2 justify-start p-2">
              <Icon icon="settingIcon" color="none" />{" "}
              <Link to="">Settings</Link>
            </div>
          </div>
        </div>

        <div className="w-full border text-gray-200 gap-4 mt-4 mb-4"></div>

        <div className="flex text-left justify-between gap-2 p-2">
          <div>
            <img src="" alt="" />
            <div>
              <div>
                <span className="text-neutral-700 m-text-lg-medium">
                  Naveen
                </span>
                &#9660;
              </div>
              <span className="text-neutral-500 m-text-xs-regular">
                Manager
              </span>
            </div>
          </div>
          <Icon icon="logoutIcon"></Icon>
        </div>
      </div>
    </>
  );
};
