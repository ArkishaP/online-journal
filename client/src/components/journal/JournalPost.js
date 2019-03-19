import React from 'react'
import { Link } from "react-router-dom"
import postData from "./postData"

function JournalPost() {
  let postComponents = postData.map(post => <Post key={post.id} title={post.title} content={post.content} date={post.date} />)
  return (
    <div>
      {postComponents}
    </div>
  )
}
function Post(props) {
  let date = new Date(props.date)
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  return (
    
    <div className="bg-light text-dark mt-3 p-3">
      <div className="row">
      <h3 className="col-md-6">{props.title}</h3>
      <p class="col-md-6 text-muted text-right">{date.getDate()} {months[date.getMonth()]} {date.getFullYear()}</p>
      </div>
      <p class="lead text-justify">{props.content}</p>
      <div className="text-md-right">
        <Link to="/journal/view" className="btn btn-primary mx-5">View</Link>
        <Link to="/journal/edit" className="btn btn-primary">Edit</Link>
      </div>
    </div>
  )
}

export default JournalPost
