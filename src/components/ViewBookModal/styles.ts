import * as Dialog from "@radix-ui/react-dialog";
import { styled } from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 50rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: var(--background-800);

  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  
  div {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input, textarea {
      border-radius:6px;
      border: 0;
      background: var(--background-900);
      color: var(--text-body);
      padding: 1rem;
      &::placeholder {
        color: var(--background-700);
      }
    }

    button[type='submit'] {
      height:58px;
      border: 0;
      background: var(--yellow-600);
      color: #FFF;
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.5rem;
      cursor: pointer; 

      &:hover{
        filter: brightness(0.9);
        transition: 0.2s
      }
    }
  }
  @media (max-width: 1024px) {
    min-width: 30rem;

  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: var(--background-700);
`;