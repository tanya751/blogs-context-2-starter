import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({post}) => {
  return (
    <div className="font-sans ">
      <NavLink to={`/blog/${post.id}`}>
        <span className="font-bold font-roboto text-black ">{post.title}</span>
      </NavLink>
      <p className=" mt-1">
        By : {" "}
        <span className="italic font-semibold">{post.author} {" "}</span>
        on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className="underline text-blue-800">{post.category}</span>
        </NavLink>
      </p>
      <p className="mb-3">Posted on <span className="text-slate-600">{post.date}</span></p>
      <p>{post.content}</p>
      <div className="mt-3 text-blue-800 underline ">
        {post.tags.map((tag, index) => (
          <NavLink key={index}
           to={`/tags/${tag.replaceAll(" ", "-")}`}
           style={{ marginRight: '10px' }}>
            <span >{`#${tag}`}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
