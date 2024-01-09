export interface todo {
  id: string,
  title: string
}

export interface column{
  title: string
  todo: todo[]
}
