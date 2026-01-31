import { Link } from "react-router-dom";

function CardProgram(props) {
  return (
    <div className="bg-gray-100 p-3 rounded">
      <h3>{props.nama}</h3>
      <img src={props.gambar} alt={props.alternatif || "gambar produk"} />
      <p>{props.deskripsi}</p>
      <div className="text-center mt-3">
        <Link to={props.link} className="bg-blue-400 py-1 px-9 inline-block rounded-sm text-white hover:bg-blue-500">
          Detail
        </Link>
      </div>
    </div>
  );
}

export default CardProgram;
