import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';

const router = createBrowserRouter([
    // public routes
    {
        path: '/',
        element: <Home />
    },
    
    {
        path: '/courses',
        element: <Courses />
    },
]);

export default router;
