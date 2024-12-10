import { revalidatePath } from "next/cache";

export const deleteBookAction = async (formData: FormData) => {
  const bookId = formData.get("bookId")?.toString();
  const reviewId = formData.get("reviewId")?.toString();

  if (!bookId) {
    return {
      status: false,
      error: "삭제하려는 책이 존재하지 않습니다",
    };
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${bookId}`,
      {
        method: "DELETE",
        next: { tags: [`delete-book-${bookId}`] },
      }
    );

    if (!response.ok) throw new Error(response.statusText);

    revalidatePath(`/`);
    return {
      status: true,
      error: "",
    };
  } catch (err) {
    console.log(err);
    return {
      status: false,
      error: `책 삭제에 실패했습니다. : ${err}`,
    };
  }
};
