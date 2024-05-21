import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useStateContext } from "./context/ContextProvider";

import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Consultation from "./pages/Consultation";

const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <div>
      <BrowserRouter>
        <div className="bg-gray-200 min-h-screen">
          <div className="flex relative ">
            {activeMenu
              ? <div className="w-64 fixed sidebar drop-shadow-xl bg-gray-100">
                  <Sidebar />
                </div>
              : <div className="sidebar-transition w-0 drop-shadow-xl bg-gray-100">
                  <Sidebar />
                </div>}
            <div
              className={` bg-gray-100 min-h-screen w-full md:flex-1 md:overflow-hidden ${activeMenu
                ? "lg:ml-60"
                : "flex-1"}`}
            >
              <div className="fixed md:static navbar w-full md:w-11/12 mx-auto rounded-md">
                <Navbar />
              </div>

              <div className="my-2 md:my-4 mx-2 overflow-x-auto">
                <ToastContainer className="toast-container" />
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/consultation" element={<Consultation />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;