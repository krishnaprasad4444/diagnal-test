import { memo } from "react";
import BackBtnIcon from "../../assets/images/back-arrow.png";
import { SearchBox } from "../";

const Header = ({ title, onSearch }) => {
  return (
    <nav
      className="sticky top-0 z-30 w-full py-3 md:py-4 sm:h-20 xl:h-32 2xl:h-48 2xl:mb-9"
      style={{
        background: "linear-gradient(to bottom, black 55%, transparent 100%)",
      }}
    >
      <div className="flex justify-between items-center px-4 h-full">
        <div className="flex space-between items-center">
          <div className="mr-5 h-6 w-6 xl:h-8 xl:w-8">
            <img src={BackBtnIcon} alt={"Back"} />
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl xl:text-[26pt] 2xl:text-[38pt] text-white">
            {title}
          </p>
        </div>
        <SearchBox onChange={onSearch} />
      </div>
    </nav>
  );
};

export default memo(Header);
