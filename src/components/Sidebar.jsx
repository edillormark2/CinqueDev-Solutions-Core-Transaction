import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../context/ContextProvider";
import { links } from "./Menu";
import cdslogo from "../assets/CDS_LOGO.png";

const Sidebar = () => {
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    screenSize
  } = useStateContext();
  const [activeNavLink, setActiveNavLink] = useState("");
  const [activeParentMenu, setActiveParentMenu] = useState("");
  const location = useLocation();

  useEffect(
    () => {
      const pathname = location.pathname;
      links.forEach(category => {
        category.links.forEach(link => {
          if (link.url === pathname) {
            setActiveParentMenu(link.url);
            setActiveNavLink(link.url);
          }
        });
      });
    },
    [location]
  );

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 1000) {
      setActiveMenu(false);
    }
  };

  const handleLinkClick = linkUrl => {
    setActiveNavLink(linkUrl);
    setActiveParentMenu(linkUrl);
    handleCloseSideBar();
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 drop-shadow-xl";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 hover:bg-gray-300 m-2";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setActiveMenu(!activeMenu)}
          style={{ color: currentColor }}
          className="text-xl rounded-full p-4 hover-bg-light-gray block lg:hidden"
        >
          <MdOutlineCancel />
        </button>
      </div>
      <div className="flex items-center">
        <Link
          to="/dashboard"
          onClick={handleCloseSideBar}
          className="flex justify-center mx-auto mt-0 md:mt-8 text-xl font-extrabold tracking-tight text-slate-900"
        >
          <img src={cdslogo} alt="logo" className="w-20 h-20 object-contain" />
        </Link>
      </div>
      <div className="mt-10">
        {links.map(item =>
          <div key={item.title}>
            <p className="text-gray-400 m-3 mt-4 uppercase">
              {item.title}
            </p>
            {item.links.map(link =>
              <NavLink
                to={link.url}
                key={link.name}
                onClick={() => handleLinkClick(link.url)}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? currentColor : ""
                })}
                className={({ isActive }) =>
                  isActive || activeParentMenu === link.url
                    ? activeLink
                    : normalLink}
              >
                <span style={{ fontSize: "1.2rem" }}>
                  {link.icon}
                </span>
                <span className="capitalize">
                  {link.name}
                </span>
              </NavLink>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
