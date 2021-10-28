import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import HomeView from "./views/HomeView.js";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import './App.css';
import FormProduct from './components/Forms/CreateProduct.jsx';
import FormCategory from './components/Forms/CreateCategory';
import FormBrand from './components/Forms/CreateBrand';
import FormRegister from './components/Register/FormRegister.jsx';
import FormLogin from './components/Login/FormLogin.jsx';
function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
              <Route exact path="/" component={HomeView} />
              <Route exact path ="/login" component={FormLogin} />
              <Route exact path = "/register" component={FormRegister}/>
              <Route exact path="/product/:id" component={ProductDetail} />
              <Route exact path="/admin/createProduct" component={FormProduct} />
              <Route exact path="/admin/createCategory" component={FormCategory} />
              <Route exact path="/admin/createBrand" component={FormBrand} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
