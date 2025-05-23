import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

// component
import Layout from "../components/Layout";
import Transition from "../components/Transition";
import Head from "next/head";

// router
import { useRouter } from "next/router";

// framer motion
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon1.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="min-h-screen">
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
      <Analytics />
    </>
  );
}

export default MyApp;
