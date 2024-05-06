import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import About from "./components/about";
import Home from "./components/home";
import Contact from "./components/contact";
import Office from "./components/office";
import Bathroom from "./components/bathroom";
import Living from "./components/living";
import Bedroom from "./components/bedroom";
import Kitchen from "./components/kitchen";
import Kids from "./components/kids";
import Footer from "./components/footer";


export default function App() {
  
  return (
    <div>
    <Header />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/office" element={<Office />} />
      <Route path="/bathroom" element={<Bathroom />} />
      <Route path="/living" element={<Living />} />
      <Route path="/bedroom" element={<Bedroom />} />
      <Route path="/kitchen" element={<Kitchen />} />
      <Route path="/kids" element={<Kids />} />
    </Routes>
  
    <Footer />
    </div>
  );
}




/*
const track = document.getElementById("image-track");

  window.onmousedown = (e) => {
    track.dataset.mouseDownAt = e.clientX;
  };

  window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
  };

  window.onmousemove = (e) => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
      maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
    nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

    track.style.transform = `translate(${nextPercentage}%, -50%)`;
  };*/