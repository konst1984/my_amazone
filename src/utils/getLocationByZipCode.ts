import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";

export const getLocationByZipCode = async (zipcode: string) => {
  const url =
    "https://us-zip-code-information.p.rapidapi.com/?zipcode=" + zipcode;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "3f053d117emsha768ac3f0f0f476p16ad29jsn61dee2d54dce",
      "X-RapidAPI-Host": "us-zip-code-information.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const result = await response.json();
      return result[0];
    }
    throw new Error("Unable fetch data!!!");
  } catch (error) {
    console.error("error", error);
    throw new Error(error.message);
  }
  // interface IOptions {
  //   headers: { "X-RapidAPI-Host": string; "X-RapidAPI-Key": string };
  //   method: string;
  //   params: { zipcode: string };
  //   url: string;
  // }
  // const options = {
  //   method: "GET",
  //   url: "https://us-zip-code-information.p.rapidapi.com/",
  //   params: { zipcode },
  //   headers: {
  //     "X-RapidAPI-Key": "3f053d117emsha768ac3f0f0f476p16ad29jsn61dee2d54dce",
  //     "X-RapidAPI-Host": "us-zip-code-information.p.rapidapi.com",
  //   },
  // };
  //
  // try {
  //   const response = await axios.request(options);
  //   return response.data;
  // } catch (error) {
  //   throw new Error(error.message);
  // }
};
