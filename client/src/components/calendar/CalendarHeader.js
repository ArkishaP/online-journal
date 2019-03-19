import React from "react"
import AddEvent from "./AddEvent"

class CalendarHeader extends React.Component {

    render(props) {
        var temp = new Date()
        var year = temp.getFullYear()
        var month = temp.getMonth() + 1
        if (month < 10) {month = "0" + month}
        var date = temp.getDate()
        if (date < 10) {date = "0" + date}
        var start_date = `${year}-${month}-${date}`
        var end_date = start_date

        var minutes = temp.getMinutes()
        if (minutes < 10) {minutes = "0" + minutes}
        var hours = temp.getHours()
        if (hours < 10) {hours = "0" + hours}
        var start_time = `${hours}:${minutes}`
        var end_time = `${hours+2}:${minutes}`
        
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        return (

            <div className="calendar-header row">
                <div className="btn-group col-md-4" role="group">
                    <span onClick={this.props.subMonth} className="btn btn-outline-dark">
                        <i className="fas fa-chevron-circle-left"></i>
                    </span>
                    <button onClick={this.props.today} className="btn btn-outline-primary">Today</button>

                    <span onClick={this.props.addMonth} className="btn btn-outline-dark">
                        <i className="fas fa-chevron-circle-right"></i>
                    </span>
                </div>
                <h2 className="text-center col-md-4">{months[this.props.month] + " " + this.props.year}</h2>
                <div className="col-md-4 text-right">
                    <button
                        type="button"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#eventModal"
                    >
                        + Event
            </button>
                </div>


                <div className="modal fade" id="eventModal" tabindex="-1" role="dialog" aria-labelledby="eventModalTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="eventModalTitle">Add Event</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <AddEvent
                                    event_title=""
                                    event_description=""
                                    start_date={start_date}
                                    start_time={start_time}
                                    end_date={end_date}
                                    end_time={end_time} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CalendarHeader