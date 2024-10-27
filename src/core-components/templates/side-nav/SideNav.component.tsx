import { Link } from 'react-router-dom'

import "./SideNav.style.scss";
import { Icon } from '../../atoms/icon/Icon.component';

export const SideNavBar: React.FC<any> = () => {
  return (
    <>
      <div className="p-2 gap-5 flex flex-col">

        <div className='flex gap-2 justify-start p-2'> <Icon icon="homeIcon" color='none' /> <Link to='' >Dashboard</Link></div>
        <div className='flex gap-2 justify-start p-2'> <Icon icon="tableIcon" color='none' /> <Link to='' >Tables</Link></div>
        <div className='flex gap-2 justify-start p-2'> <Icon icon="shapeIcon" color='none' /> <Link to='' >Hosts</Link></div>
        <div className='flex gap-2 justify-start p-2'> <Icon icon="guestIcon" color='none' /> <Link to='' >Guest List</Link></div>
        <div className='flex gap-2 justify-start p-2'> <Icon icon="settingIcon" color='none' /> <Link to='' >Settings</Link></div>
      </div >
    </>
  );
};
