import React from "react";
import Options from "./Options";

const Menu = (props) => {
  const { options, right, bottom } = props;

  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        background: "white",
        padding: "15px",
        width: "120px",
        boxShadow: "0px 8px 8px 0px rgba(0, 0, 0, 0.2)",
        zIndex: 1,
        right: right,
        bottom: bottom,
        borderRadius: "8px",
        border: "1px solid #ccc",
        transition: "all 0.3s ease-out",
      }}
    >
      {options.map((option, index) => {
        return <Options option={option} key={index} />;
      })}
    </div>
  );
};

export default Menu;
