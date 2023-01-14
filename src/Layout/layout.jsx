import React from "react";
import Home from "../Home/home";
import { Routes, Route } from "react-router";
import Navigation from "../Navigation/nav";
import Footer from "../components/Footer/footer";
import Portfolio from "../containers/Portfolio/portfolio";
import Contact from "../containers/Contact/contact";
import Devjobs from "../components/Devjobs/devjobs";
import EntertainmentApp from "../components/EntertainmentApp/entertainmentApp";
import Designo from "../components/Designo/designo";
import SpaceApp from "../components/SpaceApp/spaceApp";
import Audiophile from "../components/Audiophile/audiophile";
const Layout = (props) => {
  return (
    <div>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/portfolio/entertainmentApp"
          element={<EntertainmentApp />}
        ></Route>
        <Route path="/portfolio/devjobs" element={<Devjobs></Devjobs>}></Route>
        <Route path="/portfolio/designo" element={<Designo></Designo>}></Route>
        <Route
          path="/portfolio/spaceApp"
          element={<SpaceApp></SpaceApp>}
        ></Route>
        <Route
          path="/portfolio/audiophile"
          element={<Audiophile></Audiophile>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};
export default Layout;
