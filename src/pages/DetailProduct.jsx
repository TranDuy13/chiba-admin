import Header from "../components/Header/Header";
import NavBottom from "../components/NavBottom/navBottom";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import CarRentalIcon from "@mui/icons-material/CarRental";
import { useSelector, useDispatch } from "react-redux";
import AddModeratorOutlinedIcon from "@mui/icons-material/AddModeratorOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import {  useEffect } from "react";
import { useParams } from "react-router";
import { reset, getProduct } from "../components/features/product/productSlice";
function DetailProduct() {
  const { product, isSuccess, isError, message } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(reset())
}, [dispatch])
useEffect(() => {
  dispatch(getProduct(id))
    
}, [id, dispatch])
if(product){
  return (
    <>
      <Header />
      <div className=" min-h-[706px] mt-[120px] my-auto bg-slate-200  ">
        <div className="p-[5px] text-blue-900 text-[15px] mt-[5px] uppercase font-bold italic ml-[30px]">
          Chi tiết sản phẩm
        </div>
        <div className="pr-[16px] pl-[16px] border-none border-[1px] flex opacity-100 mt-[5px] mb-[1,5rem] w-[85%] mx-auto">
          <div className=" bg-white flex mx-auto box-border w-[80%] min-w-0 mr-[10px] rounded-lg ">
            <div className="box-border  ml-[5px] rounded-[8px] p-[24px] my-[20px]">
              <div className="flex box-border min-w-0 m-0">
                <div className="flex items-center ml-[50px] flex-col mb-2 mr-[250px]  ">
                  <img src={product.data.img.url} alt="" />
                  <div className="text-slate-600 italic text-[17px] mt-5 ">
                    Hình ảnh của sản phẩm
                  </div>
                </div>
                <div className="box-border m-0 w-[50%]">
                  <div>
                    <h1 className=" font-[600] uppercase text-[24px] leading-[1.33] box-border ">
                      {product.data.name_product}
                    </h1>
                  </div>
                  <div className="font-[400] p-1">Shop: {product.data.seller.name}</div>
                  <div className="font-[400] p-1">Loại sản phẩm: {product.data.category} </div>
                  <div className="font-[400] p-1">Tag: {product.data.tag}</div>
                  <div className="font-[400] p-1">Mã sản phẩm: {product.data._id}</div>
                  <div className="text-blue-2 font-bold text-[25px] p-1 mt-[10px]">
                  {product.data.price}đ
                  </div>
                  <div className="font-[300] p-1 italic">
                    Mô tả sản phẩm:
                    <div className="break-words">
                    {product.data.description}
                    </div>
                  </div>

                  <div className=" text-rose-800 p-1 mb-[6px] font-bold text-[30px]">
                    {" "}
                    Liên hệ
                  </div>
                  <button className="bg-blue-2 text-white p-1 font-bold text-[20px] flex items-center rounded-[5px]">
                    <div className="mx-[7px]">
                      {" "}
                      <LocalPhoneIcon />
                    </div>
                    <div className="mr-[7px] my-[3px]">0917178028</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-white flex justify-center ml-[5px] mx-auto box-border  w-[20%] rounded-lg">
            <div className="p-2 ">
              <div className="uppercase text-[13px] font-bold text-blue-2 flex items-center text-center mb-[20px]">
                Chiba Ecommer
              </div>
              <div className="text-[15px] flex mt-2">
                {" "}
                <AddModeratorOutlinedIcon color="success" />
                <div className="ml-[5px]">Cam kết sản phẩm tự code</div>
              </div>
              <div className="text-[15px] flex mt-2">
                {" "}
                <CarRentalIcon color="success" />
                <div className="ml-[5px]">
                  Giáo viên phụ trách
                </div>
              </div>
              <div className="text-[15px] flex mt-2">
                {" "}
                <BorderColorOutlinedIcon color="success" />
                <div className="ml-[5px]">
                  {" "}
                  Nhật Duy - Nho Nam - Văn Khánh - Trọng Anh
                </div>
              </div>
              <div className="mr-[7px] mt-2 flex">
                {" "}
                <LocalPhoneIcon color="success" />
                <div className="ml-[7px] my-[3px]">0366830710</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-200 p-3"></div>
      <NavBottom />
    </>
  );
}
}
export default DetailProduct;
