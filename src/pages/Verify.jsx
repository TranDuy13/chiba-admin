import Header from "../components/Header/Header";
import NavBottom from "../components/NavBottom/navBottom";
import { useParams , useNavigate} from "react-router-dom";
import { useDispatch ,useSelector} from "react-redux";
import { verifyUser } from "../components/features/auth/authSlice";
import { useEffect } from "react";
function Verify() {
    const { user,isSuccess } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { id } = useParams();
  useEffect(()=>{
        if(isSuccess){
            navigate('/seller')
        }
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: id,
      value:{
        token: e.target.otp.value,
        _id: user.data.admin._id
      }
    };
    console.log(data);
    dispatch(verifyUser(data));
  };
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
                    NHẬP MÃ OTP
                  </div>

                  <div className="flex items-center  ml-[20px] box-border w-[75%] h-[40px] overflow-hidden rounded-sm border-[1px] border-[rgba(0,0,0,.14)]">
                    <input
                      id="otp"
                      type="number"
                      name="otp"
                      max={999999}
                      required
                      style={{ outline: "none" }}
                      className="w-[75%] box-border pl-[20px]"
                    />
                  </div>
                </div>
                <div
                  style={{ paddingLeft: "calc(25% + 1.25rem)" }}
                  className="my-[3.75rem]"
                >
                  <button className="text-white relative overflow-visible outline-0 bg-[#ee4d2d] h-[40px] px-[20px] min-w-[70px] max-w-[220px] ">
                    Xác Nhận
                  </button>
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
export default Verify;
