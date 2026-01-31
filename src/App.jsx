import { Route, Routes } from "react-router-dom";
import Menu from "./layouts/menu";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import DetailProduk from "./components/detailProduk";
import Program from "./layouts/program";
// import AppRoutes from "./routes";
// import ManualRoutes from "./routes/manualRoutes";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/program" element={<Program />} />

        {/* routing untuk produk */}
        <Route
          path="/produk/parfum-satu"
          element={
            <DetailProduk
              nama="Parfum satu"
              gambar="https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              deskripsi="Parfum yang diracik khusus untuk memikat hati janda"
              link="https://wa.me/6282344445555?text=saya%20mau%20beli%20parfum%20satu"
            />
          }
        />
        <Route
          path="/produk/parfum-dua"
          element={
            <DetailProduk
              nama="Parfum dua"
              gambar="https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              deskripsi="Parfum terbaik ke tiga di dunia"
              link="https://wa.me/6282344445555?text=saya%20mau%20beli%20parfum%dua"
            />
          }
        />
        
      </Routes>
      {/* <ManualRoutes/> */}
      {/* <AppRoutes /> */}
    </>
  );
}

export default App;
