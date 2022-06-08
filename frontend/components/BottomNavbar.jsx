import { useEffect } from "react";
import {
  HomeIcon,
  SearchIcon,
  UserCircleIcon,
  TrendingUpIcon,
  BookmarkIcon,
} from "@heroicons/react/outline";
import BottomNavbarLink from "./BottomNavbarLink";
import { useRouter } from "next/router";
import { shallowEqual, useSelector } from "react-redux";

const BottomNavbar = () => {
  const router = useRouter();
  const { user } = useSelector((state) => state.auth, shallowEqual);

  useEffect(() => {
    const links = [...document.querySelectorAll("nav ul li a")];
    const light = document.querySelector("nav .tubelight");

    let activeIndex = 0;
    let prevActiveIndex = 0;

    links.forEach((link, index) => {
      if (links[index].classList.contains("active")) {
        light.style.left = `${
          links[index].offsetLeft + light.offsetWidth / 4
        }px`;
        activeIndex = index;
        prevActiveIndex = index;
      }

      link.addEventListener("click", (e) => {
        activeIndex = index;

        if (activeIndex !== prevActiveIndex) {
          e.target.classList.add("active");
          links[prevActiveIndex].classList.remove("active");

          prevActiveIndex = activeIndex;
          light.style.left = `${
            links[index].offsetLeft + light.offsetWidth / 4
          }px`;
        }
      });
    });
  }, []);

  return (
    <nav
      className="lg:hidden bg-skin-backgroud text-skin-base fixed left-0 -bottom-1 w-full h-[54px] 
        border-t flex justify-center items-center overflow-hidden z-10 px-[15px]"
    >
      <ul className="min-w-[350px] h-full grid grid-cols-5">
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
          link={user ? `/profile/${user?._id}` : ""}
          active={router.pathname.includes(`/profile`)}
        />
        <BottomNavbarLink
          icon={BookmarkIcon}
          link="/bookmarks"
          active={router.pathname == "/bookmarks"}
        />
      </ul>

      <div
        className="tubelight absolute left-0 top-0 w-[45px] h-[5px] rounded-[5px] bg-skin-secondary 
        transition-all duration-300 ease-linear z-10"
      >
        <div className="absolute left-[-30%] top-[5px] w-[160%] h-[54px] light-ray"></div>
      </div>
    </nav>
  );
};

export default BottomNavbar;
