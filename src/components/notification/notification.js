import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
const notifications = [
  {
    icon: <AccountCircleOutlinedIcon fontSize="large" />,
    title: "Hello. Welcome to Chiba Admin Page",
    content: "Alo Alo, hoao ho hohoh snd gag gggg aaa 2222 44444 5656565",
    to: "/",
  },
  {
    icon: <AccountCircleOutlinedIcon fontSize="large" />,
    title: "Hello. Welcome to Chiba Admin Page",
    content: "Alo Alo, hoao ho hohoh snd gag gggg aaa 2222 44444 5656565",
    to: "/",
  },
  {
    icon: <AccountCircleOutlinedIcon fontSize="large" />,
    title: "Hello. Welcome to Chiba Admin Page",
    content: "Alo Alo, hoao ho hohoh snd gag gggg aaa 2222 44444 5656565",
    to: "/",
  },
  {
    icon: <AccountCircleOutlinedIcon fontSize="large" />,
    title: "Hello. Welcome to Chiba Admin Page",
    content: "Alo Alo, hoao ho hohssoh snd gag gggg aaa 2222 44444 5656565",
    to: "/",
  },
];

export default function NotificationsList() {
  return (
    <>
      {notifications.map((notification) => (
        <Link
          to={notification.to}
          style={{ textDecoration: "none", color: "black",}}
        >
          <ListItem
            alignItems="flex-start"
            sx={{
              width: "400px",
              "&:hover": {
                backgroundColor: "#F3F3F3",
              },
            }}
          >
            <ListItemAvatar>
              <div>{notification.icon}</div>
            </ListItemAvatar>
            <ListItemText
              primary={notification.title}
              secondary={
                <React.Fragment>{notification.content}</React.Fragment>
              }
            />
            <Divider />
          </ListItem>
          <Divider />
        </Link>
      ))}
    </>
  );
}
