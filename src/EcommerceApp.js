import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
// import Alert from './components/alert/Alert'
import Header from './components/header/Header';
import Search from './pages/Search';
import Home from './pages/Home';
import Us from './pages/Us';
import ItemListContainer from './components/item-list/ItemListContainer';
import ItemDetailContainer from './components/item-detail/ItemDetailContainer';
import Buy from './pages/Buy';
import Policies from './pages/Policies';
import Contact from './pages/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <body className="App container-fluid">
          <Header />
          <Switch>
            <Route exact path="/search" component={Search} />
            <Route exact path='/' component={Home} />
            <Route exact path='/us' component={Us} />
            <Route exact path='/policies' component={Policies} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/buy' component={Buy} />
            <Route exact path='/products' component={ItemListContainer} />
            <Route exact path="/:category" component={ItemListContainer} />
            <Route exact path="/products/:id" component={ItemDetailContainer} />
          </Switch>
          <Footer />
        </body>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;