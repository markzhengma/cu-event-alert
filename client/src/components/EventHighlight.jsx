import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EventHighlight extends Component {
    constructor(){
        super();
        this.state = {
            currentIndex: 0,
        }
        this.nextEvent = this.nextEvent.bind(this);
        this.prevEvent = this.prevEvent.bind(this);
    }

    nextEvent = () => {
        console.log(this.props.eventData.length);
        if (this.state.currentIndex < (this.props.eventData.length - 1)){
            this.setState({
                currentIndex: this.state.currentIndex + 1,
            })
        } else {
            this.setState({
                currentIndex: 0,
            })
        }
    }

    prevEvent = () => {
        if (this.state.currentIndex > 0){
            this.setState({
                currentIndex: this.state.currentIndex - 1,
            })
        } else {
            this.setState({
                currentIndex: this.props.eventData.length - 1,
            })
        }
    }

    render() {
        return (
            <div>
                {this.props.eventData ?
                    <div className = "highlight-section">
                        <div className = "highlight-title">
                            <b>Event Highlights</b>
                        </div>
                        <div className = "highlight-scroller">
                            <div className = "highlight-btn prev-highlight" onClick = {() => this.prevEvent()}/>
                            <div className = "highlight-single">
                                <div className = "highlight-image"></div>
                                <div className = "highlight-detail">
                                    <b>{this.props.eventData[this.state.currentIndex].event_name}</b>
                                    <p><b>Time: </b>{this.props.eventData[this.state.currentIndex].event_time}</p>
                                    <p><b>Location: </b><a href = {`https://www.google.com/search?q=${this.props.eventData[this.state.currentIndex].event_location} (${this.props.eventData[this.state.currentIndex].event_location_detail})`} target = "_blank">
                                        {this.props.eventData[this.state.currentIndex].event_location} ({this.props.eventData[this.state.currentIndex].event_location_detail})
                                        </a></p>
                                </div>
                            </div>
                            <div className = "highlight-btn next-highlight" onClick = {() => this.nextEvent()}/>
                        </div>
                    </div>
                    : ""}
            </div>
        )
    }
}

export default EventHighlight;