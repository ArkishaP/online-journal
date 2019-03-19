import React from "react"
import CalendarHeader from "../calendar/CalendarHeader"
import DayHeader from "../calendar/DayHeader"
import CalendarDays from "../calendar/CalendarDays"

class Calendar extends React.Component {
    constructor() {
        super()
        this.state = {
            date: new Date(),
        }
        this.subMonth = this.subMonth.bind(this)
        this.addMonth = this.addMonth.bind(this)
        this.today = this.today.bind(this)
    }
    // Calendar Header
    subMonth() {
        let makeDate = this.state.date
        makeDate.setMonth(makeDate.getMonth() - 1)
        this.setState({
            date: makeDate
        })
    }
    addMonth() {
        let makeDate = this.state.date
        makeDate.setMonth(makeDate.getMonth() + 1)
        this.setState({
            date: makeDate
        })
    }
    today() {
        this.setState({
            date: new Date()
        })
    }

    render() {

        return (
            <div className="calendar">
                <CalendarHeader
                    year={this.state.date.getFullYear()}
                    month={this.state.date.getMonth()}
                    subMonth={this.subMonth}
                    addMonth={this.addMonth}
                    today={this.today} />
                <div className="bg-dark border border-dark">
                    <DayHeader />
                    <CalendarDays
                        year={this.state.date.getFullYear()}
                        month={this.state.date.getMonth()} />
                </div>
            </div>
        )
    }
}
export default Calendar