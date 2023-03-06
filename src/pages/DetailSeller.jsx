import { DashboardLayout } from "../components/dashboard-layout";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";
import { useSelector, useDispatch } from "react-redux";
import "../components/product.scss";
import {
  getStatusId,
  reset,
} from "../components/features/purchase/purchaseSlice";
import { useParams } from "react-router";
import { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";

function DetailSeller() {
  const { detail } = useSelector((state) => state.purchase);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(reset());
    dispatch(getStatusId(id));
  }, [dispatch, reset, id]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <DashboardLayout>
          {
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                py: 8,
              }}
            >
              <Container maxWidth={false}>
                <div className=" border-b-[5px] min-h-[600px]">
                  {detail != null ? (
                    <div className="flex flex-col    ">
                      {detail.data.products.map((index) => (
                        <div className="mb-[15px]">
                          <div className="">
                            <div className="flex items-center overflow-hidden  h-[55px] text-[15px] bg-white mb-[12px] color text-[#888] px-[20px] ">
                              <div className="pl-[12px] pr-[20px] min-w-[58px] box-border">
                                Shop: {index.product.seller.fullname}
                              </div>
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
                                    <span className="m-0 font-light">
                                      Giá: {index.product.price}đ
                                    </span>
                                  </div>
                                  <div className="w-[10.88022%]">
                                    <span className="m-0 font-light"></span>
                                  </div>
                                  <div className="w-[11.2%]">
                                    <span className="m-0 font-light">
                                      Số lượng: {index.quantity}
                                    </span>
                                  </div>
                                  <div className="w-[]"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className=" bg-white z-50 flex items-center box-border w-[1200px]">
                        <div className="flex justify-between items-center">
                          <div className="flex justify-between pl-[30px]"></div>
                          <button
                            id="navigate"
                            className="text-white m-[10px] relative overflow-visible  outline-0 bg-orange-btn mr-[40px]  h-[40px] px-[20px] min-w-[70px] max-w-[220px]"
                          >
                            Huỷ đơn
                          </button>
                          <div className="pl-[200px]">
                            Tổng số tiền: {detail.data.total_amount} đ
                          </div>
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
              </Container>
            </Box>
          }
        </DashboardLayout>
      </ThemeProvider>
    </>
  );
}
export default DetailSeller;
