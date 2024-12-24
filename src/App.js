import { Routes, Route } from 'react-router-dom';
import CardPage from './Pages/CardPage';
import DetailPage from './Pages/DetailPage';
import Notfound from './Components/Notfound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CardPage />} />
      <Route path="/doctor-profile/:id" element={<DetailPage />} />
      <Route path="/404" element={<Notfound />} />
      
    </Routes>
  );
}

export default App;
