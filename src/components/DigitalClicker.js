// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component{
    constructor() {
        super();
        this.state = {
            timesClicked: 0,
          };
    }

    setClick = () => {
        this.setState(before => ({
            timesClicked: before.timesClicked+1
        }))
    }
    render(){
        return (
            <button onClick={this.setClick}> 
            {this.state.timesClicked}
            </button>
        )
    }
}
export default DigitalClicker;