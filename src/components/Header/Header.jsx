import "./header.scss";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import { logout, reset } from "../../components/features/auth/authSlice";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function Header() {
  const { user} = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-100 bg-gradient-to-b from-orange-d to-orange-2d ">
        <div className="header">
          <nav className="nav-wrapper">
            <div className="flex items-center">
              <Link
                to="/seller"
                className="texts font-light p-1 relative overflow-visible outline-0"
              >
                Kênh người bán
              </Link>
              <Link
                to="/"
                className="text ml-625 font-light p-1 relative overflow-visible outline-0"
              >
                Tải ứng dụng
              </Link>
              <Link
                to="/"
                className="text ml-625 font-light p-1 relative overflow-visible outline-0"
              >
                Kết nối
              </Link>
              <Link to="/">
                <img
                  src="https://brandlogos.net/wp-content/uploads/2021/04/facebook-icon.png"
                  className="h-6"
                  alt=""
                />
              </Link>
              <Link to="/">
                <img
                  src="https://www.logo.wine/a/logo/Instagram/Instagram-Logo.wine.svg"
                  className="h-6"
                  alt=""
                />
              </Link>
            </div>
            <div className="nav-space"></div>
            <ul className="flex items-center list-none h-2.125">
              <li className="cursor-pointer select-none flex items-center text-white justify-center relative pl-625 ml-3">
                <div className="relative cursor-pointer">
                  <Link to="/" className="notifi">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 inline-block relative overflow-hidden"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                    <div className="number">6</div>
                    <span className="ml-2 font-extralight texts capitalize">
                      Thông báo
                    </span>
                  </Link>
                </div>
              </li>

              <li className="cursor-pointer select-none flex items-center text-white justify-center relative pl-625">
                <div className="relative cursor-pointer">
                  <Link to="/" className="notifi">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5  inline-block relative overflow-hidden"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                    <span className="ml-0.3125 font-extralight texts capitalize">
                      Tiếng việt
                    </span>
                  </Link>
                </div>
              </li>
              {!user ? (
                <>
                  {" "}
                  <li className="cursor-pointer select-none flex items-center text-white justify-center relative pl-625 mr-1">
                    <div className="relative cursor-pointer">
                      <Link to="/register" className="notifi">
                        <span className="ml-0.3125 font-medium texts capitalize">
                          Đăng ký
                        </span>
                      </Link>
                    </div>
                  </li>
                  <li className="cursor-pointer select-none flex items-center text-white justify-center relative pl-625">
                    <div className="relative cursor-pointer">
                      <Link to="/login" className="notifi">
                        <span className="ml-0.3125 font-medium text capitalize">
                          Đăng nhập
                        </span>
                      </Link>
                    </div>
                  </li>
                </>
              ) : (
                <>
                  <li className="cursor-pointer select-none flex items-center  text-white justify-center relative pl-625">
                    <div className="relative cursor-pointer">
                      <Link to="/user" className="notifi">
                        <span className="ml-0.3125  font-[500] ">
                          {user.data.admin.username}
                        </span>
                      </Link>
                    </div>
                  </li>
                  <li className="cursor-pointer select-none flex items-center  text-white justify-center relative pl-625">
                    <div className="relative cursor-pointer">
                      <button onClick={handleLogout}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 inline-block relative overflow-hidden"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="ml-0.3125 font-extralight texts capitalize">
                          Đăng xuất
                        </span>
                      </button>
                    </div>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
        <Search />
      </header>
    </>
  );
}
export default Header;
