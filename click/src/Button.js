import React, { useState } from "react";

function Button(props) {
  const [numOfClicks, setNumOfClicks] = useState(0);

  const clickHandler = () => {
    setNumOfClicks(numOfClicks + 1);
    props.total();
  };

  return (
    <div>
      <button onClick={clickHandler}>{props.title} </button>
      <span className="number-of-clicks">{numOfClicks}</span>
    </div>
  );
}

export default Button;
