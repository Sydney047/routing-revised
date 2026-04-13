import App from "../App";
import Profile from "../components/profile";
import ErrorElement from "../components/errorComponent";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorElement />,
    },
    {
        path: "/profile/:name?",
        element: <Profile />,
    },
]

export default routes;