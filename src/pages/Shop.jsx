import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Bottom from "../components/Bottom/Bottom";
import Header from "../components/Header/Header";
import NavBottom from "../components/NavBottom/navBottom";
import "../components/product.scss";
import { getProductbyseller, reset } from "../components/features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  Tooltip,
} from "@mui/material";
function Shop() {
  const { products } = useSelector(
    (state) => state.product
  );
  const { id } = useParams()
  const [page, setPage] = useState(1);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(reset())
    if (id) {
      dispatch(getProductbyseller({ seller: id }))
    }

  }, [dispatch, id, reset])
  const handleClick = () => {
    setPage(page + 1);
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
  if (products) {
    return (
      <>
        <Header />
        <div className="bg-gray-09 min-h-[50rem] mt-[130px] ml-auto mr-auto">
          <div className="bg-gray-09 border-b-[5px] border-[#ee4d2d] ">
            <div className="flex justify-center items-center p-[1.5625rem] h-[auto] rounded-[0.125rem] border-none flex bg-white border-[1px] flex opacity-100 mt-[15px] mb-[1,5rem] w-[full] mx-auto">
              <Tooltip title="Account">
                <Avatar
                  sx={{
                    height: 78,
                    width: 78,
                    mr: 5,
                    
                  }}
                  src={products.data[0].seller.avt.url}
                >
                </Avatar>
              </Tooltip>
              <div className="visible font-[400] text-[1rem] overflow-hidden text-ellipsis whitespace-nowrap ">
                Shop: {products.data[0].seller.name}
                <Link to={`/shop/${products.data[0].seller._id}`}>
                  <div className="border-[1px] border-[rgba(0,0,0,.09)] py-[5px] mt-[10px] flex items-center justify-center">
                    <button>Xem shop</button>
                    <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" strokeWidth="0" className="ml-[10px]  text-[rgba(0,0,0,.09)] w-[1em] h-[1em]">
                      <path d="m13 1.9c-.2-.5-.8-1-1.4-1h-8.4c-.6.1-1.2.5-1.4 1l-1.4 4.3c0 .8.3 1.6.9 2.1v4.8c0 .6.5 1 1.1 1h10.2c.6 0 1.1-.5 1.1-1v-4.6c.6-.4.9-1.2.9-2.3zm-11.4 3.4 1-3c .1-.2.4-.4.6-.4h8.3c.3 0 .5.2.6.4l1 3zm .6 3.5h.4c.7 0 1.4-.3 1.8-.8.4.5.9.8 1.5.8.7 0 1.3-.5 1.5-.8.2.3.8.8 1.5.8.6 0 1.1-.3 1.5-.8.4.5 1.1.8 1.7.8h.4v3.9c0 .1 0 .2-.1.3s-.2.1-.3.1h-9.5c-.1 0-.2 0-.3-.1s-.1-.2-.1-.3zm8.8-1.7h-1v .1s0 .3-.2.6c-.2.1-.5.2-.9.2-.3 0-.6-.1-.8-.3-.2-.3-.2-.6-.2-.6v-.1h-1v .1s0 .3-.2.5c-.2.3-.5.4-.8.4-1 0-1-.8-1-.8h-1c0 .8-.7.8-1.3.8s-1.1-1-1.2-1.7h12.1c0 .2-.1.9-.5 1.4-.2.2-.5.3-.8.3-1.2 0-1.2-.8-1.2-.9z"></path></svg>
                  </div>
                </Link>
              </div>
              <div className="visible font-[400] ml-[50px] text-[1rem] overflow-hidden text-ellipsis whitespace-nowrap" >
                Địa chỉ {products.data[0].seller.address}
                </div>
                <div className="visible font-[400] text-[1rem] ml-[50px] overflow-hidden text-ellipsis whitespace-nowrap" >
                Tham gia từ {formatDate(products.data[0].seller.createdAt)}
                </div>
            </div>
            <div className="mr-auto ml-auto w-[1200px]">
              <div className="pt-[1.25rem]">
                <div className="  min-h-[400px]">
                  <div className=" h-[3.75rem] border-b-[1px] uppercase text-[1.5rem] font-[500] text-[#ee4d2d] px-[1.25rem] flex justify-center items-center ">
                    {" "}
                    Sản phẩm
                  </div>
                  <div className="w-[101%] h-full relative ">
                    <div className="flex flex-wrap ">
                      {products.data.map((item, i) =>
                        i < page * 18 ? (
                          <Link to={`/product/${item._id}`}>
                            <div className=" flex cursor-pointer bg-white m-[5px] h-full hover:border-[1px] hover:border-[#ee4d2d] hover:border-b-[3px]">
                              <div className="border-r-[1px] border-b-[1px] max-w-[190px] h-[auto] flex items-center justify-center flex-col ">
                                <div className=" mt-[10%] overflow-visible ">
                                  <div className="relative ">
                                    <div className=" ">
                                      <img src={item.img.url} alt="" />
                                    </div>
                                  </div>
                                </div>
                                <div className="flex-initial flex flex-col p-[0.5rem]">
                                  <div className="flex-grow min-h-[1.75rem] break-words overflow-hidden text-ellipsis text-[0.75rem] leading-[14px]">
                                    <div
                                      style={{ display: "-webkit-box" }}
                                      className="product"
                                    >
                                      {item.name_product}
                                    </div>
                                  </div>
                                  <div className="flex justify-center items-center pt-[5px]">
                                    <span className="text-[0.75rem] text-[#ee4d2d]">
                                      ₫
                                    </span>
                                    <span className="text-[1rem] text-[#ee4d2d]">
                                    {item.price}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div></Link>
                        ) : null
                      )}
                    </div>
                    <div className="flex w-full justify-center my-[15px]">
                      {products.data.length > page * 18 ? (
                        <button className="bg-white p-3" onClick={handleClick}>
                          <Link to="">Xem thêm</Link>
                        </button>
                      ) : <button className=" p-3 text-gray-54 leading-7">
                        HẾT
                      </button>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NavBottom />
      </>
    );
  }

}
export default Shop;
