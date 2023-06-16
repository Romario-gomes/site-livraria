import { NewBookModal } from "../NewBookModal";
import { Container, Content, NewBookButton } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";

export function Header() {
  return (
    <Container>
      <Content>
        <h2>Universo Literário</h2>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewBookButton type="button">
              Adicionar Livro
            </NewBookButton>
          </Dialog.Trigger>
          <NewBookModal/>
        </Dialog.Root>
      </Content>
    </Container>
  )
}