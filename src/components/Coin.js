import axios from "axios";
import React, { memo, useEffect, useMemo, useState } from "react";
import Main from "./Main";

const Coin = () => {
  const [coin, setCoin] = useState([]);
  const [search, setSearch] = useState("");
  const [text, setText] = useState("");
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
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(text);
  };

  useEffect(() => {
    getApi();
  }, []);
  const filtredSearch = useMemo(() => {
    return coin?.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [coin, search]);
  //   setInterval(() => {
  //     getApi();
  //   }, 10000);
  return (
    <div  >
        
      <form className="bg-info"  onSubmit={handleSearch}>
         <h1 className="fs-1 fw-bold" > Code Fraternity Crypto </h1>
        <input
          type="search"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            borderRadius:"10px",
            padding:"1rem 2rem"
          }}
        />
     
        <button className="btn btn-danger p-3" type="submit">Search</button>
      </form>
      <div className="d-flex  justify-content-center align-items-center gap-2 flex-wrap"
        // style={{
          // display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
          // flexWrap: "wrap",
          // gap: "2rem",
        // }}
      >
        <Main data={filtredSearch} key={filtredSearch.id} />
      </div>
    </div>
  );
};

export default Coin;