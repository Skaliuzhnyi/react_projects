import { useState } from 'react';
import generateRandomNum from '../utils/generateRandomNum';
import generateRandomColor from '../utils/generateRandomColor';

function RandomNumber({ maxNum, styleColor }) {
  const [randomNum, setRandomNum] = useState(generateRandomNum(maxNum));
  const [titleColor, setTitleColor] = useState(styleColor);

  const changeRandomNumColor = () => {
    setRandomNum(generateRandomNum(maxNum));
    setTitleColor(generateRandomColor());
  };

  return (
    <div>
      <h1
        style={{ color: `${titleColor}` }}
        className="h1"
      >
        {randomNum}
      </h1>
      <button onClick={changeRandomNumColor}>Generate new random number and color</button>
    </div>
  );
}

export default RandomNumber;
