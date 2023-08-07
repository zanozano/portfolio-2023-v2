import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { root } from './routes/root';
//Style
import customTheme from './styles/customTheme';
import './styles/global.css';

export const App = () => {
    // Check if the current URL matches any of the defined routes
    const isRouteMatched = root.some((route) => window.location.pathname === route.path);

    return (
        <ThemeProvider theme={customTheme}>
            <CssBaseline />
            {/* App here */}
            <BrowserRouter>
                <Navbar root={root} />
                <Routes>
                    {root.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<route.component />}
                        />
                    ))}
                    {!isRouteMatched &&
                        <Route path="*" element={<Navigate to="/" />} />
                    }
                </Routes>
                <Footer />
            </BrowserRouter>
        </ThemeProvider>
    );
};
