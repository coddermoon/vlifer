
import Main from "../Layout/Main";
import Ask from "../pages/Ask/Ask";
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
            }
        ],
    }

])
export default routes