export const ServiceComp = ({
  icon,
  iconColor,
  title,
  text,
  buttonCss,
}: {
  icon: React.ReactNode;
  iconColor: string;
  title: string;
  text: string;
  buttonCss: string;
}) => {
  return (
    <div className="py-12 px-8">
      <div
        className={`w-[67px] h-[67px] ${iconColor} mb-10 rounded-2xl flex items-center justify-center `}
      >
        {icon}
      </div>
      <p className="text-2xl font-bold mb-6">{title}</p>
      <p className="text-gray2 mb-[30px]">{text}</p>
      <button className={`${buttonCss} px-[13px] py-[9px] rounded-xl`}>
        Get started
      </button>
    </div>
  );
};
