import { Link } from 'react-router-dom';
import { useContext } from 'react';
import myContext from '../context/Context';
import letters from '../assets/letters.avif';
import numbers from '../assets/numbers.jpeg';

function CharacterList({ data, name }) {
  const { dispatch } = useContext(myContext);

  return (
    <div className="w-full rounded-md bg-purple-500 mr-2 mb-6">
      <Link
        to={{
          pathname: `/picker/`,
        }}
        state={data}
        onClick={() => dispatch({ type: 'SET_DATA', payload: data })}
      >
        <img
          src={name === 'letters' ? letters : numbers}
          alt={name}
          className="text-center mx-auto"
        />
      </Link>
    </div>
  );
}
export default CharacterList;
