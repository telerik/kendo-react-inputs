import * as React from 'react';
import ReactDOM from 'react-dom';
import util from '../src/util';
//import styles from '@telerik/kendo-theme-default/styles/main';
import classnames from 'classnames';
import SliderTrack from '../src/SliderTrack';
import SliderTicks from '../src/SliderTicks';
import SliderButton from '../src/SliderButton';
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
        const { fixedTickWidth } = this.props;
        const wrapper = ReactDOM.findDOMNode(this);
        const track = wrapper.getElementsByClassName('k-slider-track')[0];
        this.tickSizes = this.getTickSizes(wrapper);
        this.resizeTrack(wrapper);
        this.resizeTicks(wrapper);
        this.positionHandle(wrapper);
        this.positionSelection(wrapper);

        if (fixedTickWidth) {
            this.resizeWrapper(wrapper, track);
        }
    }

    componentDidUpdate() {
        const wrapper = ReactDOM.findDOMNode(this);
        this.resizeTrack(wrapper);
        this.resizeTicks(wrapper);
        this.positionHandle(wrapper);
        this.positionSelection(wrapper);
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

    resizeWrapper(wrapper, track) {
        const { vertical } = this.props;
        const orientation = this.props.vertical ? 'height' : 'width';
        const wrapperSize = vertical ? parseInt(getComputedStyle(wrapper)[orientation]) :
            parseInt(getComputedStyle(wrapper)[orientation]);
        const trackWidth = this.trackWidth(wrapper, track);
        const fixedTrackWidth = this.fixedTrackWidth();
        if (trackWidth > fixedTrackWidth) {
            wrapper.style[orientation] = `${ wrapperSize - (trackWidth - fixedTrackWidth)}px`;
        } else {
            wrapper.style[orientation] = `${ wrapperSize + (fixedTrackWidth - trackWidth)}px`;
        }
    }

    resizeTrack(wrapper) {
        const { vertical, fixedTickWidth } = this.props;
        const orientation = vertical ? 'height' : 'width';
        const track = wrapper.getElementsByClassName('k-slider-track')[0];
        const trackWidth = fixedTickWidth ? this.fixedTrackWidth() : this.trackWidth(wrapper, track);
        track.style[orientation] = `${trackWidth}px`;
    }

    resizeTicks(wrapper) {
        const { vertical } = this.props;
        const ticks = wrapper.getElementsByClassName('k-tick');
        const dimension = vertical ? "height" : "width";
        [ ...ticks ].map((tick, index) => tick.style[dimension] = `${this.tickSizes[index]}px`);
        if (vertical) {
            this.adjustPadding(wrapper);
        }
    }

    adjustPadding(wrapper) {
        const { fixedTickWidth } = this.props;
        const ticksWidth = this.tickSizes.reduce((prev, curr) => prev + curr, 0);
        const ticksContainer = wrapper.getElementsByClassName('k-slider-items')[0];
        const track = wrapper.getElementsByClassName('k-slider-track')[0];
        const trackWidth = fixedTickWidth ? this.fixedTrackWidth() : this.trackWidth(wrapper, track);
        const reminder = trackWidth - ticksWidth;
        if ( reminder !== 0) {
            let padding = reminder + parseInt(getComputedStyle(track).bottom);
            ticksContainer.style.paddingTop = `${padding}px`;
        }
    }

    fixedTrackWidth() {
        const { max, min, smallStep, fixedTickWidth } = this.props;
        return ((max - min) / smallStep) * fixedTickWidth;
    }

    trackWidth(wrapper, track) {
        const { vertical } = this.props;
        const wrapperSize = vertical ? wrapper.clientHeight : wrapper.clientWidth;
        const offset = vertical ? getComputedStyle(track).bottom : getComputedStyle(track).left;
        const trackSize = util.calculateTrackSize(wrapperSize, offset);

        return trackSize;
    }

    positionHandle(wrapper) {
        const { max, min, vertical, fixedTickWidth } = this.props;
        let value = util.trimValue(max, min, this.props.value);
        const position = vertical ? 'bottom' : 'left';
        const track = wrapper.getElementsByClassName('k-slider-track')[0];
        const trackWidth = fixedTickWidth ? this.fixedTrackWidth() : this.trackWidth(wrapper, track);
        const dragHandle = wrapper.getElementsByClassName('k-draghandle')[0];
        const handleWidth = Math.floor(dragHandle.offsetWidth / 2);
        const handlePosition = (trackWidth / Math.abs(max - min) * (value - min)) - handleWidth;
        dragHandle.style[position] = `${Math.floor(handlePosition)}px`;
    }

    positionSelection(wrapper) {
        const { vertical } = this.props;
        const offset = vertical ? 'bottom' : 'left';
        const orientation = vertical ? 'height' : 'width';
        const handle = wrapper.getElementsByClassName('k-draghandle')[0];
        const handleWidth = Math.floor(handle.offsetWidth / 2);
        const handleLeft = parseInt(getComputedStyle(handle)[offset]);
        const selection = wrapper.getElementsByClassName('k-slider-selection')[0];
        selection.style[orientation] = `${handleLeft + handleWidth}px`;
    }

    getTickSizes(wrapper) {
        const { max, min, smallStep, fixedTickWidth } = this.props;
        const track = wrapper.getElementsByClassName('k-slider-track')[0];
        const trackWidth = fixedTickWidth ? this.fixedTrackWidth() : this.trackWidth(wrapper, track);
        const tickSizes = util.calculateTickSizes(trackWidth, min, max, smallStep);

        return tickSizes;
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
