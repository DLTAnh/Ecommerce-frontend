import * as React from 'react';
import "./Header.css"
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../../images/logo.png";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const pages = ['Home', 'Products', 'Contacts', 'About'];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  



  return (
    <AppBar color="inherit" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <img src={logo} className='logoHeader' alt='logo' />
          </Typography>


          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <img src={logo} className='logoHeader' alt='logo'/>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            <Link to="/" className='btnLink'>
              <Button
                
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                Home
              </Button>
            </Link>
            <Link to="/products" className='btnLink'>
              <Button
                
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                Products
              </Button>
            </Link>
            <Link to="/contact" className='btnLink'>
              <Button
                
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                Contacts
              </Button>
            </Link>
            <Link to="/about" className='btnLink'>
              <Button
                
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                About
              </Button>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link to="/search">
              <IconButton
                size="large"
                color="default"
              >
                <SearchIcon />
              </IconButton>
            </Link>
            <Link to="/cart">
              <IconButton
                size="large"
                color="default"
              >
                <ShoppingBagIcon />
              </IconButton>
            </Link>
            <Link to="/login">
              <IconButton
                size="large"
                edge="end"
                color="default"
              >
                <AccountCircleIcon />
              </IconButton>
            </Link>
          </Box>


        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
