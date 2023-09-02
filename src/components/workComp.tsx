import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export const WorkComp = ({
  title,
  subtitle,
  image,
  order,
  length,
}: {
  title: string;
  subtitle: string;
  image: string;
  order: number;
  length: number;
}) => {
  return (
    <div className={`md:pr-4 ${order % 2 ? undefined : "md:pt-[105px]"}`}>
      <div className=" rounded-xl overflow-hidden">
        <img src={image} alt={title} className=" object-cover" />
      </div>
      <p className="pt-4 text-xs md:text-sm text-gray3 font-light">
        {subtitle}
      </p>
      <p className=" text-lg md:text-2xl mb-6">{title}</p>
      {order == length ? (
        <div className="text-blue1 flex items-center cursor-pointer mt-9 md:mt-[133px] md:justify-end">
          {" "}
          <p className="text-lg md:text-2xl font-medium mr-[6px] md:mr-[13px]">
            See more
          </p>{" "}
          <HiOutlineArrowNarrowRight className="h-6 w-6 " />
        </div>
      ) : null}
    </div>
  );
};
