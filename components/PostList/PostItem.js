import Image from "next/image";
import Link from "next/link";
import PostMetadata from "./PostMetadata";

/**
 * @param {PostItemParams} PostItemParams
 */

const PostItem = ({mode, title, description, author, createdAt, url, thumbnail, thumbnailWidth, thumbnailHeight}) => {

  if(mode === "condensed") {
      return <>
        <div className="postList__imgWrapper">
        <Link href={url}>
          <a>
            <Image layout='responsive' width={thumbnailWidth}  height={thumbnailHeight} alt="Thumbnail" className="postList__img" src={thumbnail} />
          </a>
        </Link>
        </div>
        <h3 className="postList__postTitle">
          <Link href={url}>
            <a>{title}</a>
          </Link>
        </h3>
      </>
  }

  return  <div className="postList__post">
    <div className="postList__imgWrapper">
    <Link href={url}>
      <a>
        <Image  width={thumbnailWidth}  height={thumbnailHeight} alt="Thumbnail" className="postList__img" src={thumbnail} />
      </a>
    </Link>
    </div>
    <div className="postList__postDetails">
      <h3 className="postList__postTitle">
        <Link href={url}>
          <a>{title}</a>
        </Link>
      </h3>
      <p className="postList__postDescription">{description}</p>
      <PostMetadata author={author} createdAt={createdAt}/>
    </div>
  </div>;
}

export default PostItem;