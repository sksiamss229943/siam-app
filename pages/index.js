import axios from "axios";
import React from "react";
import Blog from "../components/Blog";
export async function getStaticProps() {
  let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  let data = res.data;
  return {
    props: {
      data,
    },
  };
}

function HomePage({ data }) {
  return (
    <>
      <div className="container px-5 pb-[5em] m-0 mx-auto">
        <h1 className="text-center my-7 font-bold text-5xl">Siam Blogs</h1>
        <hr className="mb-7" />
        <div className="blogs space-y-3">
          {data.map((e) => (
            <>
              <Blog key={e.id} id={e.id} title={e.title} body={e.body} />
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
