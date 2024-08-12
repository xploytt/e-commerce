import React, { useState } from "react";
import { Paths } from "../App";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Cart from "./Cart";
import ControlCartProvider from "../context/cartControl";

const HeaderAndFooter: React.FC = () => {
  const [_, updatePage] = useState<Paths>("/");

  return (
    <>
      <ControlCartProvider>
        <Header />
        <Cart />
        <Outlet context={updatePage} />
        <Footer />
      </ControlCartProvider>
    </>
  );
};

export default HeaderAndFooter;
