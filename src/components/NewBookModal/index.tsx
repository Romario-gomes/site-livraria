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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const target = event.target as typeof event.target & {
      title: { value: string };
      author: { value: string };
      description: { value: string };
      category: { value: string };
    };
  
    const title = target.title.value;
    const author = target.author.value;
    const description = target.description.value;
    const category = target.category.value;

    const newBook = {
      title,
      author,
      description,
      category,
    };

    addBook(newBook);
    form.reset();
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