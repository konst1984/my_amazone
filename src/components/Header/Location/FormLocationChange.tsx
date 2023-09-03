import React, { useEffect, useState } from "react";
import Button, { ButtonTheme } from "@/components/Buttons/Button";
import { getLocationByZipCode } from "@/utils/getLocationByZipCode";

interface IFormLocationChange {
  setLocation: (value: string) => void;
  zipCode: string;
  setZipCode: (value: string) => void;
  change: boolean;
  setChange: (value: boolean) => void;
  setCountry: (value: string) => void;
}

const FormLocationChange = ({
  zipCode,
  setZipCode,
  setLocation,
  change,
  setChange,
  setCountry,
}: IFormLocationChange) => {
  const [query, setQuery] = useState<string>(zipCode);
  const [error, setError] = useState<string>("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!query) return;
    await setZipCode(query);
    if (!error) {
      setChange(true);
    }
  };

  useEffect(() => {
    if (!zipCode) return;
    if (!change) {
      getLocationByZipCode(zipCode)
        .then((res: IResponseData) => {
          if (res?.City) {
            setLocation(res.City);
            setCountry("");
          } else {
            setError("Please enter a valid US zip code");
            setChange(false);
            setZipCode("");
          }
        })
        .catch((err) => {
          setChange(false);
          setZipCode("");
          setError(err.message || "Unable fetch data!!!");
        });
    }
  }, [zipCode, change]);

  return (
    <>
      <form
        className="relative flex gap-2 items-center py-4 max-h-[100px] h-auto"
        onSubmit={onSubmit}
      >
        <label className={`${!change && "hidden"} w-[100%] h-[45px]`}>
          <input
            type="text"
            value={`Deliver to ${zipCode}`}
            onChange={(e) => setQuery(e.target.value)}
            className="px-2 w-full h-full rounded-md border-4 border-cyan-800 bg-cyan-100"
          />
          <button
            type="button"
            onClick={() => setChange(false)}
            className="absolute left-[120px] top-1/2 -translate-y-1/2 text-cyan-500 hover:text-orange-700 hover:underline"
          >
            Change
          </button>
        </label>
        <label className={`${change && "hidden"} w-[70%] h-[30px]`}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="px-2 w-full h-full rounded-md border border-stone-500"
          />
        </label>
        <Button theme={ButtonTheme.OUTLINE} classname="w-[30%]">
          Apply
        </Button>
      </form>
      {error && <div className="mb-1 text-red-600">{error}</div>}
    </>
  );
};

export default FormLocationChange;
