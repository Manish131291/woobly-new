import { useState } from "react";
import { Floor_table, IG_Input, SideDrawer } from "../../../core-components";
import { Button } from "../../../core-components/atoms/button/Button.component";
import { RegEx } from "../../../core-constants/regex.constant";
import QuantityInput from "../../../core-components/atoms/quantityinput/QuanityInput.component";
import { Radio } from "../../../core-components/atoms/radio/Radio.component";
import "../styles/dashboard.style.scss";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";
import dayjs from "dayjs";
import { Tab } from "../../../core-components/molecules/tab/Tab.component";
import { OptionCard } from "../../../core-components/molecules/option-card/OptionCard.component";
import { Icon } from "../../../core-components/atoms/icon/Icon.component";
import Iginee from "../../../assets/images/iginee.png";
import Logo from "../../../assets/images/woobly-logo.svg";
import { Divider } from "../../../core-components/atoms/divider/Divider.component";
const Dashboard: React.FC = () => {
  const [openSideDrawer, setOpenSideDrawer] = useState(false);
  const [tableSideDrawer, setTableSideDrawer] = useState(false);
  const [showSideDrawerUI, setShowSideDrawerUI] = useState(0);
  const [showSideDrawerTableUI, setShowSideDrawerTableUI] = useState(0);
  const [currentTabSelected, setCurrentTabSelected] = useState(0);
  const onCloseDrawer = () => {
    setOpenSideDrawer(false);
  };
  const tableOnCloseDrawer = () => {
    setTableSideDrawer(false);
  };
  const tabList = ["Art", "Classic", "Jump"];
  const activeTabFunc = (key: number) => {
    setCurrentTabSelected(key);
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
  const renderTabContents1 = (val: number) => {
    const getContent = () => {
      switch (val) {
        case 0:
          return (
            <div className=" flex flex-col gap-2">
              <div className="flex gap-2">
                <span className="m-text-lg-bold text-neutral-900">Art</span>
                <span className="m-text-sm-medium text-indigo-700 bg-indigo-50 rounded-sm p-1">
                  4 Checked In
                </span>
              </div>
              <div className="flex gap-4">
                <Floor_table
                  tableNumber={"01"}
                  name={"MR MODI"}
                  tableType={"OCCUPIED"}
                  onClick={() => {
                    setShowSideDrawerTableUI(0);
                    setTableSideDrawer(true);
                  }}
                />
                <Floor_table
                  tableNumber={"02"}
                  name={"MR MODI"}
                  tableType={"EMPTY"}
                  igineeAssign={true}
                />
                <Floor_table
                  tableNumber={"03"}
                  name={"MR MODI"}
                  tableType={"EMPTY"}
                  onClick={() => {
                    setShowSideDrawerTableUI(1);
                    setTableSideDrawer(true);
                  }}
                />
              </div>
            </div>
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
  const tabContentList1 = [
    renderTabContents1(0),
    renderTabContents1(11),
    renderTabContents1(2),
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
  const modalTableUI = () => {
    switch (showSideDrawerTableUI) {
      case 1:
        return EmptyTableUI();
      case 0:
        return OccupiedTableUI();

      default:
        return <div></div>;
    }
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

  const tableSideDrawerData = () => {
    return (
      <SideDrawer open={tableSideDrawer} onCloseDrawer={tableOnCloseDrawer}>
        <div>
          <div className="absolute top-4 left-4 flex gap-1 flex-col">
            <h1 className="m-display-sm-bold text-neutral-700">Table 01</h1>
            <span className="m-text-sm-regular text-neutral-700">
              4 Seats Arts
            </span>
          </div>
          {modalTableUI()}
        </div>
      </SideDrawer>
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

  const EmptyTableUI = () => {
    return (
      <div className="mt-4">
        <Button
          dataTestId="CHCK-IN"
          btnType="secondary"
          classes="w-1/2"
          onClick={() => {
            setOpenSideDrawer(true);
          }}
        >
          {"Check-IN"}
        </Button>

        <div className="flex flex-col items-start mt-4 gap-4">
          <h2 className="m-text-lg-bold text-neutral-900">Past Hangout</h2>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex bg-neutral-100 p-4 rounded-lg w-full justify-between">
              <div className="flex flex-col items-start">
                <span className="m-text-md-medium text-neutral-700">test</span>
                <span className="m-text-md-regular text-neutral-500">
                  +91 7014451320
                </span>
              </div>
              <div className="flex gap-1 m-text-sm-medium text-neutral-700 ">
                <Icon icon="watch-icon" width={12} height={12} color="none" />
                <span>4:30 PM, Yesterday</span>
              </div>
            </div>
            <div className="flex bg-neutral-100 p-4 rounded-lg w-full justify-between">
              <div className="flex flex-col items-start">
                <span className="m-text-md-medium text-neutral-700">test</span>
                <span className="m-text-md-regular text-neutral-500">
                  +91 7014451320
                </span>
              </div>
              <div className="flex gap-1 m-text-sm-medium text-neutral-700 ">
                <Icon icon="watch-icon" width={12} height={12} color="none" />
                <span>4:30 PM, Yesterday</span>
              </div>
            </div>
            <div className="flex bg-neutral-100 p-4 rounded-lg w-full justify-between">
              <div className="flex flex-col items-start">
                <span className="m-text-md-medium text-neutral-700">test</span>
                <span className="m-text-md-regular text-neutral-500">
                  +91 7014451320
                </span>
              </div>
              <div className="flex gap-1 m-text-sm-medium text-neutral-700 ">
                <Icon icon="watch-icon" width={12} height={12} color="none" />
                <span>4:30 PM, Yesterday</span>
              </div>
            </div>
            <div className="flex bg-neutral-100 p-4 rounded-lg w-full justify-between">
              <div className="flex flex-col items-start">
                <span className="m-text-md-medium text-neutral-700">test</span>
                <span className="m-text-md-regular text-neutral-500">
                  +91 7014451320
                </span>
              </div>
              <div className="flex gap-1 m-text-sm-medium text-neutral-700 ">
                <Icon icon="watch-icon" width={12} height={12} color="none" />
                <span>4:30 PM, Yesterday</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const OccupiedTableUI = () => {
    return (
      <div className="mt-4">
        <div className="flex gap-2 justify-between">
          <div className="flex flex-col gap-2">
            <span className="m-text-md-medium text-neutral-700">Mr. Modi</span>
            <span className="m-text-sm-regular text-neutral-500">
              FJSHDU23043
            </span>
          </div>
          <div className="flex flex-row gap-2">
            <span className="flex gap-2 rounded-sm bg-primary-700 text-primary-50 h-[20px] p-1 items-center">
              <Icon
                icon="watch-icon-primary"
                color="none"
                width={12}
                height={12}
                className="text-primary-50"
              />
              4:30 PM
            </span>
            <span className="flex gap-2 rounded-sm bg-primary-700 text-primary-50 h-[20px] p-1 items-center">
              <Icon
                icon="group-icon"
                color="none"
                width={12}
                height={12}
                className="text-primary-50"
              />
              4 guest
            </span>
          </div>
        </div>
        <div className="flex gap-2 justify-between">
          <div className="flex flex-col gap-2">
            <span className="m-text-md-medium text-neutral-700">
              Ola Rajput
            </span>
            <span className="m-text-sm-regular text-neutral-500">Server</span>
          </div>
          <div className="flex gap-2 flex-col items-end">
            <span className="m-text-md-regular text-neutral-600">
              Real Time Expeirence
            </span>
            <div className="flex gap-2">
              <span className="flex items-center">
                <Icon icon="thumbUp-icon" color="none" width={12} height={12} />
                3
              </span>
              <span className="flex items-center">
                <Icon
                  icon="thumbDown-icon"
                  color="none"
                  width={12}
                  height={12}
                />
                0
              </span>
            </div>
          </div>
        </div>

        <Divider classes="mt-4" />

        <div className="flex flex-col items-start mt-4 gap-4">
          <h2 className="m-text-lg-bold text-neutral-900">Activity Tracker</h2>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex bg-warning_700 p-4 rounded-lg w-full justify-between">
              <div className="flex items-start gap-3">
                <Icon icon="copy-icon" color="none" width={32} height={32} />
                <div className="flex flex-col items-start">
                  <span className="m-text-md-medium text-white">
                    Bill Requested
                  </span>
                  <span className="m-text-xs-regular text-warning_100">
                    00:10
                  </span>
                </div>
              </div>
              <div className="flex gap-1 m-text-sm-medium text-primary-500 ">
                <span>10 sec. ago</span>
              </div>
            </div>
            <div className="flex bg-neutral-100 p-4 rounded-lg w-full justify-between">
              <div className="flex items-start gap-3">
                <Icon icon="user-icon" color="none" width={32} height={32} />
                <div className="flex flex-col items-start">
                  <span className="m-text-md-medium text-neutral-700">
                    Service Requested
                  </span>
                  <span className="m-text-xs-regular text-neutral-500">
                    Closed in 30 sec
                  </span>
                </div>
              </div>
              <div className="flex gap-1 m-text-sm-medium text-neutral-700 ">
                <span>08:34 pm</span>
              </div>
            </div>
            <div className="flex bg-neutral-100 p-4 rounded-lg w-full justify-between">
              <div className="flex items-start gap-3">
                <Icon icon="user-icon" color="none" width={32} height={32} />
                <div className="flex flex-col items-start">
                  <span className="m-text-md-medium text-neutral-700">
                    Power Bank Requested
                  </span>
                  <span className="m-text-md-regular text-neutral-500">
                    Closed in 30 sec
                  </span>
                </div>
              </div>
              <div className="flex gap-1 m-text-sm-medium text-neutral-700 ">
                <span>08:14 pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
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
  return (
    <div className="flex flex-row h-screen">
      <div className="side-bar w-[20%] bg-neutral-100 items-center p-4">
        <img src={Logo} width={63} />
      </div>
      <div className="px-8 py-4 w-[80%]">
        <div className="flex justify-between">
          <h1 className="m-display-xxl-normal text-neutral-900">Floor Map</h1>
          <div className="flex p-2 border-primary-200 bg-primary-50 rounded-xl">
            <img
              src={Iginee}
              alt="logo"
              style={{ borderRadius: 5 }}
              width={32}
              height={32}
            />
            <div className="flex flex-col">
              <span className="m-text-sm-regular text-primary-600">
                iGenie Assigned
              </span>
              <span className="m-text-lg-bold text-primary-700">
                4 out of 20
              </span>
            </div>
          </div>
        </div>
        <Tab
          tablist={tabList}
          tabChangeFunc={activeTabFunc}
          tabContentList={tabContentList1}
          tabSelected={currentTabSelected}
        ></Tab>

        <Button
          dataTestId="CNFM"
          btnType="primary"
          classes="w-full"
          onClick={() => {
            setOpenSideDrawer(true);
          }}
        >
          {"Next"}
        </Button>
        {SideDrawerData()}
        {tableSideDrawerData()}
      </div>
    </div>
  );
};

export default Dashboard;
