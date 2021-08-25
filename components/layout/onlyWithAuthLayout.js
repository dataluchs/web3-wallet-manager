import Nav from "../navbar/navbar";
import Footer from "./footer";
import { React } from "react";
import Auth from "../auth";

const OnlyWithAuthLayout = ({ children }) => {
  return (
    <>
      <Auth />
      <Nav />
      <div className="">{children}</div>
      <Footer />
    </>
  );
};

export default OnlyWithAuthLayout;
