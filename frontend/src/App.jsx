import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/HomePage";
import JobPage from "./components/JobPage";
import BrowsePage from "./components/BrowsePage";
import ProfilePage from "./components/ProfilePage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/jobs",
    element: <JobPage />,
  },
  {
    path: "/browse",
    element: <BrowsePage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
