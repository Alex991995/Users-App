import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User, UserCreate } from '../../utils/type';

export const usersApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api'}),
  endpoints: builder => ({
    getUsers: builder.query<User[], number>({
      query: (page) => `/users?page=${String(page)}`,
    }),
    addUser: builder.mutation<UserCreate, FormData>({
      query:(body) => ({
        url: '/users',
        method: 'POST',
        body,
      })
    }),
    deleteUser: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'DELETE',
      })
    }),
    updateUser: builder.mutation<User[], {id:number, userUpdate:FormData}>({
      query: ({id, userUpdate}) =>({
        url: `/users/${id}`,
        method: 'PATCH',
        body: userUpdate
      })
    })
  }),
});

export const { useGetUsersQuery, useAddUserMutation, useDeleteUserMutation, useUpdateUserMutation } = usersApi