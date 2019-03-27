import React, { Component } from 'react'
import { connect } from "react-redux"
import PropTypes from "prop-types"
import Record from "./Record"
import { getRecords } from "../../actions/expenseActions"
import Spinner from "../common/Spinner"
import moment from "moment"

class RecordsView extends Component {
    constructor() {
        super()
        this.state = {
            month: moment().format("MM")
        }
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount() {
        this.props.getRecords()
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const { records, loading } = this.props.expense;
        let recordContent
        let balance = 0

        let recordComponents = records.map(record => <Record
            key={record._id}
            record={record} />)

        if (records === null || loading) {
            recordContent = <Spinner />
        } else {
            recordContent = (
                <table class="table table-bordered text-center">
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Description</th>
                            <th scope="col">Account</th>
                            <th scope="col">Category</th>
                            <th scope="col"></th>
                            <th scope="col">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            records.map(record => {
                                if(moment(record.date).format("MM")===this.state.month){
                                if (record.debit_credit === "debit") {
                                    balance = balance - record.amount
                                } else {
                                    balance = balance + record.amount
                                }
                                return (
                                    <tr>
                                        <td>{moment(record.date).format('DD-MM-YY')}</td>
                                        <td>{record.description}</td>
                                        <td>{record.account}</td>
                                        <td>{record.category}</td>
                                        <td>{record.debit_credit === "debit" ?
                                            <i className="fas fa-minus"></i> :
                                            <i className="fas fa-plus"></i>}</td>
                                        <td>{record.amount}</td>
                                    </tr>
                                )
                            }}
                            )}
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{balance}</td>
                        </tr>
                    </tbody>
                </table>
            )

        }
        return (
            <div>
                <select name="month" value={this.state.month} onChange={this.handleChange}>
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
                {recordContent}
            </div>
        )
    }
}

RecordsView.propTypes = {
    getRecords: PropTypes.func.isRequired,
    expense: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    expense: state.expense
});

export default connect(mapStateToProps, { getRecords })(RecordsView)