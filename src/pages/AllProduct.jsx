import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Bottom from "../components/Bottom/Bottom";
import Header from "../components/Header/Header";
import NavBottom from "../components/NavBottom/navBottom";
import "../components/product.scss";
import { getAllProduct, gettypeProduct, reset } from "../components/features/product/productSlice";
import { useDispatch,useSelector } from "react-redux";
function AllProduct() {
  const { products } = useSelector(
    (state) => state.product
  );
  const {id} =useParams()
  const [page, setPage] = useState(1);
  const dispatch =useDispatch()
  useEffect(()=>{
    dispatch(reset())
    if(id){
      dispatch(gettypeProduct({category:id}))
    }
    // if(!id){
    //   dispatch(getAllProduct())
    // }
  },[dispatch,id,reset])
  const handleClick = () => {
    setPage(page + 1);
  };
if(products){
  return (
    <>
      <Header />
      <div className="bg-gray-09 min-h-[50rem] mt-[130px] ml-auto mr-auto">
        <div className="bg-gray-09 border-b-[5px] border-[#ee4d2d] ">
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
                                  45000
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : null
                    )}
                  </div>
                  <div className="flex w-full justify-center my-[15px]">
                    {products.data.length > page*18 ? (
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
      <NavBottom/>
    </>
  );
}

}
export default AllProduct;
