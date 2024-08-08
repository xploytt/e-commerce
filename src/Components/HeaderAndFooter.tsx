import React, { useState } from "react";
import { Paths } from "../App";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const HeaderAndFooter: React.FC = () => {
  const [_, updatePage] = useState<Paths>("/");
  return (
    <>
      <Header />
      <Outlet context={updatePage} />
      <Footer />
    </>
  );
};

export default HeaderAndFooter;
