import * as React from 'react';
import ReactDOM from 'react-dom';
import util from '../src/util';
//import styles from '@telerik/kendo-theme-default/styles/main';
import classnames from 'classnames';
import SliderTrack from '../src/SliderTrack';
import SliderTicks from '../src/SliderTicks';
import SliderButton from '../src/SliderButton';
import SliderModel from '../src/SliderModel';
import keycode from 'keycode';

const propTypes = {
    buttons: React.PropTypes.bool,
    decreaseButtonTitle: React.PropTypes.string,
    fixedTickWidth: React.PropTypes.number,
    increaseButtonTitle: React.PropTypes.string,
    max: React.PropTypes.number,
    min: React.PropTypes.number,
    onChange: React.PropTypes.func,
    smallStep: React.PropTypes.number,
    tickPlacement: React.PropTypes.string,
    title: React.PropTypes.func,
    value: React.PropTypes.number,
    vertical: React.PropTypes.bool
};

class Slider extends React.Component {
    componentDidMount() {
        this.sizeComponent();
    }

    componentDidUpdate() {
        this.sizeComponent();
    }

    sizeComponent() {
        const wrapper = ReactDOM.findDOMNode(this);
        const track = wrapper.getElementsByClassName('k-slider-track')[0];
        const ticks = wrapper.getElementsByClassName('k-tick');
        const ticksConainer = wrapper.getElementsByClassName('k-slider-items');
        const dragHandle = wrapper.getElementsByClassName('k-draghandle')[0];
        const selection = wrapper.getElementsByClassName('k-slider-selection')[0];
        const model = new SliderModel(this.props, wrapper, track);

        model.resizeTrack();
        model.resizeTicks(ticksConainer, ticks);
        model.positionHandle(dragHandle);
        model.positionSelection(dragHandle, selection);

        if (this.props.fixedTickWidth) {
            model.resizeWrapper();
        }
    }

    onIncrease = () => {
        const { max, min, value } = this.props;
        let changedValue = util.increaseValueToStep(value, this.props);
        changedValue = util.trimValue(max, min, changedValue);
        this.props.onChange({ value: changedValue });
    };

    onDecrease = () => {
        const { max, min, value } = this.props;
        let changedValue = util.decreaseValueToStep(value, this.props);
        changedValue = util.trimValue(max, min, changedValue);
        this.props.onChange({ value: changedValue });
    };

    onTrackClick = (e) => {
        const { vertical } = this.props;
        const { pageX, pageY } = e;
        const wrapper = ReactDOM.findDOMNode(this);
        const track = wrapper.getElementsByClassName('k-slider-track')[0];
        let value = this.onHorizontalTrackClick(wrapper, track, pageX);
        if (vertical) {
            value = this.onVerticalTrackClick(wrapper, track, pageY);
        }
        this.props.onChange({ value: value });
    };

    onTickClick = (e) => {
        const { vertical, max, min, smallStep } = this.props;
        const ticks = e.target.parentNode.getElementsByClassName('k-tick');
        const index = [ ...ticks ].indexOf(e.target);
        let value = min + (index * smallStep);
        value = vertical ? Math.abs(value - max) : value;
        this.props.onChange({ value: value });
    };

    onHorizontalTrackClick = (wrapper, track, pageY) => {
        const { left, right } = track.getBoundingClientRect();
        const length = right - left;
        const wrapperOffset = pageY - left;
        return util.valueFromTrack(this.props, wrapperOffset, left, length);
    }

    onVerticalTrackClick = (wrapper, track, pageX) => {
        const { top, bottom } = track.getBoundingClientRect();
        const length = top - bottom;
        const wrapperOffset = pageX - bottom;
        return util.valueFromTrack(this.props, wrapperOffset, bottom, length);
    }

    onKeyDown = (event) => {
        const { max, min } = this.props;
        const handler = this.keyBinding[event.keyCode];
        if (handler) {
            let value = handler(this.props);
            value = util.trimValue(max, min, value);
            this.props.onChange({ value });
        }
    }

    keyBinding = {
        [keycode.codes.left]: ({ value, smallStep }) => value - smallStep,
        [keycode.codes.right]: ({ value, smallStep }) => value + smallStep,
        [keycode.codes.down]: ({ value, smallStep }) => value - smallStep,
        [keycode.codes.up]: ({ value, smallStep }) => value + smallStep,
        [keycode.codes.home]: ({ min }) => min,
        [keycode.codes.end]: ({ max }) => max
    }

    render() {
        const {
            buttons = true,
            max,
            min,
            smallStep,
            vertical,
            increaseButtonTitle = "Increase",
            decreaseButtonTitle = "Decrease",
            tickPlacement,
            value
        } = this.props;
        const trackProps = { max, min, onClick: this.onTrackClick, onKeyDown: this.onKeyDown, value };
        const ticksProps = { min, smallStep, vertical, title: this.props.title, onClick: this.onTickClick, tickCount: util.calculateTicksCount(max, min, smallStep) };
        const wrapperClasses = classnames({
            'k-widget': true,
            'k-slider': true,
            'k-slider-horizontal': !vertical,
            'k-slider-vertical': vertical,
            'k-state-default': true
        });
        const componentClasses = classnames({
            'k-slider-wrap': true,
            'k-slider-buttons': true,
            'k-slider-topleft': tickPlacement === 'before',
            'k-slider-bottomright': tickPlacement === 'after'
        });

        return (
            <div className = {wrapperClasses}>
                <div className = {componentClasses} >
                        {buttons && <SliderButton increase onClick = {this.onIncrease} title = {increaseButtonTitle} vertical = {vertical} />}
                        {buttons && <SliderButton onClick = {this.onDecrease} title = {decreaseButtonTitle} vertical = {vertical} />}
                        {tickPlacement !== 'none' && <SliderTicks {...ticksProps} />}
                    <SliderTrack {...trackProps} />
                </div>
            </div>
           );
    }
}

Slider.propTypes = propTypes;

export default Slider;
