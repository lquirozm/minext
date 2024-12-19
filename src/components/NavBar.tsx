
import Link from "next/link";
import { IoLogOutOutline } from "react-icons/io5";
import { SiPlanetscale } from "react-icons/si";

export default function NavBar() {
  return (
    <>
      <nav className="bg-black text-white px-20 py-3 flex justify-between items-center font-sans">
        <div className="flex gap-4 items-center">
          <SiPlanetscale color="blue" size={40}/>
          <Link href={'/'}><h2 className="font-bold text-xl">Crypto Planet</h2></Link>
        </div>
        <ul className="flex gap-6 font-sans cursor-pointer">
          <li className=" hover:text-purple-700 hover:scale-110">Market</li>
          <li className=" hover:text-purple-700 hover:scale-110">Watchlist</li>
          <Link href={'/productos'}>
            <li className=" hover:text-purple-700 hover:scale-110">Portfolio</li>
          </Link>
          <li className=" hover:text-purple-700 hover:scale-110">Learn</li>
        </ul>
        <div className="flex gap-10 items-center">
          <Link href={'/login'} className="hover:text-blue-600">
            Sign in
          </Link>
          <Link href={'/register'} className="px-6 py-2 bg-blue-600 rounded-lg">
            Register
          </Link>
        </div>
      </nav>
    </>
  );
}
