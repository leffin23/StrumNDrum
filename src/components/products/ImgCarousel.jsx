/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const ImgCarousel = (props) => {
const resetIndex = props.resetIndex;
const img = Array.isArray(props.img) ? props.img : []; 
  const [currentImg, setCurrentImg] = useState(0);

  const changeImgRight = (e) => {
    e.preventDefault();
    setCurrentImg((prevIndex) => {
      return prevIndex === img.length - 1 ? 0 : prevIndex + 1;
    });
  };
  const changeImgLeft = (e) => {
    e.preventDefault();
    setCurrentImg((prevIndex) => {
      return prevIndex === 0 ? img.length - 1 : prevIndex - 1;
    });
  };

  useEffect(() => {
    setCurrentImg(0); 
  }, [resetIndex]);

  return (
    <div>
      <div className="img-container">
        {img.map((img, id) => (
          <img
            key={id}
            src={img}
            alt={"Guitar " + `${1}`}
            style={{ transform: `translateX(${"-100" * currentImg}%)` }}
          />
        ))}
      </div>
      <span className="crsl-btn" onClick={(e) => changeImgLeft(e)}>
        {" "}
      </span>
      <span className="crsl-btn right" onClick={(e) => changeImgRight(e)}>
        {" "}
      </span>
      </div>
  );
};

export default ImgCarousel;
