import { useNavigate } from "react-router-dom";

export default function Contact () {
  const navigate = useNavigate();

  const handleSubmit = (event) =>{
    event.preventDefault();

  navigate('/success');
}

    return(
        <div className="contact-wrap">
        <div className="map">
      <section className="contacts">
        
            <form method="post" onSubmit={handleSubmit}>
              
              <label for="">Name</label><br />
              <input
                type="text"
                placeholder="Please fill in your full name"
                minlength="1"
                required
              />
              <br />
              <label for="">Phone number</label><br />
              <input 
                type="text" 
                placeholder="Please enter your phone number"
                minlength="11"
                required 
                /><br />
              <label>E-mail</label><br />
              <input
                type="text"
                placeholder="Please enter your email"
                minlength="5"
                required
              />
              <br />
              <label>How can we help you?</label><br />
              <textarea name="" id="" cols="30" rows="10">Send us a message</textarea>
              <br />
              <input id="submit" type="submit" />
            </form>
          <div className="address">
        
        <h3>Address:</h3>
        <p>Brücke 3, 20359 Hamburg</p>
        <h3>Phone number:</h3>
        <p>+41-151-151-151-15</p>
    </div>
      </section>
      <section className="google">
        <iframe
            title="Google title"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d660.9140500544025!2d9.97049140551696!3d53.545602128481704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18f6d6ceab859%3A0xb36bf20843cd8c1e!2sGedenktafeln%20Schiffe%20St.%20Louis%20(1939)%20%26%20Exodus%20(1947)!5e0!3m2!1sen!2sde!4v1702251668439!5m2!1sen!2sde"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div></div>
    )
}