import React, {useState, useContext} from 'react';
import {BsSearch} from 'react-icons/bs';
import fetchProducts from '../../../api/fetchProducts';
import './SearchBar.css';
import AppContext from '../../../context/AppContext';

function SearchBar(){

  const {setProducts, setLoading} = useContext(AppContext);
  const [searchValue, setSearchValue] = useState('');

  const heandSearch = async (event) =>{
    event.preventDefault();
    setLoading(true);

    const products = await fetchProducts(searchValue);
    setProducts(products);
    setLoading(false);
    setSearchValue('');
  };

  return(
    <form className="search_bar" onSubmit={heandSearch}>
      <input 
        type="search" 
        placeholder="Buscar Produtos" 
        className="search__input"
        onChange={ e => setSearchValue(e.target.value)}
        value={searchValue}
        required
      />
      <button 
        type="submit" 
        className="search__button">
        <BsSearch />      
      </button>
    </form>
  );
}

export default SearchBar;
