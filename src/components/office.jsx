import office1 from "../images/Office-room1.png";
import office2 from "../images/office4.jpg";
import office3 from "../images/main-office.jpg";
import office4 from "../images/office5.jpg";
import office5 from "../images/office2.jpg";
import office6 from "../images/office3.jpg";
import office7 from "../images/office7.jpg";
import office8 from "../images/office6.jpg";

export default function Office () {
    return(
        
    <div className="gallery">
        <div className="grid-item1"><img src={office1} alt="office1" /></div>
        <div className="grid-item2"><img src={office2} alt="office2" /></div>
        <div className="grid-item3"><img src={office3} alt="office3" /></div>
        <div className="grid-item4"><img src={office4} alt="office4" /></div>
        <div className="grid-item5"><img src={office5} alt="office5" /></div>
        <div className="grid-item6"><img src={office6} alt="office6" /></div>
        <div className="grid-item7"><img src={office7} alt="office7" /></div>
        <div className="grid-item8"><img src={office8} alt="office8" /></div>
    </div>
        
    )
}