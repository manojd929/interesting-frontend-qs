import React, { useState } from 'react';

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
