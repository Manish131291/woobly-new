import { Icon } from "../../atoms/icon/Icon.component";
import "./Floor_table.style.scss";

interface Floor_tableProps {
  tableNumber: any;
  name: any;
  guestCount?: any;
  serviceRequest?: boolean;
  tableType?: "EMPTY" | "OCCUPIED";
  igineeAssign?: boolean;
  onClick?: () => void;
}

export const Floor_table: React.FC<Floor_tableProps> = ({
  tableNumber,
  name,
  guestCount,
  serviceRequest,
  tableType,
  igineeAssign,
  onClick,
}) => {
  return (
    <div
      className={`relative p-2 w-[233px] h-[126px] rounded-xl ${
        tableType === "EMPTY" ? "bg-neutral-100" : "bg-primary-900"
      }`}
      onClick={() => {
        onClick?.();
      }}
    >
      <div>
        <div className="flex flex-col w-full items-start">
          <span
            className={`m-text-sm-medium ${
              tableType === "EMPTY" ? "text-neutral-700" : "text-primary-25"
            }`}
          >
            {tableNumber}
          </span>
          <span
            className={`m-text-lg-bold ${
              tableType === "EMPTY" ? "text-neutral-800" : "text-primary-50"
            }`}
          >
            {name}
          </span>
          <span>{`${guestCount} Guest`}</span>
        </div>
        {igineeAssign && (
          <span className="flex justify-center bg-warning_50 text-warning_700 gap-2 rounded-lg">
            <Icon
              icon="info-icon"
              color="none"
              width={12}
              height={12}
              className="my-auto"
            />
            Assign iGenie
          </span>
        )}
      </div>

      <span
        className={`p-1 ${
          tableType === "EMPTY"
            ? "bg-warning_700 text-warning_300"
            : "bg-success-800 text-success-100"
        } m-text-xs-bold rounded-br-lg rounded-tl-lg align-bottom absolute bottom-0 right-0`}
      >
        {tableType}
      </span>
    </div>
  );
};
