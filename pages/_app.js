import Layout from "../components/layout/Layout";
import '@/styles/Home.module.css';

export default function App({ Component, pageProps }) {

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
