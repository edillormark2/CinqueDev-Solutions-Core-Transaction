import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import { useStateContext } from "../context/ContextProvider";
import { Unstable_Popup as BasePopup } from "@mui/base/Unstable_Popup";
import profile from "../assets/mepic.jpg";
import UserProfilePopup from "./UserProfilePopup";
import { IoMdNotificationsOutline } from "react-icons/io";
import NotificationsPopup from "./NotificationsPopup";

const NavButton = ({ customFunc, icon, color, dotColor }) =>
  <button
    type="button"
    onClick={() => customFunc()}
    style={{ color }}
    className="relative text-xl rounded-full p-4 bg-gray-100 hover:bg-gray-200"
  >
    <span
      style={{ background: dotColor }}
      className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
    />
    {icon}
  </button>;

const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState("");
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [isUserProfilePopupOpen, setIsUserProfilePopupOpen] = useState(false);
  const [isNotificationPopupOpen, setIsNotificationPopupOpen] = useState(false);
  const [anchor, setAnchor] = useState(null);
  const [placement, setPlacement] = useState("bottom-end");
  const [userData, setUserData] = useState({});
  const { profilePicture, name } = userData;

  const open = Boolean(anchor);
  const id = open ? "simple-popper" : undefined;

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { currentColor, activeMenu, setActiveMenu } = useStateContext();

  useEffect(
    () => {
      setActiveMenu(screenSize > 1180);
    },
    [screenSize, setActiveMenu]
  );

  const handleActiveMenu = () => {
    setActiveMenu(!activeMenu);
  };

  useEffect(
    () => {
      const handleOutsideClick = event => {
        if (
          anchor &&
          !anchor.contains(event.target) &&
          !event.target.closest(".action-popup")
        ) {
          setIsUserProfilePopupOpen(false);
          setIsNotificationPopupOpen(false);
        }
      };

      document.addEventListener("mousedown", handleOutsideClick);

      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    },
    [anchor]
  );

  const handleUserProfileClick = event => {
    setIsUserProfilePopupOpen(prev => !prev);
    setAnchor(event.currentTarget);
  };

  const handleNotificationClick = event => {
    setIsNotificationPopupOpen(prev => !prev);
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setIsUserProfilePopupOpen(false);
    setIsNotificationPopupOpen(false);
  };

  return (
    <div className="flex justify-between p-1 relative bg-white drop-shadow-xl rounded-lg px-1 md:px-8">
      <NavButton
        title="Menu"
        customFunc={handleActiveMenu}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />

      <div className="flex">
        <Tooltip
          arrow
          title="Notifications"
          placement="bottom"
          TransitionComponent={Fade}
        >
          <div
            className="relative self-center cursor-pointer hover:bg-gray-100 p-2 rounded-full"
            onClick={handleNotificationClick}
          >
            <IoMdNotificationsOutline size={26} className="text-gray-700" />
            <div className="bg-red-500 text-white px-1.5 py-0.5 text-xs rounded-full absolute top-1 right-0">
              4
            </div>
          </div>
        </Tooltip>
        <div className="flex drop-shadow-sm">
          <div
            onClick={handleUserProfileClick}
            className="flex items-center gap-4 cursor-pointer p-2 rounded-full hover:bg-gray-100"
          >
            <img
              src={profile}
              alt="profile"
              className="h-9 w-9 rounded-full object-cover"
            />
          </div>
        </div>
        {isUserProfilePopupOpen &&
          <BasePopup
            id={id}
            open={isUserProfilePopupOpen}
            anchor={anchor}
            placement={placement}
            offset={4}
            onClose={handleClose}
          >
            <UserProfilePopup />
            <div className="action-popup" />
          </BasePopup>}
        {isNotificationPopupOpen &&
          <BasePopup
            id={id}
            open={isNotificationPopupOpen}
            anchor={anchor}
            placement={placement}
            offset={4}
            onClose={handleClose}
          >
            <NotificationsPopup />
            <div className="action-popup" />
          </BasePopup>}
      </div>
    </div>
  );
};

export default Navbar;
