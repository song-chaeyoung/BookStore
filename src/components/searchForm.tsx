"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import style from "@/styles/searchForm.module.css";
const SearchForm = () => {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const search = formData.get("search") as string;

    if (search === "") {
      alert("검색어를 입력해주세요");
      return;
    }

    router.push(`/search?search=${search}`);
  };

  return (
    <form className={style.form} onSubmit={handleSearch}>
      <select name="category" id="category">
        <option value="all">전체</option>
        <option value="book">책</option>
        <option value="magazine">작가</option>
      </select>
      <input type="text" name="search" placeholder="검색" />
      <button type="submit">
        <FaSearch size={18} />
      </button>
    </form>
  );
};

export default SearchForm;
