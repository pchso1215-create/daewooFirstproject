import { useNavigate } from 'react-router-dom'

import girl1 from   './../assets/girl_1.png'
import girl2 from './../assets/girl_2.png'
import girl3 from './../assets/girl_3.png'
import starW from './../assets/Star.png'
import starB from './../assets/starblack.png'

import Button from  './../components/button'
import ShoesSize from './../components/size'

import "./style/productDetail.css"
export default function ProductDetail(){
    const navigate = useNavigate();
    const BkStyle ={
        width : "600px",
        backgroundColor: "black",
        color: "white",
        border: "1px solid Black",
        borderRadius: "50px",
        fontSize: "24px",
        fontWeight: "700",
        padding: "20px 0",
        cursor: "pointer",
        textAlign : "center"
    }
    const WtStyle={
        width : "600px",
        backgroundColor: "white",
        color: "black",
        border: "1px solid Black",
        borderRadius: "50px",
        fontSize: "24px",
        fontWeight: "700",
        padding: "20px 0",
        cursor: "pointer",
        textAlign : "center"
    }
    return(
        <main className="productDetail">
            <div className="img_wrap">
                <img src={girl1} alt="여성 신발" />
            </div>
            <section>
                <h2>UA HB 러너2</h2>
                <p>여성 러닝화</p>
                <h3>179000원</h3>
                <ul className='type'>
                    <li><img src={girl1} alt='여성러닝화 핑크색' /></li>
                    <li><img src={girl2} alt='여성러닝화 하늘색' /></li>
                    <li><img src={girl3} alt='여성러닝화 검정색' /></li>
                </ul>
                <div className='ShousSize'>
                    <h4>사이즈 선택</h4>
                    <div className='sizeLists'>
                    <ShoesSize />
                    </div>
                
                    <Button style={BkStyle} onClick={()=>navigate("/pages/cart")} btnText={"장바구니"}/>
                    <Button style={WtStyle} onClick={()=>navigate("/pages/wishlist")} btnText={"위시리스트"}/>
                </div>
                <div className='info'>
                    <h3>무료픽업</h3>
                    <h3>매장찾기</h3>
                    <p>상품 상세 정보 보기</p>
                    <div className='delivery'><h4>무료 배송 및 반품</h4><span>V</span></div>
                    <div className='review'>
                        <h4>리뷰</h4>
                        <ul>
                            <li><img src={starB} alt="" /></li>
                            <li><img src={starB} alt="" /></li>
                            <li><img src={starB} alt="" /></li>
                            <li><img src={starB} alt="" /></li>
                            <li><img src={starB} alt="" /></li>
                        </ul>
                        <span>V</span>
                    </div>
                    <div className='moreInfo'>
                        <h4>추가 정보</h4>
                        <p>매일 착용할 수 있는 실용적인 러닝화입니다. 가볍고 통기성이 우수한 메쉬가 시원함을 유지해 주고, 반응성이 뛰어난 쿠셔닝이 발을 내디딜 때마다 에너지를 반환합니다. 부드럽고 편안한 착화감으로 로드 러닝에서 힘들이지 않고 달릴 수 있도록 제작되었습니다.</p>
                    </div>
                    
                </div>
            </section>
        </main>
    )
}