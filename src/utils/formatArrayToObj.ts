interface IData {
  value: string;
  label: string;
}
export const formatArrayToObj = (data: string[]): IData[] => {
  return data
    .sort((a, b) => a.localeCompare(b))
    .reduce((acc, next) => {
      acc.push({ value: next, label: next });
      return acc;
    }, []);
};
