import React, { useContext, useEffect } from 'react'
import { MyContext } from '../context/MycontextApplication'
import axios from 'axios';
import ProductCard from '../components/ProductCard';


const Shop = () => {
  let {Products, setProducts} =  useContext(MyContext);
  
  useEffect(() => {
    (async()=> {
        let response = await axios.get('https://api.escuelajs.co/api/v1/products');
        console.log(response.data);
        setProducts(response.data);
        
    })()
  }, [])
  
  return (
    <div className='grid grid-cols-5 gap-2 p-5 bg-black'>
      {Products.map((elem) => {
  return <ProductCard key={elem.id} product={elem} />;
})}
    </div>
  )
}

export default Shop
