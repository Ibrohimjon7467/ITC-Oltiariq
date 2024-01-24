import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import RootLayout from './layout/RootLayout';

function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        }
      ]
    }
  ])

  return <RouterProvider router={routes} />
}

export default App