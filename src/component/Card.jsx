import parse from 'html-react-parser';
import "./Card.css"
import bitcoin from "../assets/bitcoin.png"
const Card = ({code,symbol,rate,description}) => {
  return (
    <div className='card-container'>
        <div className="cardTop section">
            <img src={bitcoin} style={{height:"60px"}} alt="" />
            <h3>Bitcoin</h3>
        </div>
        <div className="cardDescription section">Bitcoin Price in {description}</div>
        <div className="cardMid section">
            <div className="price">{parse(symbol)} {rate}</div>
            <div className="priceDetails">In {code}</div>
        </div>
        <div className="cardBottom section">
            <div className="button"><button className="info"> i</button></div>
            <div className="button"><button className="trade">Trade</button></div>
        </div>
    </div>
  )
}

export default Card