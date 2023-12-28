import { useEffect, useState } from "react";
import { getPosts } from "../../../../configs/posts/posts";
import { Link } from "react-router-dom";

export default function Posts() {
  const [posts, setPosts] = useState(() => []);

  useEffect(() => {
    getPosts(setPosts);
  }, []);

  const postsElement = posts.map((post) => {
    return (
      <Post
        title={post.title}
        content={post.content}
        imgUrl={post.imgUrl}
        key={post.id}
        id={post.id}
      />
    );
  });

  return (
    <section>
      <article className="p-4 md:pl-12 pb-10 md:pr-12 max-w-6xl m-auto flex flex-col gap-8 md:flex-row md:justify-between">
        <div className="flex flex-col w-full items-center gap-12">
          {posts.length > 0 && (
            <div className="flex flex-col bg-yellow md:grid md:grid-cols-2 md:ml-10 gap-6">
              {postsElement}
            </div>
          )}
        </div>
      </article>
    </section>
  );
}

function Post(props) {
  return (
    <article className="border-gray-100 first:col-span-2 bg-white border rounded-md shadow flex flex-col gap-2 first:lg:flex-row min-h-full">
      <div>
        <picture>
          <img
            src={process.env.PUBLIC_URL + props.imgUrl}
            alt="Post Cover"
            className="w-full max-h-96 object-cover lg:min-h-96 lg:min-w-[31rem] rounded-md"
          />
        </picture>
      </div>

      <article className="flex flex-col justify-center gap-6 p-4 sm:p-7 ">
        <h2 className="text-2xl font-bold text-primary">{props.title}</h2>

        <p className="text-base text-textColor font-normal lg:max-w-[50ch] line-clamp-6">
          {props.content}
        </p>

        <Link
          to={`/post/${props.id}`}
          title="Mais informações"
          className="flex items-center gap-2 text-primary focus:text-tertiary hover:text-tertiary transition duration-200 text-base"
        >
          Mais informações <i className="icon-arrow-up-right2"></i>
        </Link>
      </article>
    </article>
  );
}
