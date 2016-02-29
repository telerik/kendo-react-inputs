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
        smallStep: React.PropTypes.number,
        value: React.PropTypes.number
    }

    componentDidMount() {
        const wrapper = ReactDOM.findDOMNode(this);
        this.tickSizes = this.getTickSizes(wrapper);
        this.resizeTrack(wrapper);
        this.resizeTicks(wrapper);
        this.positionHandle(wrapper);
    }

    resizeTrack(wrapper) {
        const track = wrapper.getElementsByClassName('k-slider-track')[0];
        const trackWidth = this.trackWidth(wrapper, track);
        track.style.width = `${trackWidth}px`;
    }

    resizeTicks(wrapper) {
        const ticks = wrapper.getElementsByClassName('k-tick');
        [ ...ticks ].map((tick, index) => tick.style.width = `${this.tickSizes[index]}px`);
    }

    trackWidth(wrapper, track) {
        const offsetLeft = getComputedStyle(track).left;
        const trackWidth = util.calculateTrackWidth(wrapper.clientWidth, offsetLeft);

        return trackWidth;
    }

    positionHandle(wrapper) {
        const { max, min } = this.props;
        let value = util.trimValue(max, min, this.props.value);
        const track = wrapper.getElementsByClassName('k-slider-track')[0];
        const trackWidth = this.trackWidth(wrapper, track);
        const dragHandle = wrapper.getElementsByClassName("k-draghandle")[0];
        const handleWidth = Math.floor(dragHandle.offsetWidth / 2);

        const handlePosition = (trackWidth / Math.abs(max - min) * (value - min)) - handleWidth;
        dragHandle.style.left = `${handlePosition}px`;
    }

    getTickSizes(wrapper) {
        const { max, min, smallStep } = this.props;
        const { props } = this;
        const track = wrapper.getElementsByClassName('k-slider-track')[0];
        const trackWidth = this.trackWidth(wrapper, track);
        const areaCount = util.calculateAreasCount(max, min, smallStep);
        const averageTickSize = util.averageTickSize(trackWidth, props);
        const tickSizes = util.calculateTickSizes(areaCount + 1, averageTickSize);
        const adjustedTickSizes = util.distributeReminderPixels(trackWidth, tickSizes, props);

        return adjustedTickSizes;
    }

    onIncrease = () => {
        /*increae handler */
    };

    onDecrease = () => {
        /*decrease handler*/
    };

    onTrackClick = () => {
        /*track click*/
    };

    onTickClick = () => {
        /*tick click*/
    };

    render() {
        const { max, min, smallStep } = this.props;
        const ticksCount = util.calculateTicksCount(max, min, smallStep);
        const classes = classnames({
            'k-widget': true,
            'k-slider': true,
            'k-slider-horizontal': true,
            'k-state-default': true
        });

        return (
            <div {...this.props} className={classes}>
                <div className={"k-slider-wrap k-slider-buttons"} >
                    <SliderButton increase onClick={this.onIncrease} title="Left" />
                    <SliderButton onClick={this.onDecrease} title="Right" />

                    <SliderTicks onClick={this.onTickClick} tickCount={ticksCount} />

                    <SliderTrack onClick={this.onTrackClick} />

                </div>
            </div>
           );
    }
}
