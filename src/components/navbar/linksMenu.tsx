import { useRef, useEffect } from "react";
import Logo from "../logo";
import { type LinksType } from ".";

export const LinksMenu: React.FC<{
  displayListMenu: boolean;
  setDisplayListMenu: (display: boolean) => void;
  links: LinksType;
}> = ({ displayListMenu, setDisplayListMenu, links }) => {
  const listMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listMenu = listMenuRef.current;
    let id: ReturnType<typeof setTimeout>;
    if (displayListMenu)
      id = setTimeout(() => listMenu?.classList.add("overlay-bg"), 100);
    else listMenu?.classList.remove("overlay-bg");
    return () => clearTimeout(id);
  }, []);

  function closeListMenu() {
    const listMenu = listMenuRef.current;

    listMenu?.classList.add("animate-slide-out-right");
    const id = setTimeout(() => setDisplayListMenu(false), 100);
    return () => clearTimeout(id);
  }
  return (
    <div
      className={`fixed z-[10] top-0 left-0 w-full h-full select-none   ${
        displayListMenu ? "animate-slide-in-right" : ""
      }  `}
      ref={listMenuRef}
      onClick={(e) => {
        const listMenu = listMenuRef.current;
        if (e.target === listMenu) {
          closeListMenu();
        }
      }}
    >
      <div className="absolute right-0 w-full md:w-[300px] h-full border-l-[1px] border-gray-300 overflow-y-auto">
        <div className="pl-[9px] pt-[13px] ext-gray1 text-2xl md:text-4xl">
          <Logo />{" "}
        </div>

        <nav className=" mt-[100px] md:mt-[120px] px-6 menu-bg pt-3 w-1/2 text-gray6 ">
          {" "}
          <ul className=" text-xl mb-8 md:mb-3 leading-[1.6] font-semibold ">
            {links.map((l) => (
              <li
                key={l.title}
                className="hover:text-white cursor-pointer pb-3"
              >
                <a href={l.href}>{l.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
