import database from '../data/data';
import Language from '../components/Language';

const Home = () => {
  return (
    <div>
      <div className="flex-col p-2 w-full">
        {database.map((lang) => (
          <Language key={lang.language} data={lang} />
        ))}
      </div>
    </div>
  );
};

export default Home;
