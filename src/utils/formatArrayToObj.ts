interface IData {
  value: string;
  label: string;
}

export const formatArrayToObj = (data: string[]): IData[] => {
  return data
    .sort((a, b) => a.localeCompare(b))
    .reduce((acc: IData[], next: string) => {
      let element: { value: string; label: string } = {
        value: next,
        label: next,
      };
      acc.push(element);
      return acc;
    }, []);
};
