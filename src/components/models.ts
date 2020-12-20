interface TodoObjject {
  color: string
}
export interface MyTodos extends TodoObjject{
  title: string;
  date: Date;
  completed?: boolean;
}

export interface Meta {
  totalCount: number;
}
