import { useEffect, useState } from "react";
import {
  handleCategoryFilter,
  getCategories,
} from "../../../configs/posts/categories";
import { getPosts } from "../../../configs/posts/posts";

export default function Posts() {
  const [categories, setCategories] = useState(() => {
    return [];
  });

  const [posts, setPosts] = useState(() => []);

  const [maxPosts, setMaxPosts] = useState(() => 5);
  const postsElement = [];

  useEffect(() => {
    getCategories(setCategories);
  }, []);

  useEffect(() => {
    getPosts(setPosts, setCategories, setMaxPosts);
  }, [categories]);

  for (let count = 0; count < maxPosts; count++) {
    const post = posts[count];

    if (post) {
      postsElement.push(
        <Post
          title={post.title}
          content={post.content}
          imgUrl={post.imgUrl}
          key={post.id}
          category={post.category}
        />
      );
    } else {
      break;
    }
  }

  const postsIncrement = 6;

  function handleShowMore(maxPosts) {
    if (posts.length > maxPosts) {
      setMaxPosts((prevMaxPosts) => prevMaxPosts + postsIncrement);
    }
  }

  return (
    <section>
      <article className="p-4 md:pl-12 pb-10 md:pr-12 max-w-6xl m-auto flex flex-col gap-8 md:flex-row md:justify-between">
        <Categories categories={categories} setCategories={setCategories} />

        <div className="flex flex-col w-full items-center gap-12">
          {posts.length > 0 && (
            <div className="flex flex-col bg-yellow md:grid md:grid-cols-2 md:ml-10 gap-6">
              {postsElement}
            </div>
          )}

          {posts.length ? (
            <button
              onClick={() => handleShowMore(maxPosts)}
              type="button"
              className="p-3 rounded-lg bg-primary text-base cursor-pointer hover:bg-secondary w-40 text-white transition duration-200"
            >
              Vêr mais
            </button>
          ) : (
            <h3 className="text-3xl text-primary font-bold">
              Não foi possível encontrar nenhum resultado.
            </h3>
          )}
        </div>
      </article>
    </section>
  );
}

function Categories(props) {
  const categoriesElements = props.categories.map((category) => {
    return (
      <Category
        setCategories={props.setCategories}
        key={category.id}
        category={category.category}
        id={category.id}
        on={category.on}
      />
    );
  });

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-primary text-2xl font-bold">CATEGORIAS</h2>

      <ol className="grid grid-cols-2 md:flex md:flex-col md:items-start items-center gap-2 max-w-xl">
        {categoriesElements}
      </ol>
    </div>
  );
}

function Category(props) {
  return (
    <li>
      <button
        onClick={() => handleCategoryFilter(props.setCategories, props.id)}
        type="button"
        className={`text-primary hover:text-tertiary transition duration-200 text-base font-medium cursor-pointer text-left ${
          props.on && "duration-0 text-blue-900"
        } `}
      >
        {props.category}
      </button>
    </li>
  );
}

function Post(props) {
  return (
    <article className="border-gray-100 first:col-span-2 bg-white border rounded-md shadow flex flex-col gap-2 first:lg:flex-row min-h-full">
      <div className="relative">
        <picture>
          <img
            src={props.imgUrl}
            alt="Post Cover"
            className="w-full max-h-96 object-cover lg:h-full rounded-md"
          />
        </picture>

        <div className="absolute top-2 left-2 p-2 pr-4 pl-4 flex justify-end bg-primary rounded-md">
          <mark className="text-white text-sm font-medium capitalize">
            {props.category}
          </mark>
        </div>
      </div>

      <article className="flex flex-col justify-center gap-6 p-4 sm:p-7">
        <h2 className="text-2xl font-bold text-primary">{props.title}</h2>

        <p className="text-base text-textColor font-normal lg:max-w-[50ch]">
          {props.content}
        </p>

        <a
          href="#"
          title="Mais informações"
          className="flex items-center gap-2 text-primary focus:text-tertiary hover:text-tertiary transition duration-200 text-base"
        >
          Mais informações <i className="icon-arrow-up-right2"></i>
        </a>
      </article>
    </article>
  );
}
