type TreeData = number[][];

type TreeResponse = {
  data: TreeData;
  responseCode: string;
  responseText: string;
};

type PlantedDate = {
  weekday: string;
  weekDayIndex: number;
  dateKey: string;
  totalPlanted: number;
};

type PlantedWeekday = {
  weekDayIndex: number;
  label: string;
  totalPlanted: number;
};
