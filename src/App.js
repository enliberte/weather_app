import React from 'react';
import About from './components/about'
import Search from "./components/search";
import WeatherData from "./components/weather_data";


const API_KEY = '5758abfbf8d14a8f1324fab99dafcf9f';


export default class App extends React.Component {
    state = {
        day1: {
            dt: undefined,
            temp: undefined,
            desc: undefined
        },
        day2: {
            dt: undefined,
            temp: undefined,
            desc: undefined
        },
        day3: {
            dt: undefined,
            temp: undefined,
            desc: undefined
        },
        day4: {
            dt: undefined,
            temp: undefined,
            desc: undefined
        },
        day5: {
            dt: undefined,
            temp: undefined,
            desc: undefined
        },
        error: undefined
    };

    getWeatherForecast = async (event) => {
        event.preventDefault();
        let city = event.target.elements.city.value;
        let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);

        if (response.ok) {
            let forecastData = await response.json();
            let forecastNoonData = forecastData.list.filter((time) => {
                return time.dt_txt.indexOf('12:00') !== -1;
            });
            this.setState({
                day1: {
                    dt: forecastNoonData[0].dt_txt,
                    temp: forecastNoonData[0].main.temp,
                    desc: forecastNoonData[0].weather[0].description
                },
                day2: {
                    dt: forecastNoonData[1].dt_txt,
                    temp: forecastNoonData[1].main.temp,
                    desc: forecastNoonData[1].weather[0].description
                },
                day3: {
                    dt: forecastNoonData[2].dt_txt,
                    temp: forecastNoonData[2].main.temp,
                    desc: forecastNoonData[2].weather[0].description
                },
                day4: {
                    dt: forecastNoonData[3].dt_txt,
                    temp: forecastNoonData[3].main.temp,
                    desc: forecastNoonData[3].weather[0].description
                },
                day5: {
                    dt: forecastNoonData[4].dt_txt,
                    temp: forecastNoonData[4].main.temp,
                    desc: forecastNoonData[4].weather[0].description
                },
                error: undefined
            })
        } else {
            this.setState({
                day1: {
                    dt: undefined,
                    temp: undefined,
                    desc: undefined
                },
                day2: {
                    dt: undefined,
                    temp: undefined,
                    desc: undefined
                },
                day3: {
                    dt: undefined,
                    temp: undefined,
                    desc: undefined
                },
                day4: {
                    dt: undefined,
                    temp: undefined,
                    desc: undefined
                },
                day5: {
                    dt: undefined,
                    temp: undefined,
                    desc: undefined
                },
                error: 'Type a city'
            })
        }
    };

    render() {
        return (
            <div className="wrapper">
                <div className="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-5 about">
                                <About />
                            </div>
                            <div className="col-sm-7 search">
                                <Search getWeatherForecast={this.getWeatherForecast}/>
                                <WeatherData
                                    day1={this.state.day1}
                                    day2={this.state.day2}
                                    day3={this.state.day3}
                                    day4={this.state.day4}
                                    day5={this.state.day5}
                                    error={this.state.error}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}