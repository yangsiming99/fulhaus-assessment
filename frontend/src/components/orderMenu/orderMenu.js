import {useSelector, useDispatch} from 'react-redux'
import {clear} from '../../features/cartSlice'
import OrderMenuItem from '../orderMenuItem/orderMenuItem'
import './orderMenu.css'

function OrderMenu({action}) {
    const list = useSelector((state) => state.cart.list)
    const price = useSelector((state) => state.cart.price)
    const dispatch = useDispatch()

    const checkout = () => {
        alert(`You spent $${price}`)
        dispatch(clear())
        action(false)
    }

    return(
        <div className='orderMenu'>
            <h1>Orders</h1>
            <div className='itemsList'>
                {list.map((val, key) => <OrderMenuItem key={key} info={val}/>)}
            </div>
            <div className='bottomBar'>
                <h1>Total: ${price}</h1>
                <button onClick={()=>checkout()} className='checkout'>Checkout</button>     
            </div>
        </div>
    )
}

export default OrderMenu