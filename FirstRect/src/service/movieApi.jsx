import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const BASEURL = import.meta.env.VITE_APP_BASE_URL
const APIKEY = import.meta.env.VITE_APP_API_URL

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery : fetchBaseQuery({baseUrl:`${BASEURL}`}),
  endpoints : (builder) => ({
    getPopularMovies: builder.query({
      query:()=>(`${BASEURL}/movie/popular?api_key=${APIKEY}`)
    }),
    getTopPlayingMovies: builder.query({
      query:()=>(`${BASEURL}/movie/top_playing?api_key=${APIKEY}`)
    }),
    getNowPlayingMovies: builder.query({
      query:()=>(`${BASEURL}/movie/now_playing?api_key=${APIKEY}`)
    }),
    getUpcomingMovies: builder.query({
      query:()=>(`${BASEURL}/movie/upcomming?api_key=${APIKEY}`)
    })
  })
})


export const {useGetPopularMovieQuary,useGetNowPlayingMoviesQuery,useGetTopPlayingMoviesQuery,useGetUpcomingMoviesQuery} = movieApi