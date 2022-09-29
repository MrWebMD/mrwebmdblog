/**
 * 
 * @param {PostMetadataParams} PostMeatadataParams 
 * @returns 
 */
const PostMetadata = ({author, createdAt}) => {
  return <div className="postMetadata">
    <p className="postMetadata__meta"><i className="fa-solid fa-user postMetadata__metaIcon"></i>{author}</p>
    <p className="postMetadata__meta"><i className="fa-solid fa-calendar-days postMetadata__metaIcon"></i>
      {createdAt}
    </p>
  </div>
}

export default PostMetadata;