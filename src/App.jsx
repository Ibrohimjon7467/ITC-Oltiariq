// rrd
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './pages/Home';
import RootLayout from './layout/RootLayout';
import Admin from './pages/Admin';
import AdminLayout from './layout/AdminLayout';

function App() {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          index: true,
          element: <Admin />
        },
      ],
    },
  ])

  return <RouterProvider router={routes} />
}

export default App