import { res_logo } from "../Mockdata/img_links";

let Res_Card = ({ resData }) => {
  let { name, cloudinaryImageId, cuisines, avgRating } = resData.info;
  let { deliveryTime } = resData.info.sla;
  return (
    <div className="resCard" onClick={() => {}}>
      <img className="res_logo" src={res_logo + cloudinaryImageId} alt="" />
      <h2>{name}</h2>
      <div style={{ fontWeight: "bold" }}>
        <span style={{ color: "green" }}>&#9733; </span> {avgRating} :{" "}
        {deliveryTime} mins{" "}
      </div>
      <p>{cuisines.join(", ")}</p>
    </div>
  );
};

export default Res_Card;
