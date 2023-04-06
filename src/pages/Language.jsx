import { useLocation } from 'react-router-dom';
import CharacterList from '../components/CharacterList';

function Language() {
  const location = useLocation();
  const { letters, numbers } = location.state?.data;
  return (
    <div className="flex-col p-2 w-full">
      <CharacterList data={letters} name="letters" />
      <CharacterList data={numbers} name="numbers" />
    </div>
  );
}

export default Language;
