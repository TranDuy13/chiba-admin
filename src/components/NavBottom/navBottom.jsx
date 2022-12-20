import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import { useState } from "react";
import Chat from "../../pages/Chat";
import Bottom from "../Bottom/Bottom";
const ChatMini = (props) => {
  const { open } = props;
  return (
    <div
      style={{
        position: "fixed",
        zIndex: "999",
        right: "25px",
        bottom: "25px",
      }}
      className=""
    >
      <button onClick={open}>
        <div className="flex items-center box-border text-white h-48px relative w-full justify-center bg-[#ee4d2d] px-[20px] py-[10px]">
          <MarkUnreadChatAltIcon sx={{marginRight:'8px'}}/>
          Chat
        </div>
      </button>
    </div>
  );
};
function NavBottom() {
  const [open, setOpen] = useState(true);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <footer className="">
        <div className="w-170 m-auto">
          <div className="w-full flex items-start p-0.3125">
            <div className="w-1/5 box-border p-0.3125">
              <div className="uppercase text-xs font-bold text-gray-54 mt-10 mb-5">
                Chăm sóc khách hàng
              </div>
              <ul className="text-gray-54 mb-1.5625 list-none">
                <li className="capitalize text-xs mb-3">Trung Tâm Trợ Giúp</li>
                <li className="capitalize text-xs mb-3">Shopee blog</li>
                <li className="capitalize text-xs mb-3">shopee mall</li>
                <li className="capitalize text-xs mb-3">Hướng dẫn mua hàng</li>
                <li className="capitalize text-xs mb-3">hướng dẫn bán hàng</li>
                <li className="capitalize text-xs mb-3">thanh toán</li>
                <li className="capitalize text-xs mb-3">Shopee xu</li>
                <li className="capitalize text-xs mb-3">Vận chuyển</li>
                <li className="capitalize text-xs mb-3">
                  Trả hàng & hoàn tiền
                </li>
                <li className="capitalize text-xs mb-3">Chăm sóc khách hàng</li>
                <li className="capitalize text-xs mb-3">chính sách bảo hành</li>
              </ul>
            </div>
            <div className="w-1/5 box-border p-0.3125">
              <div className="uppercase text-xs font-bold text-gray-54 mt-10 mb-5">
                Về Shopee
              </div>
              <ul className="text-gray-54 mb-1.5625 list-none">
                <li className="capitalize text-xs mb-3">
                  Giới thiệu về Shopee Việt Nam
                </li>
                <li className="capitalize text-xs mb-3">Tuyển dụng</li>
                <li className="capitalize text-xs mb-3">Điều khoản shopee</li>
                <li className="capitalize text-xs mb-3">Chính sách bảo mật</li>
                <li className="capitalize text-xs mb-3">Chính hãng</li>
                <li className="capitalize text-xs mb-3">Kênh người bán</li>
                <li className="capitalize text-xs mb-3">Flash sales</li>
                <li className="capitalize text-xs mb-3">
                  Chương trình tiếp thị liên kết Shopee
                </li>
                <li className="capitalize text-xs mb-3">
                  Liên hệ với truyền thông
                </li>
              </ul>
            </div>
            <div className="w-1/5 box-border p-0.3125">
              <div className="uppercase text-xs font-bold text-gray-54 mt-10 mb-5">
                Thanh toán
              </div>
              <ul className="text-gray-54 mb-1.5625 list-none">
                <li className="capitalize text-xs mb-3 flex items-center">
                  <img
                    src="https://download.logo.wine/logo/Visa_Inc./Visa_Inc.-Logo.wine.png"
                    alt=""
                    className="h-11 mr-1"
                  />
                  <img
                    src="https://www.svgrepo.com/show/303248/mastercard-2-logo.svg"
                    alt="mastercard"
                    className="h-11 mr-1"
                  />
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/payment-method/480/jcb_card_payment-512.png"
                    alt=""
                    className="h-12 mr-1"
                  />
                </li>
                <li className="capitalize text-xs mb-3 flex items-center">
                  <img
                    src="https://download.logo.wine/logo/American_Express/American_Express-Logo.wine.png"
                    className="h-11"
                    alt=""
                  />
                  <img
                    src="https://gougoupet.vn/wp-content/uploads/2020/11/truck.svg"
                    className="h-11 mr-1"
                    alt=""
                  />
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2643/2643292.png"
                    className="h-11"
                    alt=""
                  />
                </li>
                <li className="capitalize text-xs mb-3 flex">
                  <img
                    src="https://brandlogos.net/wp-content/uploads/2022/08/shopeepay-logo_brandlogos.net_yl7nf-512x512.png"
                    className="h-14"
                    alt=""
                  />
                </li>
                <li className="uppercase text-xs font-bold text-gray-54 mb-3">
                  Đơn vị vận chuyển
                </li>
                <li className="capitalize text-xs mb-3 flex items-center">
                  <img
                    src="https://cdn.haitrieu.com/wp-content/uploads/2022/05/Logo-ShopeeXpress.png"
                    className="h-3 mr-1"
                    alt=""
                  />
                  <img
                    src="https://v.fastcdn.co/u/c787f3ba/54936372-0-GHTK-logo.png"
                    className="h-3 mr-1"
                    alt=""
                  />
                  <img
                    src="https://cdn.haitrieu.com/wp-content/uploads/2022/05/Logo-GHN-Blue-Orange.png"
                    className="h-3 mr-1"
                    alt=""
                  />
                </li>
                <li className="capitalize text-xs mb-3 flex items-center">
                  <img
                    src="https://cdn.haitrieu.com/wp-content/uploads/2022/05/Logo-Viettel-Post-Transparent.png"
                    className="h-6 mr-1"
                    alt=""
                  />
                  <img
                    src="https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-VietNam-Post.png"
                    className="h-6 mr-1"
                    alt=""
                  />
                  <img
                    src="https://cdn.haitrieu.com/wp-content/uploads/2022/05/Logo-JT-Express-Slogan.png"
                    className="h-5"
                    alt=""
                  />
                </li>
                <li className="capitalize flex items-center text-xs mb-3">
                  <img
                    src="https://bizweb.dktcdn.net/100/356/143/themes/721450/assets/dkbct22.png?1653474921177"
                    className="h-7 mr-1"
                    alt=""
                  />
                  <img
                    src="https://cdn.haitrieu.com/wp-content/uploads/2022/05/Logo-Ninjavan-V.png"
                    className="h-6"
                    alt=""
                  />
                </li>
              </ul>
            </div>
            <div className="w-1/5 box-border p-0.3125">
              <div className="uppercase text-xs font-bold text-gray-54 mt-10 mb-5">
                Theo dõi chúng tôi trên
              </div>
              <ul className="text-gray-54 mb-1.5625 list-none">
                <li className="capitalize text-xs mb-3 flex items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1384/1384005.png"
                    className="h-4 mr-2"
                    alt=""
                  />
                  Facebook
                </li>
                <li className="capitalize text-xs mb-3 flex items-center">
                  <img
                    src="https://logojinni.com/image/logos/instagram%20circle-742.svg"
                    className="h-4 mr-2"
                    alt=""
                  />
                  Instagram
                </li>
                <li className="capitalize text-xs mb-3 flex items-center">
                  <img
                    src="http://cdn.onlinewebfonts.com/svg/img_223948.png"
                    className="h-4 mr-2"
                    alt=""
                  />
                  LinkedIn
                </li>
              </ul>
            </div>
            <div className="w-1/5 box-border p-0.3125">
              <div className="uppercase text-xs font-bold text-gray-54 mt-10 mb-5">
                Tải ứng dụng shopee ngay thôi
              </div>
              <ul className="text-gray-54 mb-1.5625 list-none">
                <li className="capitalize text-xs mb-3 flex items-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Apple_logo_grey.svg"
                    className="h-4 mr-2"
                    alt=""
                  />
                  App Store
                </li>
                <li className="capitalize text-xs mb-3 flex items-center">
                  <img
                    src="https://seeklogo.com/images/G/google-play-store-logo-FA292E6779-seeklogo.com.png"
                    className="h-4 mr-2"
                    alt=""
                  />
                  Google Play
                </li>
                <li className="capitalize text-xs mb-3 flex items-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Huawei_AppGallery.svg/2048px-Huawei_AppGallery.svg.png"
                    className="h-4 mr-2"
                    alt=""
                  />
                  AppGallery
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <Bottom />

      {!open ? <Chat open={handleOpen}/> : <ChatMini open={handleOpen} />}
    </>
  );
}
export default NavBottom;
