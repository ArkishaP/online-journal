import React from "react"
import Days from "./Days"
function CalendarDays(props) {

    var date = new Date(props.year, props.month, 1);
    var days = []
    while (date.getMonth() === props.month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }
    let space = date.getDay()
    var nextdays = []
    while (space <= 6) {
        space = space + 1;
        nextdays.push(new Date(date));
        date.setDate(date.getDate() + 1)
    }
    date = new Date(props.year, props.month, 1);
    space = date.getDay()
    date.setDate(date.getDate() - space)
    var prevdays = []
    while (space !== 0) {
        prevdays.push(new Date(date));
        date.setDate(date.getDate() + 1)
        space = space - 1;
    }

    let prevdayComponents = prevdays.map(day => <Days date={day} name="unselected" />)
    let dayComponents = days.map(day => <Days date={day} name="selected" />)
    let nextdayComponents = nextdays.map(day => <Days date={day} name="unselected" />)
    
    return (
        <div className="calendar-days text-center">
            {prevdayComponents}
            {dayComponents}
            {nextdayComponents}
        </div>
    )
}
export default CalendarDays