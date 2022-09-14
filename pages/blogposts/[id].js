import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
export async function getServerSideProps() {
  let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  let data = res.data;
  return {
    props: {
      data,
    },
  };
}
const BlogDetails = ({data}) => {
  const router = useRouter();
  const { id } = router.query;
  const myBlog = data.filter(e=>{
    return e.id==id;
  })
  return (
    <>
      <div className="container flex mx-auto p-5">
        <div className="box w-[65rem] bg-gray-200 mx-auto rounded p-5 space-y-6 my-10 shadow-md bg-['#EAEAEA']">
          <h1 className="font-semibold text-3xl">
            {myBlog[0].title}
          </h1>
          <p className="font-semibold">
            {myBlog[0].body}
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
