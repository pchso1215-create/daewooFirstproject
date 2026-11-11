import { useNavigate } from "react-router-dom"

import LogoBalck from "./../assets/logoblack.png"
import sports1 from "./../assets/98timerun.png"
import Running from './../assets/run.png'
import Traning from './../assets/traning.png'
import Outdoor from './../assets/outdour.png'
import Golf from './../assets/goalf.png'

import Button from "./../components/button"
import SportsCard from './../components/sportsCard'

import './style/sports.css'

function Sports(){
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
        <main id="sports">
            <section className="sec1">
                <div className="top">
                    <p>YOUR RUN, YOUR STYLE</p>
                    <div><img src={LogoBalck} alt="Logo" /></div>
                </div>
                <div className="middle_img">
                    <img src={sports1} alt="comunity ti my race" />
                </div>
                <div className="bottom">
                    <h2>레이스로 증명하다</h2>
                    <p>샤론 로케디, 또하나의 메달을 완성하다.</p>
                    <div className="btns">
                        <Button onClick={() => navigate("/pages/moreProgram")} btnText={"프로그램 자세히 보기"} style={style} />                            
                        <Button onClick={() => navigate("/pages/women")} btnText={"러닝 컬렉션 쇼핑하기"} style={style} />
                    </div>
                </div>
            </section>
            <section className="sec2">
                <SportsCard cardImg={Running} title ={"러닝"} />
                <div className="title_txt"><h2>Train By Sport</h2></div>
                <SportsCard cardImg={Traning} title ={'트레이닝'} />
                <SportsCard cardImg={Outdoor} title ={'아웃도어'} />
                <div className="title_txt"><h2>Train By Sport</h2></div>
                <SportsCard cardImg={Golf} title ={'골프'} />
            </section>
        </main>
    )
}
export default Sports