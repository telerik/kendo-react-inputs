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
        smallStep: React.PropTypes.number
    }

    componentDidMount() {
        const wrapper = ReactDOM.findDOMNode(this);
        this.resizeTrack(wrapper);
        this.resizeTicks(wrapper);
    }

    componentDidUpdate() {
        const wrapper = ReactDOM.findDOMNode(this);
    }

    resizeTrack(wrapper) {
        const scale = wrapper.getElementsByClassName('k-slider-track')[0];
        const offsetLeft = getComputedStyle(scale).left;
        const trackWidth = util.calculateTrackWidth(wrapper.clientWidth, offsetLeft);
        scale.style.width = `${trackWidth}px`;
    }

    resizeTicks(wrapper) {
        const { max, min, smallStep } = this.props;
        const ticks = wrapper.getElementsByClassName('k-tick');
        const scale = wrapper.getElementsByClassName('k-slider-track')[0];

        const ticksCount = util.calculateTicksCount(max, min, smallStep);
        const offsetLeft = getComputedStyle(scale).left;
        const trackWidth = util.calculateTrackWidth(wrapper.clientWidth, offsetLeft);
        console.log(trackWidth);
        console.log(ticksCount - 1);
        const tickWidth = Math.floor(trackWidth / (ticksCount - 1));
        console.log(tickWidth);

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
