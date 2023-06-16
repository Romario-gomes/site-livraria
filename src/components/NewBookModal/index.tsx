import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookContext';
import * as Dialog  from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay } from "./styles";
import { X } from "phosphor-react";

export function NewBookModal() {
  const context = useContext(BookContext);

  if (!context) {
    return null;
  }

  const { addBook } = context;

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const title = event.target.title.value;
    const author = event.target.author.value;
    const description = event.target.description.value;
    const category = event.target.category.value;

    const newBook = {
      title,
      author,
      description,
      category,
    };

    addBook(newBook);
    event.target.reset();
  };

  return (
    <Dialog.Portal>
      <Overlay/>
      <Content>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <Dialog.Title>Adicionar Livro</Dialog.Title>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Título" required />
        <input type="text" name="author" placeholder="Autor" required />
        <textarea name="description" placeholder="Descrição" required />
        <input type="text" name="category" placeholder="Categoria" required />
        <button type="submit">Adicionar</button>
      </form>
      </Content>
    </Dialog.Portal>

  );
}