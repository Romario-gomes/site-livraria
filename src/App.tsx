import { BookProvider } from "./Context/BookContext";
import { BookList } from "./components/Booklist";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
    <BookProvider>
      <BookList></BookList>
      <GlobalStyle></GlobalStyle>
    </BookProvider>
    </>
  );
}

