import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Box, Divider, Drawer, useMediaQuery } from "@mui/material";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import PaymentRoundedIcon from '@mui/icons-material/PaymentRounded';
import { ChartBar as ChartBarIcon } from "../icons/chart-bar";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import { ShoppingBag as ShoppingBagIcon } from "../icons/shopping-bag";
import Chat from "../pages/Chat";
import { useState } from "react";
import { Logo } from "./logo";
import { NavItem } from "./nav-item";

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
const items = [
  {
    href: "/seller",
    icon: <ChartBarIcon fontSize="small" />,
    title: "Doanh Thu",
  },
  // {
  //   href: "/seller/customer",
  //   icon: <UsersIcon fontSize="small" />,
  //   title: "Khách Hàng",
  // },
  {
    href: "/seller/products",
    icon: <ShoppingBagIcon fontSize="small" />,
    title: "Sản phẩm ",
  },

  {
    href: "/seller/statusOrders",
    icon: <AutorenewIcon fontSize="small" />,
    title: "Trạng Thái Đơn Hàng",
  },
  {
    href: "/seller/add",
    icon: <PaymentRoundedIcon fontSize="small" />,
    title: "Thêm Sản phẩm",
  },
  // {
  //   href: "/setting",
  //   icon: <CogIcon fontSize="small" />,
  //   title: "Settings",
  // },
  // {
  //   href: "/404",
  //   icon: <XCircleIcon fontSize="small" />,
  //   title: "Error",
  // },
];

export const DashboardSidebar = () => {
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });
  const [open, setOpen] = useState(true);
  const handleOpen = () => {
    setOpen(!open);
  };
  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div>
          <Box sx={{ p: 3 }}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Logo
                sx={{
                  height: 42,
                  width: 42,
                }}
              />
              <div
                style={{
                  paddingLeft: "20px",
                  fontWeight: 700,
                  color: "gray",
                  fontSize: "30px",
                }}
              >
                CHIBA
              </div>
            </Link>
          </Box>
          <Box sx={{ px: 2 }}></Box>
        </div>
        <Divider
          sx={{
            borderColor: "#2D3748",
            my: 3,
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              to={item.href}
              title={item.title}
            />
          ))}
        </Box>
        <Divider sx={{ borderColor: "#2D3748" }} />
        <Box
          sx={{
            px: 2,
            py: 3,
          }}
        ></Box>
      </Box>
      {!open ? <Chat open={handleOpen}/> : <ChatMini open={handleOpen} />}
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.900",
            color: "#FFFFFF",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      // onClose={onClose}
      // open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
