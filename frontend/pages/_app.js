import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import { wrapper } from "../store/store";
import "../styles/globals.css";
import { useRouter } from "next/router";
import axios from "axios";
import API from "../api/api";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const { user, accessToken } = useSelector((state) => state.auth);
  const router = useRouter();

  if (Component.authRoute && user && accessToken) {
    router.push("/");
  }

  // axios.defaults.baseURL = API;

  // useEffect(() => {
  //   if (typeof localStorage !== undefined) {
  //     const token = JSON.parse(localStorage.getItem("codeverse_userSession"));
  //     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  //   }
  // }, []);

  return (
    <Layout
      authRoute={Component.authRoute}
      profileRoute={Component.profileRoute}
    >
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(MyApp);
