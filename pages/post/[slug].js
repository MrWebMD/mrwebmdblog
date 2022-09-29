import Head from "next/head";
import PostList from "../../components/PostList/PostList";
import ReactMarkdown from 'react-markdown';
import PostMetadata from "../../components/PostList/PostMetadata";
import MailingList from "../../components/MailingList";

/**
 * @typedef {Object} PostViewParams
 * @property {Post[]} postData
 * @property {Post[]} recentPosts
 */
/**
 * @param {PostViewParams} PostViewParams
 */
export default function PostView({postData, recentPosts}) {

  let post = postData[0];
  
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.keywords}/>
        <meta name="author" content={post.author}/>
        <meta name="robots" content="index, follow"/>
      </Head>
      <main className="pageLayout__main pageBound">
      <article>
        <div className="postHeader">
          <h1 className="postHeader__title">{post.title}</h1>
          <div className="horizantalRule--dotted"></div>
          <div className="postHeader__authorArea">
            <p className="postHeader__author">By <a className="link">{post.author}</a></p>
            {<PostMetadata author={post.author} createdAt={post.createdAt}/>}
          </div>
          <div className="horizantalRule--dotted"></div>
        </div>
        <div className="postContent">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

      </article>
        
      </main>
      <aside className="pageLayout__sidebar">
      {/* <MailingList/> */}

        <PostList title="Popular Articles" mode="condensed" posts={recentPosts}/>
      </aside>
    </>
  )
}

export async function getStaticPaths() {

 
  const res = await fetch(`${process.env.STRAPI_API_URL_INTERNAL}/posts`);

 /** @type {Post[]} */
  const postData = await res.json();

  return {
    paths: postData.map(post => {
      return { params: { slug: post.slug } }
    }),
    fallback: false
  }
}

export async function getStaticProps({params}) {

  const onePost = await fetch(`${process.env.STRAPI_API_URL_INTERNAL}/posts?slug=${encodeURIComponent(params.slug)}`);

  /** @type {Post[]} */
  const onePostData = await onePost.json(); // Post array with one item

  const allPost = await fetch(`${process.env.STRAPI_API_URL_INTERNAL}/posts`);

  /** @type {Post[]} */
  const allPostData = await allPost.json();

  const recentFourPost = allPostData.slice(0, 2);


  return {
    props: {
      postData: onePostData,
      recentPosts: recentFourPost
    }
  }
}