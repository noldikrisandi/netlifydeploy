import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="w-full p-4 grid grid-cols-2 bg-blue-500 text-white">
      <p className="text-xl">Menu Saya</p>
      <div className="flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/program">Program</Link>
        <Link to="/sembarang">Sembarang</Link>
      </div>
    </div>
  );
}

export default Menu;
