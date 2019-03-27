import React from 'react'
import { Link } from "react-router-dom"
import moment from "moment"

export default function Event(props) {
  return (
    <div className="form-container">
      <Link to={"/calendar/view/" + props.id}><h2>{props.title}</h2></Link>
      <h4 className="text-muted">Start: {moment(props.start).format('MMMM Do YYYY, h:mm:ss a')}</h4>
      <h4 className="text-muted">End: {moment(props.end).format('MMMM Do YYYY, h:mm:ss a')}</h4>
      <p>{props.description}</p>
    </div>
  )
}