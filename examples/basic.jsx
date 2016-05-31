import * as React from 'react';
import ReactDOM from 'react-dom';
import Slider from '../src/slider/Slider';

class SliderContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            max: 10,
            min: 0,
            value: 4,
            step: 2,
            disabled: false,
            decreaseButtonTitle: "Less",
            increaseButtonTitle: "More",
            showButtons: true,
            tickPlacement: "both",
            dragHandleTitle: "DragMe"
        };
    }
    title = (value) => {
        if (value % 2 === 0) {
            return 'even';
        }
        return 'odd';
    }
    onChange = (e) => {
        this.setState({
            value: e.value
        });
    };
    render() {
        return (
            <Slider
                decreaseButtonTitle = {this.state.decreaseButtonTitle}
                disabled = {this.state.disabled}
                dragHandleTitle = {this.state.dragHandleTitle}
                fixedTickWidth = {this.state.fixedTickWidth}
                increaseButtonTitle = {this.state.increaseButtonTitle}
                max = {this.state.max}
                min = {this.state.min}
                onChange = {this.onChange}
                showButtons = {this.state.showButtons}
	vertical={true}            
    smallStep = {this.state.step}
                style = {{ width: 400 }}
                tickPlacement = {this.state.tickPlacement}
                title = {this.title}
                value = {this.state.value}
            />);
    }
}
ReactDOM.render(
    <SliderContainer />,
    document.getElementById('app')
);
