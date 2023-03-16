import { useEffect, useState } from 'react'
import './App.css';

import BigImage from './components/bigImage/bigImage';
import Product from './components/product/product';
import OrderButton from './components/orderButton/orderButton';
import OrderMenu from './components/orderMenu/orderMenu';

function App() {
  const [products, setProducts] = useState([])
  const [showOrders, setShowOrders] = useState(false)
  
  useEffect(() => {
    const getItems = async () => {
      await fetch('/api/products-service/products/website/CAD?page=0&limit=6')
        .then(res => res.json())
        .then(resp => {
          setProducts(resp.data.products)
        })
    }
    getItems()
  }, [])

  const handleOrders = () => {
    setShowOrders(!showOrders)
    console.log(window.innerWidth)
  }

  return (
    <div className='App'>
      <BigImage bgi='https://s3.amazonaws.com/fhphotos/235532-001_ESS_1.jpg'/>
      <div className='productList' style={{display: showOrders && window.innerHeight <= 900? 'none' : 'flex'}}>
        {products.map((val, key) => (<Product key={key} data={val}/>))}
      </div>
      <OrderButton action={handleOrders}/>
      {showOrders ? <OrderMenu action={setShowOrders}/> : <></>}
    </div>
  );
}

export default App;
