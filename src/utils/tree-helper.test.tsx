import {
  formatTreeData,
  PlantedDate,
  PlantedWeekday,
  groupPlantedByWeekDay,
} from './tree-helper';
import type { TreeData } from '../api/trees';

const mockRawData: TreeData = [
  [14, 1640945321], // friday 31/12/2021 ( weekday index 5 )
  [22, 1641031721], // saturday 01/01/2022 ( weekday index 5 )
  [1, 1641641627], // saturday 08/01/2022 ( weekday index 6 )
  [10, 1641641662], // saturday 08/01/2022 ( weekday index 6 )
  [100, 1641641682], // saturday 08/01/2022 ( weekday index 6 )
  [20, 1641555306], // friday 07/01/2022 ( weekday index 5 )
  [43, 1641556506], // friday 07/01/2022 ( weekday index 5 )
];

const expectedPlantedOutput: PlantedDate[] = [
  {
    weekDayIndex: 5,
    dateKey: '2021-12-31',
    weekday: 'Friday',
    totalPlanted: 14,
  },
  {
    weekDayIndex: 6,
    dateKey: '2022-01-01',
    weekday: 'Saturday',
    totalPlanted: 22,
  },
  {
    weekDayIndex: 5,
    dateKey: '2022-01-07',
    weekday: 'Friday',
    totalPlanted: 63,
  },
  {
    weekDayIndex: 6,
    dateKey: '2022-01-08',
    weekday: 'Saturday',
    totalPlanted: 111,
  },
];

const expectedWeekdayOutput: PlantedWeekday[] = [
  {
    label: 'Friday',
    weekDayIndex: 5,
    totalPlanted: 77,
  },

  {
    label: 'Saturday',
    weekDayIndex: 6,
    totalPlanted: 133,
  },
];

describe('formatTreeData', () => {
  it('should create an object for each date totalling the number of trees planted sorted by most recent date', () => {
    const plantedData = formatTreeData(mockRawData);
    expect(plantedData).toStrictEqual(expectedPlantedOutput);
  });
});

describe('groupPlantedByWeekday', () => {
  it('should return an array of weekday objects with a cummulative total of trees planted per weekday', () => {
    const weekdayData = groupPlantedByWeekDay(expectedPlantedOutput);
    expect(weekdayData).toStrictEqual(expectedWeekdayOutput);
  });
});
