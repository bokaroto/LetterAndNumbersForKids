import { FaHome, FaList } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NavbarMain() {
  return (
    <nav className="navbar mb-12 shadow-lg bg-purple-500 text-neutral-content p-2">
      <div className="container mx-auto">
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-between">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              <FaHome className="mr-2 w-10 h-10" />
            </Link>
            <Link to="/picker/" className="btn btn-ghost btn-sm rounded-btn">
              <FaList className="mr-2 w-10 h-10" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarMain;
