import { FaBars, FaTimes } from "react-icons/fa";
import React from "react"; // Import React module

export const MenusCmd: React.FC<{
  displayListMenu: boolean;
  setDisplayListMenu: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setDisplayListMenu, displayListMenu }) => {
  const handleToggle = () => {
    setDisplayListMenu((disp) => !disp);
  };
  return (
    <div
      className={`fixed z-[20] top-6 lg:top-[13px] right-[14px] cursor-pointer md:hidden `}
    >
      <button
        className={` text-black rounded focus:outline-none  ${
          displayListMenu ? "animate-close" : "animate-open"
        }`}
        onClick={handleToggle}
        aria-label="Menus command"
      >
        {displayListMenu ? (
          <FaTimes className="w-6 h-6 " />
        ) : (
          <FaBars className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};
