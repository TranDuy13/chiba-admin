import { useEffect, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import Header from "../components/Header/Header";
import NavBottom from "../components/NavBottom/navBottom";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TablePagination,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { SeverityPill } from "../components/severity-pill";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getStatusByUser,
  reset,
} from "../components/features/purchase/purchaseSlice";

const StatusOrderUser = (props) => {
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(0);
  const { purchase } = useSelector((state) => state.purchase);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(reset());
    dispatch(getStatusByUser({ id: user.data.admin._id }));
  }, [dispatch, reset]);
  const handleLimitChange = (event) => {
    setLimit(parseInt(event.target.value, 10));
    setPage(0);
  };
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }
  const location = useLocation();
  useEffect(() => {
    if (location.pathname == "/statusOrders") {
      setLimit(10);
    }
  });

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };
  console.log(page);
  if (purchase) {
    return (
      <>
        <Header />
        <div className="bg-gray-09 border-b-[5px] border-[#ee4d2d] min-h-[600px]">
        <div className="flex flex-col py-[150px] ml-auto mr-auto w-[1200px] ">
          <Card>
            <CardHeader title="Trạng thái đơn hàng" />
            <PerfectScrollbar>
              <Box sx={{ minWidth: 800 }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID Đơn Hàng</TableCell>
                      <TableCell>Khách Hàng</TableCell>
                      <TableCell>Tổng đơn hàng</TableCell>
                      <TableCell>Địa chỉ</TableCell>
                      <TableCell sortDirection="desc">
                        <Tooltip enterDelay={300} title="Sort">
                          <TableSortLabel active direction="desc">
                            Ngày Đặt Hàng
                          </TableSortLabel>
                        </Tooltip>
                      </TableCell>
                      <TableCell>Trạng Thái</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {(limit > 0
                      ? purchase.data.slice(page * limit, page * limit + limit)
                      : purchase.data
                    ).map((order) => (
                      <TableRow hover key={order.id}>
                        <TableCell>{order._id}</TableCell>
                        <TableCell>{order.customer.fullname}</TableCell>
                        <TableCell>
                          {order.total_amount.toLocaleString(undefined, {
                            maximumFractionDigits: 2,
                          })}
                          đ
                        </TableCell>
                        <TableCell>{order.address}</TableCell>

                        <TableCell>{formatDate(order.createdAt)}</TableCell>
                        <TableCell>
                          <SeverityPill
                            color={
                              (order.status === "delivered" && "success") ||
                              (order.status === "refunded" && "error") ||
                              "warning"
                            }
                          >
                            {order.status}
                          </SeverityPill>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </PerfectScrollbar>
            <TablePagination
              component="div"
              count={purchase.data.length}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleLimitChange}
              page={page}
              rowsPerPage={limit}
              rowsPerPageOptions={[5, 10, 25]}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                p: 2,
              }}
            >
              <Button
                color="primary"
                endIcon={<ArrowRightIcon fontSize="small" />}
                size="small"
                variant="text"
              >
                View all
              </Button>
            </Box>
          </Card>
          </div>
        </div>
        <NavBottom />
      </>
    );
  }
};
export default StatusOrderUser;
