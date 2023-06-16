import * as Dialog  from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay } from "./styles";
import { X } from "phosphor-react";
import { useContext } from "react";
import { BookContext } from "../../Context/BookContext";

interface IViewModalProps {
  title: string;
}

export function ViewBookModal ({ title }: IViewModalProps) {
  const context = useContext(BookContext);

  if (!context) {
    return null;
  }

  const { books } = context;
  const bookDetails = books.find(book => book.title === title);

  return (
    <Dialog.Portal>
      <Overlay/>
      <Content>
        <CloseButton>
          <X size={24} />
        </CloseButton>
  
        <Dialog.Title>Detalhes do livro</Dialog.Title>
          <div>
            <input type="text" placeholder="titulo" value={bookDetails?.title} readOnly />
            <input type="text" placeholder="autor" value={bookDetails?.author} readOnly/>
            <textarea placeholder="descrição" value={bookDetails?.description} readOnly/>
            <input type="text" placeholder="categoria" value={bookDetails?.category} readOnly/>
          </div>
      </Content>
    </Dialog.Portal>
  )
}
