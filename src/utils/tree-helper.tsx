import type { TreeData } from '../api/trees';
import { dayOfTheWeekAsString } from './helpers';

export type PlantedDate = {
  weekday: string;
  weekDayIndex: number;
  dateKey: string;
  totalPlanted: number;
};

export const formatTreeData = (rawData: TreeData) => {
  const formattedData = rawData
    .reduce<PlantedDate[]>((accum, treeArr) => {
      const [treesPlanted, epochDate] = treeArr;
      const dateObj = new Date(epochDate * 1000);
      const [dateKey] = dateObj.toISOString().split('T');
      const weekDayIndex = dateObj.getDay();
      const weekday = dayOfTheWeekAsString(weekDayIndex);
      const existingDateIndex = accum.findIndex(
        (plantedData) => plantedData.dateKey === dateKey,
      );
      if (existingDateIndex > -1) {
        accum[existingDateIndex].totalPlanted += treesPlanted;
      } else {
        accum.push({
          weekDayIndex,
          dateKey,
          weekday,
          totalPlanted: treesPlanted,
        });
      }

      return accum;
    }, [])
    .sort((a, b) => Date.parse(a.dateKey) - Date.parse(b.dateKey));

  return formattedData;
};
