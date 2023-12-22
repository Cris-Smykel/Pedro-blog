export default function Posts() {
  const categories = [
    {
      id: 1,
      category: "Contabilidade",
    },
    {
      id: 2,
      category: "Marketing digital",
    },
    {
      id: 3,
      category: "Finanças",
    },
    {
      id: 4,
      category: "Gestão",
    },
    {
      id: 5,
      category: "Ferramentas",
    },
  ];

  return (
    <section>
      <article className="p-4 md:pl8 md:pr-8 max-w-6xl m-auto">
        <Categories categories={categories} />

        <div>
          <Post />
        </div>
      </article>
    </section>
  );
}

function Categories(props) {
  const categoriesElements = props.categories.map((category) => {
    return <Category key={category.id} category={category.category} />;
  });

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-primary text-2xl font-bold">CATEGORIAS</h2>

      <ol className="grid grid-cols-2 items-center gap-2 max-w-xl">
        {categoriesElements}
      </ol>
    </div>
  );
}

function Category(props) {
  return (
    <li>
      <button
        type="button"
        className="text-primary hover:text-tertiary transition duration-200 text-base font-medium cursor-pointer text-left"
      >
        {props.category}
      </button>
    </li>
  );
}

function Post(props) {
  return (
    <article>
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
        accusantium quaerat laborum consectetur porro quos incidunt sunt quis
        omnis hic assumenda, tenetur nulla ratione cumque autem officiis ab
        consequatur sapiente, ipsam nobis! Nostrum aliquam eveniet sit,
        quibusdam fugiat inventore distinctio!
      </h2>
    </article>
  );
}
