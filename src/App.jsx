import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import "./App.css";
import AuthenticationPage from "./pages/AuthenticationPage";
import HomePage from "./pages/HomePage";
import { action as AuthAction } from "./pages/AuthenticationPage";
import ErrorPage from "./pages/Error";
//import { loadEvents } from "./pages/HomePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <AuthenticationPage />, action: AuthAction },
      { path: "home", element: <HomePage /> /*loader: loadEvents*/  },
    ],
    errorElement: <ErrorPage/>
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
