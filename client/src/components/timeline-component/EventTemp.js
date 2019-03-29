import React from 'react'
import { Link } from "react-router-dom"
import moment from "moment"

export default function Event(props) {
  return (
    <div className="form-container">
      <Link to={"/calendar/view/" + props.id}><h2>{props.title}</h2></Link>
      <h4 className="text-muted">Start: {moment(props.start).format('DD MM YYYY')}</h4>
      <h4 className="text-muted">Start: {moment(props.start).format('h:mm')}</h4>
      <hr />
      <h4 className="text-muted">End: {moment(props.end).format('DD MM YYYY')}</h4>
      <h4 className="text-muted">End: {moment(props.end).format('h:mm')}</h4>
      <p>{props.description}</p>
    </div>
  )
}