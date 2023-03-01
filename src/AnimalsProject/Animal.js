import { useState } from "react";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import horse from "./svg/horse.svg";
import dog from "./svg/dog.svg";
import heart from "./svg/heart.svg";
import gator from "./svg/gator.svg";
import "./Animal.css";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

function Animal({ type }) {
  const [clicks, setclicks] = useState([]);

  const handleClick = () => {
    setclicks(clicks + 1);
  };

  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" alt="animal" src={svgMap[type]} />
      <img
        className="heart"
        alt="heart"
        src={heart}
        style={{ width: 5 + 5 * clicks + "px" }}
      />
    </div>
  );
}

export default Animal;
