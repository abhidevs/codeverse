import Image from "next/image";
import SidebarLink from "./SidebarLink";
import {
  HomeIcon,
  UserCircleIcon,
  TrendingUpIcon,
  SearchIcon,
  BookmarkIcon,
  BellIcon,
  PlusIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Link from "next/link";

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className="hidden lg:flex flex-col items-start px-2 fixed h-full w-[268px] z-50">
      <div className="flex items-center justify-start bg-skin-color4 rounded-3xl p-4 w-full">
        <Link href="/profile">
          <a className="w-full flex items-center justify-start space-x-3">
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
              <p className="text-[13px] leading-4 text-skin-muted">@johndoe</p>
            </div>
          </a>
        </Link>
      </div>

      <div className="mt-8 rounded-3xl bg-skin-color4 w-full py-5">
        <SidebarLink
          text="Home"
          icon={HomeIcon}
          link="/"
          active={router.pathname == "/"}
        />
        <SidebarLink
          text="Search"
          icon={SearchIcon}
          link="/search"
          active={router.pathname == "/search"}
        />
        <SidebarLink
          text="Profile"
          icon={UserCircleIcon}
          link="/profile"
          active={router.pathname == "/profile"}
        />
        <SidebarLink
          text="Trending"
          icon={TrendingUpIcon}
          link="/trending"
          active={router.pathname == "/trending"}
        />
        <SidebarLink
          text="Bookmarks"
          icon={BookmarkIcon}
          link="/bookmarks"
          active={router.pathname == "/bookmarks"}
        />
        <SidebarLink text="Notifications" icon={BellIcon} link="#" />
        <SidebarLink text="Create Post" icon={PlusIcon} link="#" />
      </div>
    </div>
  );
};

export default Sidebar;
