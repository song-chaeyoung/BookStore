"use client";

import React, { useEffect, useState } from "react";
import { fetchEditBook, getBook } from "@/api";
import style from "./page.module.css";
import { useParams, useRouter } from "next/navigation";
import { BookData } from "@/types";
import { FaImage } from "react-icons/fa";

const Page = () => {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const [book, setBook] = useState<BookData | null>(null);
  const [editBook, setEditBook] = useState<BookData | null>(null);

  useEffect(() => {
    const fetchBook = async () => {
      const data = await getBook(id as string);

      setEditBook(data);
    };
    fetchBook();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // console.log(e.target);
    const { name, value, type, files } = e.target as HTMLInputElement;

    setEditBook((prev) => {
      if (!prev) return null;
      return { ...prev, [name]: value };
    });
  };

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push(`/book/${id}`);
  };

  const handleSave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    fetchEditBook(id as string, editBook as BookData);
    router.push(`/book/${id}`);
  };

  if (!editBook) return <div>로딩중...</div>;

  return (
    <form action="" className={style.container}>
      <div className={style.coverImg}>
        <img src={editBook?.coverImgUrl} alt={editBook?.title} />
        {/* <label htmlFor="coverImgUrl">
          <FaImage size={20} /> 이미지 변경하기
        </label>
        <input
          type="file"
          name="coverImgUrl"
          id="coverImgUrl"
          onChange={handleChange}
        /> */}
      </div>
      <div className={style.info}>
        <div>
          <label htmlFor="title">제목</label>
          <input
            type="text"
            name="title"
            value={editBook?.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="subTitle">부제목</label>
          <input
            type="text"
            name="subTitle"
            value={editBook?.subTitle}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="author">저자</label>
          <input
            type="text"
            name="author"
            value={editBook?.author}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="publisher">출판사</label>
          <input
            type="text"
            name="publisher"
            value={editBook?.publisher}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">설명</label>
          <textarea
            name="description"
            value={editBook?.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="quantity">수량</label>
          <input type="number" name="quantity" />
        </div>
        <div className={style.button}>
          <button onClick={handleCancel}>취소</button>
          <button onClick={handleSave}>저장</button>
        </div>
      </div>
    </form>
  );
};

export default Page;
