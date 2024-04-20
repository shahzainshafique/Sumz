import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const rapidapiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;
console.log(rapidapiKey);
export const articleApi = createApi({
  reducerPath: "articleApi",
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) =>
        `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
    }),
  }),
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", rapidapiKey);
      headers.set(
        "X-RapidAPI-Host",
        "article-extractor-and-summarizer.p.rapidapi.com"
      );
      return headers;
    },
  }),
});
export const { useLazyGetSummaryQuery } = articleApi;
