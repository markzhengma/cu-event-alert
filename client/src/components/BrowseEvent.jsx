import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

class BrowseEvent extends Component {
    constructor() {
        super();
        this.state = {
            eventData: null,
        }
    }

    componentDidMount(){
        axios.get("/event/all")
        .then(res => {
            console.log(res.data)
            this.setState({
                eventData: res.data,
            })
        })
        .catch(err => {
            console.log(err);
        });
    };

    render() {
        return (
            <div className = "browse-page">
                <div className = "browse-title">
                    <h2>Event List</h2>
                    <h4>Amazing events are happening around you...</h4>
                </div>
                {this.state.eventData ? 
                    <div className = "browse-list-head">
                        <div className = "browse-list-head-single">Event Name</div>
                        <div className = "browse-list-head-single">Time</div>
                        <div className = "browse-list-head-single">Location</div>
                        <div className = "browse-list-head-single">Type</div>
                    </div>
                    : ""
                }
                <div className = "browse-list">
                    {this.state.eventData ? 
                        this.state.eventData.map(event => {
                            return  <div className = "browse-single" key = {event.id}>
                                        <div className = "browse-single-name"><b>{event.event_name}</b></div>
                                        <div className = "browse-single-detail">{event.event_time}</div>
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