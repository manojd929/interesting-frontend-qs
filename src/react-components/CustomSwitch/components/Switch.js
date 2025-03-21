import React, { Children } from 'react';

export const DefaultCase = ({ children }) => {
  return <>{children}</>;
};

export const CustomCase = ({ children }) => {
  return <>{children}</>;
};

export const CustomSwitch = ({ children, value }) => {
  const cases = [];
  const defaultCase = [];

  Children.forEach(children, (child) => {
    if (child.type.name === 'CustomCase') {
      const val = child.props.value;
      let propValue = typeof val === 'function' ? val(value) : val;
      if (propValue === value) {
        cases.push(child);
      }
    }

    if (child.type.name === 'DefaultCase') {
      defaultCase.push(child);
    }
  });

  if (cases.length) {
    return <>{cases}</>;
  }
  return <>{defaultCase}</>;
};
