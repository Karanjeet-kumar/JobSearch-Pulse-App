import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/HomePage";
import JobPage from "./components/JobPage";
import BrowsePage from "./components/BrowsePage";
import ProfilePage from "./components/ProfilePage";
import JobDescription from "./components/JobDescription";
import CompaniesPage from "./components/admin/CompaniesPage";
import CompanyCreate from "./components/admin/CompanyCreate";
import CompanySetup from "./components/admin/CompanySetup";
import AdminJobsPage from "./components/admin/AdmimnJobsPage";
import PostJob from "./components/admin/PostJob";
const appRouter = createBrowserRouter([
  // Client Side
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
    path: "/description/:id",
    element: <JobDescription />,
  },
  {
    path: "/browse",
    element: <BrowsePage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },

  // Admin side
  {
    path: "/admin/companies",
    element: <CompaniesPage />,
  },
  {
    path: "/admin/companies/create",
    element: <CompanyCreate />,
  },
  {
    path: "/admin/companies/:id",
    element: <CompanySetup />,
  },
  {
    path: "/admin/jobs",
    element: <AdminJobsPage />,
  },
  {
    path: "/admin/jobs/create",
    element: <PostJob />,
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
