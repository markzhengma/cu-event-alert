import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class BrowseEvent extends Component {
    constructor() {
        super();
    }

    componentDidMount(){
        this.props.updatedEventDataHandler();
    }

    render() {
        return (
            <div className = "browse-page">
                <div className = "browse-title">
                    <h2>Event List</h2>
                    <h4>Amazing events are happening around you...</h4>
                </div>
                {this.props.eventData ? 
                    <div className = "browse-list-head">
                        <div className = "browse-list-head-single">Event Name</div>
                        <div className = "browse-list-head-single">Time</div>
                        <div className = "browse-list-head-single">Location</div>
                        <div className = "browse-list-head-single">Type</div>
                    </div>
                    : ""
                }
                <div className = "browse-list">
                    {this.props.eventData ? 
                        this.props.eventData.map(event => {
                            return  <div className = "browse-single" key = {event.id}>
                                        <div className = "browse-single-name">
                                            <Link to = "/event/single"
                                                  onClick = {() => this.props.selectEventHandler(this.props.eventData.indexOf(event))}>
                                                {event.event_name}
                                            </Link>
                                        </div>
                                        <div className = "browse-single-detail">{new Date(event.event_time).toDateString()}</div>
                                        <div className = "browse-single-detail">{event.event_location}</div>
                                        <div className = "browse-single-detail">{event.event_type}</div>
                                    </div>
                        })
                        : <b>Sorry, no active events so far.</b>
                    }
                </div>
            </div>
        )
    }
}

export default BrowseEvent;