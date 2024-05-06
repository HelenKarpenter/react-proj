import living1 from "../images/living1.jpg";
import living2 from "../images/living2.jpg";
import living3 from "../images/main-living.jpg";
import living4 from "../images/living4.jpg";
import living5 from "../images/living5.webp";
import living6 from "../images/living6.webp";
import living7 from "../images/living7.jpg";
import living8 from "../images/living8.jpg";

export default function Living () {
    return(
        
    <div className="gallery">
        <div className="grid-item1"><img src={living1} alt="living1" /></div>
        <div className="grid-item2"><img src={living2} alt="living2" /></div>
        <div className="grid-item3"><img src={living3} alt="living3" /></div>
        <div className="grid-item4"><img src={living4} alt="living4" /></div>
        <div className="grid-item5"><img src={living5} alt="living5" /></div>
        <div className="grid-item6"><img src={living6} alt="living6" /></div>
        <div className="grid-item7"><img src={living7} alt="living7" /></div>
        <div className="grid-item8"><img src={living8} alt="living8" /></div>
    </div>
        
    )
}