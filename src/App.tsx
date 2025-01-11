import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import People from './pages/People';
import Films from './pages/Films/Films.tsx';

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/people"
        element={<People />}
      />
      <Route
        path="/films"
        element={<Films />}
      />
    </Routes>
  );
};

export default App;
