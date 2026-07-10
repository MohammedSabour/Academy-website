import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

const router = createBrowserRouter([
    // public routes
    {
        path: '/',
        element: <Home />
    },
]);

export default router;
