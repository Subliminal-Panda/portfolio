import React from 'react';
import { Link } from 'react-router-dom';
import striptags from 'striptags';
import Truncate from 'react-truncate';

const BlogItem = props => {
    const {
        id,
        blog_status,
        content,
        title,
        featured_image_url,
    } = props.blogItem;

    return (
        <div>
        <Link to={`/b/${id}`}>
            <h1 className="blog-item-title">{title}</h1>
        </Link>
            <div className="blog-item-details">
                <Truncate lines={5} ellipsis={
                    <span>
                        <Link to={`/b/${id}`}>...More</Link>
                    </span>
                }>{striptags(content)}</Truncate>
            </div>
        </div>
    )
}

export default BlogItem;

// <div>{content}</div>
// <div>{props.blogItem.content}</div>
//the above destructuring makes it so we don't have to do this, but these two divs would work identically.
