import PostItem from "./PostItem";

/**
 * @param {PostListParams} PostListParams
 */
const PostList = ({
  title,
  mode,
  posts
}) => {
  
  return <section className="pageMain__content">
  <div className="sectionHeader">
    <h2 className="sectionHeader__title">{title}</h2>
    <div className="horizontalRule horizontalRule--dotted"></div>
  </div>
  <div className="postList">
    {posts.map((/**@type {Post} */postData, postIndex) => {

      let {width: thumbnailWidth, height:thumbnailHeight, url: thumbnailPath} = postData.thumbnailSmall; 

      let postThumbnail = `${process.env.STRAPI_API_URL_INTERNAL}${thumbnailPath}`;

      return <PostItem key={postIndex}
                mode={mode} 
                title={postData.title} 
                description={postData.description} 
                author={postData.author} 
                createdAt={postData.createdAt} 
                url={`/post/${postData.slug}`}
                thumbnail={postThumbnail}
                thumbnailWidth={thumbnailWidth}
                thumbnailHeight={thumbnailHeight}
                />
                
    })}
  </div>
</section>;
}

export default PostList;