import React from 'react'

class EditPost extends React.Component {
  constructor(){
    super()
    this.state = {
      post_title: "Hello",
      post_content: "hi",
      post_date: "2015-03-20"
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return (
      <div className="container mt-5">
        <form>
          <div class="form-group">
            <label for="post_title">Title</label>
            <input
              type="text"
              class="form-control"
              id="post_title"
              name="post_title"
              value={this.state.post_title}
              placeholder="Add a Title"
              onChange={this.handleChange}/>
          </div>
          <div class="form-group">
            <label for="create_date">Date Created:</label>
            <input
              type="date"
              class="form-control"
              id="create_date"
              name="post_date"
              value={this.state.post_date}
              onChange={this.handleChange}/>
          </div>
          <div class="form-group">
            <label for="post_content">Content</label>
            <textarea
              class="form-control"
              id="post_content"
              rows="10"
              name="post_content"
              value={this.state.post_content}
              onChange={this.handleChange}></textarea>
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    )
  }
}
export default EditPost
