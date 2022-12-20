import { Link } from "react-router-dom";
import shopee from "../../img/shopee-icon.png";
import "./Search.scss";
function Search() {
  return (
    <>
      <div className="search-wrapper">
        <div className="container">
          <Link to="/" className="top-1875 box-border">
            <div className="svg-icon">
              <img src={shopee} className="shopee-icon" alt="" />
            </div>
          </Link>
          <div className="flex flex-col justify-start w-840 relative">
            <div className="w-full item-search">
              <div className="flex item-input-search">
                <form action="" className="form-search">
                  <input className="flex flex-1 items-center outline-none border-0 p-0 m-0" />
                </form>
                <button className="relative overflow-visible outline-0 bg-orange-btn h-34 pl-4 pr-4 minWidth-search">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 search-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="search-cart">
            <div className="search-cart-wrapper">
              <Link
                to=""
                className="flex items-center cursor-pointer relative ml-1 overflow-visible outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 cart"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <span className="number">10</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Search;
