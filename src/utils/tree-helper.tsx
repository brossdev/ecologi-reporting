import { dayOfTheWeekAsString } from './helpers';

export const formatTreeData = (rawData: TreeData) => {
  const formattedData = rawData
    .reduce<PlantedDate[]>((accum, treeArr) => {
      const [treesPlanted, epochDate] = treeArr;
      const dateObj = new Date(epochDate * 1000);
      const [dateKey] = dateObj.toISOString().split('T');
      const weekDayIndex = dateObj.getDay();
      const weekday = dayOfTheWeekAsString(weekDayIndex);
      const existingWeekdayIndex = accum.findIndex(
        (plantedData) => plantedData.dateKey === dateKey,
      );
      if (existingWeekdayIndex > -1) {
        accum[existingWeekdayIndex].totalPlanted += treesPlanted;
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

export const groupPlantedByWeekDay = (rawData: PlantedDate[]) => {
  const formattedData = rawData
    .reduce<PlantedWeekday[]>((accum, plantedData) => {
      const existingWeekdayIndex = accum.findIndex(
        (weekdayData) => weekdayData.weekDayIndex === plantedData.weekDayIndex,
      );
      if (existingWeekdayIndex > -1) {
        accum[existingWeekdayIndex].totalPlanted += plantedData.totalPlanted;
      } else {
        accum.push({
          weekDayIndex: plantedData.weekDayIndex,
          label: plantedData.weekday,
          totalPlanted: plantedData.totalPlanted,
        });
      }

      return accum;
    }, [])
    .sort((a, b) => a.weekDayIndex - b.weekDayIndex);

  return formattedData;
};
