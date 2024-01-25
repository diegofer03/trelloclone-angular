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

export interface ResponseLogin {
  access_token: string;
  refresh_token: string;
}
