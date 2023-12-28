import { useState } from "react";

export default function Hero() {
  const [searchingForm, setSearchingForm] = useState(() => ({
    searching: "",
  }));

  function handleSearching(event) {
    const searchingValue = event.target.value;

    setSearchingForm((prevSearchingForm) => ({
      ...prevSearchingForm,
      searching: searchingValue,
    }));
  }

  function handleSubmitSearching(event) {
    event.preventDefault();

    if (searchingForm.searching.length) {
      window.alert(`Buscando por ${searchingForm.searching}`);
    }
  }

  return (
    <section>
      <article className="flex flex-col items-center gap-1 text-base p-4 pt-14 pb-14">
        <p className="text-primary font-bold text-center">Bem-vindo a nossa</p>

        <h1 className="text-primary font-bold text-4xl -mt-2 text-center h1-size lg:text-6xl">
          Comunidade
        </h1>

        <p className="text-primary font-medium text-center mt-4 max-w-[55ch]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          illo odit suscipit officia est voluptates dolores debitis. Possimus,
          asperiores rem.
        </p>

        <SearchingForm
          handleSubmitSearching={handleSubmitSearching}
          handleSearching={handleSearching}
          searchingForm={searchingForm}
        />
      </article>
    </section>
  );
}

function SearchingForm(props) {
  return (
    <form
      onSubmit={props.handleSubmitSearching}
      className="mt-8 w-full max-w-2xl"
    >
      <div className="flex items-center justify-between">
        <input
          onChange={props.handleSearching}
          className="text-base focus:border-secondary border rounded-2xl rounded-r-none h-14 w-full text-primary placeholder:text-customGray p-4"
          value={props.searchingForm.searching}
          placeholder="O que você procura?"
        />

        <button
          type="submit"
          className="border-secondary rounded-r-2xl pt-3 h-14 pb-3 pl-8 pr-8 bg-secondary"
        >
          <i className="icon-magnifying-glass text-2xl text-green text-white"></i>
        </button>
      </div>
    </form>
  );
}
