import React from "react"
import Side from "../layout/Side"
import Calendar from "./Calendar"
import Timeline from "./Timeline"
import Journal from "./Journal"

class Dashboard extends React.Component {
    constructor() {
        super()
        this.state = {
            displayContent: "Calendar",
            isSideOpen: true
        }
        this.handleContent = this.handleContent.bind(this)
        this.toggleSide = this.toggleSide.bind(this)

    }
    handleContent(event) {
        this.setState({
            displayContent: event.target.name
        })
    }
    toggleSide() {
        this.setState(prevState => {
            return {
                isSideOpen: !prevState.isSideOpen
            }
        })
    }

    render() {
        return (
            <div className="content">
                <Side
                    isSideOpen={this.state.isSideOpen}
                    toggleSide={this.toggleSide}
                    handleContent={this.handleContent}
                />
                <div className="main container">
                    <Main displayContent={this.state.displayContent} />
                </div>
            </div>
        )
    }
}
function Main(props) {
    if (props.displayContent === "Timeline") {
        return (
            <Timeline />
        )
    }
    else if (props.displayContent === "Journal") {
        return (
            <Journal />
        )
    }
    else {
        let now = new Date()
        return (
            < Calendar
                year={now.getFullYear()}
                month={now.getMonth() + 1}
                day={now.getDate()} />
        )
    }
}
export default Dashboard