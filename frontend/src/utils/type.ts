import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  QueryActionCreatorResult,
  QueryDefinition,
} from '@reduxjs/toolkit/query';

export interface UserCreate {
  name: string;
  surname: string;
  height: string;
  weight: string;
  sex: string;
  residency: string;
  image: File | null;

  id?: number;
  createdAt?: string;
  updatedAt?: string;
}

// export interface UserUpdate {
//   id: number;
//   name: string;
//   surname: string;
//   height: string;
//   weight: string;
//   sex: string;
//   residency: string;
//   image: File | null;

//   createdAt: string;
//   updatedAt: string;
// }

export interface User {
  id: number;
  name: string;
  surname: string;
  height: string;
  weight: string;
  sex: string;
  residency: string;
  image?: Image;
  createdAt: string;
  updatedAt: string;
}

export interface Image {
  type: string;
  data: number[];
}



export interface refetch {
  refetch: () => QueryActionCreatorResult<
    QueryDefinition<
      number,
      BaseQueryFn<
        string | FetchArgs,
        unknown,
        FetchBaseQueryError,
        Record<string, never>,
        FetchBaseQueryMeta
      >,
      never,
      User[],
      'productApi'
    >
  >;
}

export interface ListUsersProps {
  data: User[];
  refetch: () => QueryActionCreatorResult<
    QueryDefinition<
      number,
      BaseQueryFn<
        string | FetchArgs,
        unknown,
        FetchBaseQueryError,
        Record<string, never>,
        FetchBaseQueryMeta
      >,
      never,
      User[],
      'productApi'
    >
  >;
}
