import moment, { Moment } from "moment";
import React, { useState, useEffect } from "react";

// React Dates Lib
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker, FocusedInputShape } from "react-dates";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

type Props = {};

const AirbnbDateRangePicker = (props: Props) => {
  const [startDate, setStartDate] = useState<Moment | null>(moment());
  const [endDate, setEndDate] = useState<Moment | null>(
    moment().add(1, "days")
  );
  const [openCalendar, setOpenCalendar] = useState(false);
  const [focusedInput, setFocusedInput] = useState<FocusedInputShape | null>(
    null
  );

  // Max Date up to a year
  const getMaxDate = () => {
    const currentDate = startDate;
    if (currentDate) {
      const date = currentDate.date();
      const month = currentDate.month() + 1;
      const year = currentDate.year() + 2;
      const maxDate = moment(`${month}-${date}-${year}`);
      return maxDate;
    }
  };

  // Controls of the calendar
  // Close
  useEffect(() => {
    focusedInput === null && setOpenCalendar(false);
  }, [focusedInput]);

  // Open | Close
  useEffect(() => {
    openCalendar ? setFocusedInput("startDate") : setFocusedInput(null);
  }, [openCalendar]);

  return (
    <div className="airbnb-calendar">
      <div>
        <div
          className="px-5 py-2 border-2 rounded-full outline-none cursor-pointer w-fit border-trueGray-200 focus-visible:border-gray-400"
          onClick={() => setOpenCalendar(!openCalendar)}
        >
          <p className="text-xs font-bold">Check in</p>
          <p className="text-sm">Add Dates</p>
        </div>
      </div>
      <div className="relative h-0 -top-12">
        <DateRangePicker
          // Input Props
          minDate={moment()}
          maxDate={getMaxDate()}
          noBorder
          keepOpenOnDateSelect
          hideKeyboardShortcutsPanel
          startDate={startDate}
          endDate={endDate}
          startDatePlaceholderText=""
          endDatePlaceholderText=""
          startDateId="startDate_000"
          endDateId="endDate__000"
          onDatesChange={({
            startDate,
            endDate,
          }: {
            startDate: Moment | null;
            endDate: Moment | null;
          }) => {
            setStartDate(startDate);
            setEndDate(endDate);
          }}
          focusedInput={focusedInput}
          onFocusChange={(focusedInput: any) => {
            setFocusedInput(focusedInput);
          }}
          horizontalMonthPadding={30}
          verticalSpacing={8}
          transitionDuration={250}
          // Hides the default arrow icon
          customArrowIcon={<div></div>}
          // Calender Props
          // Custom Day Component
          renderDayContents={(day: Moment) => {
            const formattedDate = day?.format("YYYY-MM-DD");

            return (
              <div className="date-text">
                <h2>{day?.date()}</h2>
              </div>
            );
          }}
          // Navigation
          renderNavNextButton={({ disabled, onClick }) => (
            <button
              className="absolute right-[35px] top-[20px] p-1 hover:bg-trueGray-100 transition-all rounded-full disabled:text-trueGray-300 disabled:bg-transparent"
              disabled={disabled}
              onClick={onClick}
            >
              <ChevronRightIcon className="relative w-6 h-6 -right-[1px]" />
            </button>
          )}
          renderNavPrevButton={({ disabled, onClick }) => (
            <button
              className="absolute left-[35px] top-[20px] p-1 hover:bg-trueGray-100 transition-all rounded-full disabled:text-trueGray-300 disabled:bg-transparent"
              disabled={disabled}
              onClick={onClick}
            >
              <ChevronLeftIcon className="relative w-6 h-6 -left-[1px]" />
            </button>
          )}
          // Single day component size
          daySize={45}
          // Navigation Arrows
        />
      </div>
    </div>
  );
};

export default AirbnbDateRangePicker;
