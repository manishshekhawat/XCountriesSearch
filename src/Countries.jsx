import React from "react";

const Countries = ({ name, flag }) => {
  return (
    <>
      <div
      className="countryCard"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap:"5px",
          height: "200px",
          width: "200px",   
          border: "1px solid grey",
          borderRadius: "10px",
          textAlign:"center"
        }}
      >
        <img
          src={flag}
          alt={name}
          style={{ width:"80px",height:"80px" }}
        />
        <h2>{name}</h2>
      </div>
    </>
  );
};

export default Countries;
