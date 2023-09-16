import { FaPen } from "react-icons/fa";
import { BsCode } from "react-icons/bs";
import { MdStorage } from "react-icons/md";

import { ServiceComp } from "./components/serviceComp";
import { WorkComp } from "./components/workComp";
import { PhotosComp } from "./components/photosComp";
import Logo from "./components/logo";

import { Linkedin, Instagram, Twitter } from "./components/icons";

import { Navbar, Links } from "./components/navbar";

const services = [
  {
    icon: <FaPen className="w-9 h-9 text-white" />,
    iconColor: "bg-blue1",
    title: "UI/UX Design",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.",
    buttonCss: "text-gray3 bg-gray5",
  },
  {
    icon: <BsCode className="w-9 h-9 text-white" />,
    iconColor: "bg-green1",
    title: "Front End",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.",
    buttonCss: "text-white bg-blue1",
  },
  {
    icon: <MdStorage className="w-9 h-9 text-white" />,
    iconColor: "bg-red1",
    title: "Back End",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.",
    buttonCss: "text-gray3 bg-gray5",
  },
];

const works = [
  {
    title: "Smart home dashboard",
    subtitle: "Full stack application",
    image: "smarthome.jpg",
  },
  {
    title: "Onboard application",
    subtitle: "UX/UI design",
    image: "onboard.png",
  },
  {
    title: "Booking system",
    subtitle: "Mobile application",
    image: "booking.png",
  },
  {
    title: "Juice product homepage",
    subtitle: "Front End application",
    image: "juice-product.png",
  },
];

const photos = ["person3.png", "person1.png", "person2.png", "person4.png"];

