const RestaurentCard = (props) => {
  const { resData } = props;
  const { id,resName, cuisine, stars, minutes, imgsrc } = resData;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={imgsrc}
        alt={`Logo for ${resName}`}
      ></img>
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{stars}</h4>
      <h4>{minutes}</h4>
    </div>
  );
};

export default RestaurentCard;
