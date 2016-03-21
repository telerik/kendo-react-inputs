import * as React from 'react';
import ReactDOM from 'react-dom';
import Slider from '../src/slider/Slider';

class SliderContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            max: 10,
            min: 0,
            value: 3,
            step: 2,
            decreaseButtonTitle: "Dec",
            increaseButtonTitle: "Inc",
            buttons: true,
            tickPlacement: "both",
            dragHandleTitle: "DragMe"
        };
    }
    title(value) {
        if (value % 2 === 0) {
            return 'even';
        }
        return 'odd';
    }
    onChange = (e) => {
        this.setState({
            value: e.value
        });
    }
    render() {
        return (
            <Slider
                buttons = {this.state.buttons}
                decreaseButtonTitle = {this.state.decreaseButtonTitle}
                dragHandleTitle = {this.state.dragHandleTitle}
                fixedTickWidth = {this.state.fixedTickWidth}
                increaseButtonTitle = {this.state.increaseButtonTitle}
                max = {this.state.max}
                min = {this.state.min}
                onChange = {this.onChange}
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
