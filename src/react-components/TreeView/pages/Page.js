import React, { useState, useEffect } from 'react';
import Tree from '../components/Tree';
import getNodes from '../service/getNodes';

const Page = () => {
  const [data, setData] = useState();

  useEffect(() => {
    getNodes()
      .then((response) => setData(response))
      .catch((err) => {
        console.error('error', err);
        setData(null);
      });
  });

  if (!data) {
    return <div>No Data</div>;
  }

  return (
    <div className="page-container">
      <Tree data={data} />
    </div>
  );
};

export default Page;
