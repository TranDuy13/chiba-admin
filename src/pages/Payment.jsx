import { DashboardLayout } from "../components/dashboard-layout";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";
import { Box, Container } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { createProduct, reset } from "../components/features/product/productSlice";
import { toast,ToastContainer } from "react-toastify";
const items = [
  {
    catelog: "Thời Trang Nam",

  },
  {
    catelog: "Điện Thoại & Phụ Kiện",

  },
  {
    catelog: "Thiết Bị Điện tử",

  },
  {
    catelog: "Máy tính & LapTop",

  },
  {
    catelog: "Máy Ảnh & Máy Quay",

  },
  {
    catelog: "Đồng hồ",

  },
  {
    catelog: "Giày Dép nam",

  },
  {
    catelog: "Thời Trang nữ",

  },
  {
    catelog: "Thiết Bị Gia Dụng",

  },
  {
    catelog: "Thể Thao",

  },
  {
    catelog: "Xe Máy & Xe Đạp",

  },
  {
    catelog: "Mẹ & Bé",

  },
  {
    catelog: "Nhà Cửa & Đời Sống",

  },
  {
    catelog: "Giày Dép Nữ",

  },
  {
    catelog: "Túi Ví Nữ",

  },
  {
    catelog: "Nhà Sách Online"
  },
];
function Payment() {
  const { isSuccess, isError, message } = useSelector(
    (state) => state.product
  );
  const { users } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(reset())
  },[dispatch])
  useEffect(()=>{
   
    if(isSuccess&&message!=""){
      toast.success(message)
    }
    if(isError){
      toast.error(message)
    }
  },[isSuccess,isError,message])
  const handleChange = (e) => {
    const reader = new FileReader()
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const [avatarPreview, setAvatarPreview] = useState(
    "https://icon-library.com/images/facebook-loading-icon/facebook-loading-icon-15.jpg"
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      seller: users.data.admin._id,
      name_product: e.target.name.value,
      category: e.target.category.value,
      tag: e.target.tag.value,
      quantity: e.target.quantity.value,
      price: e.target.price.value,
      description: e.target.description.value,
      image: avatarPreview,
    };


    dispatch(createProduct(data))

  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <DashboardLayout>
          {
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                py: 1,
              }}
            >
              <Container maxWidth={false}>
                <div className=" min-h-[600px]">
                  <div className="flex flex-col ml-auto mr-auto w-[1200px] ">
                    <div className="relative grow box-border ml-auto mr-auto bg-white rounded-sm">
                      <div className="flex flex-col relative min-h-full w-[1100px]">
                        <div className="px-[1.8rem]">
                          <div className="border-b-[1px] border-gray-09 py-[1.125rem]">
                            <h1 className="m-0 text-lg capitalize font-[500]">
                              Thêm sản phẩm
                            </h1>
                            <div className="mt-[0.1875rem] text-[0.875rem] leading-[1.0625rem] ">
                              Thêm một sản phẩm mới cho Shop của bạn
                            </div>
                          </div>

                          <form
                            enctype="multipart/form-data"
                            onSubmit={handleSubmit}
                          >
                            <div className="pt-[1.875rem] flex flex-row">
                              <div className="pr-[3.125rem]">
                                <div className="w-[602px] mb-[30px]">
                                  <div className="flex items-center justify-end">
                                    <div className="w-[25%] box-border pl-[20px] text-[rgba(85,85,85,.8)]"></div>
                                    <div className="w-[75%] box-border pl-[20px]"></div>
                                  </div>
                                </div>
                                <div className="w-[602px] mb-[30px]">
                                  <div className="flex items-center justify-end">
                                    <div className="w-[25%] box-border pl-[20px] text-[rgba(85,85,85,.8)]">
                                      Tên Sản Phẩm
                                    </div>
                                    <div className="flex items-center  ml-[20px] box-border w-[75%] h-[40px] overflow-hidden rounded-sm border-[1px] border-[rgba(0,0,0,.14)]">
                                      <input
                                        style={{ outline: "none" }}
                                        className="w-[75%] box-border pl-[20px]"
                                        required
                                        id="name"
                                        name="name"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="w-[602px] mb-[30px]">
                                  <div className="flex items-center justify-end">
                                    <div className="w-[25%] box-border pl-[20px] text-[rgba(85,85,85,.8)]">
                                      Danh mục
                                    </div>
                                    <div className="flex items-center  ml-[20px] box-border w-[75%] h-[40px] overflow-hidden rounded-sm border-[1px] border-[rgba(0,0,0,.14)]">
                                      <input
                                        id="category"
                                        type="text"
                                        name="catelogry"
                                        required
                                        list="cat"
                                        style={{ outline: "none" }}
                                        className="w-[75%] box-border pl-[20px]"
                                      />
                                        <datalist id="cat">

                                          {
                                            items.map(item => (<option value={item.catelog} />))
                                          }

                                        </datalist>
                                   
                                    </div>
                                  </div>
                                </div>
                                <div className="w-[602px] mb-[30px]">
                                  <div className="flex items-center justify-end">
                                    <div className="w-[25%] box-border pl-[20px] text-[rgba(85,85,85,.8)]">
                                      Tag
                                    </div>
                                    <div className="flex items-center  ml-[20px] box-border w-[75%] h-[40px] overflow-hidden rounded-sm border-[1px] border-[rgba(0,0,0,.14)]">
                                      <input
                                        style={{ outline: "none" }}
                                        id="tag"
                                        name="tag"
                                        required
                                        className="w-[75%] box-border pl-[20px]"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="w-[602px] mb-[30px]">
                                  <div className="flex items-center justify-end">
                                    <div className="w-[25%] box-border pl-[20px] text-[rgba(85,85,85,.8)]">
                                      Số lượng
                                    </div>
                                    <div className="flex items-center  ml-[20px] box-border w-[75%] h-[40px] overflow-hidden rounded-sm border-[1px] border-[rgba(0,0,0,.14)]">
                                      <input
                                        style={{ outline: "none" }}
                                        className="w-[75%] box-border  pl-[20px]"
                                        type="number"
                                        id="quantity"
                                        name="quantity"
                                        required
                                        min='1'
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="w-[602px] mb-[30px]">
                                  <div className="flex items-center justify-end">
                                    <div className="w-[25%] box-border pl-[20px] text-[rgba(85,85,85,.8)]">
                                      Giá
                                    </div>
                                    <div className="flex items-center  ml-[20px] box-border w-[75%] h-[40px] overflow-hidden rounded-sm border-[1px] border-[rgba(0,0,0,.14)]">
                                      <input
                                        style={{ outline: "none" }}
                                        className="w-[75%] box-border  pl-[20px]"
                                        type="number"
                                        id="price"
                                        name="price"
                                        required
                                        min='10000'
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="w-[602px] mb-[30px]">
                                  <div className="flex items-center justify-end">
                                    <div className="w-[25%] box-border pl-[20px] text-[rgba(85,85,85,.8)]">
                                      Mô tả sản phẩm
                                    </div>
                                    <div className="flex items-center  ml-[20px] box-border  rounded-sm border-[1px] ">
                                      <textarea
                                        style={{ outline: "none" }}
                                        className="w-[433px] box-border h-[100px] border-[rgba(0,0,0,.14)]"
                                        type="text"
                                        id="description"
                                        name="desciption"
                                        required
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div
                                  style={{ paddingLeft: "calc(25% + 1.25rem)" }}
                                  className="my-[3.75rem]"
                                >
                                  <button className="text-white relative overflow-visible outline-0 bg-[#5048E5] rounded-[5px] h-[40px] px-[20px] min-w-[70px] max-w-[220px] ">
                                    Lưu
                                  </button>
                                </div>
                              </div>
                              <div
                                id="registerImage"
                                className=" ml-[20px] w-[20%]"
                              >
                                <img src={avatarPreview} alt="Ảnh Sản Phẩm" />
                                <input
                                  type="file"
                                  name="avatar"
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </Box>
            
          }
          <ToastContainer />
        </DashboardLayout>
      </ThemeProvider>
     
    </>
  );
}
export default Payment;
