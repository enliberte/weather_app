import React from 'react';
import DayData from "./day_data";


export default class WeatherData extends React.Component {
    render() {
        return (
            <div>
                {this.props.day1.dt &&
                    <DayData
                        dt={this.props.day1.dt}
                        temp={this.props.day1.temp}
                        desc={this.props.day1.desc}
                    />
                }

                {this.props.day2.dt &&
                    <DayData
                        dt={this.props.day2.dt}
                        temp={this.props.day2.temp}
                        desc={this.props.day2.desc}
                    />
                }
                {this.props.day3.dt &&
                    <DayData
                        dt={this.props.day3.dt}
                        temp={this.props.day3.temp}
                        desc={this.props.day3.desc}
                    />
                }
                {this.props.day4.dt &&
                    <DayData
                        dt={this.props.day4.dt}
                        temp={this.props.day4.temp}
                        desc={this.props.day4.desc}
                    />
                }
                {this.props.day5.dt &&
                    <DayData
                        dt={this.props.day5.dt}
                        temp={this.props.day5.temp}
                        desc={this.props.day5.desc}
                    />
                }
                <p className="error">{this.props.error}</p>
            </div>
        )
    }
}