import {createBrowserRouter} from "react-router-dom";
import Layout from "./pages/LayoutPage"
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage'
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
            }
        ]
    }
])

export default router