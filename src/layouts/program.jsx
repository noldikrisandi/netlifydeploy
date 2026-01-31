import CardProgram from "../components/cardProgram";

function Program() {
  return (
    <div className="w-full">
      <h2 className="text-center lg:font-bold">Ini adalah Produk Kami</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 p-5">
        <CardProgram
          nama="Farfum satu"
          gambar="https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          deskripsi="parfum yang diracik khusus untuk memikat hati janda"
          link="/produk/parfum-satu"
        />
        <CardProgram
          nama="Farfum dua"
          gambar="https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          deskripsi="parfum yang diracik khusus untuk memikat hati janda"
          link="/produk/parfum-dua"
        />
        <CardProgram
          nama="Farfum tiga"
          gambar="https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          deskripsi="parfum yang diracik khusus untuk memikat hati janda"
          link="/produk/parfum-tiga"
        />
        <CardProgram
          nama="Farfum empat"
          gambar="https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          deskripsi="parfum yang diracik khusus untuk memikat hati janda"
          link="/produk/parfum-empat"
        />
        <CardProgram
          nama="Farfum lima"
          gambar="https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          deskripsi="parfum yang diracik khusus untuk memikat hati janda"
          link="/produk/parfum-lima"
        />
      </div>
    </div>
  );
}

export default Program;
