import { GetStaticProps, GetStaticPaths } from "next";
import { getPostData, getAllPostIds } from "@/lib/posts";

type PostData = {
  id: string;
  contentHtml: string;
  title: string;
  date: string;
};

export default function Post({ postData }: { postData: PostData }) {
  return (
    <main className="max-w-2xl mx-auto mt-10 prose prose-slate">
      <h1>{postData.title}</h1>
      <p>{postData.date}</p>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<{ postData: PostData }> = async ({
  params,
}) => {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
};