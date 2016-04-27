import * as React from 'react';
import styles from '@telerik/kendo-theme-default/styles/slider/main';
import classnames from 'classnames';
import Draggable from '@telerik/kendo-react-draggable';


export class SliderTrack extends React.Component {
    render() {
        const { trackPressed, max, min, value, onKeyDown, dragHandleTitle } = this.props;

        const attributes = {
            'title': dragHandleTitle,
            'tabIndex': 0,
            'role': 'slider',
            'aria-valuemin': min,
            'aria-valuemax': max,
            'aria-valuenow': value,
            'aria-valuetext': value
        };

        const trackProps = {
            className: styles["slider-track"]
        };

        const handleClasses = classnames({
            [styles.draghandle]: true,
            [styles.pressed]: trackPressed
        });

        const selectionClasses = classnames({
            [styles["slider-selection"]]: true,
            [styles.pressed]: trackPressed
        });

        const preventHandleClick = (event) => event.preventDefault();

        return (
            <div {...trackProps}>
                <div className={selectionClasses}></div>
                <a className={handleClasses} {...attributes}
                    onClick={preventHandleClick}
                    onKeyDown={onKeyDown}
                ></a>
            </div>
        );
    }
}

SliderTrack.propTypes = {
    dragHandleTitle: React.PropTypes.string,
    max: React.PropTypes.number,
    min: React.PropTypes.number,
    onClick: React.PropTypes.func,
    onKeyDown: React.PropTypes.func,
    trackPressed: React.PropTypes.bool,
    value: React.PropTypes.number
};

export default Draggable(SliderTrack);
