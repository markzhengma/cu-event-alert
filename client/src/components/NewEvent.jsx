import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewEvent extends Component {
    constructor() {
        super();
        this.state = {
            event_name: '',
            event_type: '',
            event_fee: '',
            event_time: '',
            event_location: '',
            event_location_detail: '',
            event_desc: '',
        }
    }

    componentWillUnmount(){
        this.props.clearRedirect();
    }

    handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        });
    }

    render() {
        return (
            <div className = "create-page">
                {this.props.auth ? 
                    <form className = "create-form" onSubmit = {(e) => this.props.handleNewEventSubmit(e, this.state.event_name, this.state.event_type, this.state.event_fee, this.state.event_time, this.state.event_location, this.state.event_location_detail, this.state.event_desc)}>
                        <h3>Create New Event</h3>
                        <input className = "register-input" type = "text" name = "event_name" value = {this.state.event_name} placeholder = "Event Name" onChange = {this.handleInputChange}/>
                        <input className = "register-input" type = "text" name = "event_type" value = {this.state.event_type} placeholder = "Event Type" onChange = {this.handleInputChange}/>
                        <input className = "register-input" type = 'number' name = 'event_fee' value = {this.state.event_fee} placeholder = "Event Fee" onChange = {this.handleInputChange}/>
                        <input className = "register-input" type = 'text' name = 'event_time' value = {this.state.event_time} placeholder = "Event Time" onChange = {this.handleInputChange}/>
                        <input className = "register-input" type = "text" name = "event_location" value = {this.state.event_location} placeholder = "Event Location" onChange = {this.handleInputChange}/>
                        <input className = "register-input" type = "text" name = "event_location_detail" value = {this.state.event_location_detail} placeholder = "Detailed Location" onChange = {this.handleInputChange}/>
                        <input className = "register-input" type = "text" name = "event_desc" value = {this.state.event_desc} placeholder = "Description" onChange = {this.handleInputChange}/>
                        <button className = "register-btn" type = "submit">Create</button>
                    </form>
                    :
                    <h3>Please sign in or register before creating event...</h3>
                }
            </div>
        )
    }
}

export default NewEvent;