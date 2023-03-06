import { useEffect, useState, useRef } from "react";

import Header from "../components/Header/Header";
import NavBottom from "../components/NavBottom/navBottom";
import { useSelector, useDispatch } from "react-redux";
import "../components/product.scss";
import {
  getStatusId,
  reset,
} from "../components/features/purchase/purchaseSlice";
import _ from "lodash";
import { Link, useParams } from "react-router-dom";
import { buyProduct } from "../components/features/purchase/purchaseSlice";
function DetailStatus() {
  const { detail } = useSelector((state) => state.purchase);
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(reset());
    dispatch(getStatusId(id));
  }, [dispatch, reset, id]);

  return (
    <>
      <Header />
      <div className="bg-gray-09 border-b-[5px] border-[#ee4d2d] min-h-[600px]">
        {detail != null ? (
          <div className="flex flex-col pt-[200px] ml-auto mr-auto w-[1200px] ">
            {detail.data.products.map((index) => (
              <div className="mb-[15px]">
                <div className="bg-white rounded-[3px] pb-[10px]">
                  <div className="flex items-center overflow-hidden  h-[55px] text-[15px] bg-white mb-[12px] color text-[#888] px-[20px] ">
                    <div className="pl-[12px] pr-[20px] min-w-[58px] box-border">Shop: {index.product.seller.fullname}</div>
                  </div>
                  <div className="relative pb-[1px] my-[22px] mx-[20px]">
                    <div className="mt-0 px-[16px]">
                      <div className="flex items-center text-[14px]">
                        <div className="flex w-[29.0342%] box-border  relative flex-col">
                          <div className="flex">
                            <img
                              className="bg-contain bg-center w-[80px] h-[80px] "
                              alt=""
                              src={index.product.img.url}
                            />
                            <div className="leading-[16px] overflow-hidden ml-[10px] flex items-center">
                              <div className="product mb-[5px] max-h-[32px] text-ellipsis overflow-hidden leading-[16px] text-[14px] break-all">
                                {index.product.name_product}
                              </div>
                            </div>
                          </div>{" "}
                        </div>
                        <div className="w-[21.24138%]"></div>
                        <div className="w-[17.58022%]">
                          <span className="m-0 font-light">Giá: {index.product.price}đ</span>
                        </div>
                        <div className="w-[10.88022%]">
                          <span className="m-0 font-light"></span>
                        </div>
                        <div className="w-[11.2%]">
                          <span className="m-0 font-light">Số lượng: {index.quantity}</span>
                        </div>
                        <div className="w-[]">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className=" bg-white z-50 flex items-center box-border">
              <div className="flex justify-between items-center">
                <div className="flex justify-between pl-[30px]"></div>
                <button
                  id="navigate"
                  className="text-white m-[10px] relative overflow-visible  outline-0 bg-orange-btn mr-[40px]  h-[40px] px-[20px] min-w-[70px] max-w-[220px]"
                >
                  Huỷ đơn
                </button>
                <div className="pl-[200px]">Tổng số tiền: {detail.data.total_amount} đ</div>
              </div>

              <div className="  ">
                <div className="flex items-center justify-end w-[600px]">
                  <div className="w-[80%] box-border pl-[20px] text-[rgba(85,85,85,.8)]">
                    Địa chỉ : {detail.data.address}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <NavBottom />
    </>
  );
}
export default DetailStatus;
