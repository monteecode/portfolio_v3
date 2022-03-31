import React from "react";

const buttonLink = (props) => {
  const handleClick = (url) => {
    window.open(url);
  };
  return (
    <button onClick={() => handleClick(props.appLink)}>{props.name}</button>
  );
};

export default buttonLink;
