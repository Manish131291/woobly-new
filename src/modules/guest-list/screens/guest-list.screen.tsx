import {
  DataTable,
  TabColumns,
} from "../../../core-components/templates/data-table/DataTable.component";
import "../styles/guest-list.style.scss";

import { Button } from "../../../core-components/atoms/button/Button.component";
import { SideNavBar } from "../../../core-components/templates/side-nav/SideNav.component";

const GuestList: React.FC = () => {
  const columnsList: TabColumns[] = [
    {
      name: "#",
      key: "#",
      headerClasses: "m-text-xs-bold text-neutrals-700",
      classes:
        "break-all justify-start font-inter font-[500] text-[14px] leading-[20px] text-neutrals-900",
      width: "2rem",
    },
    {
      name: "Name",
      key: "Name",
      classes:
        "break-all justify-start font-inter font-[500] text-[14px] leading-[20px] text-neutrals-900",
      headerClasses: "m-text-xs-bold text-neutrals-700",
    },
    {
      name: "Mobile Number",
      key: "Mobile Number",
      classes:
        "break-all justify-start font-inter font-[500] text-[14px] leading-[20px] text-neutrals-900",
      headerClasses: "m-text-xs-bold text-neutrals-700",
    },
    {
      name: "Last Visit",
      key: "Last Visit",
      classes:
        "break-all justify-start font-inter font-[500] text-[14px] leading-[20px] text-neutrals-900",
      headerClasses: "m-text-xs-bold text-neutrals-700",
    },
    {
      name: "No of Visit",
      key: "No of Visit",
      classes:
        "break-all justify-start font-inter font-[500] text-[14px] leading-[20px] text-neutrals-900",
      headerClasses: "m-text-xs-bold text-neutrals-700",
    },

    {
      name: "",
      key: "view",
      classes: "break-all justify-start w-[86px] h-[40px] p-[12px] gap-[2px]",
      headerClasses: "m-text-xs-bold text-gray-900 ",
      onFormatter(_item) {
        return (
          <div className="flex items-center">
            <Button
              dataTestId=""
              btnType="secondary"
              classes=""
              onClick={() => {}}
              size="lg"
            >
              View
            </Button>
          </div>
        );
      },
    },
  ];
  return (
    <div className="flex flex-row h-screen">
      <SideNavBar />

      <div className="px-8 py-4 w-[80%] text-left">
        <h1 className=" text-2xl font-normal mt-6 text-neutral-900">
          Guest List
        </h1>
        <DataTable
          columns={columnsList}
          data={[
            {
              "#": "1",
              Name: "Bhawesh Bump",
              "Mobile Number": "9716543113",
              "Last Visit": "10 jul,2024",
              "No of Visit": 1,
            },
            {
              "#": "2",
              Name: "Maharth Mannur",
              "Mobile Number": "9880127663",
              "Last Visit": "10 jul,2024",
              "No of Visit": 2,
            },
            {
              "#": "3",
              Name: "Taneesh Misra",
              "Mobile Number": "6532590641",
              "Last Visit": "10 jul,2024",
              "No of Visit": 2,
            },
            {
              "#": "4",
              Name: "Dhruv Jat",
              "Mobile Number": "8038153583",
              "Last Visit": "10 jul,2024",
              "No of Visit": 3,
            },
            {
              "#": "5",
              Name: "Kala Bihari",
              "Mobile Number": "6798470898",
              "Last Visit": "10 jul,2024",
              "No of Visit": 2,
            },
            {
              "#": "6",
              Name: "Amanpreet Mittal",
              "Mobile Number": "8728042914",
              "Last Visit": "10 jul,2024",
              "No of Visit": 1,
            },
            {
              "#": "7",
              Name: "Gaurik Borgohein",
              "Mobile Number": "8387199059",
              "Last Visit": "10 jul,2024",
              "No of Visit": 1,
            },
            {},
          ]}
          showMinMaxBtn={false}
          showSearch={true}
          pagination={false}
        />
      </div>
      <div></div>
    </div>
  );
};

export default GuestList;
