
import Main from "../Layout/Main";
import ProfileLayout from "../Layout/ProfileLayout";
import Tools from "../Layout/Tools";
import Ask from "../pages/Ask/Ask";
import Find from "../pages/Find/Find";
import Info from "../pages/Profiles/Info";
import UserAsk from "../pages/Profiles/UserAsk";
import CommingSoon from "../pages/shared/Errors/CommingSoon";
import NotFound from "../pages/shared/NotFound";
import Mode from "../pages/ToolsPage/Mode";
import Settings from "../pages/ToolsPage/Settings";

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
                element:<Find/>
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
},{
    path:'/users/info',
    element: <Info/>
},{
    path:'/users/ask',
    element:<UserAsk/>
}
        ]
    },

    // tools layout

    {
        path:'/tools',
        element:<Tools/>,
        children:[
            {
                path:'*',
                element:<CommingSoon/>,

            },
            {
                path:'/tools/settings',
                element:<Settings/>

            },
            {
                path:'/tools/mode',
                element:<Mode/>

            },
        ]
    }


])
export default routes