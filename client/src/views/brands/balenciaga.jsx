import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { getProducts } from "../../redux/products/productsAction";
import Product from "../../components/Product/Product";
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import VanillaTilt from 'vanilla-tilt';
import './Brands.css';

const Balenciaga = () => {

const element = document.querySelectorAll(".Shoes");
VanillaTilt.init(element);

const dispatch = useDispatch();

useEffect(() => {
    dispatch(getProducts());
    
}, [dispatch]);

const { products } = useSelector((state) => state.productReducer);

const data = products.filter(e => Object.values(e.Brand).includes('Balenciaga'))

const [currPage, setCurrPage] = useState(1);
const [cardsxPage, setcardsxPage] = useState(10);

const lastProduct = currPage * cardsxPage
const firstProduct =  lastProduct - cardsxPage;

const currProducts = data.slice(firstProduct, lastProduct);

    return(
        <div className="BrandContainer">
            <NavBar />
            <div className="BrandImageBalenciaga">
            </div>
            <div className="BrandProducts">
                {
                    currProducts && currProducts.map(e => 
                        <div className="Shoes" data-tilt >
                            {
                                <Product 
                                id={e.id}
                                image={e.image}
                                name={e.name}
                                price={e.price}
                                status={e.status}
                                description={e.description}
                                Sizes = {e.Sizes}  
                                onSale={e.onSale}
                                discounts={e.Discounts}
                                />
                            }
                        </div>
                    )
                }
            </div>
            <Footer />
        </div>
    )
}

export default Balenciaga