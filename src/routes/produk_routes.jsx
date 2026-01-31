import DetailProduk from "../components/detailProduk";
import Produk from "./produk";


const produkRoutes = {
  path: "produk",
  element: <Produk />,
  children: [
    {
      path: "parfum-satu",
      element: (
        <DetailProduk
          nama="Parfum satu"
          gambar="https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          deskripsi="Parfum yang diracik khusus untuk memikat hati janda"
          link="/produk/parfum-satu"
        />
      ),
    },
    {
      path: "parfum-dua",
      element: (
        <DetailProduk
          nama="Parfum dua"
          gambar="https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          deskripsi="Parfum yang diracik khusus untuk memikat hati janda"
          link="/produk/parfum-dua"
        />
      ),
    },
  ],
};

export default produkRoutes;
