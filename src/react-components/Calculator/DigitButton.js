import React from 'react';
import { ACTIONS } from './Calculator';

const DigitButton = ({ digit, dispatch }) => {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
};

export default DigitButton;
