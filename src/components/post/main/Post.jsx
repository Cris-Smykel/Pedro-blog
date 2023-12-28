import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPost } from "../../../configs/posts/posts";
import Pool from "./Pool";

export default function Post() {
  const id = useParams().id;

  const [postData, setPostData] = useState(() => ({}));

  useEffect(() => {
    getPost(id, setPostData);
  }, []);
  return (
    <section>
      <article className="m-auto flex flex-col gap-4 max-w-[43rem] pb-14 sm:pl-3 sm:pr-3 sm:pt-14">
        <picture>
          <img
            className="w-full max-h-[25rem] object-cover block sm:h-[24rem] sm:rounded-md"
            src={process.env.PUBLIC_URL + postData.imgUrl}
          />
        </picture>

        <article className="flex flex-col gap-4 p-3 sm:p-0">
          <h1 className="text-2xl text-primary font-bold max-w-[50ch]">
            {postData.title}
          </h1>

          <p className="text-primary text-base font-base max-w-[60ch]">
            {postData.content}
          </p>
        </article>

        <div className="mt-8 pl-2 pr-2 sm:p-0">
          <Pool pool={postData.pool} setPostData={setPostData} />
        </div>
      </article>
    </section>
  );
}
