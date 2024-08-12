import React from "react";
import Main from "./main";
import NavTrack from "./navtrack";

import {useRef, useEffect} from "react";

export default function Home () {
    
    const containerRef = useRef(null);

    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;
  
      const handleWheel = (e) => {
        e.preventDefault();
        container.scrollLeft += e.deltaY * 2;
      };
  
      container.addEventListener("wheel", handleWheel, { passive: false });
  
      return () => {
        container.removeEventListener("wheel", handleWheel);
      };
    }, []);
    return (
        <div id="container" ref={containerRef}>
            <Main />
            <NavTrack />
        </div>
    )
}