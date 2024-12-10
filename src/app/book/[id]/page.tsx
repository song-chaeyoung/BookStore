"use client";

import { getBook } from "@/api";
import React, { useEffect, useState } from "react";
import style from "./page.module.css";
import { useParams, useRouter } from "next/navigation";
import { BookData } from "@/types";

// const

const Page = () => {
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  // const book = await getBook(params.id);
  const [book, setBook] = useState<BookData | null>(null);

  useEffect(() => {
    const fetchBook = async () => {
      const data = await getBook(id as string);
      setBook(data);
    };
    fetchBook();
  }, []);

  console.log(book);

  const handleEdit = () => {
    console.log("click");
    router.push(`/edit/${params.id}`);
  };

  const handleDelete = () => {
    console.log("삭제");
  };

  if (!book) return <div>로딩중...</div>;

  return (
    <div className={style.container}>
      <img src={book.coverImgUrl} alt={book.title} />
      <div>
        <h1>{book.title}</h1>
        <h2>{book.subTitle}</h2>
        <div>
          <span>{book.author}</span>
          <span>{book.publisher}</span>
        </div>
        <p>{book.description}</p>
        <p>수량 : 0</p>
        <div>
          <button onClick={handleEdit}>수정</button>
          <button onClick={handleDelete}>삭제</button>
        </div>
      </div>
    </div>
  );
};

export default Page;
