import project1Logo from "../assets/img7Project1Logo.png";
import project2Logo from "../assets/img8Project2.png";
import project3Logo from "../assets/img20p3.png";
import Courosels from "../component/Courosels";
import { useState } from "react";
import imgp1c from "../assets/img9p1.png";
import imgp1b from "../assets/img11p1.png";
import imgp1a from "../assets/img13p1.png";

import imgp2a from "../assets/img16p2.png";
import imgp2b from "../assets/img17p2.png";
import imgp2c from "../assets/img18p2.png";

import imgp3a from "../assets/img19p3.png";
import imgp3b from "../assets/img20p3.png";
import imgp3c from "../assets/img21p3.png";

import imgp4a from "../assets/img24p4.png";
import imgp4b from "../assets/img25p4.png";
import imgp4c from "../assets/img26p4.png";

import imgp5a from "../assets/img27p5.png";
import imgp5b from "../assets/img28p5.png";
import imgp5c from "../assets/img29p5.png";

import imgp6a from "../assets/img30p1.png";
import imgp6c from "../assets/img32p3.png";
import imgp6b from "../assets/img34p5.png";
import imgp6f from "../assets/img35p6.png";

import imgp7a from "../assets/img36p1.png";
import imgp7c from "../assets/img38p3.png";

const Portfolio = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [desc, setDesc] = useState<string>("");
  const [vis, setVis] = useState<string>("");
  const [img1c, setImg1c] = useState<string>("");
  const [img2c, setImg2c] = useState<string>("");
  const [img3c, setImg3c] = useState<string>("");

  const projects = [
    {
      icon1: project1Logo,
      title: "GHOST CHAT",
      tech: "MERN STACK",
      description:
        "social media platform facilitating seamless post sharing and user interaction. Integrated features such as uploading posts, liking, disliking, commenting, following, and messaging. Incorporated a notification system for user updates and ensured a consistent experience across devices through responsive design.",
      link: "https://ghosts-chat.onrender.com/",
      icon2: imgp1a,
      icon3: imgp1b,
      icon4: imgp1c,
      buttonName: "LEARN MORE",
    },
    {
      icon1: project2Logo,
      title: "Study resource HUB",
      tech: "MERN STACK",
      description:
        "Platform focused on delivering free content material with an emphasis on user experience. Established administrative controls for effective post management, leading the project from concept to completion with a robust, user-friendly outcome.",
      link: "https://study-resource-hub.onrender.com/",
      icon2: imgp2a,
      icon3: imgp2b,
      icon4: imgp2c,
      buttonName: "LEARN MORE",
    },
    {
      icon1: imgp4a,
      title: "Property seller",
      tech: "React.js",
      description:
        "It is a  website where people can list there property and vister and go see it virtually.",
      link: "https://property-sellers.onrender.com/",
      icon2: imgp4a,
      icon3: imgp4b,
      icon4: imgp4c,
      buttonName: "LEARN MORE",
    },
    {
      icon1: imgp5a,
      title: "Social Media Ui",
      tech: "React.js",
      description: "It is a home Page Ui design of the social media.",
      link: "https://social-media-ui-home.onrender.com/",
      icon2: imgp5a,
      icon3: imgp5b,
      icon4: imgp5c,
      buttonName: "LEARN MORE",
    },
    {
      icon1: imgp6a,
      title: "Hospital Management System",
      tech: "PERN Stack",
      description:
        "The Hospital Management Portal is a web-based application that facilitates communication and interaction between doctors and patients. It provides a platform for doctors to manage their patients and for patients to access their assigned doctors.",
      link: "https://hospital-management-1-556s.onrender.com/",
      icon2: imgp6b,
      icon3: imgp6c,
      icon4: imgp6f,
      buttonName: "LEARN MORE",
    },
    {
      icon1: project3Logo,
      title: "Stock Analyzer",
      tech: "React.js",
      description:
        "It is a platform where people can analyze a secotor vise price, highlight of the day, top 10 sector.",
      link: "https://stock-analyzer-zj0x.onrender.com/",
      icon2: imgp3a,
      icon3: imgp3b,
      icon4: imgp3c,
      buttonName: "LEARN MORE",
    },
    {
      icon1: imgp7a,
      title: "Library Management System",
      tech: "MERN Stack",
      description:
        "This is a Library management system to manage library.Admin Authentication and autharization and Add,delete,change Availabilty of Book.Search Book.See Transaction history",
      link: "https://library-managers.onrender.com/",
      icon2: imgp7a,
      icon3: imgp7c,
      icon4: imgp7c,
      buttonName: "LEARN MORE",
    },
  ];

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const handlePopup = (
    desc: string,
    vis: string,
    img1: string,
    img2: string,
    img3: string
  ): void => {
    setDesc(desc);
    setVis(vis);
    togglePopup();
    setImg1c(img1);
    setImg2c(img2);
    setImg3c(img3);
  };

  return (
    <div>
      <div className="underline text-4xl font-bold text-gray-600 flex justify-center mt-6">
        PROJECTS
      </div>
      <div className="sm:grid sm:grid-cols-3 sm:gap-3 sm:ml-[200px] sm:mr-[200px] mt-14 sm:h-[550px]  overflow-y-auto scrollbar space-y-10 sm:space-y-0 pl-6 pr-6">
        {projects.map((d) => (
          <div className="relative h-[200px] group" key={d.link}>
            <img
              src={d.icon1}
              alt=""
              className="h-[200px] w-full group-hover:opacity-0 transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="font-sans text-2xl underline text-gray-600">
                {d.title}
              </div>
              <div className=" text-red-400 font-light">{d.tech}</div>
              <button
                className="mt-6 h-[40px] w-[100px] border border-red-500 "
                onClick={() =>
                  handlePopup(d.description, d.link, d.icon2, d.icon3, d.icon4)
                }
              >
                {d.buttonName}
              </button>
            </div>
          </div>
        ))}
      </div>
      <Courosels
        show={showPopup}
        handleClose={togglePopup}
        desc={desc}
        vis={vis}
        img1={img1c}
        img2={img2c}
        img3={img3c}
      ></Courosels>
    </div>
  );
};

export default Portfolio;
