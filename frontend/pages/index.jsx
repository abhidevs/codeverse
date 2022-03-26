import Head from "next/head";
import { AiFillCodeSandboxSquare } from "react-icons/ai";
import BottomNavbar from "../components/BottomNavbar";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Codeverse</title>
        <meta name="description" content="Social media for programmers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-screen bg-skin-backgroud text-skin-base">
        <Navbar />
        <div className="container mx-auto">
          <Sidebar />

          <h1 className="text-3xl font-bold flex justify-center">
            <AiFillCodeSandboxSquare /> Hello Codeverse Devs!{" "}
            <AiFillCodeSandboxSquare />
          </h1>

          <BottomNavbar />
        </div>
      </main>
    </div>
  );
}
