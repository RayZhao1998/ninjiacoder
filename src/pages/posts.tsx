import Link from "next/link";
import PageContainer from "../components/pagecontainer";
import { PostsTab } from "../components/sidebar";
import { getSortedPostsData } from "../lib/posts";
import styles from "@/styles/posts.module.css";
import hljs from "highlight.js";
import { useEffect } from "react";

export default function Posts({ allPostsData }) {
  return (
    <PageContainer
      selectedTab={PostsTab}
      onChangeTab={(tab) => {
        location.href = tab.selection.route ?? "#";
      }}
    >
      <InnerPosts posts={allPostsData} />
    </PageContainer>
  );
}

function InnerPosts({ posts }) {
  useEffect(() => {
    hljs.initHighlighting();
  }, []);
  return (
    <div className="columns-3">
      {posts.map(({ contentHtml, id, date, title, cover }) => {
        console.log(contentHtml);
        return (
          <div
            className="relative overflow-hidden rounded-lg text-white border border-white/20"
            key={id}
            onClick={() => {
              location.href = `/posts/${id}`;
            }}
          >
            <div className="relative">
              <img src={cover} className="w-full" />
              <div className="absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-black to-transparent" />
              <p className="absolute bottom-2 px-4 py-1 font-bold text-xl">
                {title}
              </p>
            </div>
            <div className="relative px-4">
              <div
                dangerouslySetInnerHTML={{ __html: contentHtml }}
                className={`${styles.post} ${styles.postpreview}`}
              />
            </div>
            <div className="absolute bottom-0 w-full h-4 bg-gradient-to-t from-black/80 to-transparent" />
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
