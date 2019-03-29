import React, { Component } from 'react'
import { connect } from "react-redux"
import PropTypes from "prop-types"
import Event from "./Event"
import { getEvents } from "../../actions/eventActions"
import Spinner from "../common/Spinner"
import moment from "moment"


class Timeline extends Component {
    constructor() {
        super()
        this.state = {
            year: moment().format("YYYY"),
            month: moment().format("MM")
        }
        this.getYearList = this.getYearList.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount() {
        this.props.getEvents()
    }
    handleChange(e) {
        this.setState
            ({
                [e.target.name]: e.target.value
            })
    }
    getYearList() {
        const year = new Date().getFullYear();
        return (
            Array.from(new Array(50), (v, i) =>
                <option key={i} value={year + i}>{year + i}</option>
            )
        );
    };

    render() {
        const { events, loading } = this.props.event;
        let eventContent

        let toreturn = []

        let eventComponents = events
            .map(event => {
                toreturn.push(
                    <Event
                        key={event._id}
                        title={event.title}
                        description={event.description}
                        start={event.start}
                        end={event.end}
                        id={event._id}
                        year={this.state.year}
                        month={this.state.month} />
                )
                let i = 0
                let initstart = event.start
                while (moment(event.start).format("LL") !== moment(event.end).format("LL")) {
                    event.start = moment(event.start).add(1, 'd').toString();
                    toreturn.push(
                        <Event
                            allDay={true}
                            key={event._id + i}
                            title={event.title}
                            description={event.description}
                            start={event.start}
                            end={event.end}
                            id={event._id}
                            year={this.state.year}
                            month={this.state.month} />
                    )
                    i++;
                }
                event.start = initstart
            })

        toreturn = toreturn.sort((a, b) => new moment(a.props.start).format('YYYYMMDD') - new moment(b.props.start).format('YYYYMMDD'))



        if (events === null || loading) {
            eventContent = <Spinner />
        } else {
            eventContent = (
                <div>
                    {toreturn}
                </div>
            )
        }
        return (
            <div>
                <select onChange={this.handleChange} value={this.state.year} name="year" className="btn btn-md btn-dark mr-2">
                    {this.getYearList()}
                </select>
                <select name="month" value={this.state.month} onChange={this.handleChange} className="btn btn-md btn-dark">
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
                {eventContent}
            </div>
        )
    }
}

Timeline.propTypes = {
    getEvents: PropTypes.func.isRequired,
    event: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    event: state.event
});

export default connect(mapStateToProps, { getEvents })(Timeline)