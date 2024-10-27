import { ReactComponent as Swiggy } from "../../../assets/images/swiggy.svg";
import { ReactComponent as DineOut } from "../../../assets/images/dineout.svg";
import { ReactComponent as EasyDinner } from "../../../assets/images/easyDinner.svg";
import { ReactComponent as Phone } from "../../../assets/images/phone.svg";
import { ReactComponent as WalkIn } from "../../../assets/images/walkIn.svg";
import { ReactComponent as Zomato } from "../../../assets/images/zomato.svg";
import { ReactComponent as Cross } from "../../../assets/images/cross.svg";
import { ReactComponent as CardIcon } from "../../../assets/images/card-icon.svg";
import { ReactComponent as InfoIcon } from "../../../assets/images/info-icon.svg";
import { ReactComponent as Watch } from "../../../assets/images/watch.svg";
import { ReactComponent as WatchPrimary } from "../../../assets/images/watch-primary.svg";
import { ReactComponent as Group } from "../../../assets/images/group.svg";
import { ReactComponent as ThumbUp } from "../../../assets/images/thumbUp.svg";
import { ReactComponent as ThumbDown } from "../../../assets/images/thumbDown.svg";
import { ReactComponent as Copy } from "../../../assets/images/copy.svg";
import { ReactComponent as UserAdd } from "../../../assets/images/user-add.svg";
import { ReactComponent as ChevronUpArrow } from "../../../assets/images/chevron-up-arrow.svg";
import { ReactComponent as ChevronDownIcon } from "../../../assets/images/chevron-down.svg";
import { ReactComponent as MinimizeIcon } from "../../../assets/images/minimize.svg";
import { ReactComponent as MaximizeIcon } from "../../../assets/images/maximize.svg";
import { ReactComponent as Search } from "../../../assets/images/search.svg";
import { ReactComponent as Moderate } from "../../../assets/images/moderate.svg";
import { ReactComponent as FeatureIcon } from "../../../assets/images/feature-icon.svg";
import { ReactComponent as GuestIcon } from "../../../assets/images/guestIcon.svg";
import { ReactComponent as HomeIcon } from "../../../assets/images/homeIcon.svg";
import { ReactComponent as SettingIcon } from "../../../assets/images/setting.svg";
import { ReactComponent as ShapeIcon } from "../../../assets/images/Shape.svg";
import { ReactComponent as tableIcon } from "../../../assets/images/tableIcon.svg";
import { ReactComponent as LogoutIcon } from "../../../assets/images/logoutIcon.svg";


interface IconProps {
  icon: string;
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export const iconMapping: any = {
  swiggy: Swiggy,
  "dine-out": DineOut,
  "easy-dinner": EasyDinner,
  Phone: Phone,
  "walk-in": WalkIn,
  Zomato: Zomato,
  cross: Cross,
  "card-icon": CardIcon,
  "info-icon": InfoIcon,
  "watch-icon": Watch,
  "watch-icon-primary": WatchPrimary,
  "group-icon": Group,
  "thumbUp-icon": ThumbUp,
  "thumbDown-icon": ThumbDown,
  "copy-icon": Copy,
  "user-icon": UserAdd,
  "chevron-up-arrow": ChevronUpArrow,
  "chevron-down": ChevronDownIcon,
  minimizeIcon: MinimizeIcon,
  maximizeIcon: MaximizeIcon,
  searchIcon: Search,
  "moderate-icon": Moderate,
  featureIcon: FeatureIcon,
  guestIcon: GuestIcon,
  homeIcon: HomeIcon,
  settingIcon: SettingIcon,
  shapeIcon: ShapeIcon,
  tableIcon: tableIcon,
  logoutIcon: LogoutIcon
};
export const Icon: React.FC<IconProps> = ({
  icon,
  width = 24,
  height = 24,
  color = "currentColor",
  className = "",
}: IconProps) => {
  let IconComponent;
  if (iconMapping[icon]) {
    IconComponent = iconMapping[icon];
  } else {
    IconComponent = iconMapping["placeholder-img"];
  }
  return (
    <>
      {IconComponent ? (
        <IconComponent
          width={width}
          height={height}
          color={color}
          fill={color}
          className={className}
        />
      ) : null}
    </>
  );
};
