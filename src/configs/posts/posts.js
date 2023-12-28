async function getPosts(setPosts) {
  try {
    const postsResponse = await fetch(
      process.env.PUBLIC_URL + "/data/posts.json"
    );
    if (!postsResponse.ok) {
      return;
    }
    const postsData = await postsResponse.json();
    let postsToShow = postsData.posts;

    setPosts(() => postsToShow);
  } catch (error) {
    alert(
      "Houve um erro ao mostrar os posts, por favor, tente novamente mais tarde."
    );
  }
}

export { getPosts };
