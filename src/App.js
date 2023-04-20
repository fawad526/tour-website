import './App.css';
import Navbar from './componenets/Navbar';
import Home from './componenets/pages/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Services from './componenets/pages/Services';
import Product from './componenets/pages/Product';
import SignUp from './componenets/pages/SignUp';

function App() {
  return (
            <>
            <BrowserRouter>
            <Navbar/>
            <Routes>
              
              <Route path='/' exact Component={Home}/>
              <Route path='/services'  Component={Services}/>
              <Route path='/products'  Component={Product}/>
              <Route path='/signup'  exact Component={SignUp}/>

            </Routes>
            </BrowserRouter>
            </>
  );
}

export default App;
