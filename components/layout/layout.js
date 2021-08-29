import Nav from "../navbar/navbar";
import Footer from "./footer";
import { React } from "react";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="">{children}</div>
    </>
  );
};

export default Layout;
