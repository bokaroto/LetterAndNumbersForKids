// import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import LetterItem from '../components/LetterItem';
import myContext from '../context/Context';

function Picker() {
  const { contextData } = useContext(myContext);

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 p-2">
        {contextData.map((letterData) => (
          <LetterItem key={letterData.letter} data={letterData} />
        ))}
      </div>
    </div>
  );
}

export default Picker;
