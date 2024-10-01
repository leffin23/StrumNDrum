
import { Link } from "react-router-dom"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Home = () => {

  useGSAP(() => {
    gsap.fromTo('.stag', 
      { 
        opacity: 0,
        y: 10,
   
      }, 
      {
        opacity: 1, 
        duration: 1,
        stagger: 0.2,
        y: 0,
        ease: "power1.inOut",
      })

  })

  return (
    <div className="home-page">
      <div className="slogan">
        <div className="image-block stag"></div>
        <div className="text-block stag">
          <h1> STRUM&DRUM: Your Beat, Your Sound, Your Stage.</h1>
        </div>
        <Link to="/products"><button className="shop stag">SHOP NOW</button></Link>
      </div>
    
    </div>
  )
}

export default Home
