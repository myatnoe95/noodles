import * as React from "react";
import { useRouter } from "next/router";

//UI Components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;

const navItems = ["Home", "Menu01", "Menu02", "Menu03", "Menu04"];

export default function NavBar(props: Props) {
  const { window } = props;

  const router = useRouter();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
      }}
    >
      <Box sx={{ justifyContent: "center", display: "flex" }}>
        <Avatar
          alt="logo"
          src="/images/Logo.png"
          style={{
            width: "112px",
            height: "52px",
          }}
        />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          position="static"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" }, color: "#000" }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
              <Avatar
                alt="logo"
                src="/images/Logo.png"
                style={{ width: "112px", height: "52px" }}
              />
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "#000" }}>
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>

      <Breadcrumbs
        aria-label="breadcrumb"
        style={{
          backgroundColor: "#A81E24",
          padding: "3px 20px",
          color: "#fff",
        }}
      >
        <Link
          underline="hover"
          color="inherit"
          onClick={() => router.push("/")}
        >
          Home
        </Link>

        <Typography sx={{ my: 2 }}>
          {router.pathname === "/" ? "Register" : "Profile"}
        </Typography>
      </Breadcrumbs>
    </>
  );
}
