import React, { Component } from 'react'
import { connect } from "react-redux"
import PropTypes from "prop-types"
import Event from "./Event"
import { getEvents } from "../../actions/eventActions"
import Spinner from "../common/Spinner"


class Timeline extends Component {
    componentDidMount() {
        this.props.getEvents()
    }
    render() {
        const { events, loading } = this.props.event;
        let eventContent
        let eventComponents = events.map(event => <Event 
            key={event._id} 
            title={event.title} 
            description={event.description} 
            start={event.start}
            end={event.end}
            id={event._id} />)

        if (events === null || loading) {
            eventContent = <Spinner />
        } else {
            eventContent = (
                <div>
                    {eventComponents}
                </div>
            )
        }
        return (
            <div>
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