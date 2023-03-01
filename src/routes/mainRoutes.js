import { createBrowserRouter } from "react-router-dom";
import ChangePass from "../pages/Authentications/ChangePass";
import Forgotten from "../pages/Authentications/Forgotten";
import InfoForm from "../pages/Authentications/InfoForm";
import Login from "../pages/Authentications/Login";
import Otp from "../pages/Authentications/Otp";


import AuthenticationLayout from "../Layout/AuthenticationLayout";


import NotFound from "../pages/shared/NotFound";
import Signup from "../pages/Signup";
import Homepage from "../pages/Home/Homepage/Homepage";

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