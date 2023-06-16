import React from "react";
import { ViewBookButton, RemoveBookButton } from "./styles";
import { Eye, Trash } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import { ViewBookModal } from "../ViewBookModal";

export interface IBookType {
  title: string;
  author: string;
  description: string;
  category: string;
}

interface BookItemProps {
  book: IBookType;
  index: number;
  removeBook: (index: number) => void;
}

export function BookItem({ book, index, removeBook }: BookItemProps) {
  return (
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
          <ViewBookModal title={book.title} />
        </Dialog.Root>
      </td>
      <td>
        <RemoveBookButton onClick={() => removeBook(index)}>
          <Trash size={24} />
        </RemoveBookButton>
      </td>
    </tr>
  );
}