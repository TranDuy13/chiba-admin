import Header from "../components/Header/Header";
import NavBottom from "../components/NavBottom/navBottom";
import { useSelector, useDispatch } from "react-redux";
import {
  sendMail,
  getUser,
  reset,
} from "../components/features/auth/authSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { toast,ToastContainer } from "react-toastify";
function RegisterSeller() {
  const { users, isSuccess,isError, message } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate()
  const dispatch = useDispatch();
  useEffect(() => {
    if(users.data.admin.isActive){
        navigate('/seller')
    }
    dispatch(reset());
    dispatch(getUser());
  }, [dispatch,reset]);
  useEffect(()=>{
    if (isSuccess) {
      toast.success(message.message)
    }
    if(isError){
      toast.error(message.message)
    }
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
    };
    dispatch(sendMail(data));
  };
  if (users) {
    return (
      <>
        <Header />
        <div className="bg-gray-09 border-b-[5px] pt-[200px] border-[#ee4d2d] min-h-[600px]">
          <div className="bg-white  flex justify-center w-[1200px] mx-auto">
            <div>
              <div className=" ml-[20px] text-[18px] m-[5px]">
                Đăng ký trở thành người bán
              </div>
              <form onSubmit={handleSubmit}>
                <div className="w-[400px] mb-[30px] mt-[50px]">
                  <div className="flex items-center justify-end">
                    <div className="w-[25%] box-border pl-[20px] text-[rgba(85,85,85,.8)]">
                      Email
                    </div>
                    <div className="flex items-center  ml-[20px] box-border w-[75%] h-[40px] overflow-hidden rounded-sm border-[1px] border-[rgba(0,0,0,.14)]">
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        style={{ outline: "none" }}
                        className="w-[75%] box-border pl-[20px]"
                        defaultValue={users.data.admin.email}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="w-[520px] mt-[10px] flex justify-end text-gray-54 text-[13px]">
                    *Nếu bạn muốn đổi địa chỉ email vui lòng vào trang chủ để
                    cập nhât
                  </div>
                  <div
                    style={{ paddingLeft: "calc(25% + 1.25rem)" }}
                    className="my-[3.75rem]"
                  >
                    <button className="text-white relative overflow-visible outline-0 bg-[#ee4d2d] h-[40px] px-[20px] min-w-[70px] max-w-[220px] ">
                      Gửi Email Xác Nhận
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <NavBottom />
        <ToastContainer />
      </>
    );
  }
}
export default RegisterSeller;
