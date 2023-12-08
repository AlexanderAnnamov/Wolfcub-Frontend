import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { TLoginForm } from '../../../models/auth/LoginForm'
import type { TRegistrationForm } from '../../../models/auth/RegistrationForm'

import axiosInstance from '../../../api/baseApi'
import { AxiosError, AxiosRequestConfig } from 'axios'

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params, headers }: AxiosRequestConfig) => {
    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      })
      return { data: result.data }
    } catch (axiosError) {
      const err: any = axiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
  }

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://example.com/',
  }),
  tagTypes: ['Auth'],
  endpoints: (build) => ({
    postLogin: build.mutation<TLoginForm, Partial<TLoginForm>>({
      query(body) {
        return {
          url: `signin`,
          method: 'POST',
          body,
        }
      },
    }), 
    postRegistration: build.mutation<TRegistrationForm, Partial<TRegistrationForm>>({
      query(body) {
        return {
          url: `signup`,
          method: 'POST',
          body,
        }
      },
    }), 
  }),
})

export const {
  usePostLoginMutation,
  usePostRegistrationMutation
} = authApi