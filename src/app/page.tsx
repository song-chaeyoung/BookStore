import React from "react";
import style from "./page.module.css";
// import { FaSearch } from "react-icons/fa";
// import { useRouter } from "next/navigation";
import SearchForm from "@/components/searchForm";

// export const dynamic = "force-dynamic";

const AllBooks = async () => {
  const res = await fetch("http://localhost:12345/book");
  const data = await res.json();

  if (!res.ok) {
    return <div>오륲가 발생했습니다</div>;
  }

  return data;
};

const Page = async () => {
  const books = await AllBooks();

  return (
    <div className={style.container}>
      <h1>검색하실 책을 입력해주세요</h1>
      <SearchForm />
      <div className={style.books}>
        <h1>모든 책 보기</h1>
      </div>
    </div>
  );
};

export default Page;
