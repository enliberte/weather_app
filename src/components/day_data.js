import React from 'react';


export default class DayData extends React.Component {
    render() {
        return (
            <div className="dayData card text-white bg-primary mb-3">
                <div className="card-header">{this.props.dt}</div>
                <div className="card-body">
                    <h5 className="card-title">{this.props.desc}</h5>
                    <p className="card-text">{Math.round(this.props.temp)}C</p>
                </div>
            </div>
        )
    }
}