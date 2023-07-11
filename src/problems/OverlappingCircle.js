import React, { useState, useEffect } from 'react';
const RADIUS = 50;

const OverlappingCircle = (_props) => {
  const [circleCords, setCircleCords] = useState([]);

  useEffect(() => {
    const element = document.getElementById('playground');
    element.addEventListener('click', drawCircle);

    () => element.removeEventListener('click', drawCircle);
  }, []);

  const drawCircle = (e) => {
    const { clientX, clientY } = e;

    const newCircleCord = {
      top: clientY - RADIUS,
      left: clientX - RADIUS,
      bottom: clientY - RADIUS + RADIUS * 2,
      right: clientX - RADIUS + RADIUS * 2,
      backgroundColor: 'red',
    };
    setCircleCords((prevCircleCords) => {
      for (let i = 0; i < prevCircleCords.length; i++) {
        const collides = getElementsOverlap(newCircleCord, prevCircleCords[i]);
        if (collides) {
          newCircleCord.backgroundColor = 'green';
          break;
        }
      }
      return [...prevCircleCords, newCircleCord];
    });
  };

  const getElementsOverlap = (circle1, circle2) => {
    const collids = !(
      circle1.top > circle2.bottom ||
      circle1.right < circle2.left ||
      circle1.bottom < circle2.top ||
      circle1.left > circle2.right
    );
    return collids;
  };

  return circleCords.map((cord, index) => {
    return <Circle {...cord} key={cord.top + cord.left + index} />;
  });
};

const Circle = ({ top, left, backgroundColor }) => {
  return (
    <div
      style={{
        position: 'absolute',
        width: RADIUS * 2,
        height: RADIUS * 2,
        borderRadius: '50%',
        top,
        left,
        backgroundColor,
      }}
    />
  );
};

export default OverlappingCircle;
