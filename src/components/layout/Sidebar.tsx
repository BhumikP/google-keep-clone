import sideMenuItems from "@/constants/sideMenuItems";
import { Link } from "react-router-dom";

const Sidebar = ({ isExpanded }: { isExpanded: boolean }) => {
  return (
    <div>
      <div className="w-[66px]" />

      <div
        className={` max-w-full fixed md:relative overflow-hidden h-full max-h-[calc(100vh_-_66px)] left-0 z-10 bg-white flex flex-col pt-2 transition-all ease-in-out duration-150 ${
          isExpanded ? "w-[280px] shadow-lg md:shadow-none" : "w-[66px]"
        }`}
      >
        {sideMenuItems.map(({ title, link, icon }) => (
          <Link
            to={link}
            className={`flex transition-all items-center gap-5 border-0 cursor-pointer ${
              window.location.pathname === link
                ? `bg-light-yellow-300  ${
                    isExpanded
                      ? "rounded-tr-[25px] pl-5 rounded-br-[25px]"
                      : "rounded-full ml-5"
                  }`
                : "hover:bg-gray-100 rounded-tr-[25px] pl-5 rounded-br-[25px]"
            }`}
            key={title}
          >
            <div
              className={`flex items-center transition-all duration-100  ${
                isExpanded ? "gap-5" : "w-full"
              }`}
            >
              <div className="rounded-full p-3 w-12 h-12">{icon}</div>
              {isExpanded && (
                <div className="text-[14px] font-medium">{title}</div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
