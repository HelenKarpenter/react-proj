import "../index.css"
import living from "../images/main-living.jpg"
import kitchen from "../images/main-kitchen.jpg";
import kids from "../images/main-kids.jpg";
import bathroom from "../images/main-bathroom.jpg";
import bedroom from "../images/main-bedroom.jpg";
import office from "../images/main-office.jpg";
import { Link } from "react-router-dom";



export default function NavTrack () {
  

        return (
            <div id="image-track"
            
            >
              <Link to={"./office"}><img
                className="image"
                src={office}
                alt="office"
              /><p>Home office</p></Link>
              <Link to={"./bathroom"}><img
                className="image"
                src={bathroom}
                alt="bathroom"
              /><p>Bathroom</p></Link>
              <Link to={"./living"}><img
                className="image"
                src={living}
                alt="livingroom"
              /><p>Living room</p></Link>
              <Link to={"./bedroom"}><img
                className="image"
                src={bedroom}
                alt="bedroom"
              /><p>Bedroom</p></Link>
              <Link to={"./kitchen"}><img
                className="image"
                src={kitchen}
                alt="kitchen"
              /><p>Kitchen</p></Link>
              <Link to={"./kids"}><img
                className="image"
                src={kids}
                alt="kidsroom"
              /><p>Kids room</p></Link>
              
            </div>
          );
        
};


/*
const itemsRef = useRef(null);
  
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - - itemsRef.current.offsetLeft);
    setScrollLeft(itemsRef.current.scrollLeft);
  }

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  }

  const handleMouseUp = () => {
    setIsMouseDown(false);
  }

  const handleMouseMove = (e) => {
    if(!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - itemsRef.current.offsetLeft;
    const walk = (x-startX)*2;
    itemsRef.current.scrollLeft = scrollLeft -walk;
    */