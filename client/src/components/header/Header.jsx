import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { selectCartCount } from '../../store/CartSlice';
import { Box } from '@mui/material';
import AccountLink from '../Account/AccountLink';
import { useSelector } from 'react-redux';
import Logo from "../../../public/images/logo.png";

const Header = () => {
    const cartCount = useSelector(selectCartCount);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar
            position="fixed"
            className="pl-4 pr-4 sm:pl-10 sm:pr-10 h-[60px] bg-white shadow-sm"
            style={{ boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)', backgroundColor: 'white' }}
        >
            <Toolbar className="flex justify-between items-center h-full">
                <div className="flex items-center space-x-4">
                    {isMobile && (
                        <IconButton edge="start" onClick={handleMenu}>
                            <MenuIcon className="text-black" />
                        </IconButton>
                    )}
                    <Box className="flex items-center">
                        <Link to="/">
                            <img className="w-14 h-16" src={Logo} alt="logo" />
                        </Link>
                    </Box>
                </div>

                {!isMobile && (
                    <div className="flex items-center space-x-6 text-lg font-medium text-black gap-4">
                        <Link className="hover:text-gray-600" to="/">Home</Link>
                        <Link className="hover:text-gray-600" to="/pricing">Pricing</Link>
                        <Link className="hover:text-gray-600" to="/Works">Our Work</Link>
                        <Link className="hover:text-gray-600" to="/catalog">Catalog</Link>
                        <Link className="hover:text-gray-600" to="/transform">Transformation</Link>
                        <Link className="hover:text-gray-600" to="/about">About</Link>
                    </div>
                )}

                <div className="flex items-center space-x-4 text-black">
                    <AccountLink />
                    <Link to="/cart">
                        <IconButton>
                            <Badge badgeContent={cartCount} color="secondary" overlap="rectangular">
                                <ShoppingCart className="text-black" />
                            </Badge>
                        </IconButton>
                    </Link>
                </div>

                {isMobile && (
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>
                            <Link to="/">Home</Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Link className="hover:text-gray-600" to="/pricing">Pricing</Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Link className="hover:text-gray-600" to="/Works">Our Work</Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Link className="hover:text-gray-600" to="/catalog">Catalog</Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Link className="hover:text-gray-600" to="/transform">Transformation</Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Link className="hover:text-gray-600" to="/about">About</Link>
                        </MenuItem>
                    </Menu>
                )}
            </Toolbar>
        </AppBar>
    );
};


export default Header;
