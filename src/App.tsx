import React from 'react';
import { useQuery } from 'react-query';
import { BarChart } from './components/bar-chart';
import { LineGraph } from './components/line-graph';
import DatePicker from 'react-date-picker';
import { getAllTrees, TreeData } from './api/trees';
import { formatTreeData } from './utils/tree-helper';
import './App.css';

function App() {
  const [startDate, setStartDate] = React.useState(
    new Date(new Date().setMonth(new Date().getMonth() - 1)),
  );
  const [endDate, setEndDate] = React.useState(new Date());
  const { isLoading, isError, data, error } = useQuery<TreeData, Error>(
    'trees',
    getAllTrees,
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error?.message}</span>;
  }

  const filteredDates = data?.filter(
    (date) =>
      date[1] * 1000 >= startDate.getTime() &&
      date[1] * 1000 <= endDate.getTime(),
  );
  const formattedData = filteredDates ? formatTreeData(filteredDates) : null;

  return (
    <div className="App">
      <DatePicker
        calendarAriaLabel="Toggle calendar"
        clearAriaLabel="Clear value"
        dayAriaLabel="Day"
        monthAriaLabel="Month"
        nativeInputAriaLabel="Date"
        onChange={setStartDate}
        value={startDate}
        yearAriaLabel="Year"
      />
      <DatePicker
        calendarAriaLabel="set end date"
        clearAriaLabel="Clear value"
        dayAriaLabel="Day"
        monthAriaLabel="Month"
        nativeInputAriaLabel="Date"
        onChange={setEndDate}
        value={endDate}
        yearAriaLabel="Year"
      />
      {formattedData && <LineGraph plantedData={formattedData} />}
      {formattedData && <BarChart plantedData={formattedData} />}
    </div>
  );
}

export default App;
