import React from 'react';
import Bar from './Bar';

const Chart = ({ data }) => {
  const maxValue = Math.max(...data.map((d) => d.ticketCount));
  return (
    <div className="chart-container">
      {data.map((point, index) => {
        const { id, name, ticketCount, colour } = point;
        return (
          <Bar
            key={id + index}
            colour={colour}
            name={name}
            barHeight={(ticketCount / maxValue) * 100}
          />
        );
      })}
    </div>
  );
};

export default Chart;
