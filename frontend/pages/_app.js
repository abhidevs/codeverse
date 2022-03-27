import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout
      authRoute={Component.authRoute}
      profileRoute={Component.profileRoute}
    >
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
