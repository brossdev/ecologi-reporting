import React from 'react';
import { useQuery } from 'react-query';
import Header from './components/Header';
import Layout from './components/Layout';
import { BarChart } from './components/BarChart';
import { LineGraph } from './components/LineGraph';
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

  const filteredDates = data?.filter(
    (date) =>
      date[1] * 1000 >= startDate.getTime() &&
      date[1] * 1000 <= endDate.getTime(),
  );
  const formattedData = filteredDates ? formatTreeData(filteredDates) : null;

  return (
    <Layout>
      <Header />
      <section className="content">
        {isLoading && <span>Loading...</span>}
        {isError && <span>Error: {error?.message}</span>}
        {formattedData && (
          <section>
            <div className="datepicker">
              <span>select date range</span>
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
              <div className="box">
                <LineGraph plantedData={formattedData} />
              </div>
              <div className="box">
                <BarChart plantedData={formattedData} />
              </div>
            </div>
          </section>
        )}
      </section>
    </Layout>
  );
}

export default App;
