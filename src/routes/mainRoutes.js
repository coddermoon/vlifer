import { createBrowserRouter } from "react-router-dom";
import AuthenticationLayout from "../Layout/AuthenticationLayout";

export const mainRoutes = createBrowserRouter([
{
    path: '/',
    element: <AuthenticationLayout/>
}
])