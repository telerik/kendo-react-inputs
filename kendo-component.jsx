import * as React from 'react';

import util from './util';

import styles from '@telerik/kendo-theme-default/styles/main';

import classnames from 'classnames';

import ReactDOM from 'react-dom';

//position ticks based on the  min, max, small/big steps and orientation
const max = 10;
const min = 100;
const smallStep = 0.5;

export default class KendoComponent extends React.Component {
    constructor(props) {
        super(props);

        this.areaCount = Math.floor(Math.abs(min - max) / smallStep);
        this.tickCount = this.areaCount + 1;

        this.state = { value: 0 };

        this.onTickClick = this.onTickClick.bind(this);
        this.onIncrease = this.onIncrease.bind(this);
        this.onDecrease = this.onDecrease.bind(this);
        this.onScaleClick = this.onScaleClick.bind(this);
    }

    positionMe() {
        //size the scale based on the wrapper width/height
        const { getComputedStyle: getStyle } = window;
        const BUTTONS_COUNT = 2;
        const wrapper = ReactDOM.findDOMNode(this);
        const scaleNode = ReactDOM.findDOMNode(this.refs.scale);
        const wrapperWidth = wrapper.clientWidth;

        let { left: scaleLeft } = getStyle(scaleNode);

        scaleLeft = parseFloat(scaleLeft, 10) * BUTTONS_COUNT;
        const scaleWidth = wrapperWidth - scaleLeft - BUTTONS_COUNT;
        scaleNode.style.width = `${scaleWidth}px`;


        let reminder = scaleWidth % this.areaCount;
        const tickWidth = Math.floor(scaleWidth / this.areaCount);
        const ticks = wrapper.getElementsByClassName("k-tick");
        const distrubutionStep = Math.floor(ticks.length / reminder);

        const ticksPixels = [...ticks].map((tick, index) => {
            if (index == 0 || index == ticks.length - 1) {
                return Math.ceil(tickWidth / 2);
            }

            if (index % distrubutionStep == 1 && reminder > 0) {
                reminder--;
                return tickWidth + 1;
            }

            return tickWidth;
        });

        [...ticks].map((tick, index) => tick.style.width = `${ticksPixels[index]}px`);

        const value = this.trimValue(this.state.value);

        this.positionHandle(ticksPixels, value, smallStep);
    }

    positionHandle(pixels, value, smallStep) {
        //true only if value is Int
        const wrapper = ReactDOM.findDOMNode(this);
        const index = value / smallStep;
        const dragHandle = wrapper.getElementsByClassName("k-draghandle")[0];
        let width = 0;
        let selection = 0;

        if (index != 0) {
            width = pixels.slice(1, index + 1).reduce((item, acc) => item + acc, 0);

        }

        selection = width + Math.floor(dragHandle.offsetWidth / 2);

        width -= Math.floor(dragHandle.offsetWidth / 2);

        dragHandle.style.left = `${width}px`;

        wrapper
            .getElementsByClassName("k-slider-selection")[0]
            .style.width = `${selection}px`;
    }

    componentDidMount() {
        this.positionMe();
    }

    componentDidUpdate() {
        this.positionMe();
    }

    trimValue(value) {
        if (value > max) return max;
        if (value < min) return min;

        return value;
    }

    updateState(value) {
        this.setState({ value: this.trimValue(value) });
    }

    onTickClick(e) {
        const tickIndex = [...e.target.parentNode.getElementsByClassName("k-tick")].indexOf(e.target);

        this.updateState(tickIndex * smallStep);
    }

    onIncrease() {
        this.updateState(this.state.value + smallStep);
    }

    onDecrease() {
        this.updateState(this.state.value - smallStep);
    }

    onScaleClick(e) {
        const x = e.pageX;
        const scaleNode = ReactDOM.findDOMNode(this.refs.scale);
        const {left, right} = scaleNode.getBoundingClientRect();
        const length = right - left;
        const value = Math.floor(((x - left) / length) * (max - min) + min);

        this.updateState(value);
    }

    render() {
        const classes = classnames({
            'k-widget': true,
            'k-slider': true,
            'k-slider-horizontal': true,
            'k-state-default': true
        });

        const { props, tickCount } = this;

        console.log("widget value", this.state.value);

        return (
            <div {...props} className={classes}>
                <div className={"k-slider-wrap k-slider-buttons"} >
                    <a className={"k-button k-button-increase"}><span className={"k-icon k-i-arrow-e"} onClick={this.onIncrease}>Right</span></a>
                    <a className={"k-button k-button-decrease"}><span className={"k-icon k-i-arrow-w"} onClick={this.onDecrease}>Left</span></a>

                    <SliderItems tickCount={this.tickCount} onClick={this.onTickClick}/>

                    <SliderScale ref="scale" onClick={this.onScaleClick}/>

                </div>
            </div>
           );
    }
}

class SliderScale extends React.Component {
    render() {
        return (
            <div className="k-slider-track" onClick={this.props.onClick}>
                <div className="k-slider-selection"></div>
                <a href="#" className="k-draghandle">Drag</a>
            </div>
       );
    }
}

const SliderTick = ({first, last, onClick}) => {
    const classes = classnames({
        'k-tick': true,
        'k-first': first,
        'k-last': last
    });

    return <li className={classes} onClick={onClick}>&nbsp;</li>;
};

const SliderItems = ({tickCount = 0, onClick}) => {
    const ticks = Array(tickCount)
        .fill({})
        .map((item, index, array) => ({
            first: index == 0,
            last: index == array.length - 1
        }))
        .map((props, index) => <SliderTick key={index} {...props} onClick={onClick} />);

    return <ul className="k-reset k-slider-items">{ticks}</ul>;
}
