import { useEffect, useState, useRef } from "react";

import Header from "../components/Header/Header";
import NavBottom from "../components/NavBottom/navBottom";
import { useSelector, useDispatch } from "react-redux";
import "../components/product.scss";
import { getCartByUser, reset } from "../components/features/cart/cartSlice";
import _ from "lodash";
import { Link, useNavigate } from "react-router-dom";
import { buyProduct } from "../components/features/purchase/purchaseSlice";
function Cart() {
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const { purchase } = useSelector((state) => state.purchase);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);
  useEffect(()=>{
    if(purchase){
        navigate(`/purchase/1?item=${purchase.data.toString()}&totalPrice=${total}`)
    }
  },[purchase])
  useEffect(() => {
    if (user) {
      dispatch(getCartByUser(user.data.admin._id));
    }
  }, [user, dispatch]);
  const form = useRef();
  const [isCheckAll, setIsCheckAll] = useState();
  const [isCheck1, setIsCheck1] = useState([]);
  const [cartValue, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  if (cart) {
    return (
      <>
        <Header />
        <div className="bg-gray-09 border-b-[5px] border-[#ee4d2d] min-h-[600px]">
          {cart != "" && cart != null ? (
            <div className="flex flex-col pt-[200px] ml-auto mr-auto w-[1200px] ">
              <div className="flex items-center  rounded-[3px] h-[55px] text-[15px] bg-white mb-[12px] color text-[#888] px-[20px] ">
                <div className="pl-[12px] pr-[20px] min-w-[58px] box-border">
                  <input
                    type="checkbox"
                    name="selectAll"
                    id="selectAll"
                    onClick={(e) => {
                      setIsCheckAll(!isCheckAll);
                      setIsCheck1(cart.map((item) => item._id));
                      setCart(cart);
                      cart.map((i) =>
                        setTotal((prev) => prev + i.product.price * i.quantity)
                      );

                      if (!e.target.checked) {
                        setIsCheck1([]);
                        setCart([]);
                        setTotal(0);
                      }
                    }}
                    checked={
                      !cart.map((i) => isCheck1.includes(i._id)).includes(false)
                    }
                    className="mr-[20px]"
                  />
                </div>
                <div className="text-black w-[46.27949%]">Sản phẩm</div>

                <div className="w-[15.88802%] text-center">Đơn Giá</div>
                <div className="w-[15.4265%] text-center">Số Lượng</div>
                <div className="w-[10.43557%] text-center">Số tiền</div>
                <div className="w-[12.0802%] text-center">Thao Tác</div>
              </div>

              {Object.values(_.groupBy(cart, "product.seller.fullname")).map(
                (item) => (
                  <div className="mb-[15px]">
                    <div className="bg-white rounded-[3px] pb-[10px]">
                      <div className="flex items-center overflow-hidden  h-[55px] text-[15px] bg-white mb-[12px] color text-[#888] px-[20px] ">
                        <div className="pl-[12px] pr-[20px] min-w-[58px] box-border">
                          <input
                            key={item[0].product.seller._id}
                            type="checkbox"
                            name={item[0].product.seller._id}
                            id={item[0].product.seller._id}
                            onClick={(e) => {
                              const { checked, id } = e.target;
                              //   // setIsCheck([...isCheck, id]);
                              setIsCheck1(item.map((i) => i._id));
                              item.map((i) =>
                                setTotal(
                                  (prev) => prev + i.product.price * i.quantity
                                )
                              );
                              setCart(item);
                              if (!checked) {
                                setIsCheck1([]);
                                setCart([]);
                                setTotal(0);
                              }
                            }}
                            className="mr-[20px]"
                            checked={item
                              .map((i) => isCheck1.includes(i._id))
                              .includes(true)}
                          />
                        </div>
                        <div className="text-black w-[46.27949%]">
                          Shop {item[0].product.seller.fullname}
                        </div>
                      </div>
                      {item.map((index) => (
                        <div className="relative pb-[1px] my-[22px] mx-[20px]">
                          <div className="mt-0 px-[16px]">
                            <div className="flex items-center text-[14px]">
                              <input
                                key={index}
                                type="checkbox"
                                name={index._id}
                                id={index.product.seller._id}
                                onClick={(e) => {
                                  const { id, checked, name } = e.target;
                                  setIsCheck1([...isCheck1, name]);
                                  setCart([...cartValue, index]);
                                  setTotal(
                                    (prev) =>
                                      prev +
                                      index.product.price * index.quantity
                                  );

                                  if (!checked) {
                                    setIsCheck1(
                                      isCheck1.filter((item) => item !== name)
                                    );
                                    setTotal(
                                      total -
                                        index.product.price * index.quantity
                                    );
                                    setCart(
                                      cartValue.filter(
                                        (item) => item._id !== index._id
                                      )
                                    );
                                  }
                                }}
                                checked={isCheck1.includes(index._id)}
                                className="mr-[20px]"
                              />
                              <div className="flex w-[29.0342%] box-border  relative flex-col">
                                <Link to={`/product/${index.product._id}`}>
                                  {" "}
                                  <div className="flex">
                                    <img
                                      className="bg-contain bg-center w-[80px] h-[80px] "
                                      src={index.product.img.url}
                                      alt=""
                                    />
                                    <div className="leading-[16px] overflow-hidden ml-[10px] flex items-center">
                                      <div className="product mb-[5px] max-h-[32px] text-ellipsis overflow-hidden leading-[16px] text-[14px] break-all">
                                        {index.product.name_product}
                                      </div>
                                    </div>
                                  </div>{" "}
                                </Link>
                              </div>
                              <div className="w-[21.24138%]"></div>
                              <div className="w-[17.58022%]">
                                <span className="m-0 font-light">
                                  {index.product.price.toLocaleString(
                                    undefined,
                                    {
                                      maximumFractionDigits: 2,
                                    }
                                  )}
                                  đ
                                </span>
                              </div>
                              <div className="w-[10.88022%]">
                                <span className="m-0 font-light">
                                  {index.quantity}
                                </span>
                              </div>
                              <div className="w-[11.2%]">
                                <span className="m-0 font-light">
                                  {(
                                    Number(index.product.price) *
                                    Number(index.quantity)
                                  ).toLocaleString(undefined, {
                                    maximumFractionDigits: 2,
                                  })}{" "}
                                  đ
                                </span>
                              </div>
                              <div className="w-[]">
                                <button
                                  onClick={(e) => {
                                    console.log(e);
                                    console.log(index._id);
                                  }}
                                  className="m-0 font-light"
                                >
                                  Xoá
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              )}
              <div className="bottom-0 bg-white z-50  shadow-gray-400 shadow-2xl sticky items-center box-border">
                <div className="flex justify-between items-center">
                  <div className="flex justify-between pl-[30px]">
                    {" "}
                    <input
                      type="checkbox"
                      name="selectAll"
                      id="selectAll"
                      onClick={(e) => {
                        const { checked, id } = e.target;
                        //   // setIsCheck([...isCheck, id]);
                        setIsCheck1(cart.map((i) => i._id));
                        cart.map((i) =>
                          setTotal(
                            (prev) => prev + i.product.price * i.quantity
                          )
                        );
                        setCart(cart);
                        if (!checked) {
                          setIsCheck1([]);
                          setCart([]);
                          setTotal(0);
                        }
                      }}
                      checked={
                        !cart
                          .map((i) => isCheck1.includes(i._id))
                          .includes(false)
                      }
                      className="mr-[10px]"
                    />
                    <div> Chọn tất cả</div>
                  </div>

                  <div className="pl-[200px]">
                    Tổng số tiền:{" "}
                    {total.toLocaleString(undefined, {
                      maximumFractionDigits: 2,
                    })}{" "}
                    đ
                  </div>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      const a = [];

                      cartValue.map((item) =>
                        a.push({
                          product: item.product._id,
                          quantity: item.quantity,
                          index: item.createdAt,
                          seller: item.product,
                        })
                      );

                      dispatch(
                        buyProduct({
                          customer: user.data.admin._id,
                          products: a,
                          address: form.current.value,
                          total_amount: total,
                        })
                      );
       
                    }}

                    id="navigate"
                    className="text-white m-[10px] relative overflow-visible  outline-0 bg-orange-btn mr-[40px]  h-[40px] px-[20px] min-w-[70px] max-w-[220px]"
                  >
                    Mua hàng
                  </button>
                </div>

                <div className="  ">
                  <div className="flex items-center justify-end w-[600px]">
                    <div className="w-[20%] box-border pl-[20px] text-[rgba(85,85,85,.8)]">
                      Địa chỉ
                    </div>
                    <div className="flex items-center  ml-[20px] box-border w-[400px] h-[40px] rounded-sm border-[1px] border-[rgba(0,0,0,.14)]">
                      <input
                        ref={form}
                        style={{ outline: "none" }}
                        id="address"
                        name="address"
                        required
                        className="w-[100%] box-border pl-[20px]"
                        defaultValue={user.data.admin.address}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center  text-[20px] pt-[200px] ml-auto mr-auto w-[1200px]"></div>
          )}
        </div>

        <NavBottom />
      </>
    );
  }
}
export default Cart;
