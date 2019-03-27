import React from 'react';


export default class Search extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.getWeatherForecast}>
                <input type="text" name="city" placeholder="City"/>
                <button>Get forecast</button>
            </form>
        )
    }
}