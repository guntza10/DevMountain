import React from "react";
import styles from "../../styles/Home.module.css";

import Header from "./Header";
import Footer from "./Footer";

function MainLayout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      {/* <main className={styles.main}>{children}</main> */}
      <main className="container mx-auto min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
