import bathroom1 from "../images/bathroom1.jpg";
import bathroom2 from "../images/bathroom2.webp";
import bathroom3 from "../images/main-bathroom.jpg";
import bathroom4 from "../images/bathroom4.webp";
import bathroom5 from "../images/bathroom5.jpg";
import bathroom6 from "../images/bathroom6.jpg";
import bathroom7 from "../images/bathroom7.jpg";
import bathroom8 from "../images/bathroom8.jpg";

export default function Bathroom () {
    return(
        
    <div className="gallery">
        <div className="grid-item1"><img src={bathroom1} alt="bathroom1" /></div>
        <div className="grid-item2"><img src={bathroom2} alt="bathroom2" /></div>
        <div className="grid-item3"><img src={bathroom3} alt="bathroom3" /></div>
        <div className="grid-item4"><img src={bathroom4} alt="bathroom4" /></div>
        <div className="grid-item5"><img src={bathroom5} alt="bathroom5" /></div>
        <div className="grid-item6"><img src={bathroom6} alt="bathroom6" /></div>
        <div className="grid-item7"><img src={bathroom7} alt="bathroom7" /></div>
        <div className="grid-item8"><img src={bathroom8} alt="bathroom8" /></div>
    </div>
        
    )
}