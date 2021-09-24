import React from "react";
import FieldLabelSelect from "./FieldLabelSelect";
import PropTypes from "prop-types";

const Calender = (props) => {
  const HandleOnDayChange = (event) => {
    let day = event.target.value;
    const updatedValue = { ...props.value, date: day };
    props.onChange(updatedValue);
  };
  const HandleOnMonthChange = (event) => {
    let NewMonth = event.target.value;
    const updatedValue = { ...props.value, month: NewMonth };
    props.onChange(updatedValue);
  };
  const HandleOnYearChange = (event) => {
    let NewYear = event.target.value;
    const updatedValue = { ...props.value, year: NewYear };
    props.onChange(updatedValue);
  };
  return (
    <div className="divWithChildMargin">
      <FieldLabelSelect
        label="Date"
        id={props.id}
        value={props.value.date}
        onChange={HandleOnDayChange}
        options={[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
        ]}
      />
      <FieldLabelSelect
        label="Month"
        id={props.id}
        value={props.value.month}
        onChange={HandleOnMonthChange}
        options={[
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ]}
      />
      <FieldLabelSelect
        label="Year"
        id={props.id}
        value={props.value.year}
        onChange={HandleOnYearChange}
        options={[
          2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011,
          2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000,
          1999,
        ]}
      />
    </div>
  );
};

Calender.propTypes = {
  id: PropTypes.string,
  value: PropTypes.shape({
    date: PropTypes.string,
    month: PropTypes.string,
    year: PropTypes.string,
  }),
  onChange: PropTypes.func,
};

export default Calender;
