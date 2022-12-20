import iconShopee from "../../img/mua-tai-shopee.png";
import "./navigation.scss";
import { Link } from "react-router-dom";
function Navigation(props) {
  return (
    <>
      <div className="navigation">
        <div className="shopee">
          <div className="group-shopee">
            <Link to="/" className="flex">
              <img src={iconShopee} alt="Icon Shopee" className="iconShopee" />
            </Link>

            <div className="register">{props.text}</div>
          </div>
          <Link to="/" className="support">
            <div className="support">Bạn cần giúp đỡ?</div>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Navigation;
