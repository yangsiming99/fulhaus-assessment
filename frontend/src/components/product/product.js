import {useDispatch} from 'react-redux'
import {addItem} from '../../features/cartSlice'
import './product.css'

function Product({data}) {
    const dispatch = useDispatch()
    return(
        <div className='itemCard'>
            <img className='productImage' src={data.imageURLs[0]} alt='product'/>
            <h4>{data.fulhausProductName}</h4>
            <h4 className='priceDisp'>${data.retailPrice}</h4>
            <div
                onClick={()=>dispatch(addItem({
                    image: data.imageURLs[0],
                    price: data.retailPrice,
                    name: data.fulhausProductName
                }))}
                className='shopButton'>
                <img src={process.env.PUBLIC_URL + '/plus.svg'} alt='plus'/>
            </div>
        </div>
    )
}

export default Product