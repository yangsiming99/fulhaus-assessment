import './orderButton.css'

function OrderButton({action}) {
    return(
        <div onClick={()=>action()} className='orderButton'>
            <img src={process.env.PUBLIC_URL + '/cart.svg'}/>
        </div>
    )
}

export default  OrderButton