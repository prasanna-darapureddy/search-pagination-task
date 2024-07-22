import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductSearch from './components/home/ProductsSearch';
import PaginationPage from './components/pagination/Pagination';
import './App.css';
import Header from './components/header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<PaginationPage />} />
        <Route path='/products' element={<ProductSearch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
