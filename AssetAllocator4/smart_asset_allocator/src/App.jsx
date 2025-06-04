import React from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./Layout/Layout";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import Aboutus from "./Pages/Aboutus/Aboutus";
import BlogDetailsPage from "./Pages/Blog/BlogDetailsPage";
import BlogPage from "./Pages/Blog/BlogPage";
import MutualFunds from "./Pages/Products/MutualFunds";
import LifeInsurancePage from "./Pages/Products/LifeInsurancePage";
import ChildEducationCalculator from "./Pages/Planning/ChildEducationCalculator";
import ChildWeddingCalculator from "./Pages/Planning/ChildWeddingCalculator";
import DreamHomeCalculator from "./Pages/Planning/DreamHomeCalculator";
import DreamCarCalculator from "./Pages/Planning/DreamCarCalculator";
import SIPCalculator from "./Pages/Planning/SIPCalculator";
import RetirementCalculator from "./Pages/Planning/RetirementCalculator";
import DreamVacationCalculator from "./Pages/Planning/DreamVacationCalculator";
import GeneralInsurancePage from "./Pages/Products/GeneralInsurancePage";
import PageNotFound from "./Pages/ErrorPages/NotFound";
import ServicesOverview from "./Pages/Services/ServicesOverview";
import GoalsLayout from "./Layout/GoalsLayout";
import ProductDetailPage from "./Pages/Products/MutualFunds/ProductDetailPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="aboutus" element={<Aboutus />} />
        <Route path="services/:id" element={<Services />} />
        <Route path="/products/mutual-funds" element={<MutualFunds />} />
        <Route
          path="/products/life-insurance"
          element={<LifeInsurancePage />}
        />
        <Route
          path="/products/general-insurance"
          element={<GeneralInsurancePage />}
        />
        <Route path="/goals" element={<GoalsLayout />}>
          <Route
            path="child-education"
            element={<ChildEducationCalculator />}
          />
          <Route path="child-wedding" element={<ChildWeddingCalculator />} />
          <Route path="dream-home" element={<DreamHomeCalculator />} />
          <Route path="dream-car" element={<DreamCarCalculator />} />
          <Route path="dream-vacation" element={<DreamVacationCalculator />} />
          <Route path="retirement-plan" element={<RetirementCalculator />} />
          <Route path="sip-plan" element={<SIPCalculator />} />
        </Route>
        <Route path="services/our-services" element={<ServicesOverview />} />
        <Route path="blog" element={<BlogPage />} />{" "}
        <Route path="/blog/:slug" element={<BlogDetailsPage />} />
        <Route path="/product/:slug" element={<ProductDetailPage />} />
        <Route path="contactus" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;

    
}

export default App;
