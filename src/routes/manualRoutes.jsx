import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Program from "../components/program";
import DetailProduk from "../components/detailProduk";

export default function ManualRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="program" element={<Program />} />
      <Route path="produk">
        <Route
          path="parfum-satu"
          element={
            <DetailProduk
              nama="Parfum satu"
              gambar="https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              deskripsi="Parfum yang diracik khusus untuk memikat hati janda"
              link="/produk/parfum-satu"
            />
          }
        />
      </Route>
    </Routes>
  );
}
