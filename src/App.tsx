import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Home } from './components/Home/Home';
import { Cart } from './components/Cart/Cart';
import { Header } from './components/Header/Header';
import { EmptyCart } from './components/Cart/EmptyCart/EmptyCart';
import { PizzaInfo } from './components/PizzaInfo/PizzaInfo';
import { PageNotFound } from './components/pages/404/PageNotFound';

function App() {
  return (
    <div className={'app_container'}>
      <div className={'wrapper'}>
        <Header />
        <div className={'app_content'}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/emptycart" element={<EmptyCart />} />
            <Route path="/pizzainfo/:id" element={<PizzaInfo />} />
            <Route path="/404" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
