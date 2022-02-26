const SidebarLink = ({ text, icon: Icon, active }) => {
  return (
    <div
      className={`text-base flex items-center justify-start text-md px-6 ${
        active
          ? "font-bold bg-skin-color7 relative before:absolute before:left-[-2px] before:w-[3px] before:h-full before:bg-skin-primary"
          : "font-[500] border-b-skin-color7 last-of-type:border-b-transparent"
      }`}
    >
      <div
        className={`w-full flex items-center justify-start space-x-3 py-4 border-inherit cursor-pointer ${
          !active && "border-b"
        }`}
      >
        <Icon className="h-6" />
        <span>{text}</span>
      </div>
    </div>
  );
};

export default SidebarLink;
