import React from 'react';
import { Column } from '@ant-design/charts';

const DemoColumn = () => {
  const data = [
    {
      month: 'Jan',
      value: 5
    },
    {
    month: 'Feb',
      value: 10,
    },
    {
        month: 'Mar',
      value: 8,
    },
    {
        month: 'Apr',
      value: 15,
    },
    {
        month: 'May',
      value: 15,
    },
    {
        month: 'Jun',
      value: 18,
    },
    {
        month: 'Jul',
      value: 6,
    },
    {
        month: 'Aug',
      value: 20,
    },
    {
        month: 'Sep',
        value: 17,
    },
    {
        month: 'Oct',
        value: 11,
    },
    {
        month: 'Nov',
        value: 8,
    },
    {
        month: 'Dec',
        value: 12,
    },
  ];
  const config = {
    data,
    xField: 'month',
    yField: 'value',
    yAxis: {
        title:{
            text:"Submitted"
        },
      label: {
        formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
  };
  return <Column {...config} width={400} height={400}/>;
};
export default DemoColumn;