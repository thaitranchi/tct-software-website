import Layout from "../components/Layout";
import "../styles/globals.css";  // Import global styles

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
