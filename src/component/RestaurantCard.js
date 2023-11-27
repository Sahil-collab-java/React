
import {IMMAGE_CDN} from "../utils/constants"

const styleCard = {
    backgroundColor: "#f0f0f0",
  };

const RestaurantCard = (props) => {
    const { restData } = props;
  
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
      restData?.info;
  
    return (
      <div className="res-card" style={styleCard}>
        <img
          className="rest-logo"
          alt="rest-logo"
          src={
            IMMAGE_CDN+cloudinaryImageId
          }
        />
  
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} Rating</h4>
        <h4>{costForTwo}</h4>
      </div>
    );
  };

  export default RestaurantCard;