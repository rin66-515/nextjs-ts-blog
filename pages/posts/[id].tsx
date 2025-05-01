import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { getAllPostIds, getPostData } from "@/lib/posts";

export default function Post({ postData }: any) {
  return (
    <main className="max-w-2xl mx-auto mt-10 prose prose-slate">
      <Head>
        <title>{postData.title}</title>
      </Head>
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return { props: { postData } };
};