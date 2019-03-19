import React from "react"
import {Link} from "react-router-dom"
import JournalPost from "../journal/JournalPost"
function Journal() {
    return (
            <div className="journal">
            <div className="row">
                <Link to="journal/new" className="btn btn-outline-dark">
                    + New Post
                </Link>
            </div>
            <JournalPost />

        </div>
    )
}
export default Journal