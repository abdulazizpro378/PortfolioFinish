import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Themes from "../info/Themes";
import Footer from "./Footer/Footer";
// import Footer from "./Footer";

// import Footer from "./Footer";

const FrontLayout = () => {
  return (
    <Fragment>
      <Header />
      <Themes />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </Fragment>
  );
};

export default FrontLayout;
