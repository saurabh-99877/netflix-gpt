// import Header from "./Header";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';

const Body = () => {
    const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/browse",
        element: <Browse />
    }
 ])

   

    return (
        <div className="select-none">
         <RouterProvider router = {appRouter} />
        </div>
    )
};
export default Body;