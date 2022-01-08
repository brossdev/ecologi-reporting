import { dayOfTheWeekAsString } from './helpers';

describe('dayOfTheWeekAsString', () => {
  it('should return a string representation of the day of the week when passed a valid weekday index', () => {
    const stringWeekday = dayOfTheWeekAsString(0);
    expect(stringWeekday).toEqual('Sunday');
  });

  it('should return "invalid" when passed an invalid weekday index', () => {
    const stringWeekday = dayOfTheWeekAsString(9);
    expect(stringWeekday).toEqual('invalid');
  });
});
