export const ServiceComp = ({
  icon,
  iconColor,
  title,
  text,
}: {
  icon: React.ReactNode;
  iconColor: string;
  title: string;
  text: string;
  buttonCss: string;
}) => {
  return (
    <div className="py-12 px-[35px] ">
      <div
        className={`w-[67px] h-[67px] ${iconColor} mb-10 rounded-2xl flex items-center justify-center `}
      >
        {icon}
      </div>
      <p className="text-2xl font-bold mb-6">{title}</p>
      <p className="text-gray2 mb-[30px]">{text}</p>
      <button
        className={`text-gray3 bg-gray5 hover:text-white hover:bg-blue1 px-[13px] py-[9px] rounded-xl`}
      >
        Get started
      </button>
    </div>
  );
};
