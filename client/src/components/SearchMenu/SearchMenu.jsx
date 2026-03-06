import "./searchmenu.scss";
import search from "../../../public/search.png";
const SearchMenu = () => {
  return (
    <div>
      <div className="type">
        <form className="search-menu">
          <input type="text" name="location" placeholder="City Location" />
          <input
            type="number"
            name="minPrice"
            min={0}
            max={10000000}
            placeholder="min-price"
          />
          <input
            type="number"
            name="maxPrice"
            min={0}
            max={10000000}
            placeholder="max-price"
          />
          <button className="search">
            <img src={search} alt="Search" />
          </button>
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
    </div>
  );
};

export default SearchMenu;
