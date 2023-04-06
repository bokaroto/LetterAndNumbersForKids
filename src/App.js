import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MyProvider } from './context/Context';
import NavbarMain from './components/NavbarMain';
import Home from './pages/Home';
import Picker from './pages/Picker';
import Language from './pages/Language';
import Drawing from './pages/Drawing';
import NotFound from './pages/NotFound';

function App() {
  return (
    <MyProvider>
      <Router>
        <NavbarMain />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/language/:languageId" element={<Language />} />
          <Route path="/drawing/:letterId" element={<Drawing />} />
          <Route path="/picker/" element={<Picker />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </MyProvider>
  );
}

export default App;
