import axios from "axios";
import React, { useEffect, useState } from "react";
import Main from "./Main";

const Coin = () => {
  const [coin, setCoin] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  const getApi = async () => {
    try {
      const { data } = await axios(url);
      setCoin(data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getApi();
  }, []);
  //   setInterval(() => {
  //     getApi();
  //   }, 10000);
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        {coin.map((item) => {
          return <Main data={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Coin;