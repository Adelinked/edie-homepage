export type LinkType = {
  title: string;
  href: string;
};

export type LinksType = LinkType[];

export const links: LinksType = [
  { title: "Home", href: "#home" },
  { title: "Services", href: "#services" },
  { title: "Our Works", href: "#our-works" },
  { title: "Clients", href: "#clients" },
  { title: "Contact", href: "#contact" },
];

export const Links = ({ inFooter = false }: { inFooter?: boolean }) => {
  return (
    <>
      {inFooter ? (
        <div className=" flex flex-col text-white text-lg leading-9 justify-between items-start">
          {links.map((l) => (
            <a key={l.title} className="hover:text-gray4 block" href={l.href}>
              {l.title}
            </a>
          ))}
        </div>
      ) : (
        <div className=" hidden md:flex justify-between font-medium items-center h-9 md:w-[580px] lg:w-[703px]">
          {links.map((l) => (
            <a key={l.title} className="hover:text-black" href={l.href}>
              {l.title}
            </a>
          ))}
        </div>
      )}
    </>
  );
};
