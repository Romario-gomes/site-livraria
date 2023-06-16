import { Header } from "../Header";
import { SearchForm } from "../SearchForm";
import { Container, ViewBookButton, RemoveBookButton, Title } from "./styles";
import { Eye, Trash } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import { ViewBookModal } from "../ViewBookModal";
import { useContext } from "react";
import { BookContext } from "../../Context/BookContext";

export interface IBookType {
  title: string;
  author: string;
  description: string;
  category: string;
}

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
          <p>Nenhum livro Encontrado.</p>
        ) : (
          <table>
            <tbody>
              {filteredBooks.map((book, index) => (
                <tr key={index}>
                  <td width="40%">{book.title}</td>
                  <td width="30%">{book.author}</td>
                  <td width="20%">{book.category}</td>
                  <td>
                    <Dialog.Root>
                      <Dialog.Trigger asChild>
                        <ViewBookButton type="button">
                          <Eye size={24} />
                        </ViewBookButton>
                      </Dialog.Trigger>
                      <ViewBookModal title={book.title}/>
                    </Dialog.Root>
                  </td>
                  <td>
                    <RemoveBookButton onClick={() => removeBook(index)}>
                      <Trash size={24}/>
                    </RemoveBookButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Container>
    </div>
  );
}