import './style/product.css'

function Product({id,shoesWImg,shoesAlt,title,prodectType,price, onClick}) {


    return (
        <figure className="product" key={id} onClick={onClick} >            
            <div>
                <img src={shoesWImg} alt={shoesAlt} />
            </div>
            <figcaption>
                <h3>{title}</h3>
                <p>{prodectType}</p>
                <h3>{price}</h3>
            </figcaption>
        </figure>
    )
}
export default Product