function App() {
  return (
    <>
      <div className="flex flex-col rounded-lg w-full h-full">
        <Navbar />

        <section className="pt-24 md:pt-48 w-full min-h-screen" id="home">
          <div className="pl-[40px] md:pl-[277px] pb-[15px] md:pb-11">
            <p className="text-blue1 text-xs md:text-2xl font-medium md:pb-4">
              Unhappy with your website?
            </p>
            <div className="flex flex-col justify-between py-2 md:py-4 text-2xl md:text-5xl font-medium w-[272px] md:w-[580px] h-[72px] md:h-[144px]">
              <span>We create beautiful</span>
              <span>and fast web services</span>
            </div>
          </div>
          <div className="ml-[10px] md:ml-[52px] mr-[17px] md:mr-[56px] mb-[22px] md:mb-11 rounded-[18px] h-[145px] md:h-[354px] overflow-hidden">
            <img
              src="heroImage.jpg"
              alt="hero image"
              className=" w-full h-full object-cover"
            />
          </div>
          <div className=" pl-[40px] md:pl-[277px] ">
            <div className="text-2xl md:text-5xl font-medium pb-[33px] md:pb-[42px]">
              {" "}
              <p className="pb-2 md:pb-4">Story, emotion</p>
              <p>and purpose</p>
            </div>
            <p className="text-sx  md:text-lg text-gray2 tracking-tight w-[275px] md:w-[366px] pb-[31px] md:pb-[42px]">
              We help transform your ideas into real world applications that
              will outperform your toughest competition and help you achieve
              your strategic goals in short period of time.
            </p>
            <form className="w-[291px] md:w-[350px]">
              <p className="text-[10px] md:text-sm text-gray3 font-medium pb-2">
                Want us to contact you?
              </p>
              <div className="flex justify-between items-center">
                <div className="pt-[15px] pb-[6px] pl-[19px] md:py-[15px] md:pl-[21px] ">
                  <input
                    className=" placeholder:text-gray-6 text-sm md:text-lg w-32 md:w-48 mr-2 md:mr-12"
                    type="email"
                    placeholder="Email"
                  />
                </div>

                <button className=" bg-blue1 text-gray6 rounded-xl py-[11px] px-[21px] md:px-[27px] m-1 ">
                  Join
                </button>
              </div>
            </form>
          </div>
        </section>
        <section
          className="pt-[108px] md:pt-[200px] w-full min-h-screen "
          id="services"
        >
          <div className="text-2xl md:text-4xl font-medium mb-6 pl-[49px] md:pl-[165px] ">
            <div className="pb-4">We offer high </div>
            <div>demand services </div>
          </div>
          <div className="flex flex-col md:flex-row pl-[15px] md:pl-[165px]">
            {services.map((s) => (
              <ServiceComp key={s.title} {...s} />
            ))}
          </div>
        </section>
        <section
          className="pt-[155px] md:pt-[200px] w-full min-h-screen"
          id="our-works"
        >
          <div className="text-2xl md:text-4xl font-medium pl-[45px] md:pl-[165px] mb-6">
            <div className="pb-4">Good design means </div>
            <div>good business </div>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap pt-12 px-[10px] md:pl-[120px] lg:pl-[165px]">
            {works.map((w, index) => (
              <WorkComp
                key={w.title}
                {...w}
                order={index}
                length={works.length - 1}
              />
            ))}
          </div>
        </section>
        <section
          id="clients"
          className="pt-[100px] md:pt-[240px] px-[10px] md:pl-[170px]  pb-[29px] md:pb-[129px] min-h-screen"
        >
          <div className="flex flex-col md:flex-row ">
            <div className="md:mr-32 md:pt-24">
              <p className="text-red1 text-lg mb-[7px]">Meet the team</p>
              <div className="text-4xl font-medium mb-[14px]">
                <p className="mb-3">We are chilled </p>
                <p className="mb-3">and a laidback</p>
                <p>team</p>
              </div>

              <p className=" text-gray2  w-[275px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <PhotosComp photos={photos} />
          </div>
          <div className="mt-[100px] md:mt-[196px]">
            <p className="font-medium text-2xl md:text-4xl">
              “Fast and outstanding resutls. Edie understands their customer’s
              needs. They have a young and talented team.”{" "}
            </p>
            <div className="mt-[18px] mb-[62px] md:mt-9 flex">
              <div className="mr-[35px]">
                <img
                  src="person4.png"
                  alt="person4 photo"
                  className="object-cover rounded-xl w-[100px] h-[100px]"
                />
              </div>
              <div>
                <p className="text-2xl font-medium mb-2">Carlos Tran</p>
                <p className="text-lg font-medium text-gray3">
                  The Decorate Gatsby
                </p>
              </div>
            </div>
          </div>
        </section>
        <footer id="contact" className="bg-black1 pt-9 md:pt-[46px] ">
          <div className="px-[41px] md:pl-[168px] flex flex-col md:flex-row justify-between">
            <Links inFooter />
            <div className="flex flex-col  mt-16 md:mt-0">
              <div className="text-gray6 text-4xl">
                <Logo />
              </div>
              <div className="mt-[7px] md:mt-[9px] flex justify-between w-24 ">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                </a>
                <a
                  className="mt-[1.5px]"
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter />
                </a>
              </div>
            </div>
            <form className="mt-[85px] md:mt-0">
              <p className="text-[10px] md:text-sm text-gray3 md:text-gray6 font-medium pb-2">
                Want us to contact you?
              </p>
              <div className="flex bg-gray6 rounded-xl w-[291px] md:w-[350px]">
                <input
                  className=" placeholder:text-gray-4 text-sm md:text-lg m-3 mr-[50px] w-[147px] md:w-[190px]"
                  type="email"
                  placeholder="Email"
                />

                <button className=" bg-blue1 text-gray6 rounded-xl py-[11px] px-[21px] md:px-[27px] m-1 ">
                  Join
                </button>
              </div>
            </form>
          </div>{" "}
          <div className="text-sm footer-font font-bold mt-[154px] md:mt-[118px] text-gray6 flex justify-center mb-6">
            created by &nbsp;
            <a
              href="https://adelinked.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b"
            >
              Adelinked
            </a>
            &nbsp;-&nbsp;
            <a
              href="https://devchallenges.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              devChallenges.io
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
