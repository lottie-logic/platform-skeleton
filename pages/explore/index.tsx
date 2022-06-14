import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "./Explore.module.css";
import { userInfo } from "os";

const Explore: NextPage = (props) => {

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>HExplorer</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}> Home  </h1>

          <p className={styles.description}>
            hello there 
          </p>

        
        </main>

     
      </div>
    </>
  );
};

export default Explore;