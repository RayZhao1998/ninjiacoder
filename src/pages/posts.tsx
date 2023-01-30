import Link from "next/link";
import PageContainer from "../components/pagecontainer";
import { PostsTab } from "../components/sidebar";
import { getSortedPostsData } from "../lib/posts";

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
  console.log(posts);
  return (
    <ul className="container text-white">
      {posts.map(({ contentHtml, id, date, title, cover }) => (
        <li key={id} className="relative overflow-hidden rounded text-white" style={{ backgroundImage: `url(${cover})`}}>
          {/* <img src={cover} className="absolute top-0 -z-10 w-full h-full " /> */}
          <div className="p-4">
            <p className="font-bold text-xl">{title}</p>
            <div
              dangerouslySetInnerHTML={{ __html: contentHtml }}
              className="max-h-20 overflow-hidden"
            />
          </div>
        </li>
      ))}
    </ul>
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
