import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Button from '@mui/material/Button';
function Purchase() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (data == null && id == 1) {
      axios
        .post("http://localhost:4000/pay/payWithMomo", {
          total: searchParams.get("totalPrice"),
          message: searchParams.get("item"),
        })
        .then((res) => setData(res.data.data));
    }else{
        window.open(data.payUrl);
    }
  },[data,id]);
//   useEffect(() => {
//     if (data && id == 1) {
//       window.open(data.payUrl);
//     }
//   });
  if (id == 2 && searchParams.get("errorCode") == 0) {
    return (
      <>
        <div>
          <CheckCircleOutlineIcon sx={{ fontSize: 150, color: "#0bf540" }} />
        </div>
      </>
    );
  } else if (id == 2 && searchParams.get("errorCode") != 0) {
    return (
      <>
        <div className="mx-auto flex-col items-center flex">
          <WarningAmberIcon sx={{ fontSize: 150, color: "#F5490B" }}/>
          <div className="font-bold my-2">Sorry something was wrong!</div>
          <div className="flex text-sky-600">
            <div className="mr-[3px]">
              Thanh toán thất bại! Trở về Trang chủ
            </div>
          </div>
          <Button onClick={()=>{
            navigate='/'
          }} variant="contained">Back to Home</Button>
        </div>
      </>
    );
  }
}

export default Purchase;
