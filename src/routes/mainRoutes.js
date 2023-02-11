import { createBrowserRouter } from "react-router-dom";
import ChangePass from "../Apps/Vlifer/Pages/Authentications/ChangePass";
import Forgotten from "../Apps/Vlifer/Pages/Authentications/Forgotten";
import InfoForm from "../Apps/Vlifer/Pages/Authentications/InfoForm";
import Login from "../Apps/Vlifer/Pages/Authentications/Login";
import Otp from "../Apps/Vlifer/Pages/Authentications/Otp";
import Homepage from "../Apps/Vlifer/Pages/Home/Homepage/Homepage";
import Signup from "../Apps/Vlifer/Pages/Signup";
import AuthenticationLayout from "../Layout/AuthenticationLayout";


import NotFound from "../pages/shared/NotFound";

export const mainRoutes = createBrowserRouter([
{
    path: '/',
    element: <AuthenticationLayout/>,
    children:[
        {
            path:'/',
            element: <Homepage/>
        },
        {
            path:'/login',
            element:<Login/>,
        },
        {
            path:'/register',
            element:<Signup/>,
        },
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
        },
    
        {
            path:'/otp-verification',
            element:<Otp/>,
        },
        {
            path:'*',
            element:<NotFound/>
        }
    ]
}
])