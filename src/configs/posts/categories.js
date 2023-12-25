function handleCategoryFilter(setCategories, id) {
  setCategories((prevCategories) => {
    const newCategories = prevCategories.map((category) => {
      if (category.id === id) {
        return { ...category, on: !category.on };
      }

      return { ...category, on: false };
    });

    return newCategories;
  });
}

async function getCategories(setCategories) {
  try {
    const categoriesResponse = await fetch("/data/categories.json");

    if (!categoriesResponse.ok) {
      return;
    }

    const categoriesData = await categoriesResponse.json();

    setCategories(() => categoriesData);
  } catch (error) {
    window.alert(
      "Houve um erro ao mostrar os posts, por favor, tente novamente mais tarde."
    );
  }
}

export { handleCategoryFilter, getCategories };
