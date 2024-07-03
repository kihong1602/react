import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./routes/Home.jsx";
import Detail from "./routes/Detail.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/movie',
    element: <Detail/>
  }
])

export default function App() {
  return (
      <RouterProvider router={router}/>
  );
}