"use client";
import React, { useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import SetLocationModal from "@/components/Header/Location/SetLocationModal";

const styleDiv =
  "h-full text-xs text-gray-100 flex justify-center px-2 shrink-0 border border-transparent hover:border-white cursor-pointer duration-300 h-full";

const Location = () => {
  const [openModal, setOpenModal] = useState(false);
  const [location, setLocation] = useState("Russian Federation");
  const [zipCode, setZipCode] = useState("");
  const [change, setChange] = useState<boolean>(false);
  const [country, setCountry] = useState<string>("");

  return (
    <>
      <button
        className={`${styleDiv} items-center gap-1 py-1`}
        onClick={() => setOpenModal(true)}
      >
        <SlLocationPin />
        <div className="text-xs text-start">
          <p>Deliver to</p>
          <p className="text-white font-bold uppercase">
            {country || `${location} ${zipCode}`}
          </p>
        </div>
      </button>
      <SetLocationModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        setLocation={setLocation}
        zipCode={zipCode}
        setZipCode={setZipCode}
        change={change}
        setChange={setChange}
        setCountry={setCountry}
        country={country}
      />
    </>
  );
};

export default Location;
