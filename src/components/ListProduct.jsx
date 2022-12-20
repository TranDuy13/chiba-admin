import { Link } from "react-router-dom";
import "./product.scss";
function ListProduct() {
  const items = [
    {
      catelog:
        "Thời Trang NaTrang NaTrang NaTrang NaTrang NaTrang NaTrang NaTrang NaTrang NaTrang Nam",
      imgPath: "https://cf.shopee.vn/file/sg-11134201-22120-jik8q4xv2tkv4b_tn",
    },
    {
      catelog: "Điện Thoại & Phụ Kiện",
      imgPath: "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
    },
    {
      catelog: "Điện Thoại & Phụ Kiện",
      imgPath: "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
    },
    {
      catelog: "Điện Thoại & Phụ Kiện",
      imgPath: "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
    },
    {
      catelog: "Điện Thoại & Phụ Kiện",
      imgPath: "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
    },
    {
      catelog: "Điện Thoại & Phụ Kiện",
      imgPath: "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
    },
    {
      catelog: "Điện Thoại & Phụ Kiện",
      imgPath: "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
    },
    {
      catelog: "Điện Thoại & Phụ Kiện",
      imgPath: "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
    },
    {
      catelog: "Điện Thoại & Phụ Kiện",
      imgPath: "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
    },
    {
      catelog: "Điện Thoại & Phụ Kiện",
      imgPath: "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
    },
    {
      catelog: "Điện Thoại & Phụ Kiện",
      imgPath: "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
    },
    {
      catelog: "Điện Thoại & Phụ Kiện",
      imgPath: "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
    },
    {
      catelog: "Điện Thoại & Phụ Kiện",
      imgPath: "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
    },
    {
      catelog: "Điện Thoại & Phụ Kiện",
      imgPath: "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
    },
    {
      catelog: "Điện Thoại & Phụ Kiện",
      imgPath: "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
    },
    {
      catelog: "Điện Thoại & Phụ Kiện",
      imgPath: "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
    },
    {
        catelog: "Điện Thoại & Phụ Kiện",
        imgPath: "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
      },
      {
        catelog: "Điện Thoại & Phụ Kiện",
        imgPath: "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
      },
      {
        catelog: "Điện Thoại & Phụ Kiện",
        imgPath: "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
      },
      {
        catelog: "Điện Thoại & Phụ Kiện",
        imgPath: "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
      },
      {
        catelog: "Điện Thoại & Phụ Kiện",
        imgPath: "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
      },
      {
        catelog: "Điện Thoại & Phụ Kiện",
        imgPath: "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
      },
      {
        catelog: "Điện Thoại & Phụ Kiện",
        imgPath: "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
      },
      {
        catelog: "Điện Thoại & Phụ Kiện",
        imgPath: "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
      },
  ];
  return (
    <>
      <div className="bg-gray-09 border-b-[5px] border-[#ee4d2d] ">
        <div className="mr-auto ml-auto w-[1200px]">
          <div className="pt-[1.25rem]">
            <div className="  min-h-[400px]">
              <div className="bg-white h-[3.75rem] border-b-[1px] uppercase text-[1rem] font-[500] text-gray-54 px-[1.25rem] flex items-center ">
                {" "}
                Sản phẩm
              </div>
              <div className="w-[101%] h-full relative ">
                <div className="flex flex-wrap ">
                  {items.map((item) => (
                    <div className=" flex cursor-pointer bg-white m-[5px] h-full hover:border-[1px] hover:border-[#ee4d2d] hover:border-b-[3px]">
                      <div className="border-r-[1px] border-b-[1px] max-w-[190px] h-[auto] flex items-center justify-center flex-col ">
                        <div className=" mt-[10%] overflow-visible ">
                          <div className="relative ">
                            <div className=" ">
                              <img src={item.imgPath} alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="flex-initial flex flex-col p-[0.5rem]">
                          <div className="flex-grow min-h-[1.75rem] break-words overflow-hidden text-ellipsis text-[0.75rem] leading-[14px]">
                            <div
                              style={{ display: "-webkit-box" }}
                              className="product"
                            >
                              {item.catelog}
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
                  ))}
                </div>
                <div className="flex w-full justify-center my-[15px]">
                  <button className="bg-white p-3">
                    <Link to="">Xem thêm</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ListProduct;
