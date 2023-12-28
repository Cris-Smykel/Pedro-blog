async function getPosts(setPosts) {
  try {
    const postsResponse = await fetch(
      process.env.PUBLIC_URL + "/data/posts.json"
    );
    if (!postsResponse.ok) {
      return;
    }
    const postsData = await postsResponse.json();

    const maxPosts = 5;

    let postsToShow = postsData.posts.filter((post, index) => {
      return index < maxPosts;
    });

    setPosts(() => postsToShow);
  } catch (error) {
    alert(
      "Houve um erro ao mostrar os posts, por favor, tente novamente mais tarde."
    );
  }
}

async function getPost(id, setPostData) {
  try {
    const postsResponse = await fetch(
      process.env.PUBLIC_URL + "/data/posts.json"
    );
    if (!postsResponse.ok) {
      return;
    }
    const postsData = await postsResponse.json();
    const postsToShow = postsData.posts;

    const postToShow = postsToShow.filter((post) => {
      return post.id == id;
    });

    setPostData((prevPostToShow) => (postToShow.length ? postToShow[0] : {}));
  } catch (error) {
    alert(
      "Houve um erro ao mostrar os posts, por favor, tente novamente mais tarde."
    );
  }
}

export { getPosts, getPost };
