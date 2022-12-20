import Header from "../components/Header/Header";
import NavBottom from "../components/NavBottom/navBottom";
import {
  updateProfile,
  getUser,
  reset,
} from "../components/features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function AccountProfile() {
  const { users, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  const [avatarPreview, setAvatarPreview] = useState("https://icon-library.com/images/facebook-loading-icon/facebook-loading-icon-15.jpg");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(reset());
    dispatch(getUser());
  }, [dispatch]);
  useEffect(() => {
    if(users.data.admin.avt){
      setAvatarPreview(users.data.admin.avt.url)
    }
    if (isSuccess) {
      toast.success(message.message);
    }
    if (isError) toast.error(message.message);
  }, [message, isSuccess]);

  const handleChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }
  const date = new Date(users.data.admin.birthday);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: users.data.admin._id,
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      birthday: e.target.birthday.value,
      identity_card: e.target.identity_card.value,
      avatar: avatarPreview,
    };
    dispatch(updateProfile(data));
  };
  if (users) {
    return (
      <>
        <Header />
        <div className="bg-gray-09 border-b-[5px] border-[#ee4d2d] min-h-[600px]">
          <div className="flex flex-col py-[150px] ml-auto mr-auto w-[1200px] ">
            <div className="relative grow box-border ml-auto mr-auto bg-white rounded-sm">
              <div className="flex flex-col relative min-h-full w-[1100px]">
                <div className="px-[1.8rem]">
                  <div className="border-b-[1px] border-gray-09 py-[1.125rem]">
                    <h1 className="m-0 text-lg capitalize font-[500]">
                      Hồ sơ của tôi
                    </h1>
                    <div className="mt-[0.1875rem] text-[0.875rem] leading-[1.0625rem] ">
                      Quản lý thông tin bảo mật tài khoản
                    </div>
                  </div>

                  <form enctype="multipart/form-data" onSubmit={handleSubmit}>
                    <div className="pt-[1.875rem] flex flex-row">
                      <div className="pr-[3.125rem]">
                        <div className="w-[602px] mb-[30px]">
                          <div className="flex items-center justify-end">
                            <div className="w-[25%] box-border pl-[20px] text-[rgba(85,85,85,.8)]">
                              Tên Đăng nhập
                            </div>
                            <div className="w-[75%] box-border pl-[20px]">
                              {users.data.admin.username}
                            </div>
                          </div>
                        </div>
                        <div className="w-[602px] mb-[30px]">
                          <div className="flex items-center justify-end">
                            <div className="w-[25%] box-border pl-[20px] text-[rgba(85,85,85,.8)]">
                              Tên
                            </div>
                            <div className="flex items-center  ml-[20px] box-border w-[75%] h-[40px] overflow-hidden rounded-sm border-[1px] border-[rgba(0,0,0,.14)]">
                              <input
                                style={{ outline: "none" }}
                                className="w-[75%] box-border pl-[20px]"
                                required
                                id="name"
                                name="name"
                                defaultValue={users.data.admin.name}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="w-[602px] mb-[30px]">
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
                              />
                            </div>
                          </div>
                        </div>
                        <div className="w-[602px] mb-[30px]">
                          <div className="flex items-center justify-end">
                            <div className="w-[25%] box-border pl-[20px] text-[rgba(85,85,85,.8)]">
                              Số điện thoại
                            </div>
                            <div className="flex items-center  ml-[20px] box-border w-[75%] h-[40px] overflow-hidden rounded-sm border-[1px] border-[rgba(0,0,0,.14)]">
                              <input
                                style={{ outline: "none" }}
                                id="phone"
                                name="phone"
                                required
                                className="w-[75%] box-border pl-[20px]"
                                defaultValue={users.data.admin.phone}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="w-[602px] mb-[30px]">
                          <div className="flex items-center justify-end">
                            <div className="w-[25%] box-border pl-[20px] text-[rgba(85,85,85,.8)]">
                              Ngày sinh
                            </div>
                            <div className="flex items-center  ml-[20px] box-border w-[75%] h-[40px] overflow-hidden rounded-sm border-[1px] border-[rgba(0,0,0,.14)]">
                              <input
                                style={{ outline: "none" }}
                                className="w-[75%] box-border  pl-[20px]"
                                type="date"
                                id="birthday"
                                name="birthday"
                                required
                                defaultValue={formatDate(date)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="w-[602px] mb-[30px]">
                          <div className="flex items-center justify-end">
                            <div className="w-[25%] box-border pl-[20px] text-[rgba(85,85,85,.8)]">
                              CMND/CCCD
                            </div>
                            <div className="flex items-center  ml-[20px] box-border w-[75%] h-[40px] overflow-hidden rounded-sm border-[1px] border-[rgba(0,0,0,.14)]">
                              <input
                                style={{ outline: "none" }}
                                className="w-[75%] box-border  pl-[20px]"
                                type="number"
                                id="identity_card"
                                name="identity_card"
                                required
                                defaultValue={users.data.admin.identity_card}
                              />
                            </div>
                          </div>
                        </div>

                        <div
                          style={{ paddingLeft: "calc(25% + 1.25rem)" }}
                          className="my-[3.75rem]"
                        >
                          <button className="text-white relative overflow-visible outline-0 bg-[#ee4d2d] h-[40px] px-[20px] min-w-[70px] max-w-[220px] ">
                            Lưu
                          </button>
                        </div>
                      </div>
                      <div id="registerImage" className=" ml-[20px] w-[20%]">
                        <img src={avatarPreview} alt="Avatar Preview" />
                        <input
                          type="file"
                          name="avatar"
                          onChange={handleChange}
                          // defaultValue={users.data.admin.avt.url}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NavBottom />
        <ToastContainer />
      </>
    );
  }
}
export default AccountProfile;
