import './index.css'

const ProductItem= ({img, name, brand, price})=>{
    return (
        <li className='product'>
            <img src={img} alt='img'
            className='productImg'></img>
            <h4 >{name}</h4>
            <h5>{brand}</h5>
            <p> ₹ {price}</p>
            <div className='productCartdiv'>
                <button type='button'className='productCart'>Buy Now</button>
            </div>
        </li>
    )
}

export default ProductItem