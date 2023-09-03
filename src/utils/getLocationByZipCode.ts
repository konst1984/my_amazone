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
    throw new Error(error.message);
  }
};
