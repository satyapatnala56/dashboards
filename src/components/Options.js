import React, { useState } from "react";

const Options = (props) => {
  const { option } = props;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        gap: "5px",
        cursor: "pointer",
        color: isHovered ? option.hoverColor : "black",
        transition: "all 0.3s ease-out",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={(e) => option.onClick(e)}
    >
      {option.icon}
      <div>{option.title}</div>
    </div>
  );
};

export default Options;
