import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HookForm from "./components/react-hook-form";
import Home from "./components/Home";
import Email from "./components/Email";
import Register from "./components/Register";


const router = createBrowserRouter([{

    path: "/",
    element: <App />,
    children: [
        {
            path: "",
            element: <Home />
        },
        {
            path: "register",
            element: <Register />
        },
    ]
}])


function Router() {

    return (
        <RouterProvider router={router} />
    )
};


export default Router;

