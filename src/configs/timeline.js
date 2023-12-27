async function getTimelineData(setTimelineData) {
  try {
    const timelineDataResponse = await fetch(
      process.env.PUBLIC_URL + "/data/posts.json"
    );

    if (!timelineDataResponse.ok) {
      return;
    }

    const timelineData = await timelineDataResponse.json();

    const timeline = timelineData.posts;

    setTimelineData(() => timeline);
  } catch (error) {
    window.alert(
      "Houve um erro ao mostrar a timeline, por favor, tente novamente mais tarde."
    );

    return [];
  }
}

export { getTimelineData };
