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
import { PlantedDate } from '../utils/tree-helper';

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
      text: 'Ecologi Trees planted per date',
    },
  },
};

export const LineGraph = ({ plantedData }: { plantedData: PlantedDate[] }) => {
  const data = {
    labels: plantedData.map((dataPoint) => dataPoint.dateKey),
    datasets: [
      {
        label: 'dateKey',
        data: plantedData.map((dataPoint) => dataPoint.totalPlanted),
        backgroundColor: 'rgba(41, 95, 73, 1)',
      },
    ],
  };
  return <Line options={options} data={data} />;
};

export default LineGraph;
