async function getPosts(setPosts, setCategories, setMaxPosts) {
  try {
    const postsResponse = await fetch("/data/posts.json");
    if (!postsResponse.ok) {
      return;
    }
    const postsData = await postsResponse.json();

    setCategories((prevCategories) => {
      const categorySelectedData = prevCategories.filter((category) => {
        return category.on;
      });

      let postsToShow = postsData.posts;

      if (categorySelectedData.length) {
        const categorySelected = categorySelectedData[0].category;

        postsToShow = postsToShow.filter((post) => {
          return post.category.toLowerCase() === categorySelected.toLowerCase();
        });
      }

      setPosts(() => postsToShow);

      setMaxPosts(() => 5);

      return prevCategories;
    });
  } catch (error) {
    alert(
      "Houve um erro ao mostrar os posts, por favor, tente novamente mais tarde."
    );
  }
}

export { getPosts };
