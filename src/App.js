import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../src/assets/css/style.css";
import "../src/assets/css/responsive.css";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/Contact-page";
import ProjectUs from "./pages/ProjectUs";
import OurTeam from "./pages/OurTeam";
import OurTestimonial from "./pages/OurTestimonial";
import PricingPlan from "./pages/PricingPlan";
import OurFaq from "./pages/OurFaq";
import Blog from "./pages/Blog";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import OurServices from "./pages/OurServices";
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "About",
    element: <About />,
  },
  {
    path: "service",
    element: <OurServices />,
  },
  {
    path: "Contact",
    element: <ContactUs />,
  },
  {
    path: "Project",
    element: <ProjectUs />,
  },
  {
    path: "team",
    element: <OurTeam />,
  },{
    path: "testimonial",
    element: <OurTestimonial />,
  },
  {
    path: "pricing",
    element: <PricingPlan />,
  },
  {
    path: "faq",
    element: <OurFaq/>,
  },
  {
    path: "blog",
    element: <Blog />,
  },
  {
    path: "coming_soon",
    element: <ComingSoon />,
  },
  {
    path: "404",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <About /> */}
      {/* <ContactUs /> */}
      {/* <ProjectUs /> */}
      {/* <OurTeam /> */}
      {/* <OurTestimonial /> */}
      {/* <PricingPlan /> */}
      {/* <OurFaq /> */}
      {/* <Blog /> */}

      <RouterProvider router ={router} />
    </>
    
  );
}

export default App;
