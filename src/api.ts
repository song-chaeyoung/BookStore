import { BookData } from "./types";

const BASE_URL = "http://localhost:12345";

export const getBooks = async () => {
  const res = await fetch("http://localhost:12345/book");
  const data = await res.json();

  if (!res.ok) {
    throw new Error("오류가 발생했습니다");
  }

  return data;
};

export const getBook = async (id: string) => {
  const res = await fetch(`http://localhost:12345/book/${id}`);
  const data = await res.json();

  if (!res.ok) {
    throw new Error("오류가 발생했습니다");
  }

  return data;
};

export const searchBooks = async (q: string, option: string) => {
  const allBooks = await getBooks();
  const books = allBooks.filter((book: BookData) => {
    if (option === "book") {
      return book.title.includes(q);
    }
    if (option === "author") {
      return book.author.includes(q);
    }

    return book.title.includes(q) || book.author.includes(q);
  });

  return books;
};

export const fetchEditBook = async (id: string, book: BookData) => {
  // const res = await fetch(`http://localhost:12345/book/${id}`, {
  //   method: "PATCH",
  //   body: JSON.stringify(book),
  // });
  console.log(book);
  try {
    const res = await fetch(`http://localhost:12345/book/${id}`, {
      method: "PATCH",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      body: JSON.stringify(book),
    });

    if (!res.ok) {
      throw new Error("Failed to update book", res.statusText as any);
    }
  } catch (err) {
    throw new Error("오류가 발생했습니다", err as any);
  }
};
// if (!res.ok) {
//   throw new Error("오류가 발생했습니다");
// }

// return res.json();
// };
