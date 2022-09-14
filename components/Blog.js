import Link from "next/link";
import React from "react";

function Blog({ id, title }) {
  return (
    <Link href={`/blogposts/${id}`}>
      <div className="blog cursor-pointer flex bg-purple-500 rounded shadow-lg shadow-gray-300 py-4 w-674 text-white font-semibold font-mono px-3">
        <div className="text-white px-2 ">
          <h4 className="text-xl">{id}</h4>
        </div>
        <h3 className="ml-3 text-xl">{title}</h3>
      </div>
    </Link>
  );
}

export default Blog;
