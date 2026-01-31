import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center mt-9">
      <h1>404</h1>
      <p>Halaman tidak ditemukan</p>
      <Link to="/">Kembali Kehalaman Home</Link>
    </div>
  );
}

export default NotFound;
