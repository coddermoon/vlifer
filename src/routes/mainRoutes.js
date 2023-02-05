import { createBrowserRouter } from "react-router-dom";
import ChangePass from "../Apps/Vlifer/Pages/Authentications/ChangePass";
import Forgotten from "../Apps/Vlifer/Pages/Authentications/Forgotten";
import InfoForm from "../Apps/Vlifer/Pages/Authentications/InfoForm";
import AuthenticationLayout from "../Layout/AuthenticationLayout";

export const mainRoutes = createBrowserRouter([
{
    path: '/',
    element: <AuthenticationLayout/>,
    children:[
        {
            path:'/recovery',
            element:<Forgotten/>,
        },{
            path:'/change-password',
            element:<ChangePass/>,
        }
        ,{
            path:'/personal-information',
            element:<InfoForm/>,
        }
    ]
}
])