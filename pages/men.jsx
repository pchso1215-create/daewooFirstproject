 import './style/women.css'

import Product from './../components/product' 



function Men({products,gender}){

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
                {products.map((womenS)=>(
                    <Product  
                       id={womenS.id} products
                       shoesWImg = {womenS.shoesWImg}
                       shoesAlt = {womenS.shoesAlt}
                       price = {womenS.price}
                       title = {womenS.title}
                       prodectType = {womenS.prodectType}
                    />
                ))} 
            </section>
        </main>
    )
}
export default Men