import React, { useState } from 'react';
import Icon from './Icon';
import Tree from './Tree';

const Item = (props) => {
  const { data = {} } = props;
  const { id, name, children = [] } = data;
  const [expand, setExpand] = useState(false);

  const getIconType = () => {
    if (children.length) {
      return expand ? 'is-expand-icon' : 'expand-icon';
    }
    return 'default-icon';
  };

  return (
    <li id={id} className="list-node">
      <div>
        <Icon onClick={() => setExpand(!expand)} type={getIconType()} />
        <span>{name}</span>
        {expand && <Tree data={children} />}
      </div>
    </li>
  );
};

export default Item;
