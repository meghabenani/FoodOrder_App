import { useState, useEffect } from "react";
import { useParams } from "react-router";

let Res_menu = () => {
  let { resId } = useParams();
  let [data, setData] = useState("");
  let [menu1, setMenu1] = useState("");
  let [menu2, setMenu2] = useState("");
  let [menu3, setMenu3] = useState("");

  let fetchApi = async () => {
    try {
      let res = await fetch(
        "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5780302&lng=73.6833417&restaurantId=" +
          resId
      );
      let data = await res.json();
      setData(data?.data?.cards[2]?.card?.card?.info);

      setMenu1(
        data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card
      );
      setMenu2(
        data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
          ?.card
      );
      setMenu3(
        data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
          ?.card
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchApi();
  });

  return (
    <div>
      <h1>{data.name}</h1>
      <div>
        <h3>
          <span style={{ color: "green" }}>&#9733; </span>
          {data.avgRating} ({data.totalRatingsString}) :{" "}
          {data.costForTwoMessage}
        </h3>
        <p style={{ textDecoration: "underLine", color: "orange" }}>
          {data.cuisines.join(", ")}
        </p>
        <p>
          {data.sla.lastMileTravelString} | {data.sla.slaString}
        </p>
      </div>
      <h1>Top Picks</h1>

      <div className="menu1">
        <h2>{menu1.title}</h2>
        <div>
          {menu1.categories.map((i) => {
            return (
              <p>
                {i.title} ({i.itemCards.length})
              </p>
            );
          })}
        </div>
      </div>

      <div className="menu2">
        <h2>{menu2.title}</h2>
        <div>
          {menu2.categories.map((i) => {
            return (
              <p>
                {i.title} ({i.itemCards.length})
              </p>
            );
          })}
        </div>
      </div>

      <div className="menu3">
        <h2>{menu3.title}</h2>
        <div>
          {menu3.categories.map((i) => {
            return (
              <p>
                {i.title} ({i.itemCards.length})
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Res_menu;
