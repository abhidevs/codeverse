import Image from "next/image";
import SidebarLink from "./SidebarLink";
import {
  HomeIcon,
  UserCircleIcon,
  TrendingUpIcon,
  AnnotationIcon,
  BookmarkIcon,
  BellIcon,
  PlusIcon,
} from "@heroicons/react/outline";

const Sidebar = () => {
  return (
    <div className="hidden lg:flex flex-col items-start p-2 fixed h-full w-[268px] mt-3">
      <div className="flex items-center justify-start space-x-3 bg-skin-color4 rounded-3xl p-4 w-full">
        <div className="flex items-center justify-center w-14 h-14 p-0 cursor-pointer">
          <Image
            src="/dummyProfileImg.jpg"
            width={180}
            height={180}
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col items-start justify-center space-y-[7px] text-base cursor-pointer">
          <h6 className="text-md font-[500] leading-4">John Doe</h6>
          <p className="text-[13px] leading-4">@johndoe</p>
        </div>
      </div>

      <div className="mt-8 rounded-3xl bg-skin-color4 w-full py-5">
        <SidebarLink text="Home" icon={HomeIcon} active />
        <SidebarLink text="Profile" icon={UserCircleIcon} />
        <SidebarLink text="Trending" icon={TrendingUpIcon} />
        <SidebarLink text="Messages" icon={AnnotationIcon} />
        <SidebarLink text="Bookmarks" icon={BookmarkIcon} />
        <SidebarLink text="Notifications" icon={BellIcon} />
        <SidebarLink text="Create Post" icon={PlusIcon} />
      </div>
    </div>
  );
};

export default Sidebar;
