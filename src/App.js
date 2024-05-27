import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useStateContext } from "./context/ContextProvider";

import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Consultation from "./pages/Consultation";
import Inquiries from "./pages/Inquiries";
import InquiriesView from "./pages/InquiriesView";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import Message from "./pages/Message";
import Contracts from "./pages/Contracts";
import ContractForm from "./pages/ContractForm";
import CreateNewContract from "./pages/CreateNewContract";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import OngoingSupport from "./pages/OngoingSupport";
import SupportDetails from "./pages/SupportDetails";
import ConsultationDetails from "./pages/ConsultationDetails";

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
                  <Route
                    path="/consultation/consultation-details/:id"
                    element={<ConsultationDetails />}
                  />
                  <Route path="/contracts" element={<Contracts />} />
                  <Route
                    path="/contracts/contract-form/:id"
                    element={<ContractForm />}
                  />
                  <Route
                    path="/contracts/create-new-contract"
                    element={<CreateNewContract />}
                  />
                  <Route path="/inquiries" element={<Inquiries />} />
                  <Route path="/inquiries/detail" element={<InquiriesView />} />
                  <Route path="/message/:link" element={<Message />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route
                    path="/projects/project-details/:id"
                    element={<ProjectDetails />}
                  />
                  <Route path="/product" element={<Product />} />
                  <Route path="/product/detail" element={<ProductDetails />} />
                  <Route path="/ongoing-support" element={<OngoingSupport />} />
                  <Route
                    path="/ongoing-support/subscription-support-details/:id"
                    element={<SupportDetails />}
                  />

                  <Route path="*" element={<Dashboard />} />
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
