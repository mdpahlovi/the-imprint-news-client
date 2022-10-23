import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            children: [
                {
                    path: "/",
                    element: (
                        <div className="my-container h-screen flex items-center gap-5">
                            <Link to="/signin" className="btn btn-primary">
                                Sign In
                            </Link>
                            <Link to="/signup" className="btn btn-primary">
                                Sign Up
                            </Link>
                        </div>
                    ),
                },
                {
                    path: "/signin",
                    element: <Signin />,
                },
                {
                    path: "/signup",
                    element: <Signup />,
                },
            ],
        },
    ]);
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
