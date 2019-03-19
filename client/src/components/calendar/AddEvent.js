import React, { Component } from 'react'

class AddEvent extends Component {
    constructor(props){
        super()
        this.state={
            event_title:props.event_title,
            event_description:props.event_description,
            start_date: props.start_date,
            start_time:props.start_time,
            end_date:props.end_date,
            end_time:props.end_time

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }
        handleChange(event){
            this.setState({
              [event.target.name]: event.target.value
            })
          }
          handleSubmit(event){
              event.preventDefault()
              const newEvent = {
                  event_title: this.state.event_title,
                  event_description: this.state.event_description,
                  start_date: this.state.start_date,
                  start_time: this.state.start_time,
                  end_date: this.state.end_date,
                  end_time: this.state.end_time
              }
              console.log(newEvent)
          }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label for="event_title">Title</label>
                        <input 
                            type="text"
                            className="form-control" 
                            id="event_title"
                            placeholder="Enter title"
                            name="event_title"
                            value={this.state.event_title}
                            onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label for="event_description">Description</label>
                        <input 
                            type="text" 
                            className="form-control"
                            id="event_description" 
                            placeholder="Enter Description"
                            name="event_description"
                            value={this.state.event_description}
                            onChange={this.handleChange} />
                    </div>
                    <label for="start_date">From: </label>
                    <div class="form-row">
                        <div class="col">
                            <input 
                                type="date" 
                                class="form-control" 
                                id="start_date" 
                                name="start_date"
                                value={this.state.start_date}
                                onChange={this.handleChange}/>
                        </div>
                        <div class="col">
                            <input 
                                type="time" 
                                class="form-control" 
                                name="start_time" 
                                value={this.state.start_time}
                                onChange={this.handleChange} />
                        </div>
                    </div>
                    <label for="end_date">To: </label>
                    <div class="form-row">
                        <div class="col">
                            <input 
                                type="date" 
                                class="form-control"
                                id="end_date" 
                                name="end_date"
                                value={this.state.end_date}
                                onChange={this.handleChange}/>
                        </div>
                        <div class="col">
                            <input 
                                type="time" 
                                class="form-control" 
                                name="end_time"
                                value={this.state.end_time}
                                onChange={this.handleChange}/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
export default AddEvent