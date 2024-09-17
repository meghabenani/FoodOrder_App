import { useState, useEffect } from "react";
import Res_Card from "./Res_Card";
import Shimmer from "./Shimmer";
import Res_menu from "./Res_menu";
import { Link } from "react-router-dom";

let Body = () => {
  let [resData, setResdata] = useState([]);
  let [search, setSearch] = useState("");
  let [rated, setRated] = useState([]);
  let fetchApi = async () => {
    let res = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=18.5780302&lng=73.6833417&carousel=true&third_party_vendor=1"
    );
    let data = await res.json();
    setResdata(
      data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setRated(
      data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      <button
        className="rated_btn"
        onClick={() => {
          let rated_res = resData.filter((i) => {
            return i.info.avgRating > 4;
          });
          setRated(rated_res);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="search">
        <input
          type="text"
          className="searchText"
          placeholder="Search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          onClick={() => {
            let searchRes = resData.filter((i) => {
              return i.info.name.toLowerCase().includes(search.toLowerCase());
            });

            setRated(searchRes);
          }}
        >
          Search
        </button>
      </div>

      <div
        className="body"
        onClick={() => {
          <Res_menu />;
        }}
      >
        {rated.length === 0 ? (
          <Shimmer />
        ) : (
          rated.map((i) => {
            return (
              <Link key={i.info.id} to={"/restaurant/" + i.info.id}>
                <Res_Card resData={i} style={{ textDecoration: "none" }} />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Body;
