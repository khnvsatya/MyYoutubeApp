import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Cricket",
  "New for you",
  "Live",
  "Comedy",
  "Reactions",
  "Travel vlogs",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {/* make scroll of items */}
      {list.map((buttonItems, index) => {
        return <Button name={buttonItems} key={index} />;
      })}
    </div>
  );
};

export default ButtonList;
