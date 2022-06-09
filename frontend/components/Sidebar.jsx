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
import { shallowEqual, useSelector } from "react-redux";

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth, shallowEqual);

  const router = useRouter();

  return (
    <div className="hidden lg:flex flex-col items-start px-2 fixed h-full w-[268px] z-50">
      {user && (
        <div className="flex items-center justify-start bg-skin-color4 rounded-3xl p-4 w-full mb-8">
          <Link href={`/profile/${user?._id}`}>
            <a className="w-full flex items-center justify-start space-x-3">
              <div className="flex items-center justify-center w-14 h-14 p-0 cursor-pointer">
                <Image
                  src={
                    user?.avatar ||
                    "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                  }
                  width={180}
                  height={180}
                  className="rounded-full object-cover h-[180px] w-[180px]"
                />
              </div>
              <div className="flex flex-col items-start justify-center space-y-[7px] text-base cursor-pointer">
                <h6 className="text-md font-[500] leading-4">
                  {user?.fullname}
                </h6>
                <p className="text-[13px] leading-4 text-skin-muted">
                  {user?.username}
                </p>
              </div>
            </a>
          </Link>
        </div>
      )}
      <div className="rounded-3xl bg-skin-color4 w-full py-5">
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
          link={user ? `/profile/${user?._id}` : ""}
          active={router.pathname.includes(`/profile`)}
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
