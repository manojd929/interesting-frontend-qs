import React from 'react';

const Icon = (props) => {
  const { type, onClick } = props;
  switch (type) {
    case 'expand-icon':
      return (
        <div className="icon expand-icon" onClick={() => onClick()}>
          {'>'}
        </div>
      );
    case 'is-expand-icon':
      return (
        <div
          className="icon is-expand-icon"
          onClick={() => onClick()}
        >{`v`}</div>
      );
    default:
      return <div className="icon default-icon"></div>;
  }
};

export default Icon;
