import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import GlobalLayout from "./layout/GlobalLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route element={<GlobalLayout />}>

      <Route index element={<Home/>}/>
    </Route>)
  );

  return (
    <p>
      <RouterProvider router={router} />
    </p>
  );
}

export default App;
