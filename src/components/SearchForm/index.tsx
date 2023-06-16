import { useContext, useState } from "react";
import { SearchFormContainer } from "./styles";
import { MagnifyingGlass } from "phosphor-react";
import { BookContext } from "../../Context/BookContext";

export function SearchForm () {
  const context = useContext(BookContext);

  if (!context) {
    return null;
  }

  const { searchText, setSearchText } = context;

  const handleSearch = (event: any) => {
    setSearchText(event.target.value)
  };

  return (
    <SearchFormContainer >
      <input type="text" placeholder="Buscar livros" value={searchText}  onChange={handleSearch} />
      <button type="submit" onClick={handleSearch}>
        <MagnifyingGlass size={20} />
        Buscar</button>
    </SearchFormContainer>
  )
}