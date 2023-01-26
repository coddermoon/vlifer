
import Main from "../Layout/Main";
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
            }
        ],
    }

])
export default routes