import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SvgIcon from "@mui/material/SvgIcon";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#2196f3",
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  textAlign: "center",
}));

const theme = createTheme({
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
  },
});

const Navbar = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Link to={"/"}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="home"
            size="large"
          >
            <ThemeProvider theme={theme}>
              <SvgIcon component={HomeIcon} />
            </ThemeProvider>
          </IconButton>
        </Link>
        <StyledTypography variant="h6">Trello</StyledTypography>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
