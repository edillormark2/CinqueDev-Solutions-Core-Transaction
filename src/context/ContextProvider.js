import React, { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [currentColor, setCurrentColor] = useState("#1A97F5");
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(
    () => {
      if (screenSize <= 1000) {
        setActiveMenu(false);
      }
    },
    [screenSize]
  );

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        currentColor,
        screenSize,
        setScreenSize
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
