import React from 'react';
import Trend from 'react-trend';


export default class Grapth extends React.Component {
    render() {
        return (
            <div className="grapth">
                <Trend
                    data={[
                        this.props.t1,
                        this.props.t2,
                        this.props.t3,
                        this.props.t4,
                        this.props.t5
                    ]}
                    autoDraw
                    autoDrawDuration={5000}
                    autoDrawEasing="linear"
                    gradient={['#0FF', '#F0F', '#FF0']}
                />
            </div>
        )
    }
}