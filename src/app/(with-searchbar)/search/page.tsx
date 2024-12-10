"use client";

import { searchBooks } from "@/api";
import BookItem from "@/components/book-item";
import { BookData } from "@/types";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import style from "./page.module.css";

const Page = () => {
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  const option = searchParams.get("option");
  const [books, setBooks] = useState<BookData[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const result = await searchBooks(q as string, option as string);
      setBooks(result);
    };

    if (q) {
      fetchBooks();
    }
  }, [q, option]);

  return (
    <div className={style.container}>
      <h1>
        <span>{q}</span> 검색 결과 <small>{books.length}건</small>
      </h1>
      <div className={style.bookList}>
        {books.map((book: BookData) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Page;
