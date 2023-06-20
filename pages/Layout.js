import React from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
