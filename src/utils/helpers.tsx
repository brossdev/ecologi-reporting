const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
] as const;

export const dayOfTheWeekAsString = (weekDayIndex: number) =>
  weekDayIndex <= 6 && weekDayIndex >= 0 ? weekdays[weekDayIndex] : 'invalid';

const helpers = {
  dayOfTheWeekAsString,
};

export default helpers;
