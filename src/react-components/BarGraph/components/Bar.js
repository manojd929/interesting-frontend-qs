import React from 'react';

const Bar = (props) => {
  const { name, barHeight, colour } = props;
  const height = `${barHeight + 100}px`;
  return (
    <div className="bar">
      <div
        style={{
          backgroundColor: colour,
          width: '5rem',
          height: height,
        }}
      ></div>
      <div>{name}</div>
    </div>
  );
};

export default Bar;
