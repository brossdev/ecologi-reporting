import { formatTreeData, PlantedDate } from './tree-helper';
import type { TreeData } from '../api/trees';

const mockRawData: TreeData = [
  [1, 1641641627], // saturday 08/01/2022 ( weekday index 6 )
  [10, 1641641662], // saturday 08/01/2022 ( weekday index 6 )
  [100, 1641641682], // saturday 08/01/2022 ( weekday index 6 )
  [20, 1641555306], // friday 07/01/2022 ( weekday index 5 )
  [43, 1641556506], // friday 07/01/2022 ( weekday index 5 )
];

const expectedOutput: PlantedDate[] = [
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

describe('formatTreeData', () => {
  it('should create an object for each date totalling the number of trees planted sorted by most recent date', () => {
    const plantedData = formatTreeData(mockRawData);
    expect(plantedData).toStrictEqual(expectedOutput);
  });
});
