export interface ITransaction {
  type: string;
  date: Date;
  amount: number;
  id: number;
  name: string;
  memo: string;
}

export interface ICategory {
  id: string;
  name: string;
  userId: string;
  subCategories?: ICategories;
  parent?: string;
}

export interface ICategories {
  [key: string]: ICategory;
}
