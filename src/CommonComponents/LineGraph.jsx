import React from 'react';
import { Line } from '@ant-design/charts';

const LineGraph = () => {
  const data = [
    { 
      days: '1991',
      milestones: 3,
      category: "Estimated Timeline",
    },
    {
      days: '1992',
      milestones: 4,
      category: 'Average Timeline',
    },
    {
      days: '1993',
      milestones: 3.5,
      category: 'Actual Timeline',
    },
    {
      days: '1994',
      milestones: 5,
      category: 'Estimated Timeline',
    },
    {
      days: '1995',
      milestones: 4.9,
      category: 'Average Timeline',
    },
    {
      days: '1996',
      milestones: 6,
      category: 'Actual Timeline',
    },
    {
      days: '1997',
      milestones: 7,
      category: 'Estimated Timeline',
    },
    {
      days: '1998',
      milestones: 9,
      category: 'Average Timeline',
    },
    {
      days: '1999',
      milestones: 13,
      category: 'Actual Timeline',
    },
  ];
  const config = {
    data,
    xField: 'days',
    yField: 'milestones',
    seriesField: 'category',
    xAxis: {
      type: 'time',
    },
    yAxis: {
      label: {
        formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
  };

  return <Line {...config} />;
};

export default LineGraph;