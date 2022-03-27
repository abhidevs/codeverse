import Link from "next/link";

const BottomNavbarLink = ({ icon: Icon, link, active }) => {
  return (
    <li className="w-full h-full list-none">
      <Link href={link || "#"}>
        <a
          className={`w-full h-full flex justify-center items-center 
          cursor-pointer transition-opacity duration-100 ease-linear
          ${active ? "opacity-100 active" : "opacity-40"}`}
        >
          <Icon className="h-6" />
        </a>
      </Link>
    </li>
  );
};

export default BottomNavbarLink;
