export interface BookData {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  author: string;
  publisher: string;
  coverImgUrl: string;
}

export interface BookFormData {
  title: string;
  subTitle: string;
  author: string;
  publisher: string;
  description: string;
  quantity: number;
  coverImgUrl: string;
}
