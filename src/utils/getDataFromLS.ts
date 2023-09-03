export const getDataFromLS = (key: string) => {
  if (typeof window !== "undefined") {
    const data = localStorage?.getItem(key);
    return data ? JSON.parse(data) : [];
  }
  return [];
};
