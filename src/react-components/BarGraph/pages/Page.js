import React, { useState, useEffect } from 'react';
import Chart from '../components/Chart';
import { getData } from '../service/getData';

const Page = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData()
      .then((response) => setData(response))
      .catch((err) => {
        console.error('Error', err);
        setData(null);
      });
  }, []);

  if (!data) {
    return <div>No Data</div>;
  }

  return (
    <div className="page-container">
      <Chart data={data} />
    </div>
  );
};

export default Page;
