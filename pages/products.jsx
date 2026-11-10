import { useNavigate } from 'react-router-dom'

import './style/women.css'

import Product from '../components/product'

function Women({products,gender}){
    const navigate = useNavigate()

    return (
        <main id='product'>
            <aside>
                <p>러닝/신발</p>
                <h2>{gender} 러닝 신발</h2>
                <div className="fillter_btn">
                    <button>필터</button>
                </div>
            </aside>
            <section className='product_wrap'>                
                {products.map((item)=>(
                    <Product  
                       id={item.id} 
                       shoesWImg = {item.shoesWImg}
                       shoesAlt = {item.shoesAlt}
                       price = {item.price}
                       title = {item.title}
                       prodectType = {item.prodectType}
                       onClick={()=>{navigate('/pages/productDetail')}}
                    />
                ))} 
            </section>
        </main>
    )
}
export default Women