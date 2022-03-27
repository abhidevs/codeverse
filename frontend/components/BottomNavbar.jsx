import {
  HomeIcon,
  SearchIcon,
  UserCircleIcon,
  TrendingUpIcon,
  BookmarkIcon,
} from "@heroicons/react/outline";
import BottomNavbarLink from "./BottomNavbarLink";
import { useRouter } from "next/router";

const BottomNavbar = () => {
  const router = useRouter();

  return (
    <nav
      className="lg:hidden bg-skin-backgroud text-skin-base fixed left-0 bottom-0 w-full h-[60px] 
        border-t flex justify-center items-center overflow-hidden z-10"
    >
      <ul className="w-full max-w-[500px] h-full grid grid-cols-5">
        <BottomNavbarLink
          icon={HomeIcon}
          link="/"
          active={router.pathname == "/"}
        />
        <BottomNavbarLink
          icon={SearchIcon}
          link="/search"
          active={router.pathname == "/search"}
        />
        <BottomNavbarLink
          icon={TrendingUpIcon}
          link="/trending"
          active={router.pathname == "/trending"}
        />
        <BottomNavbarLink
          icon={UserCircleIcon}
          link="/profile"
          active={router.pathname == "/profile"}
        />
        <BottomNavbarLink
          icon={BookmarkIcon}
          link="/bookmarks"
          active={router.pathname == "/bookmarks"}
        />
      </ul>
    </nav>
  );
};

export default BottomNavbar;
