import SearchMenu from "../SearchMenu/SearchMenu";
import "./intro.scss";
const Intro = () => {
  return (
    <div>
      <div className="intro">
        <p className="greet">Get it, Home it !</p>
        <h1>
          Find Your<span> Perfect Home.</span>
        </h1>
        <div className="menu">
          <div>
            <button className="buy" href="#">
              Buy
            </button>
            <button className="rent" href="#">
              Rent
            </button>
          </div>
          <div className="search">
            <SearchMenu/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
