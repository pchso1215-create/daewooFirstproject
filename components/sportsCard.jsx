import { Link } from "react-router-dom"

import './style/sportsCard.css'

export default function SportsCard({cardImg, title}){
    
    return(
        <div className="sportsCard">
            <img src={cardImg} />
            <div className="card_txt">
                <h2>{title}</h2>
                <h3><Link to="">{title} 쇼핑하기</Link></h3>
                <h3><Link to="">{title} 알아보기</Link></h3>
            </div>
        </div>
    )
}