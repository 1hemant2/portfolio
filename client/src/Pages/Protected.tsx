import React, { ReactNode, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface ProtectedProps {
  children: ReactNode;
}

const Protected: React.FC<ProtectedProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.slice(1);
  const [openMenu, setOpenMenu] = useState(false);
  const handleNavigate = (path: string) => {
    navigate(path);
    setOpenMenu(!openMenu);
  };
  return (
    <div className="bg-gray-200 h-screen">
      {/* Desktop Navigation */}
      <nav className="hidden sm:block bg-slate-800 font-serif border-lime-100 border-b-4">
        <ul className="flex space-x-7 sm:pl-10 sm:ml-24 text-xl text-white items-center">
          <li
            className={`${
              currentPath === "home" && "text-red-800"
            } cursor-pointer`}
            onClick={() => navigate("/")}
          >
            HOME
          </li>
          <li
            className={`${
              currentPath === "about" && "text-red-800"
            } cursor-pointer`}
            onClick={() => navigate("/about")}
          >
            ABOUT
          </li>
          <li
            className={`${
              currentPath === "portfolio" && "text-red-800"
            } cursor-pointer`}
            onClick={() => navigate("/portfolio")}
          >
            PORTFOLIO
          </li>
          <li
            className={`${
              currentPath === "blog" && "text-red-800"
            } cursor-pointer`}
            onClick={() => navigate("/blog")}
          >
            BLOG
          </li>
          <li
            className={`${
              currentPath === "contact" && "text-red-800"
            } cursor-pointer`}
            onClick={() => navigate("/contact")}
          >
            CONTACT
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <div className="block sm:hidden bg-slate-800 font-serif border-lime-100 border-b-4">
        <div className="flex justify-end mr-3">
          <div onClick={() => setOpenMenu(!openMenu)}>
            <i className="ri-menu-fill text-gray-300 text-4xl cursor-pointer "></i>
          </div>
        </div>
        {openMenu && (
          <ul className="text-white pl-4">
            <li
              className={`${
                currentPath === "home" && "text-red-800"
              } cursor-pointer py-2`}
              onClick={() => handleNavigate("/")}
            >
              HOME
            </li>
            <li
              className={`${
                currentPath === "about" && "text-red-800"
              } cursor-pointer py-2`}
              onClick={() => handleNavigate("/about")}
            >
              ABOUT
            </li>
            <li
              className={`${
                currentPath === "portfolio" && "text-red-800"
              } cursor-pointer py-2`}
              onClick={() => handleNavigate("/portfolio")}
            >
              PORTFOLIO
            </li>
            <li
              className={`${
                currentPath === "blog" && "text-red-800"
              } cursor-pointer py-2`}
              onClick={() => handleNavigate("/blog")}
            >
              BLOG
            </li>
            <li
              className={`${
                currentPath === "contact" && "text-red-800"
              } cursor-pointer py-2`}
              onClick={() => handleNavigate("/contact")}
            >
              CONTACT
            </li>
          </ul>
        )}
      </div>
      <div className="bg-gray-200">{children}</div>
    </div>
  );
};

export default Protected;
