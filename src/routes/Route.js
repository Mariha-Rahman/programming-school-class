import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Classes from "../pages/Classes/Classes";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/all-courses')
        },
        {
            path: '/classes',
            element: <PrivateRoute> <Classes></Classes> </PrivateRoute>,
            loader: () => fetch('http://localhost:5000/classes')
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
    ]
}])