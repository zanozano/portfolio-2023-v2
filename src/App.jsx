import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { root } from './routes/root';


export const App = () => {
    // Check if the current URL matches any of the defined routes
    const isRouteMatched = root.some((route) => window.location.pathname === route.path);

    return (
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
    );
};
