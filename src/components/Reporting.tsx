import React from 'react';
import { useQuery } from 'react-query';
import { BarChart } from '../components/BarChart';
import { LineGraph } from '../components/LineGraph';
import DatePicker from 'react-date-picker';
import { getAllTrees } from '../api/trees';
import { formatTreeData } from '../utils/tree-helper';

function Reporting() {
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

  if (isLoading) return <div className="loader">Loading...</div>;
  if (isError) return <span>Error: {error?.message}</span>;
  return (
    <section>
      {formattedData && (
        <div>
          <div className="menubar">
            <h3>Ecologi Reporting Data</h3>
            <div>
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
                className="datepicker"
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
                minDate={startDate}
              />
            </div>
          </div>
          <div className="box">
            <LineGraph plantedData={formattedData} />
          </div>
          <div className="box">
            <BarChart plantedData={formattedData} />
          </div>
        </div>
      )}
    </section>
  );
}

export default Reporting;
