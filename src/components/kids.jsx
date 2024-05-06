import kids1 from "../images/kids1.jpg";
import kids2 from "../images/kids2.jpg";
import kids3 from "../images/main-kids.jpg";
import kids4 from "../images/kids4.jpg";
import kids5 from "../images/kids5.jpg";
import kids6 from "../images/kids6.jpg";
import kids7 from "../images/kids7.jpg";
import kids8 from "../images/kids8.jpg";

export default function Kids () {
    return(
        
    <div className="gallery">
        <div className="grid-item1"><img src={kids1} alt="kids1" /></div>
        <div className="grid-item2"><img src={kids2} alt="kids2" /></div>
        <div className="grid-item3"><img src={kids3} alt="kids3" /></div>
        <div className="grid-item4"><img src={kids4} alt="kids4" /></div>
        <div className="grid-item5"><img src={kids5} alt="kids5" /></div>
        <div className="grid-item6"><img src={kids6} alt="kids6" /></div>
        <div className="grid-item7"><img src={kids7} alt="kids7" /></div>
        <div className="grid-item8"><img src={kids8} alt="kids8" /></div>
    </div>
        
    )
}