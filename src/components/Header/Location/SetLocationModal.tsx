import React from "react";
import Modal from "@/components/Modal";
import Button, { ButtonTheme } from "@/components/Buttons/Button";
import FormLocationChange from "@/components/Header/Location/FormLocationChange";
import { Select } from "antd";
import { countriesObjects } from "@/components/Header/Location/data";

interface ISetLocationModal {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  setLocation: (value: string) => void;
  zipCode: string;
  setZipCode: (value: string) => void;
  change: boolean;
  setChange: (value: boolean) => void;
  setCountry: (value: string) => void;
  country: string;
}

const SetLocationModal = ({
  openModal,
  setOpenModal,
  setLocation,
  zipCode,
  setZipCode,
  change,
  setChange,
  setCountry,
  country,
}: ISetLocationModal) => {
  const handleChange = (value: string) => {
    setCountry(value);
    setZipCode("");
    setLocation("");
  };

  return (
    <Modal openModal={openModal} setOpenModal={setOpenModal}>
      <div className="bg-gray-100 text-xs text-black rounded-2xl overflow-hidden">
        <p className="p-4 bg-gray-300 border-b border-gray-400 text-base font-semibold">
          Choose your location
        </p>
        <div className="p-4">
          <p className="py-4">
            Delivery options and delivery speeds may vary for different
            locations
          </p>
          <p className="relative text-center before:absolute before:w-full before:h-[1px] before:bg-gray-400 before:left-0 before:top-1/2 before:-translate-y-1/2">
            <span className="relative px-2 bg-gray-100">
              Choose a US zip code
            </span>
          </p>
          <FormLocationChange
            zipCode={zipCode}
            setZipCode={setZipCode}
            setLocation={setLocation}
            change={change}
            setChange={setChange}
            setCountry={setCountry}
          />
          <p className="relative text-center before:absolute before:w-full before:h-[1px] before:bg-gray-400 before:left-0 before:top-1/2 before:-translate-y-1/2">
            <span className="relative px-2 bg-gray-100">or</span>
          </p>
          <div>
            {zipCode ? (
              <span>Ship outside the US</span>
            ) : (
              <Select
                showSearch
                style={{ width: "100%", margin: "10px 0" }}
                placeholder="Choose your country"
                defaultValue={
                  country ? "Ship outside the US" : "Russian Federation"
                }
                optionFilterProp="children"
                onChange={handleChange}
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={countriesObjects}
              />
            )}
          </div>
          <div className="flex items-center justify-end">
            <Button
              theme={ButtonTheme.YELLOW}
              onClick={() => setOpenModal(false)}
            >
              Done
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SetLocationModal;
