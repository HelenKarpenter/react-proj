import kitchen1 from "../images/kitchen1.webp";
import kitchen2 from "../images/kitchen2.webp";
import kitchen3 from "../images/kitchen3.jpg";
import kitchen4 from "../images/kitchen4.jpg";
import kitchen5 from "../images/kitchen5.jpg";
import kitchen6 from "../images/kitchen6.webp";
import kitchen7 from "../images/kitchen7.jpg";
import kitchen8 from "../images/kitchen8.webp";

export default function Kitchen () {
    return(
        
    <div className="gallery">
        <div className="grid-item1"><img src={kitchen1} alt="kitchen1" /></div>
        <div className="grid-item2"><img src={kitchen2} alt="kitchen2" /></div>
        <div className="grid-item3"><img src={kitchen3} alt="kitchen3" /></div>
        <div className="grid-item4"><img src={kitchen4} alt="kitchen4" /></div>
        <div className="grid-item5"><img src={kitchen5} alt="kitchen5" /></div>
        <div className="grid-item6"><img src={kitchen6} alt="kitchen6" /></div>
        <div className="grid-item7"><img src={kitchen7} alt="kitchen7" /></div>
        <div className="grid-item8"><img src={kitchen8} alt="kitchen8" /></div>
    </div>
        
    )
}