import { createContext, useState, ReactNode } from 'react';

type Book = {
  title: string;
  author: string;
  description: string;
  category: string;
};

export type BookContextType = {
  books: Book[];
  addBook: (newBook: Book) => void;
  removeBook: (index: number) => void;
  filterBooksByTitleOrAuthor(value: string): void;
  searchText: string;
  setSearchText: (text: string) => void;
};

export const BookContext = createContext<BookContextType | undefined>(undefined);

type BookProviderProps = {
  children: ReactNode;
};

export function BookProvider({ children }: BookProviderProps) {
  const [books, setBooks] = useState<Book[]>([
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      description: 'The Great Gatsby is a 1925 novel written by American author F. Scott Fitzgerald.',
      category: 'Classic Literature',
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      description: 'To Kill a Mockingbird is a novel by Harper Lee published in 1960.',
      category: 'Classic Literature',
    },
    {
      title: '1984',
      author: 'George Orwell',
      description: '1984 is a dystopian novel by George Orwell published in 1949.',
      category: 'Dystopian Fiction',
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      description: 'Pride and Prejudice is a romantic novel by Jane Austen published in 1813.',
      category: 'Classic Literature',
    },
    {
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      description: 'The Hobbit is a fantasy novel by J.R.R. Tolkien published in 1937.',
      category: 'Fantasy Fiction',
    },
  ]);
  const [searchText, setSearchText] = useState("");

  const addBook = (newBook: Book) => {
    setBooks([...books, newBook]);
  };

  const removeBook = (index: number) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  };

  const filterBooksByTitleOrAuthor = (value: string) => {
    const filteredBooks = books.filter((book) => {
      const titleMatch = book.title.toLowerCase().includes(value.toLowerCase());
      const authorMatch = book.author.toLowerCase().includes(value.toLowerCase());
      return titleMatch || authorMatch;
    });
    setBooks(filteredBooks);
  };

  const contextValue: BookContextType = {
    books,
    addBook,
    removeBook,
    setSearchText,
    searchText,
    filterBooksByTitleOrAuthor,
  };

  return (
    <BookContext.Provider value={contextValue}>
      {children}
    </BookContext.Provider>
  );
}