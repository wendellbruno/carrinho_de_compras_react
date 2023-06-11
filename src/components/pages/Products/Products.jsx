import React, {useEffect, useContext} from 'react';
import './Products.css';
import fetchProducts from '../../../api/fetchProducts';
import ProductCard from './ProductCard/ProductCard';
import Loading from '../../Loading/Loading';
import AppContext from '../../../context/AppContext';

function Products() {

  const {products, setProducts, loading, setLoading} = useContext(AppContext);


  //redezira sempre que a pagina é criada
  useEffect(() =>{
    fetchProducts('all')
      .then((response) => {
        setProducts(response);
        setLoading(false);
      });
  },[]);

  return ( 

    (loading ? <Loading /> :
      <section className="products container">
        {
          products.map((element) => <ProductCard 
            key={element.id}
            data={element}
          />)
        }
      </section>
    )

    
  );
}

export default Products;
