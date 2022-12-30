import Header from "../components/Header/Header";
import NavBottom from "../components/NavBottom/navBottom";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import CarRentalIcon from "@mui/icons-material/CarRental";
import { useSelector, useDispatch } from "react-redux";
import AddModeratorOutlinedIcon from "@mui/icons-material/AddModeratorOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
  Avatar,
  Tooltip,
} from "@mui/material";
import { reset, getProduct } from "../components/features/product/productSlice";
import { Link } from "react-router-dom";
import { addToCart,getCartByUser } from "../components/features/cart/cartSlice";
function DetailProduct() {
  const { product } = useSelector(
    (state) => state.product
  );
  const { users } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();



  const [value, setValue] = useState(1);

  const handleChange = event => {

    const value = Math.max(Number(event.target.value), Math.min(product.data.quantity, Number(event.target.value)));
    if (value < 0) {
      setValue(1)
    } if (value == 0) {
      setValue('')
    } if (value > 0 && value <= Number(product.data.quantity)) {
      setValue(value)
    } if (value > product.data.quantity) {
      setValue(product.data.quantity)
    }


  }

  const { id } = useParams();
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(reset())
  }, [dispatch])
  useEffect(() => {
    dispatch(getProduct(id))

  }, [id, dispatch])
  const handleClick = (e) => {
    e.preventDefault()

    if (!users) {
      navigate('/login')
    } else {
      if (e.target.id == 'add') {
        if (value == '') {
          const data = {
            customer: users.data.admin._id,
            product: product.data._id,
            quantity: 1
          }
          setValue(1)
          dispatch(addToCart(data))
          dispatch(getCartByUser(users.data.admin._id));
        } else {
          const data = {
            customer: users.data.admin._id,
            product: product.data._id,
            quantity: value
          }
          dispatch(addToCart(data))
          dispatch(getCartByUser(users.data.admin._id));
        }
      } if (e.target.id == 'navigate')
      if (value == '') {
        const data = {
          customer: users.data.admin._id,
          product: product.data._id,
          quantity: 1
        }
        setValue(1)
        dispatch(addToCart(data))
        dispatch(getCartByUser(users.data.admin._id));
        navigate('/cart');
      } else {
        const data = {
          customer: users.data.admin._id,
          product: product.data._id,
          quantity: value
        }
        dispatch(addToCart(data))
        dispatch(getCartByUser(users.data.admin._id));
        navigate('/cart');
      }
    }
  }


  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }
  if (product) {
    return (
      <>
        <div className="bg-slate-200">
          <Header />

          <div className=" min-h-[706px] mt-[120px] my-auto mx-auto bg-slate-200 w-[1400px] ">
            <div className="p-[5px] text-blue-900 text-[15px] mt-[5px] uppercase font-bold italic ml-[30px]">
              Chi tiết sản phẩm
            </div>
            <div className="pr-[16px] pl-[16px] border-none border-[1px] flex opacity-100 mt-[5px] mb-[1,5rem] w-[100%] mx-auto">
              <div className=" bg-white flex mx-auto box-border w-[80%] min-w-0 mr-[10px] rounded-[0.125rem] ">
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
                        <h1 className=" font-[600] uppercase mb-[10px] text-[24px] leading-[1.33] box-border ">
                          {product.data.name_product}
                        </h1>
                      </div>
                      <div className="font-[400] p-1 mb-[10px]">Shop: {product.data.seller.fullname}</div>
                      <div className="font-[400] p-1 mb-[10px]">Loại sản phẩm: {product.data.category} </div>
                      <div className="font-[400] p-1 mb-[10px]">Tag: {product.data.tag}</div>
                      <div className="font-[400] p-1 mb-[10px]">Mã sản phẩm: {product.data._id}</div>
                      <div className="text-orange-btn font-bold text-[50px] p-1 mt-[10px]">
                        {product.data.price.toLocaleString(undefined, { maximumFractionDigits: 2 })}đ
                      </div>
                      <div className="font-[400] p-1">Vận chuyển tới: </div>
                      <div className="font-[300] p-1 italic">
                        Mô tả sản phẩm:
                        <div className="break-words">
                          {product.data.description}
                        </div>
                      </div>
                      <form  >
                        <div className="font-[400] text-[#757575] p-1 mb-[10px] flex items-center">Số lượng
                          <div className="flex items-center  ml-[20px] box-border w-[20%] mr-[15px] h-[30px] overflow-hidden rounded-sm border-[1px] border-[rgba(0,0,0,.14)]">
                            <input
                              className="flex justify-center m-[35px]"
                              style={{ outline: "none" }}
                              type="number"

                              value={value}
                              onChange={handleChange}

                            />
                          </div>

                          {product.data.quantity} Sản phẩm có sẵn</div>
                      </form>
                      <div className=" flex p-1 mb-[6px] font-bold text-[15px]">
                        <div>
                          <button onClick={handleClick} id="add" className="text-orange-btn relative overflow-visible outline-0 border-[1px] border-orange-btn rounded-[2px] h-[40px] px-[20px] min-w-[70px] max-w-[220px] mr-[15px]">
                            Thêm vào giỏ hàng
                          </button>
                        </div>
                        <div>

                          <button onClick={handleClick} id="navigate" className="text-white relative overflow-visible outline-0 bg-orange-btn  h-[40px] px-[20px] min-w-[70px] max-w-[220px]" >
                            Mua ngay
                          </button>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" bg-white flex justify-center ml-[5px] mx-auto box-border  w-[20%] rounded-[0.125rem]">
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
            <div className="flex items-center p-[1.5625rem] h-[auto] rounded-[0.125rem] border-none flex bg-white border-[1px] flex opacity-100 mt-[15px] mb-[1,5rem] w-[97%] mx-auto">
              <Tooltip title="Account">
                <Avatar
                  sx={{
                    height: 78,
                    width: 78,
                    mr: 5,

                  }}
                  src={product.data.seller.avt.url}
                >
                </Avatar>
              </Tooltip>
              <div className="visible font-[400] text-[1rem] overflow-hidden text-ellipsis whitespace-nowrap ">
                Shop: {product.data.seller.fullname}
                <Link to={`/shop/${product.data.seller._id}`}>
                  <div className="border-[1px] border-[rgba(0,0,0,.09)] py-[5px] mt-[10px] flex items-center justify-center">
                    <button>Xem shop</button>
                    <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" strokeWidth="0" className="ml-[10px]  text-[rgba(0,0,0,.09)] w-[1em] h-[1em]">
                      <path d="m13 1.9c-.2-.5-.8-1-1.4-1h-8.4c-.6.1-1.2.5-1.4 1l-1.4 4.3c0 .8.3 1.6.9 2.1v4.8c0 .6.5 1 1.1 1h10.2c.6 0 1.1-.5 1.1-1v-4.6c.6-.4.9-1.2.9-2.3zm-11.4 3.4 1-3c .1-.2.4-.4.6-.4h8.3c.3 0 .5.2.6.4l1 3zm .6 3.5h.4c.7 0 1.4-.3 1.8-.8.4.5.9.8 1.5.8.7 0 1.3-.5 1.5-.8.2.3.8.8 1.5.8.6 0 1.1-.3 1.5-.8.4.5 1.1.8 1.7.8h.4v3.9c0 .1 0 .2-.1.3s-.2.1-.3.1h-9.5c-.1 0-.2 0-.3-.1s-.1-.2-.1-.3zm8.8-1.7h-1v .1s0 .3-.2.6c-.2.1-.5.2-.9.2-.3 0-.6-.1-.8-.3-.2-.3-.2-.6-.2-.6v-.1h-1v .1s0 .3-.2.5c-.2.3-.5.4-.8.4-1 0-1-.8-1-.8h-1c0 .8-.7.8-1.3.8s-1.1-1-1.2-1.7h12.1c0 .2-.1.9-.5 1.4-.2.2-.5.3-.8.3-1.2 0-1.2-.8-1.2-.9z"></path></svg>
                  </div>
                </Link>
              </div>
              <div className="visible font-[400] ml-[50px] text-[1rem] overflow-hidden text-ellipsis whitespace-nowrap" >
                Địa chỉ {product.data.seller.address}
              </div>
              <div className="visible font-[400] text-[1rem] ml-[50px] overflow-hidden text-ellipsis whitespace-nowrap" >
                Tham gia từ {formatDate(product.data.seller.createdAt)}
              </div>
            </div>
          </div>
          <div className="bg-slate-200 p-3"></div>
        </div>
        <NavBottom />

      </>
    );
  }
}
export default DetailProduct;
