import React from "react"

class Days extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render(props) {
        var dayClass = this.props.name === "unselected"
            ? "text-muted bg-light"
            : "bg-light"
        var classes = dayClass + " text-primary"
        return (
            <div className={classes}>
                <h3 className="h3">{this.props.date.getDate()}</h3>
                <div>Event
                </div>
                </div>
        )
    }
}
export default Days