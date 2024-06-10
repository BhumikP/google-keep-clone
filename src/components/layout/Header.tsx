import { useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeLogo from "@/assets/images/brand-logo.png";
import companyLogo from "@/assets/images/genea-logo.svg";
import useWindowSize from "@/hooks/useWindowSize";
import { USER_NAME } from "@/utils/constant";

const Header = ({
  setIsExpanded,
}: {
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { isMobileViewport } = useWindowSize();

  useEffect(() => {
    setIsExpanded(!isMobileViewport);
  }, [isMobileViewport, setIsExpanded]);

  return (
    <>
      <div className="h-16" /> {/* Empty space for header */}
      <div className="fixed md:gap-5 w-full h-16 bg-white top-0 flex justify-between items-center px-4 py-1 border-b border-solid border-gray-200">
        <div className="flex justify-center py-2 items-center">
          <div className="cursor-pointer hover:bg-gray-100 rounded-full p-2 transition duration-200 ease-in-out">
            <MenuIcon
              className="text-dark-gray-100"
              onClick={() => setIsExpanded((pre) => !pre)}
            />
          </div>
          <img src={HomeLogo} alt="HomeIcon" className="w-10 h-10" />
          <div className="text-dark-gray-100 text-[20px]">Keep</div>
        </div>
        <div className={`flex flex-auto items-center gap-5 pl-3 justify-end`}>
          <div className="rounded-md relative cursor-pointer w-full max-w-40 border border-gray-200 flex px-1 py-1 gap-2 justify-center items-center">
            <img src={companyLogo} alt="Genea" className="w-24 h-7" />

            <div className="rounded-full bg-orange-600 text-center px-3 w-10 h-10  content-center uppercase text-white">
              {USER_NAME.charAt(0)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
