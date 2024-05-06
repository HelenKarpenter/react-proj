import bedroom1 from "../images/bedroom1.jpg";
import bedroom2 from "../images/bedroom2.jpg";
import bedroom3 from "../images/bedroom3.jpg";
import bedroom4 from "../images/bedroom4.jpg";
import bedroom5 from "../images/bedroom5.jpg";
import bedroom6 from "../images/bedroom6.jpg";
import bedroom7 from "../images/bedroom7.jpg";
import bedroom8 from "../images/bedroom8.jpg";

export default function Bedroom () {
    return(
        
    <div className="gallery">
        <div className="grid-item1"><img src={bedroom1} alt="bedroom1" /></div>
        <div className="grid-item2"><img src={bedroom2} alt="bedroom2" /></div>
        <div className="grid-item3"><img src={bedroom3} alt="bedroom3" /></div>
        <div className="grid-item4"><img src={bedroom4} alt="bedroom4" /></div>
        <div className="grid-item5"><img src={bedroom5} alt="bedroom5" /></div>
        <div className="grid-item6"><img src={bedroom6} alt="bedroom6" /></div>
        <div className="grid-item7"><img src={bedroom7} alt="bedroom7" /></div>
        <div className="grid-item8"><img src={bedroom8} alt="bedroom8" /></div>
    </div>
        
    )
}