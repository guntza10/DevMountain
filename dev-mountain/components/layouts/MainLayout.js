import React from "react";
import styles from "../../styles/Home.module.css";

import Header from "./Header";
import Footer from "./Footer";

function MainLayout({ children }) {
  return (
    <>
      <Header />
      {/* <main className="container mx-auto min-h-screen">{children}</main> */}
      <main className="w-full min-h-screen">{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
