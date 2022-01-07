import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
      text: 'Trees Planted per day of the week',
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
      label: 'Weekday',
      data: dummyData.map((dataPoint) => dataPoint.totalPlanted),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

export const BarChart = () => {
  return <Bar options={options} data={data} />;
};
