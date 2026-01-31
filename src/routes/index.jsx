import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import produkRoutes from "./produk_routes";
import Program from "../components/program";

export default function AppRoutes() {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "program", element: <Program /> },
    produkRoutes,
    { path: "*", element: <NotFound /> },
  ]);
}
