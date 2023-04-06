import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      NotFound
      <Link className="btn btn-primary btn-lg" to="/">
        <FaHome className="mr-2" />
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
