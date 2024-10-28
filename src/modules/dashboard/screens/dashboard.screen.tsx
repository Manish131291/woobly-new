import { useState } from "react";
import Logo from "../../../assets/images/woobly-logo.svg";
import { Tab } from "../../../core-components/molecules/tab/Tab.component";
import "../styles/dashboard.style.scss";
import { Icon } from "../../../core-components/atoms/icon/Icon.component";
import { Divider } from "../../../core-components/atoms/divider/Divider.component";
import Dummy from "../../../assets/images/avatar.jpg";
import { SideNavBar } from "../../../core-components/templates/side-nav/SideNav.component";
const Dashboard: React.FC = () => {
  const tabList = ["Today", "Yesterday", "Weekly", "Monthly", "Custom"];
  const [currentTabSelected, setCurrentTabSelected] = useState(0);
  const activeTabFunc = (key: number) => {
    setCurrentTabSelected(key);
  };

  const renderTabContents = (val: number) => {
    const getContent = () => {
      switch (val) {
        case 0:
          return (
            <div className="flex gap-4 flex-col">
              <div className="flex md:flex-row flex-col gap-4">
                <div className="flex gap-4 w-full">
                  <div className="flex flex-col gap-2 items-start bg-neutral-50 p-4 w-full rounded-lg">
                    <span className="m-text-md-regular text-neutral-900">
                      Total Sale
                    </span>
                    <span className="m-display-xxl-bold text-black">
                      ₹44,000
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 items-start bg-neutral-50 p-4 w-full rounded-lg">
                    <span className="m-text-md-regular text-neutral-900">
                      Average Bill
                    </span>
                    <span className="m-display-xxl-bold text-black">
                      ₹8,820
                    </span>
                  </div>
                </div>
                <div className="flex gap-4 w-full">
                  <div className="flex flex-col gap-2 items-start bg-neutral-50 p-4 w-full rounded-lg">
                    <span className="m-text-md-regular text-neutral-900">
                      Tables Served
                    </span>
                    <span className="m-display-xxl-bold text-black">25</span>
                  </div>
                  <div className="flex flex-col gap-2 items-start bg-neutral-50 p-4 w-full rounded-lg">
                    <span className="m-text-md-regular text-neutral-900">
                      Guests Served
                    </span>
                    <span className="m-display-xxl-bold text-black">65</span>
                  </div>
                </div>
              </div>
              <div className="flex md:w-[50%] w-full flex-col gap-4">
                <div className="flex md:w-[50%] w-full flex-col gap-4">
                  <div className="flex w-full flex-col items-start gap-2">
                    <h2 className="m-text-md-bold text-neutral-700">
                      Current Status
                    </h2>
                    <div className="flex flex-row gap-2 items-start bg-neutral-50 p-4 rounded-lg w-full justify-between">
                      <div className="flex flex-row w-[70%]">
                        <div className="flex flex-col gap-2 items-start w-[50%]">
                          <span className="m-text-md-regular text-neutral-900">
                            Tables Occupied
                          </span>
                          <span className="m-display-xxl-bold text-black">
                            10
                          </span>
                        </div>
                        <div className="flex flex-col gap-2 items-start w-[50%]">
                          <span className="m-text-md-regular text-neutral-900">
                            Guest Seated
                          </span>
                          <span className="m-display-xxl-bold text-black">
                            45
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 items-start">
                        <span className="m-text-md-regular text-neutral-900">
                          Real-Time Experience
                        </span>
                        <div className="flex gap-2">
                          <span className="flex items-center">
                            <Icon
                              icon="thumbUp-icon"
                              color="none"
                              width={12}
                              height={12}
                            />
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
                  </div>
                  <div className="flex w-full flex-col items-start gap-2">
                    <h2 className="m-text-md-bold text-neutral-700">Ratings</h2>
                    <div className="flex flex-row gap-2 items-start bg-neutral-50 p-4 rounded-lg w-full justify-between">
                      <div className="flex gap-2 flex-col items-start">
                        <span className="m-text-md-medium text-neutral-900">
                          Food
                        </span>
                        <span className="flex items-center m-display-sm-bold text-neutral-900">
                          4.1
                          <Icon
                            icon="thumbUp-icon"
                            color="none"
                            className="ml-2"
                            width={12}
                            height={12}
                          />
                        </span>
                      </div>
                      <div className="flex gap-2 flex-col items-start">
                        <span className="m-text-md-medium text-neutral-900">
                          Service
                        </span>
                        <span className="flex items-center m-display-sm-bold text-neutral-900">
                          4.1
                          <Icon
                            icon="thumbUp-icon"
                            color="none"
                            className="ml-2"
                            width={12}
                            height={12}
                          />
                        </span>
                      </div>
                      <div className="flex gap-2 flex-col items-start">
                        <span className="m-text-md-medium text-neutral-900">
                          Ambience
                        </span>
                        <span className="flex items-center m-display-sm-bold text-neutral-900">
                          4.1
                          <Icon
                            icon="thumbUp-icon"
                            color="none"
                            className="ml-2"
                            width={12}
                            height={12}
                          />
                        </span>
                      </div>
                      <div className="flex gap-2 flex-col items-start">
                        <span className="m-text-md-medium text-neutral-900">
                          Music
                        </span>
                        <span className="flex items-center m-display-sm-bold text-neutral-900">
                          4.1
                          <Icon
                            icon="moderate-icon"
                            color="none"
                            className="ml-2"
                            width={12}
                            height={12}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start gap-2 ">
                    <h1 className="from-neutral-700 text-base">
                      Top Performers
                    </h1>
                    <div className="w-full flex flex-col bg-neutral-50 border-neutral-100 rounded-xl p-4">
                      <div className="flex w-full mb-4">
                        <div className="flex flex-row items-start w-[50%] gap-2">
                          <img
                            src={Dummy}
                            className="rounded-full my-auto"
                            width={24}
                            height={24}
                          />
                          <div className="flex flex-col items-start">
                            <span className="m-text-md-medium text-neutral-700">
                              Ravindra
                            </span>
                            <span className="text-neutral-900 m-text-md-medium">
                              5 tables served . 1 Active
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-row w-[50%] justify-between">
                          <span className="border-r-4 border-neutral-400 pr-10 text-neutral-900 m-text-md-bold">
                            00:48 sec
                          </span>
                          <span className="text-neutral-900 m-text-md-bold">
                            23 calls
                          </span>
                        </div>
                      </div>
                      <Divider classes="mb-4" />
                      <div className="flex w-full mb-4">
                        <div className="flex flex-row items-start w-[50%] gap-2">
                          <img
                            src={Dummy}
                            className="rounded-full my-auto"
                            width={24}
                            height={24}
                          />
                          <div className="flex flex-col items-start">
                            <span className="m-text-md-medium text-neutral-700">
                              Ravindra
                            </span>
                            <span className="text-neutral-900 m-text-md-medium">
                              5 tables served . 1 Active
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-row w-[50%] justify-between">
                          <span className="border-r-4 border-neutral-400 pr-10 text-neutral-900 m-text-md-bold">
                            00:48 sec
                          </span>
                          <span className="text-neutral-900 m-text-md-bold">
                            23 calls
                          </span>
                        </div>
                      </div>
                      <Divider classes="mb-4" />
                      <div className="flex w-full mb-4">
                        <div className="flex flex-row items-start w-[50%] gap-2">
                          <img
                            src={Dummy}
                            className="rounded-full my-auto"
                            width={24}
                            height={24}
                          />
                          <div className="flex flex-col items-start">
                            <span className="m-text-md-medium text-neutral-700">
                              Ravindra
                            </span>
                            <span className="text-neutral-900 m-text-md-medium">
                              5 tables served . 1 Active
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-row w-[50%] justify-between">
                          <span className="border-r-4 border-neutral-400 pr-10 text-neutral-900 m-text-md-bold">
                            00:48 sec
                          </span>
                          <span className="text-neutral-900 m-text-md-bold">
                            23 calls
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex  flex-col  gap-4 w-[50%]">
                  <div className="w-full flex flex-col gap-2 items-start">
                    <h1 className="m-text-md-bold text-neutral-700">
                      Service Call
                    </h1>
                    <div className="flex flex-row gap-5 items-start bg-neutral-50 p-4 rounded-lg w-full justify-between ">
                      <div className="flex flex-col text-left">
                        <span className="m-text-md-regular text-neutral-900">
                          Total
                        </span>
                        <span className="m-display-xxl-bold text-black">
                          234
                        </span>
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="m-text-md-regular text-neutral-900">
                          Attended
                        </span>
                        <span className="m-display-xxl-bold text-success-800">
                          212
                        </span>
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="m-text-md-regular text-neutral-900">
                          Missed
                        </span>
                        <span className="m-display-xxl-bold text-red-600">
                          22
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex flex-row justify-between gap-2 items-start">
                    <div className="flex flex-col gap-2 items-start w-[50%]">
                      <h1 className="m-text-md-bold text-neutral-700">
                        Average Response Time
                      </h1>
                      <div className="flex flex-row gap-5 items-center bg-neutral-50 p-8 rounded-lg w-full justify-center">
                        <span className="m-display-sm-bold text-neutral-900">
                          35 sec
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-start w-[50%]">
                      <h1 className="m-text-md-bold text-neutral-700">
                        Table Turn Around Time 40 min
                      </h1>
                      <div className="flex flex-row gap-5 items-center bg-neutral-50 p-8 rounded-lg w-full justify-center">
                        <span className="m-display-sm-bold text-neutral-900">
                          40 min
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full flex-col items-start gap-2 ">
                    <h1 className="from-neutral-700 text-base">
                      Chef’s Special Request
                    </h1>

                    <div className="w-full flex flex-col bg-neutral-50 border-neutral-100 rounded-xl p-4">
                      <div className="flex w-full mb-4 justify-between">
                        <div className="flex flex-row items-start w-[50%] gap-2 ">
                          <img
                            src={Dummy}
                            className="rounded-full my-auto"
                            width={24}
                            height={24}
                          />
                          <div className="flex flex-col items-start">
                            <span className="m-text-md-medium text-neutral-700">
                              Evolved Plant Steak With Coconut & Garlic
                            </span>
                            <span className="text-neutral-900 m-text-md-medium">
                              ₹480 . Veg
                            </span>
                          </div>
                        </div>

                        <div className="flex ">
                          <span className="text-neutral-900 m-text-md-bold">
                            12 Request
                          </span>
                        </div>
                      </div>
                      <Divider classes="mb-4" />
                      <div className="flex w-full mb-4 justify-between">
                        <div className="flex flex-row items-start w-[50%] gap-2 ">
                          <img
                            src={Dummy}
                            className="rounded-full my-auto"
                            width={24}
                            height={24}
                          />
                          <div className="flex flex-col items-start">
                            <span className="m-text-md-medium text-neutral-700">
                              Evolved Plant Steak With Coconut & Garlic
                            </span>
                            <span className="text-neutral-900 m-text-md-medium">
                              ₹480 . Veg
                            </span>
                          </div>
                        </div>

                        <div className="flex ">
                          <span className="text-neutral-900 m-text-md-bold">
                            12 Request
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
  return (
    <div className="flex flex-row h-screen">
      <SideNavBar />
      <div className="px-8 py-4 w-[80%]">
        <div className="flex justify-between">
          <h1 className="m-display-xxl-normal text-neutral-600">
            Malaka Spice
          </h1>
          <span className="m-text-md-medium text-neutral-700">
            Fri, 12 Oct 3:20 pm
          </span>
        </div>
        <Tab
          tablist={tabList}
          tabChangeFunc={activeTabFunc}
          tabContentList={tabContentList}
          tabSelected={currentTabSelected}
        ></Tab>
      </div>
      {/* <Modal /> */}
    </div>
  );
};

export default Dashboard;
