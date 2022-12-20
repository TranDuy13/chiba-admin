import PropTypes from "prop-types";

import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Notifications } from "./notification-list";
import { MenuList } from "./menu-list";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Bell as BellIcon } from "../icons/bell";
import { useState } from "react";
import { UserCircle as UserCircleIcon } from "../icons/user-circle";
import { Users as UsersIcon } from "../icons/users";

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#fff",
  boxShadow: "0px 1px 5px rgb(100 116 139 / 12%)",
}));

function DashboardNavbar() {
  const { users, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [notifi, setNotifi] = useState(null);
  const openNotifi = Boolean(notifi);
  const handleclicknotifi = (event) => {
    setNotifi(event.currentTarget);
  };
  const handleclosenotifi = () => {
    setNotifi(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <DashboardNavbarRoot
        sx={{
          left: {
            lg: 280,
          },
          width: {
            lg: "calc(100% - 280px)",
          },
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2,
          }}
        >
          <IconButton
            // onClick={onSidebarOpen}
            sx={{
              display: {
                xs: "inline-flex",
                lg: "none",
              },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Tooltip title="Search">
            <IconButton sx={{ ml: 1 }}>
              <SearchIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Box sx={{ flexGrow: 1 }} />
          <Tooltip title="Contacts">
            <IconButton sx={{ ml: 1 }}>
              <UsersIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Notifications">
            <IconButton
              onClick={handleclicknotifi}
              size="small"
              sx={{ ml: 1 }}
              aria-controls={openNotifi ? "notification-list" : undefined}
              aria-haspopup="true"
              aria-expanded={openNotifi ? "true" : undefined}
            >
              <Badge badgeContent={4} color="primary" variant="dot">
                <BellIcon fontSize="small" />
              </Badge>
            </IconButton>
          </Tooltip>
          <Tooltip title="Account">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar
                sx={{
                  height: 40,
                  width: 40,
                  ml: 1,
                }}
                src={users.data.admin.avt.url}
              >
                <UserCircleIcon fontSize="small" />
              </Avatar>
            </IconButton>
          </Tooltip>
        </Toolbar>
        <MenuList
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          onClick={handleClose}
        />
        <Notifications
          notification={notifi}
          openNotifi={openNotifi}
          onClose={handleclosenotifi}
          onClick={handleclosenotifi}
        />
      </DashboardNavbarRoot>
    </>
  );
}
export default DashboardNavbar;
DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};
