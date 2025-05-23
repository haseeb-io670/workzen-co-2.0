import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Services from "../pages/Services.jsx";
import IndustriesMain from "../pages/IndustriesMain";
import BlogsPage from "../pages/Blogs";
import PricingMain from "../components/main/PricingMain";
import LeadGeneration from "../components/main/Lead-Gen";
import SEOPage from "../components/main/SEO";
import DigitalPresence from "../components/main/Digital-Presense";
import DevelopmentPage from "../components/main/Development.jsx";
import VirtualAssistant from "../components/main/Virtual-Assistant.jsx";
import ContactMain from "../components/main/ContactMain";

const router = createBrowserRouter([
  {
    path: "/",
    index:true,
    element: <Home />
  },
  {
    path: "/about-us",
    // index:true,
    element: <AboutUs />
  },
  {
    path: "/industries-details",
    // index:true,
    element: <IndustriesMain />
  },
  {
    path: "/contact",
    // index:true,
    element: <ContactMain />
  },
  {
    path: "/pricing",
    // index:true,
    element: <PricingMain />
  },
  {
    path: "/blogs",
    // index:true,
    element: <BlogsPage />
  },
  {
    path: "/ppc",
    element: <LeadGeneration />
  },
  {
    path: "/seo",
    element: <SEOPage />
  },
  {
    path: "/social-media",
    element: <DigitalPresence />
  },
  {
    path: "/development",
    element: <DevelopmentPage />
  },
  {
    path: "/admin-support",
    element: <VirtualAssistant />
  },
  {
    path: "/services",
    element: <Services />,
    children: [
      {
        index:true,
        path: "dashboard",
        // element: <Dashboard></Dashboard>,
      },
      {
        path: "chats",
        // element: <Chats></Chats>,
        children: [
          {
            path: ":chatId",
            // element: <SinglePersonChat />,
          },
        ],
      },
    ],
  },
]);

export default router;
