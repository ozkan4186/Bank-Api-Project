import axios from "axios";
import React, { useEffect } from "react";

const Coin = () => {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  const getApi = async () => {
    try {
      const { data } = await axios(url);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  

  useEffect(() => {
    getApi();
  }, []);

  return <div>Coin</div>;
};

export default Coin;
