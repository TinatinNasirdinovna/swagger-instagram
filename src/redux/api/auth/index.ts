import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query<AUTH.GetAuthResponse, AUTH.GetAuthRequest>({
      query: () => ({
        url: "/auth/user",
        method: "GET",
      }),
      providesTags: ["auth"],
    }),
    signIn: build.mutation<AUTH.SignInAuthResponse, AUTH.SignInAuthRequest>({
      query: (data) => ({
        url: "/auth/sign-in",
        method: "POST",
        body: data
      }),
      invalidatesTags: ["auth"],
    }),
    signUp: build.mutation<AUTH.SignUpAuthResponse, AUTH.SignUpAuthRequest>({
        query: (data) => ({
          url: "/auth/sign-up",
          method: "POST",
          body: data
        }),
        invalidatesTags: ["auth"],
      }),
  }),
});
export const { useGetUserQuery, useSignInMutation, useSignUpMutation } = api;
