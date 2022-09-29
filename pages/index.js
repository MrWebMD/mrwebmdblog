import Head from 'next/head'
import Image from 'next/image'
import PostList from '../components/PostList/PostList'

/** 
 * @typedef {Object} HomeParams
 * @property {Post[]} postData
 * */
/**
 * @param {HomeParams}
 */
export default function Home({ postData }) {
  return (
    <>
      <Head>
        <title>MrWebMD Blog | Home</title>
        <meta name="description" content="Learn about website development and view writeups for recent projects by MrWebMD" />
      </Head>
      <main className="pageLayout__main pageBound">
        <PostList title="Latest Articles" mode="full" posts={postData}/>
      </main>
      <aside className="pageLayout__sidebar">
        <PostList title="Popular Articles" mode="condensed" posts={postData}/>
      </aside>
    </>
  )
}

export async function getServerSideProps() {
  
  const res = await fetch(`${process.env.STRAPI_API_URL_INTERNAL}/posts`);

  /** @type {Post[]} */
  const postData = await res.json();

  console.log(postData);

  return {props: { postData }}
}