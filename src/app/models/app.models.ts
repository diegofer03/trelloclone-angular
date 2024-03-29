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

export type ColorCard = 'home' |'sky' | 'yellow' | 'green' | 'red' | 'violet' | 'gray'

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

export interface Card {
  id: string;
  title: string;
  description?: string;
  position: number;
  list: List;
}

export interface CardCreate extends Omit<Card, 'id' | 'list'>{
  boardId: string,
  listId: string
}

export interface UpdateCardDto {
  title?: string;
  description?: string;
  position?: number;
  listId?: string | number;
  boardId?: string;
}

export interface List {
  id: string;
  title: string;
  position: number;
  cards: Card[];
  showAdd?: boolean
}

export interface ListCreate extends Omit<List, 'id' | 'cards'>{
  boardId: string
}

export interface Board {
  id: string;
  title: string;
  backgroundColor: ColorCard;
  members: User[];
  lists: List[];
  cards: Card[];
}
