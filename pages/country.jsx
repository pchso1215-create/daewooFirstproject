import CountryData from './data/country.json'

import Location from './../assets/lacation2.png'

import './style/country.css'

function Country(){

    return(
        <main className='country'>
            <h2>위치 선택</h2>
            <p className='subTitle'>주문한 상품을 어디로 배송하시겠습니까?</p>

            
                {Object.entries(CountryData).map(([region, countries])=>(
                <section>
                    <h3>{region}</h3>
                    <div className="country_wrap">
                        {countries.map((item, index)=>(
                            <div className='box'>
                                <img src={Location} alt="위치 아이콘" />
                                <div className='text'>
                                    <h4>{item.country}</h4>
                                    {item.language && (
                                        <p>{item.language}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                ))}










{/* 
                <h3>북미</h3>
                <div className="country_wrap">
                    
                    <div className='box'>
                        <img src={Location} alt="위치 아이콘" />
                        <div className='text'>
                            <h4>캐나다</h4>
                            <p>English</p>
                        </div>
                    </div>
                    <div className='box'>
                        <img src={Location} alt="위치 아이콘" />
                        <div className='text'>
                            <h4>캐나다</h4>
                            <p>Français</p>
                        </div>
                    </div>
                    <div className='box'>
                        <img src={Location} alt="위치 아이콘" />
                        <div className='text'>
                            <h4>캐나다</h4>
                            <p>Français</p>
                        </div>
                    </div>
                </div>
            </section> */}
        </main>
    )
}
export default Country