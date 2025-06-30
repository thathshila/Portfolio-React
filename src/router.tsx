import {createBrowserRouter} from "react-router-dom";
import Layout from "./pages/LayoutPage"
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage'
import ProjectPage from "./pages/ProjectPage.tsx";
import Contact from "./pages/ContactPage.tsx";
const router = createBrowserRouter([

    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                index: true,
                element:<HomePage/>
            },
            {
                path: '/home',
                element:<HomePage/>
            },
            {
                path: '/about',
                element:<AboutPage/>
            },
            {
                path: '/project',
                element:<ProjectPage/>
            },
            {
                path: '/contact',
                element:<Contact/>
            }
        ]
    }
])

export default router