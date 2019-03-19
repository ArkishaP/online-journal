import React, { Component } from 'react'
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { registeruser } from "../../actions/authActions"
import TextFieldGroup from "../common/TextFieldGroup"

class Register extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard")
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            })
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })

    }
    handleSubmit(event) {
        event.preventDefault()

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }
        this.props.registeruser(newUser, this.props.history)
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="row justify-content-md-center mt-5">
                <form noValidate onSubmit={this.handleSubmit} className="col-md-6">
                    <h1 className="h3 mb-3 font-weight-normal text-center">Create a new Account</h1>
                    <TextFieldGroup
                        placeholder="Enter Name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        error={errors.name}
                        text="Name: "
                    />
                    <TextFieldGroup
                        type="email"
                        placeholder="Enter Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        error={errors.email}
                        text="Email Address: "
                    />
                    <TextFieldGroup
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        error={errors.password}
                        text="Password: "
                    />
                    
                    <TextFieldGroup
                        type="password"
                        placeholder="Confirm Password"
                        name="password2"
                        value={this.state.password2}
                        onChange={this.handleChange}
                        error={errors.password2}
                        text="Re-enter password"
                    />
                    <div className="row justify-content-md-around mx-2">
                        <button className="btn btn-primary col-md-4 mt-1">Register</button>
                        <Link to="/login" className="btn btn-outline-secondary col-md-4 mt-1">Log In instead</Link>
                    </div>
                </form>
            </div>
        );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, { registeruser })(Register);
