import React from "react"
import { Link } from "react-router-dom"
import { PropTypes } from "prop-types"
import { connect } from "react-redux"

class Landing extends React.Component {

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard")
        }
    }
    render() {
        return (
            <div>
                <div className="landing">
                    <div className="dark-overlay landing-inner text-light">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <h1 className="display-3 mb-4">Plan Your Life</h1>
                                    <p className="lead"> Maintain a Journal, Manage your events, track your activities</p>
                                    <hr />
                                    <Link to="/register" className="btn btn-lg btn-outline-light mr-2">Sign Up</Link>
                                    <Link to="/login" className="btn btn-lg btn-outline-light">Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        )
    }
}

Landing.propTypes = {
    auth: PropTypes.object.isRequired
}


const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Landing)