import React from 'react';
import { Pie } from '@ant-design/charts';

const DemoPie = () => {
  const data = [
    {
      type: 'i',
      value: 27,
    },
    {
      type: 'ii',
      value: 25,
    },
    {
      type: 'iii',
      value: 18,
    },
    {
      type: 'iv',
      value: 15,
    },
    {
      type: 'v',
      value: 10,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        //content: 'Evaluated Thesis',
      },
    },
  };
  return <Pie {...config} />;
};

export default DemoPie;
