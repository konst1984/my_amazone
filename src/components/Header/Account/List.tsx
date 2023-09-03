import React from "react";
import Link from "next/link";

const List = ({ list }: { list: string[] }) => {
  return (
    <div className="p-4 w-1/2">
      <p className="font-semibold capitalize text-base">Your Lists</p>
      <ul>
        {list.map((item) => (
          <li className="w-max py-1" key={item}>
            <Link href={"#"} className="hover:text-orange-500 hover:underline">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
