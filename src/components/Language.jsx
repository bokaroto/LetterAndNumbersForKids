import { Link } from 'react-router-dom';
import serbian from '../assets/serbian.webp';
import english from '../assets/english.png';

function Language({ data }) {
  return (
    <div className="w-full rounded-md bg-purple-500 mr-2 mb-6">
      <Link
        to={{
          pathname: `/language/${data.language}`,
        }}
        state={data}
      >
        <img
          src={data.language === 'eng' ? english : serbian}
          alt={data.language}
          className="text-center mx-auto"
        />
      </Link>
    </div>
  );
}

export default Language;
