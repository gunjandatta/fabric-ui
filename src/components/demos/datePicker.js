import React from "react";
import strings from "../../data/datePickerData";
import {
    DatePicker,
    DayOfWeek
} from "office-ui-fabric-react";

/**
 * Date Picker Demo
 */
const DatePickerDemo = () => {
    // Render the component
    return (
        <div style={{width: "250px"}}>
            <DatePicker
                firstDayOfWeek={DayOfWeek.Sunday}
                placeholder="Select a date..."
                strings={strings}
            />
        </div>
    );
};

export default DatePickerDemo;