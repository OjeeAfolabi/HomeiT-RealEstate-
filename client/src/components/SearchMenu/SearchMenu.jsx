import "./searchmenu.scss";
import search from "/search.png";
import { IoLocationSharp } from "react-icons/io5";
import { BiSolidBadgeDollar } from "react-icons/bi";

const SearchMenu = () => {
  return (
    <div>
      <div>
        <form className="search-menu">
          <div className="location">
            <IoLocationSharp
              className="location-icon"
            />
            <input type="text" name="location" placeholder="city location" />
          </div>

          <div className="minprice">
            <BiSolidBadgeDollar
              className="min-price-icon"
            />
            <input
              type="number"
              name="minPrice"
              min={0}
              max={10000000}
              placeholder="min-price"
            />
          </div>

          <div className="maxprice">
            <BiSolidBadgeDollar
              className="max-price-icon"
            />
            <input
              type="number"
              name="maxPrice"
              min={0}
              max={10000000}
              placeholder="max-price"
            />
          </div>
          <button className="search">
            <img src={search} alt="Search" />
          </button>
          <div className="container-mobile-search">
            <button className="mobile-search">
              <img src={search} alt="Search" />
            </button>
          </div>
        </form>
      </div>
      <div className="values">
        <div>
          <h2>16+</h2>
          <p>Years Of Experience</p>
        </div>
        <div>
          <h2>200</h2>
          <p>Award Gained</p>
        </div>
        <div>
          <h2>2000+</h2>
          <p>Properties Ready</p>
        </div>
      </div>
      <div className="mobile-values">
        <div>
          <h2>16+</h2>
          <p>Years Of Experience</p>
        </div>
        <div>
          <h2>200</h2>
          <p>Award Gained</p>
        </div>
        <div>
          <h2>2000+</h2>
          <p>Properties Ready</p>
        </div>
      </div>
    </div>
  );
};

export default SearchMenu;
