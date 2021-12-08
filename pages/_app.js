import "../styles/Utilities.css";
import "../styles/about.css";
import "../styles/home.css";
import "../styles/Maps.css";
import Header from "../Components/Header";
import Layout from "../Components/Layout";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
