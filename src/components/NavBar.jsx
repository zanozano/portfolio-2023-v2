import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { CloseIcon, MenuIcon } from '../icons';


export const Navbar = ({ root }) => {

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [backdropOpen, setBackdropOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
        setBackdropOpen(!backdropOpen);

        // Toggle body scroll class
        if (!backdropOpen) {
            document.body.classList.add('body-no-scroll');
        } else {
            document.body.classList.remove('body-no-scroll');
        }
    };

    //navbar
    useEffect(() => {
        const navbar = document.querySelector(".navbar");

        if (navbar) {
            window.addEventListener("scroll", () => {
                if (window.scrollY > 20) {
                    navbar.classList.add('navbar--colapse');
                } else {
                    navbar.classList.remove('navbar--colapse');
                }
            });
        }

        // Toggle drawer class
        const drawer = document.querySelector('.drawer');
        if (drawer) {
            drawer.classList.toggle('drawer--colapse', !backdropOpen);
        }
    }, []);

    //scroll
    useEffect(() => {
        return () => {
            document.body.classList.remove('body-no-scroll');
        };
    }, []);

    return (
        <>
            <div className='navbar'>

                <button
                    onClick={toggleDrawer}
                    aria-label='Click to Open Menu'
                    className='navbar__menu navbar__icon'
                >
                    <MenuIcon color='#ffff' />
                </button>

                <NavLink to={'/'}>
                    <p>
                        zanozano
                    </p>
                </NavLink>

                <ul className='navbar__ul'>
                    {root.slice(1, -1).map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                        >
                            <li className='navbar__li'>
                                {item.name}
                            </li>
                        </NavLink>
                    ))}
                </ul>

                <button className='navbar__contact' aria-label="Contact Us">
                    <NavLink to="/contact" >
                        Contact
                    </NavLink>
                </button>

            </div>

            {/* drawer */}
            {
                drawerOpen && (
                    <div className={`drawer ${drawerOpen ? 'drawer--colapse' : ''}`}>

                        <button
                            className='drawer__icon'
                            aria-label='Click to Close Menu'
                            onClick={toggleDrawer}
                        >
                            <CloseIcon color='#ffff' />
                        </button>

                        <ul className='drawer__ul'>
                            {root.slice(1, -1).map((item) => (
                                <NavLink
                                    key={item.name}
                                    onClick={toggleDrawer}
                                    to={item.path}
                                >
                                    <li className='drawer__li'>
                                        {item.name}
                                    </li>
                                </NavLink>
                            ))}
                        </ul>
                    </div>
                )
            }
            {/* Backdrop */}
            {backdropOpen && <div className='backdrop'></div>}
        </>
    );
}

