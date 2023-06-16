import React, { useContext } from "react";
import { Header } from "../Header";
import { SearchForm } from "../SearchForm";
import { Container, Title } from "./styles";
import { BookContext } from "../../Context/BookContext";
import { BookItem } from "../BookItem";

export function BookList() {
  const context = useContext(BookContext);

  if (!context) {
    return null;
  }

  const { books, removeBook, searchText } = context;

  const filteredBooks = searchText
    ? books.filter((book) => {
        const titleMatch = book.title.toLowerCase().includes(searchText.toLowerCase());
        const authorMatch = book.author.toLowerCase().includes(searchText.toLowerCase());
        return titleMatch || authorMatch;
      })
    : books;

  return (
    <div>
      <Header />
      <Title>
        <h1>Listagem de livros</h1>
      </Title>
      <Container>
        <SearchForm />
        {filteredBooks.length === 0 ? (
          <p>Nenhum livro encontrado.</p>
        ) : (
          <table>
            <tbody>
              {filteredBooks.map((book, index) => (
                <BookItem key={index} book={book} index={index} removeBook={removeBook} />
              ))}
            </tbody>
          </table>
        )}
      </Container>
    </div>
  );
}