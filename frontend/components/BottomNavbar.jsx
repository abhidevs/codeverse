import {
  HomeIcon,
  SearchIcon,
  UserCircleIcon,
  TrendingUpIcon,
  BookmarkIcon,
} from "@heroicons/react/outline";
import BottomNavbarLink from "./BottomNavbarLink";

const BottomNavbar = () => {
  return (
    <nav className="lg:hidden bg-skin-backgroud text-skin-base fixed left-0 bottom-0 w-full h-[60px] 
        border-t flex justify-center items-center overflow-hidden z-10">
      <ul className="w-full max-w-[500px] h-full grid grid-cols-5">
        <BottomNavbarLink icon={HomeIcon} active />
        <BottomNavbarLink icon={SearchIcon} />
        <BottomNavbarLink icon={TrendingUpIcon} />
        <BottomNavbarLink icon={UserCircleIcon} />
        <BottomNavbarLink icon={BookmarkIcon} />
      </ul>
    </nav>
  );
};

export default BottomNavbar;
