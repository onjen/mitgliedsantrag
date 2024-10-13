import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
// import CssBaseline from '@mui/material/CssBaseline';
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
import { useAppStore } from "../stores/appStore";
import { useShallow } from "zustand/shallow";
import { Article, Help, Print, Web } from "@mui/icons-material";
const drawerWidth = 240;

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [togglePrintModalIsOpen, toggleHelpModalIsOpen] = useAppStore(
    useShallow((state) => [
      state.togglePrintModalIsOpen,
      state.toggleHelpModalIsOpen
    ])
  );
  
  function handleDrawerToggle(): void {
    setMobileOpen((prevState) => !prevState);
  };

  function handleImpressumClick(): void {
    window.open("https://erfindergeist.org/impressum/", '_blank')!.focus()
  }

  function handleWebsiteClick(): void {
    window.open("https://erfindergeist.org", '_blank')!.focus()
  }


  const title = "Erfindergeist Jülich e.V. Mitgliedsantrag";

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }} className="no-print">
      <Typography variant="h6" sx={{ my: 2 }}>
        {title}
      </Typography>
      <Divider />
      <List>
        <ListItem key={"print"} disablePadding>
          <ListItemButton sx={{ textAlign: "center" }} >
            <ListItemText primary={"Drucken"} onClick={() => togglePrintModalIsOpen()}/>
          </ListItemButton>
        </ListItem>
        <ListItem key={"help"} disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={"Hilfe"} onClick={() => toggleHelpModalIsOpen()}/>
          </ListItemButton>
        </ListItem>
        <ListItem key={"Webseite"} disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={"Webseite"} onClick={() => handleWebsiteClick()}/>
          </ListItemButton>
        </ListItem>
        <ListItem key={"Impressum"} disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={"Impressum"} onClick={() => handleImpressumClick()}/>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window.document.body : undefined;

  return (
    <div className="no-print">
      <AppBar component="nav" className="no-print">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {title}
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button key={"print"} sx={{ color: "#000", backgroundColor: "#fff"}} onClick={() => togglePrintModalIsOpen()} endIcon={<Print />}>
              Drucken
            </Button>
            <Button key={"help"} sx={{ color: "#fff" }} onClick={() => toggleHelpModalIsOpen()} endIcon={<Help />}>
              Hilfe
            </Button>
            <Button key={"Web"} sx={{ color: "#fff" }} onClick={() => handleWebsiteClick()} endIcon={<Web />}>
              Webseite
            </Button>
            <Button key={"Article"} sx={{ color: "#fff" }} onClick={() => handleImpressumClick()} endIcon={<Article />}>
              Impressum
            </Button>


          </Box>
        </Toolbar>
      </AppBar>
      <nav className="no-print">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
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
      </nav>
    </div>
  );
}
