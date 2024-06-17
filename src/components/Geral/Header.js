import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Novo ícone importado
import Drawer from "@mui/material/Drawer"; // Importando Drawer
import Pagamento from "../Pagamentos/Pagamento";

const pages = ["Produtos", "Entrega", "Perfil"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false); // Estado para o drawer

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 600 }}
      role="presentation"
      onClick={(event) => event.stopPropagation()} // Impede que o clique feche o drawer
      onKeyDown={(event) => event.stopPropagation()} // Impede que a tecla feche o drawer
    >
      <Pagamento />
    </Box>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: "#f5f5f5" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src="/assets/ifome.png"
            alt="Logo"
            style={{ height: "50px", marginRight: "16px" }}
          />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#d84315", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open cart">
              <IconButton onClick={toggleDrawer(true)} sx={{ p: 0 }}>
                <ShoppingCartIcon sx={{ color: "#d84315" }} />{" "}
                {/* Ícone de carrinho de compras */}
              </IconButton>
            </Tooltip>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              {list()}
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
