import { createBrowserRouter } from "react-router-dom";
import Categories from "../Components/Pages/Categories/Categories";
import Home from "../Components/Pages/Home/Home";
import News from "../Components/Pages/News/News";
import Main from "../Layout/Main";

export const routers = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [

            { path: '/', element: <Home></Home> },
            { path: '/category/:id', element: <Categories></Categories> },
            { path: '/news/:id', element: <News></News> }
        ]
    }
])