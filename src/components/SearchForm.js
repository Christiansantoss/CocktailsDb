import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  //
  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  // search bar by cocktail if no cocktail nothing match criteria
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };
  // avoid refresh by user pressing enter
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="section search">
      {/* user presses enter page reloads 'onsubmit={handlesubmit} to get rid of issue */}
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail </label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
