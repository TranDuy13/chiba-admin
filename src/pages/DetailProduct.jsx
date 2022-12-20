import Header from "../components/Header/Header";
import NavBottom from "../components/NavBottom/navBottom";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import CarRentalIcon from "@mui/icons-material/CarRental";
import AddModeratorOutlinedIcon from "@mui/icons-material/AddModeratorOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
function DetailProduct() {
  return (
    <>
      <Header />
      <div className=" min-h-[416px] mt-[120px] my-auto bg-slate-200  ">
        <div className="p-[5px] text-blue-900 text-[15px] mt-[5px]uppercase font-bold italic ml-[30px]">
          Chi tiết sản phẩm
        </div>
        <div className="pr-[16px] pl-[16px] border-none border-[1px] flex opacity-100 mt-[5px] mb-[1,5rem] w-[85%] mx-auto">
          <div className=" bg-white flex justify-center mx-auto box-border min-w-0 mr-[10px] rounded-lg ">
            <div className="box-border w-[100%] ml-[5px] rounded-[8px] p-[24px] my-[20px]">
              <div className="flex box-border min-w-0 m-0">
                <div className="w-[45%] h-[70%] mb-2 mr-[50px]  ">
                  <img src="https://cf.shopee.vn/file/a4d27630e2463df3740a09dfab8cd621_tn" alt="" />
                  <div className="text-slate-600 italic text-[17px] ml-[130px] mt-5 ">
                    Hình ảnh của sản phẩm
                  </div>
                </div>
                <div className="box-border m-0 w-[50%]">
                  <div>
                    <h1 className=" font-[600] uppercase text-[24px] leading-[1.33] box-border ">
                    Giày thể thao nam
                    </h1>
                  </div>
                  <div className="font-[400] p-1">Model:</div>
                  <div className="font-[400] p-1">Loại sản phẩm: </div>
                  <div className="font-[400] p-1">Xuất xứ:</div>
                  <div className="font-[400] p-1">Thương hiệu:</div>
                  <div className="font-[400] p-1">Mã sản phẩm:</div>
                  <div className="text-blue-2 font-bold text-[25px] p-1 mt-[10px]">
                    75.000₫
                  </div>
                  <div className="font-[300] p-1 italic">
                    Mô tả sản phẩm:
                    <div className="break-words">
                    Sản phẩm được công nhân #giaynam #giay #luoi #boots #boot #caoco #giayda #giayluoi #chelseaboots #nam #da #thethao #cocao #co #cao #giaydoc #doc #giayderby #derby #giaytay #tay #giaylofer #lofer #tang #chieu #cao #giaycongso #bot #giaydon #giaydecao #dalon #combatboot #giaydoctor #doctor
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
          <div className=" bg-white flex justify-center ml-[5px] mx-auto box-border  w-[55%] rounded-lg">
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
export default DetailProduct;
