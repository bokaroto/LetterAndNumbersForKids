import { Link } from 'react-router-dom';

function LetterItem({ data }) {
  return (
    <div className="rounded-md bg-purple-500 p-4 border border-md flex center ">
      <Link
        to={{
          pathname: `/drawing/${data.letter}`,
        }}
        state={data}
      >
        {data.letter}
      </Link>
    </div>
  );
}

export default LetterItem;
