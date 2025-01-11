import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import People from './pages/People';
import Films from './pages/Films/Films.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/films" element={<Films />} />
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
