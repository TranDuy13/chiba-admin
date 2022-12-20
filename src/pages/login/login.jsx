import React, { useState , useEffect} from "react";
import Navigation from "../../components/Nav/navigation.jsx";
import { Link } from "react-router-dom";
import facebook from "../../img/facebook.webp";
import google from "../../img/google.webp";
import apple from "../../img/apple.svg";
import NavBottom from "../../components/NavBottom/navBottom.jsx";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../../components/features/auth/authSlice";
import "./login.scss";
import { useNavigate } from "react-router-dom";
function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user) {
      navigate("/");
       dispatch(reset());
    }

   
  }, [isError, user, message, reset, dispatch,navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username,
      password,
    };
    dispatch(login(userData));
  };
  return (
    <>
      <Navigation text="Đăng nhập" />
      <div className="login-page">
        <div className="form-lg">
          <div className="background-topic">
            <form onSubmit={handleSubmit}>
              <div className="formLogin">
                <div className="login">Đăng nhập</div>
                <div className="overflow-hidden px-7">
                  <div className="box-border w-full h-10 overflow-hidden border rounded-sm border-solid flex items-center focus-within:border-sky-500 focus-within:shadow-lg">
                    <input
                      className="shrink-0 p-3 filter-none outline-none flex-1"
                      type="text"
                      id="username"
                      value={username}
                      name="username"
                      onChange={handleChange}
                      placeholder="Email/Số Điện Thoại/Tên Đăng Nhâp"
                    />
                  </div>
                  <div className="mt-8 mb-8 box-border w-full h-10 overflow-hidden border rounded-sm border-solid flex items-center focus-within:border-sky-500 focus-within:shadow-lg">
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={handleChange}
                      name="password"
                      placeholder="Mật khẩu"
                      className="shrink-0 p-3 filter-none outline-none flex-1 "
                    />
                  </div>
                  {
                    isError?<div className="text-orangesa-a">{message}</div>:null
                  }
                  <button className="bg-orangesa-a text-white uppercase h-10 w-full rounded-sm">
                    Đăng nhập
                  </button>
                  <div className="flex my-3 justify-between">
                    <span className="text-blue-1 text-xs">Quên mật khẩu</span>
                    <span className="text-blue-1 text-xs">
                      Đăng nhập với SMS
                    </span>
                  </div>
                  <div className="flex items-center mb-6 ">
                    <div className="h-a w-full  bg-gray-200"></div>
                    <span className="text-gray-300 text-sm uppercase ml-2 mr-2">
                      HOẶC
                    </span>
                    <div className="h-a w-full bg-gray-200"></div>
                  </div>
                  <div className="flex justify-between mb-6">
                    <div className="flex border justify-center p-2 pl-3 pr-3 text-sm border-gray-400 items-center rounded-sm">
                      <img className="h-6 mr-2" src={facebook} alt="Facebook" />
                      Facebook
                    </div>
                    <div className="flex items-center justify-center pr-4 border p-2 text-sm border-gray-400 rounded-sm">
                      <img className="h-7 mr-2" src={google} alt="Google" />
                      Google
                    </div>
                    <div className="flex items-center justify-center border p-2 pr-5 pl-5 text-sm border-gray-400 rounded-sm">
                      <img className="h-7 mr-2" src={apple} alt="Google" />
                      Apple
                    </div>
                  </div>
                  <div className="flex justify-center pb-8 pt-7">
                    <span className="text-sm text-gray-400 mr-1 ">
                      Bạn mới đến Shoppe?
                    </span>{" "}
                    <Link className="flex items-center" to="/register">
                      <span className="text-sm font-medium text-orangesa-a">
                        Đăng ký
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <NavBottom />
    </>
  );
}
export default Login;
