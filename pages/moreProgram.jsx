import { useNavigate } from "react-router-dom"

import LogoBalck from "./../assets/logoblack.png"
import sports1 from "./../assets/98timerun.png"
import programSee from './../assets/programsee.png'

import Button from "./../components/button"

export default function MoreProgram(){
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
    const style1 ={
        textAlign : "center"
    }

    return(
        <main id="moreProgram">
            <section className="sec1">
                <div className="top">
                    <p>YOUR RUN, YOUR STYLE</p>
                    <div><img src={LogoBalck} alt="Logo" /></div>
                </div>
                <div className="middle_img">
                    <img src={sports1} alt="comunity ti my race" />
                </div>
                <div className="bottom">
                    <h2>샤론 로케디, 또 하나의 메달을 완성하다</h2>
                    <p>96명의 러너와 함께 나만의 목표를 향해 달리는 시간</p>
                    <div className="btns">                           
                        <Button onClick={() => navigate("/pages/women")} btnText={"러닝 컬렉션 쇼핑하기"} style={style} />
                    </div>
                </div>
            </section>
            <section className="sec2"  style={style1}>
                <img src={programSee} alt="96 runner info" />
            </section>
        </main>
    )
}