
import Main from "../Layout/Main";
import ProfileLayout from "../Layout/ProfileLayout";
import Ask from "../pages/Ask/Ask";
import CommingSoon from "../pages/shared/Errors/CommingSoon";
import NotFound from "../pages/shared/NotFound";

const { createBrowserRouter } = require("react-router-dom");

const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        children: [
            {
                path:'*',
                element: <NotFound/>
            },
            {
                path:'/ask',
                element:<Ask/>
            },
            {
                path:'/find',
                element:<Ask/>
            },

        ],
    },
    // user profile layout
    {
        path:'/users',
        element:<ProfileLayout/>,
        children:[
{
    path:'*',
    element:<CommingSoon/>
}
        ]
    }


])
export default routes