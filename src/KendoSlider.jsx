import * as React from 'react';

//import styles from '@telerik/kendo-theme-default/styles/main';

import classnames from 'classnames';

import SliderTrack from '../src/SliderTrack';

import SliderTicks from '../src/SliderTicks';

import SliderButton from '../src/SliderButton';

export default class KendoSlider extends React.Component {
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

                    <SliderTicks onClick={this.onTickClick} tickCount={2} />

                    <SliderTrack onClick={this.onTrackClick} />

                </div>
            </div>
           );
    }
}
