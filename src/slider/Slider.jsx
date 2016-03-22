import * as React from 'react';
import ReactDOM from 'react-dom';
import { SliderModel, SliderUtil as util } from '@telerik/kendo-inputs-common';
//import styles from '@telerik/kendo-theme-default/styles/main';
import classnames from 'classnames';
import SliderTrack from './SliderTrack';
import SliderTicks from './SliderTicks';
import SliderButton from './SliderButton';
import keycode from 'keycode';

const propTypes = {
    buttons: React.PropTypes.bool,
    dragHandleTitle: React.PropTypes.string,
    decreaseButtonTitle: React.PropTypes.string,
    fixedTickWidth: React.PropTypes.number,
    increaseButtonTitle: React.PropTypes.string,
    max: React.PropTypes.number,
    min: React.PropTypes.number,
    onChange: React.PropTypes.func,
    smallStep: React.PropTypes.number,
    tickPlacement: React.PropTypes.string,
    title: React.PropTypes.func,
    style: React.PropTypes.object,
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
        const ticksContainer = wrapper.getElementsByClassName('k-slider-items');
        const dragHandle = wrapper.getElementsByClassName('k-draghandle')[0];
        const selection = wrapper.getElementsByClassName('k-slider-selection')[0];
        const model = new SliderModel(this.props, wrapper, track);

        model.resizeTrack();
        model.resizeTicks(ticksContainer, ticks);
        model.positionHandle(dragHandle);
        model.positionSelection(dragHandle, selection);

        if (this.props.fixedTickWidth) {
            model.resizeWrapper();
        }
    }

    onIncrease = () => {
        let value = util.increaseValueToStep(this.props);

        this.props.onChange({ value });
    };

    onDecrease = () => {
        let value = util.decreaseValueToStep(this.props);

        this.props.onChange({ value });
    };

    onTickClick = (event) => {
        const ticks = event.target.parentNode.getElementsByClassName('k-tick');
        const index = [ ...ticks ].indexOf(event.target);
        const value = util.calculateValueFromTick(index, this.props);

        this.props.onChange({ value });
    };

    onTrackClick = (event) => {
        const trackClientRect = event.currentTarget.getBoundingClientRect();
        const value = util.calculateValueFromTrack(trackClientRect, event, this.props);

        this.props.onChange({ value: value });
    };

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
            dragHandleTitle,
            max,
            min,
            smallStep,
            vertical,
            increaseButtonTitle = "Increase",
            decreaseButtonTitle = "Decrease",
            tickPlacement,
            value
        } = this.props;
        const trackProps = {
            dragHandleTitle,
            max,
            min,
            onClick: this.onTrackClick,
            onKeyDown: this.onKeyDown,
            value
        };
        const ticksProps = {
            min,
            smallStep,
            vertical,
            title: this.props.title,
            onClick: this.onTickClick,
            tickCount: util.calculateTicksCount(max, min, smallStep)
        };
        const wrapperClasses = classnames({
            'k-widget': true,
            'k-slider': true,
            'k-slider-horizontal': !vertical,
            'k-slider-vertical': vertical,
            'k-state-default': true
        });
        const componentClasses = classnames({
            'k-slider-wrap': true,
            'k-slider-buttons': buttons,
            'k-slider-topleft': tickPlacement === 'before',
            'k-slider-bottomright': tickPlacement === 'after'
        });
        return (
            <div className = {wrapperClasses} style = {this.props.style}>
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
