// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// export const postApi = createApi({
//   reducerPath: "postApi",
//   baseQuery: fetchBaseQuery({
//     // https://cafescale.com/api/v1/categories/allproductsResp2?restaurant_id=8
//     baseUrl: "https://cafescale.com",
//   }),
//   endpoints: (builder) => ({
//     // This is for the data of all products except special offer and banner and popular items //

//     getAllPost: builder.query({
//       query: () => ({
//         url: `/api/v1/categories/allproducts/19`,
//         method: "GET",
//       }),
//     }),

//     // This is for the special offer

//     // getSpecialOffer: builder.query({
//     //   query: () => ({
//     //     url: `/api/v1/special-offer/get_catering_offers/?restaurant_id=8`,
//     //     method: "GET",
//     //   }),
//     // }),

//     // This is for the  popular items //

//     getAllPopularItems: builder.query({
//       query: () => ({
//         url: `/api/v1/products/allpopular?restaurant_id=19`,
//         method: "GET",
//       }),
//     }),

//     // This is for the Deals which is called banner according to the api

//     // getBanner: builder.query({
//     //   query: () => ({
//     //     url: `/api/v1/banners?restaurant_id=8`,
//     //     method: "GET",
//     //   }),
//     // }),

//     // This is for the images for all Products and banners

//     getAllImageProducts: builder.query({
//       query: () => ({
//         url: `/api/v1/config?restaurant_id=19`,
//         method: "GET",
//       }),
//     }),

//     //       this is for the top Slider        //

//     // getAllSlider: builder.query({
//     //   query: () => ({
//     //     url: `/api/v1/categories?restaurant_id=$restaurantId`,
//     //     method: "GET",
//     //   }),
//     // }),

//     // This is for the Recomended Sides data in the Modal //

//     getAllRecomendedProduct: builder.query({
//       query: () => ({
//         url: `/api/v1/products/get_recomended_sides?restaurant_id=19`,
//         method: "GET",
//       }),
//     }),
//     // This is for the Recomended Beverage data in the Modal //
//     // getAllBeveragesProduct: builder.query({
//     //   query: () => ({
//     //     url: `/api/v1/products/get_recomended_beverages?restaurant_id=8`,
//     //     method: "GET",
//     //   }),
//     // }),

//     //  this is for the map api and get google location ////

//     getAllGoogleMapLocation: builder.query({
//       query: () => ({
//         url: `/api/v1/mapapi/place-api-autocomplete?search_text=lahore`,
//         method: "GET",
//       }),
//     }),

//     // this is for the Staff Tip///////

//     // getAllStaffTip: builder.query({
//     //   query: () => ({
//     //     url: `http://cafescale.site/api/v1/config?restaurant_id=8`,
//     //     method: "GET",
//     //   }),
//     // }),

//     // this is for the Branches of the resturant Talkin Tacos.............

//     getAllBranchesLocation: builder.query({
//       query: () => ({
//         url: `http://cafescale.site/api/v1/config?restaurant_id=19`,
//         method: "GET",
//       }),
//     }),
//   }),
// });
// export const {
//   useGetAllPostQuery,
//   useGetSpecialOfferQuery,
//   useGetAllPopularItemsQuery,
//   useGetBannerQuery,
//   useGetAllImageProductsQuery,
//   useGetAllSliderQuery,
//   useGetAllRecomendedProductQuery,
//   useGetAllBeveragesProductQuery,
//   useGetAllGoogleMapLocationQuery,
//   useGetAllStaffTipQuery,
//   // useGetNumberOfPostQuery,
//   useGetAllBranchesLocationQuery,
// } = postApi;

/////here i define a const for Resturant ID........

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {Resturant_id_Globally} from "../../Resutrant_Id"
const restaurantId = Resturant_id_Globally; // Define the restaurant ID here
export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cafescale.com",
    prepareHeaders: (headers) => {
      // You can add headers here if needed
      return headers;
    },
    // Pass restaurantId as a parameter
    prepareParams: (params) => {
      return {
        ...params,
        restaurant_id: restaurantId,
      };
    },
  }),
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => ({
        url: `/api/v1/categories/allproducts/${restaurantId}`,
        method: "GET",
      }),
    }),
    getAllPopularItems: builder.query({
      query: () => ({
        url: `/api/v1/products/allpopular?restaurant_id=${restaurantId}`,
        method: "GET",
      }),
    }),
    getAllImageProducts: builder.query({
      query: () => ({
        url: `/api/v1/config?restaurant_id=${restaurantId}`,
        method: "GET",
      }),
    }),
    getAllRecomendedProduct: builder.query({
      query: () => ({
        url: `/api/v1/products/get_recomended_sides?restaurant_id=${restaurantId}`,
        method: "GET",
      }),
    }),
    getAllGoogleMapLocation: builder.query({
      query: () => ({
        url: `/api/v1/mapapi/place-api-autocomplete?search_text=lahore`,
        method: "GET",
      }),
    }),
    getAllBranchesLocation: builder.query({
      query: () => ({
        url: `/api/v1/config?restaurant_id=${restaurantId}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllPostQuery,
  useGetAllPopularItemsQuery,
  useGetAllImageProductsQuery,
  useGetAllRecomendedProductQuery,
  useGetAllGoogleMapLocationQuery,
  useGetAllBranchesLocationQuery,
} = postApi;
