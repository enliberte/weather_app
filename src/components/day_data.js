import React from 'react';


export default class DayData extends React.Component {
    render() {
        return (
            <div className="dayData">
                <p>Date: {this.props.dt}</p>
                <p>Temperature: {this.props.temp}</p>
                <p>Description: {this.props.desc}</p>
            </div>
        )
    }
}