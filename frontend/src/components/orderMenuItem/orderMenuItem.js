import {useDispatch} from 'react-redux'
import { removeItem } from '../../features/cartSlice'
import './orderMenuItem.css'

function OrderMenuItem({info}) {
    const {image, price, name, count} = info
    const dispatch = useDispatch()
    return(
        <div className='orderMenuItem'>
            <img className='omimg' src={image} alt="product"/>
            <div className='productInfo'>
                <h3>{name}</h3>
                <h4>${price}</h4>
                <h4>{count}x</h4>
                <div onClick={() => dispatch(removeItem({name: name}))} className='removeButton'><img src={process.env.PUBLIC_URL + '/trash.svg'} alt='trashcan'/></div>
            </div>
        </div>
    )
}

export default OrderMenuItem