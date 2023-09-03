import React from "react";
import Link from "next/link";

const ErrorComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center m-3 p-10 bg-gray-300 text-center text-red-500 font-semibold min-h-[50vh] text-clamp">
      <div>
        Something went wrong :( <br />
        Reload the page or log in later.
      </div>
      <Link
        href="/"
        className="m-4 px-4 py-2 text-center rounded-xl bg-custom_yellow text-black text-base"
      >
        Go home page
      </Link>
    </div>
  );
};

export default ErrorComponent;
