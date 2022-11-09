import React from "react";

const Main = ({ data }) => {
  console.log(data);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid red",
        width: "250px",
        height: "350px",
      }}
    >
      <div>
        <img src={data.image} width="70px" height="70px" alt={data.symbol} />
      </div>

      <div className="title">
        <h1>{data.name}</h1>
        {data.current_price}
        <span
          style={{
            display: "block",
          }}
        >
          {data?.price_change_percentage_24h}
        </span>
      </div>
    </div>
  );
};

export default Main;