import React from 'react'
import { Link } from "react-router-dom"
import moment from "moment"

function Event({ time, text, id, start, year, month }) {

  return (
    <li>
      <i className="fa" />
      <div className="time-line-item">
        <span className="time">
          <i className="fa fa-clock-o" />
          {time}
        </span>
        <Link to={"/calendar/view/" + id} className="time-line-header">{text}</Link>
      </div>
    </li>
  );
}
export default Event