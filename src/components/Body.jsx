import React, { useState } from "react";
import ResList from "../../utils/constant";
import RestaurentCard from "./Restaurent";

const Body = () => {
  const [listOfRestaurent, setlistOfRestaurent] = useState(ResList);

  const filterTopRatedRestaurants = () => {
        const filteredRestaurent=ResList.filter((rest)=>rest.stars>3)
        setlistOfRestaurent(filteredRestaurent)
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={filterTopRatedRestaurants}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurent.map((rest) => (
          <RestaurentCard resData={rest} key={rest.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
