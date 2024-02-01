export interface todo {
  id: string,
  title: string
}

export interface column{
  title: string
  todo: todo[]
}

export interface Product {
  id: string;
  title: string;
  price: number;
  images: string[];
}

export type status = 'init' | 'success' | 'failed' | 'loading'

export type ColorCard = 'sky' | 'yellow' | 'green' | 'red' | 'violet' | 'gray'

export interface ResponseLogin {
  access_token: string;
  refresh_token: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface Board {
  id: string;
  title: string;
  backgroundColor: ColorCard;
  members: User[];
}
