import React, { Component } from 'react';
// import './style/footer.css';
import './style/css';

class Footer extends Component {
    render() {
        let buttonNameArr = this.props.buttonName;
        let buttonStyleArr = this.props.style || this.generateButtonStyle(buttonNameArr.length);
        let size = this.props.size || "lg";
        let buttonWidth;
        switch (buttonNameArr.length) {
            case 1:
                buttonWidth = "w-100";
                break;
            case 2:
                buttonWidth = "w-50";
                break;
            case 3:
                buttonWidth = "w-33";
                break;
            case 4:
                buttonWidth = "w-25";
                break;
        
            default:
                break;
        }

        let paddingY;
        switch (size) {
            case "lg":
                paddingY = "py-15";
                break;
            case "sm":
                paddingY = "py-11";
                break;
            default:
                paddingY = "py-15";
                break;
        }

        let footerButtonDiv = buttonNameArr.map((button, index) => {
            return (
                <div className={`${buttonWidth} buttonHeight-${size} text-center d-inline-block ${paddingY}`}
                    style={buttonStyleArr[index]}
                    key={index}
                    onClick={this.onButtonClick.bind(this, index)}>{button}</div>
            );
        })

        return (
            <div className='gsp-footer'>
                <div className="w-100">
                    {footerButtonDiv}
                </div>
            </div>
        );
    }

    generateButtonStyle(numOfButtons) {
        let buttonStyleArr = [];
        let buttonStyle;
        for (let index = 0; index < numOfButtons; index++) {
            if(index%2 === 1) {
                buttonStyle = {'color': '#318ccf', 'backgroundColor': '#ffffff'};
            } else if(index%2 === 0) {
                buttonStyle = {'color': 'white', 'backgroundColor': '#318ccf'};
            }
            buttonStyleArr.push(buttonStyle);
        }
        return buttonStyleArr;
    }

    onButtonClick(index) {
        // console.log(index);
        let callBackFunction = this.props.callBackFooterButtonClick[index];
        callBackFunction();
    }
    
}
  
  export default Footer