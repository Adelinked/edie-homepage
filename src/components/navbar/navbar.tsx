import { useState } from "react";
import Logo from "../logo";
import { Links, LinksMenu, MenusCmd, links } from ".";

export const Navbar = () => {
  const [displayListMenu, setDisplayListMenu] = useState(false);
  return (
    <>
      <nav className="fixed md:bg-white top-[13px] md:top-11 flex justify-between items-center w-full pl-[10px] pr-[14px] md:pl-[54px] md:pr-[56px]">
        <div className="text-gray1 text-2xl md:text-4xl">
          <Logo />
        </div>

        <Links />
      </nav>
      {displayListMenu ? (
        <LinksMenu
          displayListMenu={displayListMenu}
          setDisplayListMenu={setDisplayListMenu}
          links={links}
        />
      ) : null}
      <MenusCmd
        displayListMenu={displayListMenu}
        setDisplayListMenu={setDisplayListMenu}
      />
    </>
  );
};
