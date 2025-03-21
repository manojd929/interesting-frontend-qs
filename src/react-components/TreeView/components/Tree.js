import React from 'react';
import Item from './Item';

const Tree = (props) => {
  const { data } = props;

  return (
    <ul className="tree-structure">
      {data.map((item, index) => {
        return <Item key={item.id + index} data={item} />;
      })}
    </ul>
  );
};

export default Tree;
