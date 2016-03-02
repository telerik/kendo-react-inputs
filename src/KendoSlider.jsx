import * as React from 'react';

import ReactDOM from 'react-dom';

import util from '../src/util';

//import styles from '@telerik/kendo-theme-default/styles/main';

import classnames from 'classnames';

import SliderTrack from '../src/SliderTrack';

import SliderTicks from '../src/SliderTicks';

import SliderButton from '../src/SliderButton';

export default class KendoSlider extends React.Component {
    static propTypes = {
        max: React.PropTypes.number,
        min: React.PropTypes.number,
        onChange: React.PropTypes.func,
        smallStep: React.PropTypes.number,
        value: React.PropTypes.number,
        vertical: React.PropTypes.bool
    }

    componentDidMount() {
        const wrapper = ReactDOM.findDOMNode(this);
        this.tickSizes = this.getTickSizes(wrapper);
        this.resizeTrack(wrapper);
        this.resizeTicks(wrapper);
        this.positionHandle(wrapper);
        this.positionSelection(wrapper);
    }
    componentDidUpdate() {
        const wrapper = ReactDOM.findDOMNode(this);
        this.resizeTrack(wrapper);
        this.resizeTicks(wrapper);
        this.positionHandle(wrapper);
        this.positionSelection(wrapper);
    }

    resizeTrack(wrapper) {
        const { vertical } = this.props;
        const track = wrapper.getElementsByClassName('k-slider-track')[0];
        const trackWidth = this.trackWidth(wrapper, track);
        vertical ? track.style.height = `${trackWidth}px` : track.style.width = `${trackWidth}px`;
    }

    resizeTicks(wrapper) {
        const ticks = wrapper.getElementsByClassName('k-tick');
        const { vertical } = this.props;
        const dimension = vertical ? "height" : "width";
        [ ...ticks ].map((tick, index) => tick.style[dimension] = `${this.tickSizes[index]}px`);
    }

    trackWidth(wrapper, track) {
        const { vertical } = this.props;
        const wrapperSize = vertical ? wrapper.clientHeight : wrapper.clientWidth;
        const offset = vertical ? getComputedStyle(track).bottom : getComputedStyle(track).left;
        const trackSize = util.calculateTrackSize(wrapperSize, offset);

        return trackSize;
    }

    positionHandle(wrapper) {
        const { max, min } = this.props;
        let value = util.trimValue(max, min, this.props.value);
        const track = wrapper.getElementsByClassName('k-slider-track')[0];
        const trackWidth = this.trackWidth(wrapper, track);
        const dragHandle = wrapper.getElementsByClassName('k-draghandle')[0];
        const handleWidth = Math.floor(dragHandle.offsetWidth / 2);
        const handlePosition = (trackWidth / Math.abs(max - min) * (value - min)) - handleWidth;
        dragHandle.style.left = `${Math.floor(handlePosition)}px`;
    }

    positionSelection(wrapper) {
        const handle = wrapper.getElementsByClassName('k-draghandle')[0];
        const handleWidth = Math.floor(handle.offsetWidth / 2);
        const handleLeft = parseInt(getComputedStyle(handle).left);
        const selection = wrapper.getElementsByClassName('k-slider-selection')[0];
        selection.style.width = `${handleLeft + handleWidth}px`;
    }

    getTickSizes(wrapper) {
        const { max, min, smallStep } = this.props;
        const track = wrapper.getElementsByClassName('k-slider-track')[0];
        const trackWidth = this.trackWidth(wrapper, track);
        const tickSizes = util.calculateTickSizes(trackWidth, min, max, smallStep);

        return tickSizes;
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
        const wrapper = ReactDOM.findDOMNode(this);
        const track = wrapper.getElementsByClassName('k-slider-track')[0];
        const { left, right } = track.getBoundingClientRect();
        const length = right - left;
        const wrapperOffset = e.pageX - left;
        const value = util.valueFromTrack(this.props, wrapperOffset, left, length);
        this.props.onChange({ value: value });
    };

    onTickClick = (e) => {
        const ticks = e.target.parentNode.getElementsByClassName('k-tick');
        const index = [ ...ticks ].indexOf(e.target);
        const value = index * this.props.smallStep;
        this.props.onChange({ value: value });
    };

    render() {
        const { max, min, smallStep, vertical } = this.props;
        const ticksCount = util.calculateTicksCount(max, min, smallStep);
        const classes = classnames({
            'k-widget': true,
            'k-slider': true,
            'k-slider-horizontal': !vertical,
            'k-slider-vertical': vertical,
            'k-state-default': true
        });

        return (
            <div {...this.props} className={classes}>
                <div className={"k-slider-wrap k-slider-buttons"} >
                    <SliderButton
                        increase
                        onClick={this.onIncrease}
                        title="Left"
                        vertical = {vertical ? true : false}
                    />
                    <SliderButton
                        onClick={this.onDecrease}
                        title="Right"
                        vertical = {vertical ? true : false}
                    />

                    <SliderTicks
                        onClick={this.onTickClick}
                        tickCount={ticksCount}
                        vertical = {vertical ? true : false}
                    />

                    <SliderTrack onClick={this.onTrackClick} />

                </div>
            </div>
           );
    }
}
