import {
  DataTable,
  TabColumns,
} from "../../../core-components/templates/data-table/DataTable.component";
import "../styles/guest-list.style.scss";
import Logo from "../../../assets/images/woobly-logo.svg";
import { Button } from "../../../core-components/atoms/button/Button.component";
import { SideNavBar } from "../../../core-components/templates/side-nav/SideNav.component";
import { Icon } from "../../../core-components/atoms/icon/Icon.component";

const GuestList: React.FC = () => {
  const columnsList: TabColumns[] = [
    {
      name: "#",
      key: "#",
      headerClasses: "m-text-xs-bold text-neutrals-700",
      classes: "break-all justify-start font-inter font-[500] text-[14px] leading-[20px] text-neutrals-900",
      width: "2rem",
    },
    {
      name: "Name",
      key: "Name",
      classes: "break-all justify-start font-inter font-[500] text-[14px] leading-[20px] text-neutrals-900",
      headerClasses: "m-text-xs-bold text-neutrals-700",
    },
    {
      name: "Mobile Number",
      key: "Mobile Number",
      classes: "break-all justify-start font-inter font-[500] text-[14px] leading-[20px] text-neutrals-900",
      headerClasses: "m-text-xs-bold text-neutrals-700",
    },
    {
      name: "Last Visit",
      key: "Last Visit",
      classes: "break-all justify-start font-inter font-[500] text-[14px] leading-[20px] text-neutrals-900",
      headerClasses: "m-text-xs-bold text-neutrals-700",
    },
    {
      name: "No of Visit",
      key: "No of Visit",
      classes: "break-all justify-start font-inter font-[500] text-[14px] leading-[20px] text-neutrals-900",
      headerClasses: "m-text-xs-bold text-neutrals-700",
    },

    {
      name: "",
      key: "view",
      classes: "break-all justify-start w-[86px] h-[40px] p-[12px] gap-[2px]",
      headerClasses: "m-text-xs-bold text-gray-900 ",
      onFormatter(_item) {
        return <div className="flex items-center">
          <Button dataTestId="" btnType="secondary" classes="" onClick={() => { }} size="lg" >View</Button>
        </div>
      }
    },
  ];
  return (
    <div className="flex flex-row h-screen">
      <div className="side-bar w-[20%] bg-neutral-100 items-center p-4">
        <div className="grid justify-items-center">
          <img src={Logo} width={
            77.89} height={40} />
        </div>
        <div className="w-full border text-gray-200 gap-2 mt-4 mb-4"></div>
        <div className="gap-4 ">
          <Button dataTestId="" iconName="featureIcon" btnType="primary" children="Check-in" classes="w-[60%] border p-3 gap-2" onClick={() => { }} />

        </div>

        <div className="w-full border text-gray-200 gap-4 mt-4 mb-4"></div>

        <div className=" h-[65%] gap-4">
          <SideNavBar />

        </div>

        <div className="w-full border text-gray-200 gap-4 mt-4 mb-4"></div>

        <div className="flex text-left justify-between gap-2 p-2">
          <div>
            <img src="" alt="" />
            <div>
              <div><span className="text-neutral-700 m-text-lg-medium">Naveen</span>&#9660;</div>
              <span className="text-neutral-500 m-text-xs-regular">Manager</span>
            </div>
          </div>
          <Icon icon="logoutIcon"></Icon>
        </div>

      </div>


      <div className="px-8 py-4 w-[80%] text-left">
        <h1 className=" text-2xl font-normal mt-6 text-neutral-900">Guest List</h1>
        <DataTable
          columns={columnsList}
          data={[{ '#': '1', 'Name': 'Bhawesh Bump', "Mobile Number": '9716543113', "Last Visit": "10 jul,2024", "No of Visit": 1 },
          { '#': '2', 'Name': 'Maharth Mannur', "Mobile Number": '9880127663', "Last Visit": "10 jul,2024", "No of Visit": 2 },
          { '#': '3', 'Name': 'Taneesh Misra', "Mobile Number": '6532590641', "Last Visit": "10 jul,2024", "No of Visit": 2 },
          { '#': '4', 'Name': 'Dhruv Jat', "Mobile Number": '8038153583', "Last Visit": "10 jul,2024", "No of Visit": 3 },
          { '#': '5', 'Name': 'Kala Bihari', "Mobile Number": '6798470898', "Last Visit": "10 jul,2024", "No of Visit": 2 },
          { '#': '6', 'Name': 'Amanpreet Mittal', "Mobile Number": '8728042914', "Last Visit": "10 jul,2024", "No of Visit": 1 },
          { '#': '7', 'Name': 'Gaurik Borgohein', "Mobile Number": '8387199059', "Last Visit": "10 jul,2024", "No of Visit": 1 },
          {}
          ]}
          showMinMaxBtn={false}
          showSearch={true}
          pagination={false}
        />

      </div>
      <div>
      </div>
    </div>
  );
};

export default GuestList;
