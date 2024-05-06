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
            <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
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
}