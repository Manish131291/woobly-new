import {
  DataTable,
  TabColumns,
} from "../../../core-components/templates/data-table/DataTable.component";
import "../styles/guest-list.style.scss";
import Logo from "../../../assets/images/woobly-logo.svg";
const GuestList: React.FC = () => {
  const columnsList: TabColumns[] = [
    {
      name: "sno",
      key: "serial",
      headerClasses: "m-text-xs-bold text-gray-900",
      width: "2rem",
    },
    {
      name: "employeeId",
      key: "employeeId",
      classes: "break-all justify-start",
      headerClasses: "m-text-xs-bold text-gray-900",
    },
    {
      name: "userName",
      key: "username",
      classes: "break-all justify-start",
      headerClasses: "m-text-xs-bold text-gray-900",
    },
    {
      name: "branchCode",
      key: "branchCode",
      classes: "break-all justify-start",
      headerClasses: "m-text-xs-bold text-gray-900",
    },
    {
      name: "branchName",
      key: "branchName",
      classes: "break-all justify-start",
      headerClasses: "m-text-xs-bold text-gray-900",
    },
    {
      name: "pinCode",
      key: "pinCode",
      classes: "break-all justify-start",
      headerClasses: "m-text-xs-bold text-gray-900",
    },
  ];
  return (
    <div className="flex flex-row h-screen">
      <div className="side-bar w-[20%] bg-neutral-100 items-center p-4">
        <img src={Logo} width={63} />
      </div>
      <div className="px-8 py-4 w-[80%]">
        <DataTable
          columns={columnsList}
          data={[]}
          showMinMaxBtn={false}
          showSearch={true}
          pagination={true}
        />
      </div>
    </div>
  );
};

export default GuestList;
