import React, { useState } from 'react';

const initialData = [
  {
    key: '0',
    label: 'Documents',
    children: [
      {
        key: '0-0',
        label: 'Document 1-1',
        children: [
          {
            key: '0-1-1',
            label: 'Document-0-1.doc',
          },
          {
            key: '0-1-2',
            label: 'Document-0-2.doc',
          },
        ],
      },
    ],
  },
  {
    key: '1',
    label: 'Desktop',
    children: [
      {
        key: '1-0',
        label: 'document1.doc',
      },
      {
        key: '0-0',
        label: 'documennt-2.doc',
      },
    ],
  },
  {
    key: '2',
    label: 'Downloads',
    children: [],
  },
];

const TreeView = () => {
  return (
    <div>
      {initialData.map((node, index) => (
        <TreeNode key={index} node={node} />
      ))}
    </div>
  );
};

const TreeNode = ({ node }) => {
  const { key, label, children } = node;
  const [showChildren, setShowChildren] = useState(false);

  return (
    <div key={`${label}-${key}`}>
      <div>
        {label}{' '}
        {children && children.length ? (
          <button onClick={() => setShowChildren(!showChildren)}>
            &nbsp;+&nbsp;
          </button>
        ) : null}
      </div>
      {showChildren && children.map((node) => <TreeNode node={node} />)}
    </div>
  );
};
export default TreeView;
