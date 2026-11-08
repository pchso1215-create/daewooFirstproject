import { useNavigate } from "react-router-dom"

import HomeCard from "./../components/homeCard"
import Button from "./../components/button"

import HomeData from "./data/homeCard"

import LogoBalck from "./../assets/logoblack.png"
import sec1Img from "./../assets/main1.png"
import bnrImg from "./../assets/main2.png"




import './style/home.css'
function Home() {
    const navigate = useNavigate();

    const style = {
        backgroundColor: "black",
        color: "white",
        border: "none",
        borderRadius: "50px",
        fontSize: "24px",
        fontWeight: "700",
        padding: "10px 40px",
        cursor: "pointer",
    }




    return (
        <main>
            <section className="sec1">
                <div className="top">
                    <p>YOUR RUN, YOUR STYLE</p>
                    <div><img src={LogoBalck} alt="Logo" /></div>
                </div>
                <div className="middle_img">
                    <img src={sec1Img} alt="달리는 이미지" />
                </div>
                <div className="bottom">
                    <h2>레이스로 증명하다</h2>
                    <p>샤론 로케디, 또하나의 메달을 완성하다.</p>
                    <div className="btns">
                        <Button onClick={() => navigate("/pages/men")} btnText={"남성 러닝화"} style={style} />                            
                        <Button onClick={() => navigate("/pages/women")} btnText={"여성 러닝화"} style={style} />
                    </div>
                </div>
            </section>
            <div className="bnrImg">
                <img src={bnrImg} alt="언더아머 이미지" />
            </div>
            <section className="sec2">
                <h2>BUILT FOR TRAINING</h2>
                <p>더 나은 퍼포먼스를 위한 트레이닝 셀렉션움직임을 고려한 기능성과 편안함을 경험해보세요.</p>
                <article>
                    {HomeData.map((card) => (
                        <HomeCard
                            key={card.id}
                            imgSrc={card.imgSrc}
                            imgAlt={card.imgAlt}
                            title={card.title}
                            link={card.link}
                            linkText={card.linkText}
                            position={card.position}
                        />
                    ))}
                </article>
            </section>
        </main>
    )
}
export default Home