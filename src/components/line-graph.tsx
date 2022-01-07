import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Ecologi Trees Planted per week day',
    },
  },
};

const labels = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const dummyData = [{ totalPlanted: 4000, weekday: 'Monday' }];

export const data = {
  labels,
  datasets: [
    {
      label: 'Trees',
      data: dummyData.map((dataPoint) => dataPoint.totalPlanted),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

export const LineGraph = () => {
  return <Line options={options} data={data} />;
};

export default LineGraph;
