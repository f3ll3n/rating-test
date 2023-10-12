import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import React from "react";
export default function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navItems = [['Примеры', '/examples'], ['Песочница', '/sandbox']]
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', maxWidth: '900px' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Меню
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, idx) => (
          <ListItem key={idx} disablePadding >
            <Link to={item[1]} >
            <ListItemButton sx={{ textAlign: 'center', width: '100%', display: 'block' }}>
              <ListItemText primary={item[0]} />
            </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const container = window !== undefined ? () => window().document.body : undefined;
  return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuOpenIcon/>
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Rating-test
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item, idx) => (
                <Link key={idx} to={item[1]}>
                <Button  sx={{ color: '#fff' }}>
                  {item[0]}
                </Button>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '300px' },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
  );
}







// <Box sx={{ display: { xs: "none", sm: "block" } }}>
// <Link
//   to={"/examples"}
//   className={classnames(styles.nav_item, {
//     [styles.active]: location.pathname === "/examples",
//   })}
// >
//   <Button sx={{ color: "#fff" }}>Примеры</Button>
// </Link>
// <Link
//   to={"/sandbox"}
//   className={classnames(styles.nav_item, {
//     [styles.active]: location.pathname === "/sandbox",
//   })}
// >
//   <Button sx={{ color: "#fff" }}>Песочница</Button>
// </Link>
// </Box>