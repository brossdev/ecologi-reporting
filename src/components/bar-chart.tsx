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
import { groupPlantedByWeekDay } from '../utils/tree-helper';
import type { PlantedDate } from '../utils/tree-helper';

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
      text: 'Trees planted per day of the week',
    },
  },
};

export const BarChart = ({ plantedData }: { plantedData: PlantedDate[] }) => {
  const weekdayData = groupPlantedByWeekDay(plantedData);
  const data = {
    labels: weekdayData.map((dataPoint) => dataPoint.label),
    datasets: [
      {
        label: 'Weekday',
        data: weekdayData.map((dataPoint) => dataPoint.totalPlanted),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return <Bar options={options} data={data} />;
};
