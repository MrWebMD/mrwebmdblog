/** @typedef {'full'|'condensed'} PostMode */

/**
 * @typedef {Object} PostListParams 
 * @property {string} title The title at the top of the listing 
 * @property {PostMode} mode How should this list display 
 * @property {PostItemParams} posts List of posts to render
 */

/** 
 * @typedef {Object} PostMetadataParams 
 * @property {string} createdAt When was this post created?
 * @property {string} author Who created this post?
 * 
*/

/**
 * @typedef {Object} PostItemParams
 * @property {PostMode} mode How should this post should display 
 * @property {string} title The title of this post
 * @property {string} description A short description of what this post is aboute
 * @property {string} author Who created this post
 * @property {string} createdAt When this post was created
 * @property {string} url The link to the page of this post
 * @property {string} thumbnail The link to the thumbnail image
 * @property {number} thumbnailWidth The width of the thumbnail
 * @property {number} thumbnailHeight The height of the thumbnail
 * @example
 * {
      title: "Microsoft SQL servers hacked in TargetCompany ransomware attacks",
      description: "Security analysts at ASEC have discovered a new wave of attacks targeting vulnerable Microsoft SQL servers, involving the deployment of a ransomware strain named FARGO.",
      author: "MrWebMD",
      createdAt: "SEPTEMBER 24, 2022",
      url: "/",
      thumbnail: "/assets/media/oopsThumbnail.jpg"
    }
 */

/**
 * @typedef {Object} MediaObject
 * @property {string} id
 * @property {string} name 
 * @property {string} description
 * @property {string} alternativeText
 * @property {string} caption
 * @property {number} width
 * @property {number} height
 * @property {Object} formats
 * @property {string} hash
 * @property {string} ext
 * @property {string} mime
 * @property {string} size
 * @property {string} url
 * @property {string} previewUrl
 * @property {string} provider
 * @property {Object} provider_metadata
 * @property {string} related
 * @property {string} created_by
 * @property {string} updated_by
 */

/**
 * @typedef {Object} Post
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} createdAt
 * @property {MediaObject} thumbnailSmall
 * @property {MediaObject} featuredThumbnail 
 * @property {string} content
 * @property {string} author
 * @property {string} keywords
 * @property {string} published_at 
 * @example 
 * [
  {
    "id": "string",
    "title": "string",
    "description": "string",
    "createdAt": "2022-09-28",
    "thumbnailSmall": {
      "id": "string",
      "name": "string",
      "alternativeText": "string",
      "caption": "string",
      "width": 0,
      "height": 0,
      "formats": {},
      "hash": "string",
      "ext": "string",
      "mime": "string",
      "size": 0,
      "url": "string",
      "previewUrl": "string",
      "provider": "string",
      "provider_metadata": {},
      "related": "string",
      "created_by": "string",
      "updated_by": "string"
    },
    "featuredThumbnail": {
      "id": "string",
      "name": "string",
      "alternativeText": "string",
      "caption": "string",
      "width": 0,
      "height": 0,
      "formats": {},
      "hash": "string",
      "ext": "string",
      "mime": "string",
      "size": 0,
      "url": "string",
      "previewUrl": "string",
      "provider": "string",
      "provider_metadata": {},
      "related": "string",
      "created_by": "string",
      "updated_by": "string"
    },
    "content": "string",
    "author": "string",
    "slug": "string",
    "keywords": "string",
    "published_at": "2022-09-28T22:57:27.147Z"
  }
]
 * */
