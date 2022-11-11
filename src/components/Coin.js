import axios from "axios";
import React, { memo, useEffect, useMemo, useState } from "react";
import Main from "./Main";

const Coin = () => {
  const [toogle, setToogle] = useState(false);
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
  const handleSubmit = (e) => {
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

  console.log(true);
  return (
    <div
      className={toogle ? "fa-sun" : "fa-moon"}
      style={{
        border: "none",
        color: "white",
      }}
    >
      <form className="form text-center " onSubmit={handleSubmit}>
        <h1 className="fs-1 fw-bold "> Code Fraternity Crypto </h1>
        <input
          type="search"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            borderRadius: "10px",
            padding: "1rem  2rem",
          }}
        />
        <button onClick={() => setToogle(!toogle)}>
          {toogle ? (
            <svg width="32" height="32" viewBox="0 0 24 24">
              <path
                fill="#red"
                d="M12 5q-.425 0-.712-.288Q11 4.425 11 4V2q0-.425.288-.713Q11.575 1 12 1t.713.287Q13 1.575 13 2v2q0 .425-.287.712Q12.425 5 12 5Zm4.95 2.05q-.275-.275-.275-.688q0-.412.275-.712l1.4-1.425q.3-.3.712-.3q.413 0 .713.3q.275.275.275.7q0 .425-.275.7L18.35 7.05q-.275.275-.7.275q-.425 0-.7-.275ZM20 13q-.425 0-.712-.288Q19 12.425 19 12t.288-.713Q19.575 11 20 11h2q.425 0 .712.287q.288.288.288.713t-.288.712Q22.425 13 22 13Zm-8 10q-.425 0-.712-.288Q11 22.425 11 22v-2q0-.425.288-.712Q11.575 19 12 19t.713.288Q13 19.575 13 20v2q0 .425-.287.712Q12.425 23 12 23ZM5.65 7.05l-1.425-1.4q-.3-.3-.3-.725t.3-.7q.275-.275.7-.275q.425 0 .7.275L7.05 5.65q.275.275.275.7q0 .425-.275.7q-.3.275-.7.275q-.4 0-.7-.275Zm12.7 12.725l-1.4-1.425q-.275-.3-.275-.712q0-.413.275-.688q.275-.275.688-.275q.412 0 .712.275l1.425 1.4q.3.275.287.7q-.012.425-.287.725q-.3.3-.725.3t-.7-.3ZM2 13q-.425 0-.712-.288Q1 12.425 1 12t.288-.713Q1.575 11 2 11h2q.425 0 .713.287Q5 11.575 5 12t-.287.712Q4.425 13 4 13Zm2.225 6.775q-.275-.275-.275-.7q0-.425.275-.7L5.65 16.95q.275-.275.688-.275q.412 0 .712.275q.3.3.3.713q0 .412-.3.712l-1.4 1.4q-.3.3-.725.3t-.7-.3ZM12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18Zm0-2q1.65 0 2.825-1.175Q16 13.65 16 12q0-1.65-1.175-2.825Q13.65 8 12 8q-1.65 0-2.825 1.175Q8 10.35 8 12q0 1.65 1.175 2.825Q10.35 16 12 16Zm0-4Z"
              />
            </svg>
          ) : (
            <svg width="32" height="32" viewBox="0 0 24 24">
              <g
                fill="none"
                stroke="#888888"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <g stroke-dasharray="2">
                  <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      dur="0.2s"
                      values="4;2"
                    />
                  </path>
                  <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.2s"
                      dur="0.2s"
                      values="4;2"
                    />
                  </path>
                </g>
                <path
                  fill="currentColor"
                  d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
                  opacity="0"
                >
                  <set attributeName="opacity" begin="0.5s" to="1" />
                </path>
              </g>
              <g
                fill="none"
                stroke="currentColor"
                stroke-dasharray="4"
                stroke-dashoffset="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5">
                  <animate
                    id="svgIDa"
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.6s;loop.begin+6s"
                    dur="0.4s"
                    values="4;0"
                  />
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="svgIDa.begin+2s;loop.begin+4s"
                    dur="0.4s"
                    values="4;0"
                  />
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="svgIDa.begin+1.2s;loop.begin+3.2s;loop.begin+5.2s"
                    dur="0.4s"
                    values="0;4"
                  />
                  <set
                    attributeName="d"
                    begin="svgIDa.begin+1.8s"
                    to="M12 5h1.5M12 5h-1.5M12 5v1.5M12 5v-1.5"
                  />
                  <set
                    attributeName="d"
                    begin="svgIDa.begin+3.8s"
                    to="M12 4h1.5M12 4h-1.5M12 4v1.5M12 4v-1.5"
                  />
                  <set
                    attributeName="d"
                    begin="svgIDa.begin+5.8s"
                    to="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5"
                  />
                </path>
                <path d="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5">
                  <animate
                    id="svgIDb"
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="1s;svgIDb.begin+6s"
                    dur="0.4s"
                    values="4;0"
                  />
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="svgIDb.begin+2s;loop2.begin+4s"
                    dur="0.4s"
                    values="4;0"
                  />
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="svgIDb.begin+1.2s;loop2.begin+3.2s;loop2.begin+5.2s"
                    dur="0.4s"
                    values="0;4"
                  />
                  <set
                    attributeName="d"
                    begin="svgIDb.begin+1.8s"
                    to="M17 11h1.5M17 11h-1.5M17 11v1.5M17 11v-1.5"
                  />
                  <set
                    attributeName="d"
                    begin="svgIDb.begin+3.8s"
                    to="M18 12h1.5M18 12h-1.5M18 12v1.5M18 12v-1.5"
                  />
                  <set
                    attributeName="d"
                    begin="svgIDb.begin+5.8s"
                    to="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5"
                  />
                </path>
                <path d="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5">
                  <animate
                    id="svgIDc"
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="2.8s;loop3.begin+6s"
                    dur="0.4s"
                    values="4;0"
                  />
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="svgIDc.begin+2s"
                    dur="0.4s"
                    values="4;0"
                  />
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="svgIDc.begin+1.2s;loop3.begin+3.2s"
                    dur="0.4s"
                    values="0;4"
                  />
                  <set
                    attributeName="d"
                    begin="svgIDc.begin+1.8s"
                    to="M20 5h1.5M20 5h-1.5M20 5v1.5M20 5v-1.5"
                  />
                  <set
                    attributeName="d"
                    begin="svgIDc.begin+5.8s"
                    to="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5"
                  />
                </path>
              </g>
              <mask id="svgIDd">
                <circle cx="12" cy="12" r="12" fill="#fff" />
                <circle cx="22" cy="2" r="3" fill="#fff">
                  <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.1s"
                    dur="0.4s"
                    values="22;18"
                  />
                  <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.1s"
                    dur="0.4s"
                    values="2;6"
                  />
                  <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.1s"
                    dur="0.4s"
                    values="3;12"
                  />
                </circle>
                <circle cx="22" cy="2" r="1">
                  <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.1s"
                    dur="0.4s"
                    values="22;18"
                  />
                  <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.1s"
                    dur="0.4s"
                    values="2;6"
                  />
                  <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.1s"
                    dur="0.4s"
                    values="1;10"
                  />
                </circle>
              </mask>
              <circle
                cx="12"
                cy="12"
                r="6"
                fill="currentColor"
                mask="url(#svgIDd)"
              >
                <set attributeName="opacity" begin="0.5s" to="0" />
                <animate
                  fill="freeze"
                  attributeName="r"
                  begin="0.1s"
                  dur="0.4s"
                  values="6;10"
                />
              </circle>
            </svg>
          )}
        </button>
        <button className="btn btn-danger p-3" type="submit">
          Search
        </button>
      </form>
      <div className="d-flex  justify-content-center align-items-center gap-2 flex-wrap">
        <Main data={filtredSearch} key={filtredSearch.id} />
      </div>
    </div>
  );
};

export default Coin;
