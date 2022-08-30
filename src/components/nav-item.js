import PropTypes from "prop-types";
import { Box, Button, ListItem } from "@mui/material";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
export const NavItem = (props) => {
  const { to, icon, title, ...others } = props;
  const location = useLocation();
  const active = to ? location.pathname === to : false;

  useEffect(() => {
    if (location.pathname === to) {
      document.title = title;
    }
  });

  return (
    <>
      <ListItem
        disableGutters
        sx={{
          display: "flex",
          mb: 0.5,
          py: 0,
          px: 2,
        }}
      >
        <Link to={to} style={{ width: "100%", textDecoration: "none" }}>
          <Button
            component="a"
            startIcon={icon}
            disableRipple
            sx={{
              backgroundColor: active && "rgba(255,255,255, 0.08)",
              borderRadius: 1,
              color: active ? "secondary.main" : "neutral.300",
              fontWeight: active && "fontWeightBold",
              justifyContent: "flex-start",
              px: 3,
              textAlign: "left",
              textTransform: "none",
              width: "100%",
              "& .MuiButton-startIcon": {
                color: active ? "secondary.main" : "neutral.400",
              },
              "&:hover": {
                backgroundColor: "rgba(255,255,255, 0.08)",
              },
            }}
          >
            <Box sx={{ flexGrow: 1 }}>{title}</Box>
          </Button>
        </Link>
      </ListItem>
    </>
  );
};

NavItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.node,
  title: PropTypes.string,
};
