import img from "../img/map.jpg"

export default function Location() {

  return(
    <div className="container" id="Location">
      <h1>OUR LOCATION</h1>
      <p>Find us at some address at some place</p>
      <img src={img} alt="" />
      <p><span>FYI!</span> We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste.</p>
    </div>
  );
}