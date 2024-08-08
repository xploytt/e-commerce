import { useState } from "react";
import { Paths } from "../App";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export interface IHeaderAndFooterProps {}

export default function HeaderAndFooter(props: IHeaderAndFooterProps) {
  const [page, updatePage] = useState<Paths>("/");
  return (
    <>
      <Header />
      <Outlet context={updatePage} />
      <Footer />
    </>
  );
}
