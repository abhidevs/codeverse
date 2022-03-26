import Head from "next/head";
import React from "react";
import BottomNavbar from "../components/BottomNavbar";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Bookmarks = () => {
  return (
    <div>
      <Head>
        <title>Bookmarks | Codeverse</title>
        <meta name="description" content="Social media for programmers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-screen bg-skin-backgroud pb-16 text-skin-base">
        <Navbar />
        <div className="md:container mx-auto pt-20">
          <Sidebar />
          <BottomNavbar />
          Bookmarks page
        </div>
      </main>
    </div>
  );
};

export default Bookmarks;
