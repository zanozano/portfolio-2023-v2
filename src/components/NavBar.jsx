import { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
    AppBar,
    Box,
    Button,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

//css
import './navbar.css'

const drawerWidth = 240;

export const Navbar = ({ root }) => {
    const { window } = root;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    //Drawer
    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            sx={{ textAlign: 'center' }}
        >
            <NavLink to={'/'} style={{ textDecoration: 'none' }}>
                <Typography variant="h6" sx={{ my: 2 }}>
                    zanozano
                </Typography>
            </NavLink>
            <Divider />
            <List>
                {root.slice(1, -1).map((item) => (
                    <ListItemButton
                        component={NavLink}
                        key={item.name}
                        to={item.path}
                        sx={{
                            textAlign: 'left',
                            "&.active": {
                                // Agrega los estilos que deseas aplicar al ListItem activo
                                backgroundColor: "#956",
                            },
                        }}
                    >
                        <ListItemText primary={item.name} />
                    </ListItemButton>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <AppBar component="nav" className='navbar'>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <NavLink to={'/'} style={{ textDecoration: 'none' }}>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                display: { xs: 'none', sm: 'block' }
                            }}
                        >
                            zanozano
                        </Typography>
                    </NavLink>

                    <List sx={{ display: { xs: 'none', sm: 'flex' }, gap: '16px' }}>
                        {root.slice(1, -1).map((item) => (
                            <ListItemButton
                                component={NavLink}
                                key={item.name}
                                to={item.path}
                                sx={{
                                    textAlign: 'center',
                                    "&.active": {
                                        backgroundColor: "#956",
                                    },
                                }}
                            >
                                <ListItemText primary={item.name} />
                            </ListItemButton>
                        ))}
                    </List>

                    <NavLink to="/contact-us" >
                        <Button sx={{ color: '#fff' }}>
                            Contact Us
                        </Button>
                    </NavLink>
                </Toolbar>
            </AppBar>
            {/* Drawer */}
            <Box component="nav">
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
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </>
    );
}

Navbar.propTypes = {
    window: PropTypes.func,
};
