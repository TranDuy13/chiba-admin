import BpCheckbox from "../components/check-box";
import Header from "../components/Header/Header";
import NavBottom from "../components/NavBottom/navBottom";
import "../components/product.scss";
function Cart() {
  return (
    <>
      <Header />
      <div className="bg-gray-09 border-b-[5px] border-[#ee4d2d] min-h-[600px]">
        <div className="flex flex-col pt-[200px] ml-auto mr-auto w-[1200px] ">
          <div className="flex items-center overflow-hidden rounded-[3px] h-[55px] text-[15px] bg-white mb-[12px] color text-[#888] px-[20px] ">
            <div className="pl-[12px] pr-[20px] min-w-[58px] box-border">
              <label
                htmlFor=""
                className="font-[300] flex relative max-w-[400px]  "
                style={{ color: "rgba(0,0,0,.54)" }}
              >
                <BpCheckbox id="" />
              </label>
            </div>
            <div className="text-black w-[46.27949%]">Sản phẩm</div>
            <div className="w-[15.88802%] text-center">Đơn Giá</div>
            <div className="w-[15.4265%] text-center">Số Lượng</div>
            <div className="w-[10.43557%] text-center">Số tiền</div>
            <div className="w-[12.0802%] text-center">Thao Tác</div>
          </div>
          <div className="bg-white rounded-[3px]">
            <div className="flex items-center overflow-hidden  h-[55px] text-[15px] bg-white mb-[12px] color text-[#888] px-[20px] ">
              <div className="pl-[12px] pr-[20px] min-w-[58px] box-border">
                <label
                  htmlFor=""
                  className="font-[300] flex relative max-w-[400px]  "
                  style={{ color: "rgba(0,0,0,.54)" }}
                >
                  <BpCheckbox id="1" />
                </label>
              </div>
              <div className="text-black w-[46.27949%]">Shop</div>
            </div>
            <div className="relative pb-[1px] my-[22px] mx-[20px]">
              <div className="mt-0 px-[16px]">
                <div className="flex items-center text-[14px]">
                  <label
                    htmlFor=""
                    className="font-[300] flex relative max-w-[400px] mr-[10px] "
                    style={{ color: "rgba(0,0,0,.54)" }}
                  >
                    <BpCheckbox />
                  </label>
                  <div className="flex w-[29.0342%] box-border  relative flex-col">
                    <div className="flex">
                      <img
                        className="bg-contain bg-center w-[80px] h-[80px] "
                        src="https://cf.shopee.vn/file/sg-11134201-22120-3dmpdcpafpkv34_tn"
                        alt=""
                      />
                      <div className="leading-[16px] overflow-hidden ml-[10px] flex items-center">
                        <div className="product mb-[5px] max-h-[32px] text-ellipsis overflow-hidden leading-[16px] text-[14px] break-all">
                          Nồi cơm điện thông minh GAABOR GR-S30B01 dung tích lớn
                          3L (lòng nồi 1.2L) - 500W - Hàng chính hãng
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[21.24138%]"></div>
                  <div className="w-[17.58022%]">
                    <span className="m-0 font-light">8999999</span>
                  </div>
                  <div className="w-[10.88022%]">
                    <span className="m-0 font-light">3</span>
                  </div>
                  <div className="w-[11.2%]">
                    <span className="m-0 font-light">8999999</span>
                  </div>
                  <div className="w-[]">
                    <button className="m-0 font-light">Xoá</button>
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
export default Cart;
