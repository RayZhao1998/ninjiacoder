import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import styles from "@/styles/posts.module.css";
import React, { useEffect } from "react";
import hljs from "highlight.js";

export default function Post({ postData }) {
  useEffect(() => {
    hljs.initHighlighting();
  }, []);
  return (
    <div className="text-white w-5/6 lg:w-[900px] ml-auto mr-auto">
      <Head>
        <title>{postData.title}</title>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Mono:300,300i,400,400i,500,500i,700,700i&amp;display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="sm:mx-10">
        <h1 className="text-3xl font-bold pt-5 pb-3 border-b border-[#3D3D3D]">
          {postData.title}
        </h1>
        <div
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          className={styles.post}
        />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
